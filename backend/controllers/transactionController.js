const Transaction = require('../models/Transaction');
const Order = require('../models/Order');
const User = require('../models/Users');
const axios = require('axios');
const moment = require('moment-jalali');

// create a transaction gateway.
const transactionGatewayController = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id);
		const basket = user.basket;
		const amount = user.basket.totalPrice * 10;
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
			callback_url: 'http://localhost:5173/panel/orders'
		};

		const transactionRequestResult = await axios
			.post(zarinpal_request_url, zarinpal_options)
			.then((res) => res.data);

		const { authority, code } = transactionRequestResult.data;

		await Transaction.create({
			transactionDate: moment().format('jYYYYjMMjDD-HH:mm'),
			amount,
			username: user.username,
			description,
			authority
		});
		if (code == 100 && authority) {
			return res.status(200).json({
				statusCode: 200,
				data: {
					code,
					basket: basket,
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
			return res.status(204).json({ massage: 'The desired transaction has already been paid' });

		const verifyBody = {
			authority,
			amount: transaction.amount,
			merchant_id: process.env.ZARINPAL_MERCHANTID
		};

		const verifyResult = await axios.post(verifyURL, verifyBody).then((res) => res.data);

		if (verifyResult.data.code == 100) {
			const user = await User.findById(transaction.user_id);
			const confirmedOrder = new Order({
				username: user.username,
				postalCode: user.postalCode,
				address: user.address,
				products: user.basket.products,
				totalPrice: user.basket.totalPrice,
				paymentStatus: true,
				status: 'pending...'
			});

			const savedOrder = await confirmedOrder.save();
			await Transaction.findOneAndUpdate(
				{ authority },
				{
					$set: {
						refID: verifyResult.data.ref_id,
						card_pan: verifyResult.data.card_pan,
						fee: verifyResult.data.fee,
						verify: true,
						order_id: savedOrder._id
					}
				},
				{ new: true }
			);

			return res.status(200).json({
				statusCode: 200,
				data: {
					message: 'Your payment has been successfully completed',
					transaction: verifyResult
				}
			});
		} else {
			return res.status(502).json({
				statusCode: 502,
				data: {
					message: 'something went wrong.',
					transaction: verifyResult
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
