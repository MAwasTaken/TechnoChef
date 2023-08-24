const Product = require('../models/Products');
const productValidate = require('../validator/productValidation');
const fs = require('fs');

const createProductController = async (req, res) => {
	// create the Product object
	let newProduct = new Product(req.body);

	try {
		// set the uploaded images address
		let images = req.files.map((element) => element.path);
		newProduct.images = images;

		console.log(newProduct);

		// validate the input
		await productValidate.validateAsync(newProduct._doc);

		// save the user in DB
		const savedProduct = await newProduct.save();

		// set the response
		res.status(200).json(savedProduct);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);

		newProduct.images.forEach((Image) => {
			fs.unlinkSync(Image);
		});
	}
};

const updateProductController = async (req, res) => {
	try {
		const oldProduct = await Product.findById(req.params.id);

		// validate the input
		await productValidate.validateAsync(req.body);

		// find the Product by ID and update it
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
				images: req.files.map((element) => element.path)
			},
			{ new: true }
		);

		oldProduct.images.forEach((Image) => {
			fs.unlinkSync(Image);
		});

		//set the response
		res.status(200).json(updatedProduct);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);

		req.files
			.map((element) => element.path)
			.forEach((Image) => {
				fs.unlinkSync(Image);
			});
	}
};

const deleteProductByIdController = async (req, res) => {
	try {
		// find By Id And Delete the Product
		const deletedProduct = await Product.findByIdAndDelete(req.params.id);

		// delete the related images from the server
		deletedProduct.images.forEach((Image) => {
			fs.unlinkSync(Image);
		});

		//set the respond
		res.status(200).json('Product has been deleted...');
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
};

const deleteProductByShortNameController = async (req, res) => {
	try {
		// find By shortname And Delete the Product
		const deletedProduct = await Product.findOneAndRemove({ shortName: req.params.shortname });

		// delete the related images from the server
		deletedProduct.images.forEach((Image) => {
			fs.unlinkSync(Image);
		});

		//set the respond
		res.status(200).json('Product has been deleted...');
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
};

const getProductByIdController = async (req, res) => {
	try {
		// find the card By the ID
		const product = await Product.findById(req.params.id);
		//set the response
		res.status(200).json(product);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
};
const getProductByShortName = async (req, res) => {
	try {
		// find the card By the shortName.
		const product = await Product.findOne({ shortName: req.params.shortname });

		//set the response
		res.status(200).json(product);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
};
const getAllProductsController = async (req, res) => {
	// Define queries
	const qNew = req.query.new;
	const qSearch = req.query.search;
	const qBestSeller = req.query.bestseller;
	const qPage = req.query.page;
	const qCategory = req.query.category;

	try {
		//Define the response objects
		let products;
		let pages;

		// if there is "new" query
		if (qNew) {
			//return the newest Products
			products = await Product.find().sort({ createdAt: -1 }).limit(qNew);
		} // if there is "Category" query
		else if (qCategory) {
			//return the Products in that categories
			products = await Product.find({
				categories: {
					$in: [qCategory.trim()]
				}
			})
				.skip(qPage * 9)
				.limit(9);

			const countProductsCategory = await Product.countDocuments({
				categories: {
					$in: [qCategory.trim()]
				}
			});
			pages = Math.ceil(countProductsCategory / 9);
		} // if there is "Search" query
		else if (qSearch) {
			// search in Products and return the result
			products = await Product.find({
				productName: { $regex: qSearch.trim() }
			}).sort({ createdAt: -1 });
		} // if there is "BestSeller" query
		else if (qBestSeller) {
			// return BestSeller Products
			products = await Product.find({ best_seller: true }).limit(best_seller);
		} // if there is "Page" query
		else if (qPage) {
			// return the page of Products
			products = await Product.find()
				.skip((qPage - 1) * 9)
				.limit(9);

			const countProducts = await Product.countDocuments();
			pages = Math.ceil(countProducts / 9);
		} else {
			//return All Products
			products = await Product.find();
		}

		// set the response
		res.status(200).json({ products, pages });
	} catch (err) {
		res.status(500).json(err);
		console.log(err);
	}
};
const getAllCategoriesController = async (req, res) => {
	try {
		let categories = [];
		const product = await Product.find();
		product.forEach((element) => {
			categories = categories.concat(element.categories);
		});
		const result = categories.filter((item, idx) => categories.indexOf(item) === idx);

		res.status(200).json(result);
	} catch (err) {
		res.status(500).json(err);
	}
};

module.exports = {
	createProductController,
	updateProductController,
	deleteProductByIdController,
	deleteProductByShortNameController,
	getProductByIdController,
	getProductByShortName,
	getAllProductsController,
	getAllCategoriesController
};
