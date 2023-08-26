const Order = require('../models/Order');
const validator = require('../validator/orderVAlidation');

const createOrderController = async (req, res) => {
	// create the Order object
	const newOrder = new Order(req.body);

	try {
		// validate the input
		await validator.validateAsync(req.body);

		// save the user in DB
		const savedOrder = await newOrder.save();

		// set the response
		res.status(200).json(savedOrder);
	} catch (err) {
		// return the err if there is one
		console.log(err);
		res.status(500).json(err);
	}
};

const updateOrderController = async (req, res) => {
	try {
		// validate the input
		await validator.validateAsync(req.body);

		// find the Order by ID and update it
		const updatedOrder = await Order.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body
			},
			{ new: true }
		);

		// set the response
		res.status(200).json(updatedOrder);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
};

const deleteOrderController = async (req, res) => {
	try {
		// find By Id And Delete the Order
		await Order.findByIdAndDelete(req.params.id);

		// set the response
		res.status(200).json('Order has been deleted...');
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
};

const getOrderByUserIdController = async (req, res) => {
	try {
		// find the card By the userID
		const orders = await Order.find({ userId: req.params.userId });

		// set the response
		res.status(200).json(orders);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
};

const getOrderByIdController = async (req, res) => {
	try {
		// find the card By the userID
		const orders = await Order.findById(req.params.id);

		// set the response
		res.status(200).json(orders);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
};

const getAllOrdersController = async (req, res) => {
	try {
		// find all the orders saved in DB
		const orders = await Order.find();

		// set the response
		res.status(200).json(orders);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
};

module.exports = {
	createOrderController,
	updateOrderController,
	deleteOrderController,
	getAllOrdersController,
	getOrderByIdController,
	getOrderByUserIdController
};
