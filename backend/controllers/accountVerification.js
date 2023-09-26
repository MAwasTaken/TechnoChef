const User = require('../models/Users');
const VerificationCodeDB = require('../models/verificationCode');
const transporter = require('../modules/emailTransporter');

const sendValidateUserEmail = async (req, res) => {
	try {
		const verificationCode = new VerificationCodeDB({
			user_id: req.user.id,
			verificationCode: Math.round(Math.random() * 10000)
		});

		transporter
			.sendMail({
				from: process.env.VERIFICATION_EMAIL,
				to: req.user.email,
				subject: 'Technoshef Verification Code', // Subject line
				text: `your verification code is : ${verificationCode.verificationCode}`, // plain text body
				html: `<h1>your verification code is : ${verificationCode.verificationCode}<h1>` // html body
			})
			.then(async (info, err) => {
				if (err) {
					console.error('Error sending email:', err);
					return res.status(200);
				} else {
					await verificationCode.save();
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
	const inputCode = req.body.code;
	let verifyCode;
	try {
		verifyCode = await VerificationCodeDB.findOne({ user_id: req.user.id });
	} catch (err) {
		res.status(401).json(err, { massage: 'the input code is not valid' });
	}

	if (inputCode == verifyCode?.verificationCode) {
		try {
			await User.findByIdAndUpdate(req.body.id, { $set: { emailVerified: true } }, { new: true });
		} catch (err) {
			res.status(400).json(err);
		}
		return res.status(200).json({ massage: 'the user has been verified ' });
	} else {
		return res.status(400).json({ massage: 'the input code is not valid' });
	}
};

module.exports = {
	validateUserByCode,
	sendValidateUserEmail
};
