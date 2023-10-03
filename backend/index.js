const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const { logEvents } = require('./middlewares/logger');

// Read the SSL certificate and private key files
const privateKey = fs.readFileSync('./ssl/privatekey.pem', 'utf8');
const certificate = fs.readFileSync('./ssl/certificate.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Create the HTTPS server
const httpsServer = https.createServer(credentials, app);

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
		httpsServer.listen(process.env.PORT || PORT, () => {
			console.log('Backend server is running on HTTPS');
		});
	})
	.catch((err) => {
		// catch the err if there is one
		console.log(err);
	});
