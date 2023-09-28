// dependency imports
const express = require('express');
var cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./corsConfig');
const { logger, errLogger } = require('../middlewares/logger');

// routers imports
const authRouter = require('../routes/auth');
const userRouter = require('../routes/user');
const productRouter = require('../routes/product');
const commentRouter = require('../routes/comment');
const orderRouter = require('../routes/order');
const categoryRouter = require('../routes/category');

//use the routers and middleware , Export the function
module.exports = function (app) {
	// custom middleware logger
	app.use(logger);

	// CORS for browsers
	app.use(cors(corsOptions));

	// JSON converter
	app.use(express.json());

	// Cookie parser
	app.use(cookieParser());

	// Set the public folder static
	app.use('/public', express.static('public'));

	// set the routers
	app.use('/api/auth', authRouter);
	app.use('/api/users', userRouter);
	app.use('/api/products', productRouter);
	app.use('/api/comments', commentRouter);
	app.use('/api/orders', orderRouter);
	app.use('/api/category', categoryRouter);

	// custom error logger
	app.use(errLogger);
};
