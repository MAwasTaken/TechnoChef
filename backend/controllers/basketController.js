const User = require('../models/Users');
const Product = require('../models/Products');
const { object } = require('joi');

const addToBasketController = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id);
		let totalPrice = 0; // user.basket.totalPrice;
		const basket = user.basket.products;
		let products = req.body;

		let newProducts = [];
		let repeatedProducts = [];
		products.forEach((product) => {
			if (basket.length === 0) {
				newProducts = products;
			} else {
				for (let i = 0; i < basket.length; i++) {
					const element = basket[i];
					if (product?.productId == element?.productId) {
						element.quantity += product.quantity;
						repeatedProducts.push(product);
					}
				}
			}
		});
		newProducts = products.filter((element) => !repeatedProducts.includes(element));
		const newBasket = basket.concat(newProducts);

		for (const product of newBasket) {
			const foundProduct = await Product.findById(product.productId);
			totalPrice += foundProduct.finalPrice * product.quantity;
		}

		const updatedUser = await User.findByIdAndUpdate(
			req.user.id,
			{ 'basket.products': newBasket, 'basket.totalPrice': totalPrice },
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

		const basket = user.basket.products;

		basket.forEach((product) => {
			if (product.productId == req.body.productId)
				if (product.quantity == req.body.quantity) {
					const index = basket.indexOf(product);
					basket.splice(index, 1);
				} else {
					product.quantity -= req.body.quantity;
				}
		});

		const updatedUser = await User.findByIdAndUpdate(
			req.user.id,
			{ 'basket.products': basket, 'basket.totalPrice': totalPrice },
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
