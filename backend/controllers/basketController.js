const User = require('../models/Users');
const Product = require('../models/Products');

const addToBasketController = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id);
		let totalPrice = user.basket.totalPrice;

		for (const product of req.body) {
			const foundProduct = await Product.findById(product.productId);
			totalPrice += foundProduct.finalPrice * product.quantity;
		}

		const updatedUser = await User.findByIdAndUpdate(
			req.user.id,
			{ $push: { 'basket.products': req.body }, 'basket.totalPrice': totalPrice },
			{ new: true }
		);
		res.status(200).json(updatedUser);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

const removeFromBasketController = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id);
		let totalPrice = user.basket.totalPrice;

		const foundProduct = await Product.findById(req.body.productId);
		totalPrice -= foundProduct.finalPrice * req.body.quantity;

		const updatedUser = await User.findByIdAndUpdate(
			req.user.id,
			{ $pull: { 'basket.products': req.body }, 'basket.totalPrice': totalPrice },
			{ new: true }
		);
		res.status(200).json(updatedUser);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

const getBasketController = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id).populate({
			path: 'basket.products.productId',
			select: { __v: false, updatedAt: false, createdAt: false }
		});
		const basket = user.basket;
		res.status(200).json(basket);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

const clearBasketController = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id);
		user.basket = {
			products: [],
			totalPrice: 0
		};
		await user.save();
		res.sendStatus(200);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

module.exports = {
	addToBasketController,
	removeFromBasketController,
	getBasketController,
	clearBasketController
};
