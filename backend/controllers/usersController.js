// dependency imports
const User = require('../models/Users');
const CryptoJS = require('crypto-js');
const validate = require('../validator/userValidation');

// update User
const updateUserController = async (req, res) => {
	try {
		if (!req.body) return res.status(400).json({ massage: 'the request needs a.' });
		if (!req.params.id) return res.status(400).json({ massage: 'the request needs an Id params.' });

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
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body
			},
			{ new: true }
		);

		// set the response
		res.status(200).json(updatedUser);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
	}
};

// delete User
const deleteUserController = async (req, res) => {
	try {
		if (!req.params.id) return res.status(400).json({ massage: 'the request needs an Id params.' });

		// find By Id And Delete the User
		const deletedUser = await User.findByIdAndDelete(req.params.id);

		// set the response
		if (deletedUser == null)
			return res.status(200).json({ massage: 'there is No User with that Id' });
		res.status(200).json({ massage: 'User has been deleted...', deletedUser });
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
	}
};

// get User By Id
const getUserByIdController = async (req, res) => {
	try {
		if (req.params.id == ':id')
			return res.status(400).json({ massage: 'the request needs an Id params.' });

		// find the User By the ID
		const user = await User.findById(req.params.id);
		if (!user) return res.status(404).json({ massage: 'user not found' });

		// split the from the object
		const { password, ...others } = user._doc;

		// set the response
		res.status(200).json(others);
	} catch (err) {
		// return the err if there is one
		console.log(err);
		res.status(400).json(err);
	}
};

// Get Me
const getMeController = async (req, res) => {
	try {
		const user = await User.findById(req.user.id);
		const { password, isAdmin, __v, ...others } = user._doc;
		res.status(200).json(others);
	} catch (err) {
		res.status(401).json({ massage: 'you are not authenticated' });
	}
};

// get All Users
const getAllUsersController = async (req, res) => {
	// Define queries
	const query = req.query.new;

	try {
		// define the responce
		let users;

		//if there is "NEW" query
		if (query) {
			// return the newest Users
			users = await User.find().sort({ _id: -1 }).limit(query);
		} else {
			//return ALL
			users = await User.find();
		}

		// set the response
		res.status(200).json(users);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
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
