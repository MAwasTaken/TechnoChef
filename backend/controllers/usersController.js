// dependency imports
const User = require('../models/Users');
const CryptoJS = require('crypto-js');
const validate = require('../validator/userValidation');

// update User
const updateUserController = async (req, res, next) => {
	try {
		if (!req.body) return res.status(400).json({ massage: 'the request needs a.' });
		if (!req.params.username)
			return res.status(400).json({ massage: 'the request needs a username params.' });

		// validate JOI
		await validate.validateAsync(req.body);

		// encrypt the Password if there is one
		if (req.body.password) {
			req.body.password = CryptoJS.AES.encrypt(
				req.body.password,
				process.env.PASS_SEC_KEY
			).toString();
		}

		// find the User by ID and update it
		const updatedUser = await User.findOneAndUpdate(
			{ username: req.params.username },
			{
				$set: req.body
			},
			{ new: true }
		);

		if (!updatedUser) return res.status(404).json({ massage: 'user NOT FOUND' });
		// split the PASSWORD from the object
		const { password, __v, ...others } = updatedUser._doc;

		// set the response
		res.status(200).json(others);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

// delete User
const deleteUserController = async (req, res, next) => {
	try {
		if (!req.params.username)
			return res.status(400).json({ massage: 'the request needs a username params.' });

		// find By Id And Delete the User
		const deletedUser = await User.findOneAndDelete({ username: req.params.id });

		// set the response
		if (deletedUser == null)
			return res.status(200).json({ massage: 'there is No User with that username' });
		res.status(200).json({ massage: 'User has been deleted...', deletedUser });
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

// get User By Id
const getUserByIdController = async (req, res, next) => {
	try {
		if (req.params.username == ':username')
			return res.status(400).json({ massage: 'the request needs a username params.' });

		// find the User By the ID
		const user = await User.findOne({ username: req.params.username });
		if (!user) return res.status(404).json({ massage: 'user not found' });

		// split the from the object
		const { password, __v, ...others } = user._doc;

		// set the response
		res.status(200).json(others);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

// Get Me
const getMeController = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id);
		const { password, __v, basket, ...others } = user._doc;
		res.status(200).json(others);
	} catch (err) {
		res.status(401).json({ massage: 'you are not authenticated' });
		req.err = err;
		next();
	}
};

// get All Users
const getAllUsersController = async (req, res, next) => {
	// Define queries
	const query = req.query.new;

	try {
		// define the responce
		let users;

		//if there is "NEW" query
		if (query) {
			// return the newest Users
			users = await User.find().sort({ _id: -1 }).select(['-password', '-__v']).limit(query);
		} else {
			//return ALL
			users = await User.find().select(['-password', '-__v']);
		}

		// set the response
		res.status(200).json(users);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

// export functions
module.exports = {
	updateUserController,
	deleteUserController,
	getUserByIdController,
	getAllUsersController,
	getMeController
};
