const User = require('../models/Users');
const transporter = require('../modules/emailTransporter');
let verifyCode;

const sendValidateUserEmail = async (req, res) => {
	try {
		verifyCode = Math.round(Math.random() * 10000);

		transporter
			.sendMail({
				from: 'info@technoshef.com',
				to: req.body.email,
				subject: 'Technoshef Verification Code', // Subject line
				text: `your verification code is : ${verifyCode}`, // plain text body
				html: `<b>your verification code is : ${verifyCode}<b>` // html body
			})
			.then((info, err) => {
				if (err) {
					console.error('Error sending email:', err);
					return res.status(200);
				} else {
					console.log('Email sent:', info.response);
					return res.status(200).json({ emailSent: info.response });
				}
			})
			.catch((err) => {
				console.log(err);
			});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
};

const validateUserByCode = async (req, res) => {
	try {
		const inputCode = req.body.code;
		if (inputCode == verifyCode) {
			await User.findByIdAndUpdate(req.body.id, { $set: { emailVerified: true } }, { new: true });
			return res.status(200).json({ massage: 'the user has been verified ' });
		} else {
			return res.status(400).json({ massage: 'the input code is not valid' });
		}
	} catch (err) {
		res.status(500).json(err);
	}
};

module.exports = {
	validateUserByCode,
	sendValidateUserEmail
};
