const User = require('../models/Users');
const transporter = require('../modules/emailTransporter');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const sendResetPasswordEmailController = async (req, res, next) => {
	try {
		const userEmail = req.body.userEmail;
		const user = await User.findOne({ email: userEmail });

		const resPassJWT = jwt.sign(
			{
				id: user._id,
				email: user.email
			},
			process.env.JWT_SEC_key,
			{ expiresIn: '20m' }
		);

		transporter
			.sendMail({
				from: process.env.VERIFICATION_EMAIL,
				to: user.email,
				subject: 'Technoshef reset Password link', // Subject line
				text: `your reset password link is : http://www.technoshef.com/reset-password/${resPassJWT}`, // plain text body
				html: `<h3 style="font-size: 24px; color: #000000;">بازگردانی رمز عبور</h3>
				<p style="font-size: 16px; color: #000000;">کاربر محترم تکنوشف شما میتوانید از طریق دکمه زیر برای بازیابی رمز عبور خود اقدام فرمایید</p>
				<a href="http://www.technoshef.com/reset-password/${resPassJWT}" style="display: inline-block; background-color: #FFCC00; color: #000000; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">بازیابی</a>
				<p style="font-size: 16px; color: #000000;">در صورتی که اقدامی برای تغییر رمز عبور خود در وبسایت تکنوشف نکرده اید این ایمیل را نادیده بگیرید</p>
				<p>با تشکر</p>` // html body
			})
			.then(async (info, err) => {
				if (err) {
					console.error('Error sending email:', err);
					return res.status(200);
				} else {
					console.log('Email sent:', info.response);
					return res.status(200).json({ emailSent: info.response });
				}
			})
			.catch((err) => {
				res.status(400).json(err);
				req.err = err;
				next();
			});
	} catch (err) {
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

const resetPassword = async (req, res, next) => {
	try {
		jwt.verify(req.params.resPassJWT, process.env.JWT_SEC_key, (err, user) => {
			if (err) {
				res.status(403).json(err);
			} else {
				req.user = user;
			}
		});

		const newPassword = CryptoJS.AES.encrypt(
			req.body.newPassword,
			process.env.PASS_SEC_KEY
		).toString();

		const updatedUser = await User.findByIdAndUpdate(
			req.user.id,
			{ password: newPassword },
			{ new: true }
		);

		const { password, __v, ...user } = updatedUser._doc;

		res.status(200).json({ massage: 'Password changed', user });
	} catch (err) {
		res.status(400).json(err);
	}
};

module.exports = { sendResetPasswordEmailController, resetPassword };
