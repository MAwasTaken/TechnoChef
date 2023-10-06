const Transaction = require('../models/Transaction');
const Order = require('../models/Order');
const User = require('../models/Users');
const axios = require('axios');
const moment = require('moment-jalali');
const { version } = require('mongoose');

// create a transaction gateway.
const transactionGatewayController = async (req, res, next) => {
	try {
		const order = await Order.findById(req.body.order_id).populate('products');
		const user = await User.findById(req.user.id);
		const amount = order.totalPrice;
		const description = req.body.description;

		const zarinpal_request_url = 'https://api.zarinpal.com/pg/v4/payment/request.json';
		const zarinpalGatewayURL = 'https://www.zarinpal.com/pg/StartPay';

		const zarinpal_options = {
			merchant_id: process.env.ZARINPAL_MERCHANTID,
			amount,
			description,
			metadata: {
				email: user?.email || 'example@domain.com',
				mobile: user?.phoneNumber
			},
			callback_url: 'http://localhost:3000/api/transactions/verify'
		};

		const transactionRequestResult = await axios
			.post(zarinpal_request_url, zarinpal_options)
			.then((res) => res.data);

		const { authority, code } = transactionRequestResult.data;

		await Transaction.create({
			transactionDate: moment().format('jYYYYjMMjDD-HH:mm'),
			amount,
			user: user._id,
			description,
			authority,
			order_id: order._id
		});
		if (code == 100 && authority) {
			return res.status(200).json({
				statusCode: 200,
				data: {
					code,
					order: order.products,
					gatewayURL: `${zarinpalGatewayURL}/${authority}`
				}
			});
		}
		res.status(400).json(`couldn't connect to the gateway`);
	} catch (err) {
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

// verify the transaction
const verifyTransactionController = async (req, res, next) => {
	try {
		const { Authority: authority } = req.query;
		const verifyURL = 'https://api.zarinpal.com/pg/v4/payment/verify.json';
		const transaction = await Transaction.findOne({ authority });
		if (!transaction)
			return res.status(404).json({ massage: 'Pending payment transaction not found.' });
		if (transaction.verify)
			return res.status(400).json({ massage: 'The desired transaction has already been paid' });

		const verifyBody = JSON.stringify({
			authority,
			amount: transaction.amount,
			merchant_id: process.env.ZARINPAL_MERCHANTID
		});

		const verifyResult = await axios.post(verifyURL, verifyBody).then((res) => res.data);
		if (verifyResult.data.code == 100) {
			await Transaction.updateOne(
				{ authority },
				{
					$set: {
						refID: verifyResult.data.ref_id,
						card_pan: verifyResult.data.ref_pan,
						verify: true
					}
				}
			);
			await Order.findByIdAndUpdate(transaction.order_id, { paymentStatus: true }, { new: true });
			return res.status(200).json({
				statusCode: 200,
				data: {
					message: 'Your payment has been successfully completed'
				}
			});
		}
	} catch (err) {
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

module.exports = {
	transactionGatewayController,
	verifyTransactionController
};
