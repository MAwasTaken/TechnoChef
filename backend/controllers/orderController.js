// dependency imports
const Order = require('../models/Order');
const validator = require('../validator/orderVAlidation');

// create Order
const createOrderController = async (req, res) => {
	if (!req.body) return res.status(400).json({ massage: 'the request needs a body' });

	// create the Order object
	const newOrder = new Order(req.body);

	try {
		// validate the input
		await validator.validateAsync(req.body);

		// save the user in DB
		const savedOrder = await newOrder.save();

		// set the response
		res.status(201).json(savedOrder);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
	}
};

// update Order
const updateOrderController = async (req, res) => {
	try {
		if (!req.body) return res.status(400).json({ massage: 'the request needs a body' });
		if (!req.params.id) return res.status(400).json({ massage: 'the request needs an Id params.' });

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
		res.status(400).json(err);
	}
};

// delete Order
const deleteOrderController = async (req, res) => {
	try {
		if (!req.params.id) return res.status(400).json({ massage: 'the request needs an Id params.' });

		// find By Id And Delete the Order
		const deletedOrder = await Order.findByIdAndDelete(req.params.id);

		// set the response
		if (deletedOrder == null) return res.status(200).json('There is No Order with that Id');
		res.status(200).json('Order has been deleted...');
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
	}
};

// get Order By User Id
const getOrderByUserIdController = async (req, res) => {
	try {
		if (!req.params.id)
			return res.status(400).json({ massage: 'the request needs an userId params.' });

		// find the card By the userID
		const orders = await Order.find({ userId: req.params.userId });

		// set the response
		res.status(200).json(orders);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
	}
};

// get Order By Id
const getOrderByIdController = async (req, res) => {
	try {
		if (!req.params.id) return res.status(400).json({ massage: 'the request needs an Id params.' });

		// find the card By the userID
		const orders = await Order.findById(req.params.id);

		// set the response
		res.status(200).json(orders);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
	}
};

// get all Orders
const getAllOrdersController = async (req, res) => {
	try {
		// find all the orders saved in DB
		const orders = await Order.find();

		// set the response
		res.status(200).json(orders);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
	}
};

// export functions
module.exports = {
	createOrderController,
	updateOrderController,
	deleteOrderController,
	getAllOrdersController,
	getOrderByIdController,
	getOrderByUserIdController
};
