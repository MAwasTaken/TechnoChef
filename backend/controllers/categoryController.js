const Category = require('../models/category');
const validation = require('../validator/categoryValidation');
const fs = require('fs');

const createCategoryController = async (req, res, next) => {
	if (!req.body) return res.status(400).json({ massage: 'the request needs a body.' });

	try {
		// create the db record
		const newCategory = new Category(req.body);

		newCategory.image = req.file?.path;

		//validate input
		await validation.validateAsync(req.body);

		//save to db
		const savedCategory = await newCategory.save();

		// set the response
		res.status(201).json(savedCategory);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
		if (req.file) fs.unlinkSync(savedCategory.image);
		req.err = err;
		next();
	}
};

const updateCategoryController = async (req, res, next) => {
	if (req.params.id == ':id')
		return res.status(400).json({ massage: 'the request needs an Id params.' });
	if (!req.body) return res.status(400).json({ massage: 'the request needs a body.' });

	try {
		//validate input
		await validation.validateAsync(req.body);

		const oldCategory = await Category.findById(req.params.id);

		// find and update By Id
		const updatedCategory = await Category.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
				image: req.file.path
			},
			{ new: true }
		);
		if (oldCategory.image) fs.unlinkSync(oldCategory.image);

		// set the response
		res.status(200).json(updatedCategory);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);

		if (req.file) fs.unlinkSync(req.file.path);
		req.err = err;
		next();
	}
};

const deleteCategoryController = async (req, res, next) => {
	if (req.params.id == ':id')
		return res.status(400).json({ massage: 'the request needs an Id params.' });

	try {
		// find the Category by id and delete.
		const deletedCategory = await Category.findByIdAndDelete(req.params.id);

		if (deletedCategory.image) fs.unlinkSync(deletedCategory.image);

		// set the response
		if (deletedCategory == null) return res.status(200).json('there is no Category with that Id');
		res.status(200).json('Category deleted successfully !');
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

const getAllCategoryController = async (req, res, next) => {
	try {
		// find the Categories
		const categories = await Category.find();

		// set response
		res.status(200).json(categories);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

module.exports = {
	createCategoryController,
	updateCategoryController,
	deleteCategoryController,
	getAllCategoryController
};
