// dependency imports
const Comment = require('../models/Comment');
const validation = require('../validator/commentValidation');

// Create Order Controller
const createCommentController = async (req, res) => {
	if (!req.body) return res.status(400).json({ massage: 'the request needs a body.' });

	// create the DB model with inputs
	const newComment = new Comment(req.body);

	try {
		// validate input
		await validation.validateAsync(req.body);

		// save to DB
		const savedComment = await newComment.save();

		// set the response
		res.status(201).json(savedComment);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
	}
};

// update comment ( edit comment )
const updateCommentController = async (req, res) => {
	try {
		if (!req.body) return res.status(400).json({ massage: 'the request needs a body.' });
		if (!req.params.id) return res.status(400).json({ massage: 'the request needs an Id params.' });

		// validate input
		await validation.validateAsync(req.body);

		// find and update By Id
		const updatedComment = await Comment.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body
			},
			{ new: true }
		);

		// set the response
		res.status(200).json(updatedComment);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
	}
};

// confirm the comment by admin
const confirmCommentController = async (req, res) => {
	try {
		if (!req.params.id) return res.status(400).json({ massage: 'the request needs an Id params.' });

		// find the comment by Id and set the valid property to TRUE.
		await Comment.findByIdAndUpdate(req.params.id, { $set: { valid: true } }, { new: true });

		// set response
		res.status(200).json({ massage: 'comment confirmed successfully !' });
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
	}
};

// delete comment
const deleteCommentController = async (req, res) => {
	try {
		if (!req.params.id) return res.status(400).json({ massage: 'the request needs an Id params.' });

		// find the comment by id and delete.
		const deletedComment = await Comment.findByIdAndDelete(req.params.id);

		// set the response
		if (deletedComment == null) return res.status(200).json('there is no comment with that Id');
		res.status(200).json('comment deleted successfully !');
	} catch (err) {
		// return the err if there is one.
		res.status(400).json(err);
	}
};

// get all the comments By one user.
const getAllUserCommentsController = async (req, res) => {
	try {
		// find the comments of that user By Id
		const userComments = await Comment.find({ user_Id: req.params.user_Id });

		// set response
		res.status(200).json(userComments);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
	}
};

// get a comment by its Id
const getOneCommentByIdController = async (req, res) => {
	try {
		if (!req.params.id) return res.status(400).json({ massage: 'the request needs an Id params.' });

		// find the comment By Id
		const comment = await Comment.findById(req.params.id);

		// set response
		res.status(200).json(comment);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
	}
};

// get all the comments of one product.
const getCommentByProductController = async (req, res) => {
	try {
		if (!req.params.id)
			return res.status(400).json({ massage: 'the request needs an product_Id params.' });

		// find the comments of that product By Id
		const userComments = await Comment.find({ product_Id: req.params.product_Id });

		// set response
		res.status(200).json(userComments);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
	}
};

// export the functions
module.exports = {
	createCommentController,
	updateCommentController,
	deleteCommentController,
	confirmCommentController,
	getAllUserCommentsController,
	getOneCommentByIdController,
	getCommentByProductController
};
