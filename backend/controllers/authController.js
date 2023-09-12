// dependency imports
const User = require('../models/Users');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const userValidation = require('../validator/userValidation');
const nodemailer = require('nodemailer');

// User register Controller (sign up)
const registerController = async (req, res) => {
	try {
		if (!req.body) {
			return res.status(400).json({ massage: 'the request needs a body.' });
		}
		// validate by Joi
		await userValidation.validateAsync(req.body);

		// create the user object
		const password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC_KEY).toString();
		const newUser = new User(req.body);
		newUser.password = password;

		// save the user in DB
		const savedUser = await newUser.save();

		// set the response
		res.status(201).json(savedUser);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
		console.log(err);
	}
};

// user Login Controller
const logInController = async (req, res) => {
	try {
		// find the user By username or email
		if (req.body.username) {
			const user = await User.findOne({
				username: req.body.username
			});
		} else if (req.body.email) {
			const user = await User.findOne({
				email: req.body.email
			});
		}

		// if there is not a user with that info
		if (user == null) {
			res.status(401).json(' Wrong UserName or password !!');
		} else {
			// if we found a user with that username

			// decrypt the PASSWORD from the DB user
			const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC_KEY);
			const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

			// get the Inputted PASSWORd
			const inputPassword = req.body.password;

			// create the access token
			const accessToken = jwt.sign(
				{
					id: user._id,
					isAdmin: user.isAdmin
				},
				process.env.JWT_SEC_key,
				{ expiresIn: '1d' }
			);

			// split the PASSWORD from the object
			const { password, ...others } = user._doc;

			// if the password doesn't match
			if (inputPassword !== originalPassword) {
				res.status(401).json('Wrong UserName or password !!');
			} else {
				// if it matches we return the object without thw PASSWORD and the access token
				res
					.status(200)
					.cookie('accessToken', accessToken, { httpOnly: true })
					.json({ ...others });
			}
		}
	} catch (err) {
		// return the err if there is one
		console.log(err);
		res.status(500).json(err);
	}
};

const validateUserEmail = async (req, res) => {
	try {
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

		const verifyCode = Math.round(Math.random() * 10000);

		transporter
			.sendMail({
				from: 'info@technoshef.com',
				to: 'test@technoshef.com',
				subject: 'Hello', // Subject line
				text: 'Hello world?', // plain text body
				html: '<b>Hello world?</b>' // html body
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

// export the functions.
module.exports = { registerController, logInController, validateUserEmail };
