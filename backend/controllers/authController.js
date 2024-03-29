// dependency imports
const User = require('../models/Users');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const userValidation = require('../validator/userValidation');

// User register Controller (sign up)
const registerController = async (req, res, next) => {
	try {
		if (!req.body) {
			return res.status(400).json({ massage: 'the request needs a body.' });
		}
		// validate by Joi
		await userValidation.validateAsync(req.body);

		// create the user object
		const userPassword = CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_SEC_KEY
		).toString();
		const newUser = new User(req.body);
		newUser.password = userPassword;

		// split the PASSWORD from the object
		const { password, __v, ...others } = newUser._doc;

		// save the user in DB
		const savedUser = await newUser.save();
		// set the response
		res.status(201).json(others);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

// user Login Controller
const logInController = async (req, res, next) => {
	try {
		// find the user By username or email
		const user = await User.findOne({
			$or: [{ username: req.body.userInfo }, { email: req.body.userInfo }]
		});

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
					isAdmin: user.isAdmin,
					email: user.email
				},
				process.env.JWT_SEC_key,
				{ expiresIn: '6h' }
			);

			// split the PASSWORD from the object
			const { password, __v, ...others } = user._doc;

			// if the password doesn't match
			if (inputPassword !== originalPassword) {
				res.status(401).json('Wrong UserName or password !!');
			} else {
				// if it matches we return the object without thw PASSWORD and the access token
				res
					.status(200)
					.cookie('accessToken', accessToken, {
						httpOnly: true,
						sameSite: 'None',
						secure: true,
						credentials: true
					})
					.json(others);
			}
		}
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
		req.err = err;
		next();
	}
};

// log out route
const logOutController = async (req, res, next) => {
	try {
		res
			.clearCookie('accessToken', {
				httpOnly: true,
				sameSite: 'None',
				secure: true,
				credentials: true
			})
			.status(204)
			.end();
	} catch (err) {
		res.status(500).json(err);
		req.err = err;
		next();
	}
};

// export the functions.
module.exports = { registerController, logInController, logOutController };
