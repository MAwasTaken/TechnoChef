const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_SERVER,
	port: process.env.EMAIL_SERVER_PORT,
	secure: false,
	auth: {
		user: process.env.EMAIL_SERVER_USER,
		pass: process.env.EMAIL_SERVER_PASSWORD
	}
});

transporter.verify(function (error, success) {
	if (error) {
		console.error('Transporter verification failed:', error);
		return res.status(200).json(error);
	} else {
		console.log('Transporter is ready to send emails');
	}
});

module.exports = transporter;
