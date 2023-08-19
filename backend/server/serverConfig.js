// dependency imports
const express = require('express');
const cors = require('cors');

// routers imports
const authRouter = require('../routes/auth');
const userRouter = require('../routes/user');

//use the routers and middleware , Export the function
module.exports = function (app) {
	// CORS for browsers
	app.use(cors());

	// JSON converter
	app.use(express.json());

	// set the routers
	app.use('/api/auth', authRouter);
	app.use('/api/users', userRouter);
};
