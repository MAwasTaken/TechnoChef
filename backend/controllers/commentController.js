const Comment = require('../models/Comment');
const validation = require('../validator/commentValidation');

const createCommentController = async (req, res) => {
	const newComment = new Comment(req.body);
	try {
		await validation.validateAsync(newComment._doc);

		const savedComment = await newComment.save();

		res.status(200).json(savedComment);
	} catch (err) {
		res.status(500).json(err);
	}
};

const updateCommentController = async (req, res) => {
	try {
		await validation.validateAsync(req.body);

		const updatedComment = await Comment.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body
			},
			{ new: true }
		);

		res.status(200).json(updatedComment);
	} catch (err) {
		res.status(500).json(err);
	}
};

const confirmCommentController = async (req, res) => {
	try {
		await Comment.findByIdAndUpdate(req.params.id, { $set: { valid: true } }, { new: true });
		res.status(200).json('comment confirmed successfully !');
	} catch (err) {
		res.status(500).json(err);
	}
};

const deleteCommentController = async (req, res) => {
	try {
		await Comment.findByIdAndDelete(req.params.id);
		res.status(200).json('comment deleted successfully !');
	} catch (err) {
		res.status(500).json(err);
	}
};

const getAllUserCommentsController = async (req, res) => {
	try {
		const userComments = await Comment.find({ user_Id: req.params.user_Id });
		res.status(200).json(userComments);
	} catch (err) {
		res.status(500).json(err);
	}
};

const getOneCommentByIdController = async (req, res) => {
	try {
		const comment = await Comment.findById(req.params.id);
		res.status(200).json(comment);
	} catch (err) {
		res.status(500).json(err);
	}
};

const getCommentByProductController = async (req, res) => {
	try {
		const userComments = await Comment.find({ product_Id: req.params.product_Id });
		res.status(200).json(userComments);
	} catch (err) {
		res.status(500).json(err);
	}
};

module.exports = {
	createCommentController,
	updateCommentController,
	deleteCommentController,
	confirmCommentController,
	getAllUserCommentsController,
	getOneCommentByIdController,
	getCommentByProductController
};
