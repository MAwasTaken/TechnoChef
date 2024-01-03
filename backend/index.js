const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const { logEvents } = require('./middlewares/logger');

// require the mongoose
const mongoose = require('mongoose');

// .env file config
const dotenv = require('dotenv');
dotenv.config();

// set Port
const PORT = 3000;

// server Config
require('./server/serverConfig')(app);

process.on('uncaughtException', (err) => {
	console.log(err);
	logEvents(`${err}`, 'errLog.txt');
});

// set the DB connection
mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => {
		console.log('DB connected successfully !!');

		// Start the server
		app.listen(process.env.PORT || PORT, () => {
			console.log('Backend server is running on HTTPS');
		});
	})
	.catch((err) => {
		// catch the err if there is one
		console.log(err);
	});
