// dependency imports
const express = require('express');
var cookieParser = require('cookie-parser');
const cors = require('cors');

// routers imports
const authRouter = require('../routes/auth');
const userRouter = require('../routes/user');
const productRouter = require('../routes/product');

//use the routers and middleware , Export the function
module.exports = function (app) {
	// CORS for browsers
	app.use(cors());

	// JSON converter
	app.use(express.json());

	// Cookie parser
	app.use(cookieParser());

	app.use('/public', express.static('public'));

	// set the routers
	app.use('/api/auth', authRouter);
	app.use('/api/users', userRouter);
	app.use('/api/products', productRouter);
};
