const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
	host: 'mail.technoshef.com',
	port: 587,
	secure: false,
	auth: {
		user: 'info',
		pass: '!qaz2wsx'
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
