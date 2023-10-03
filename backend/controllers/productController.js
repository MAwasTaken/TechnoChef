// dependency imports
const Product = require('../models/Products');
const productValidate = require('../validator/productValidation');
const fs = require('fs');

// create Product
const createProductController = async (req, res, next) => {
	if (!req.body) return res.status(400).json({ massage: 'the request needs a body' });

	// create the Product object
	let newProduct = new Product(req.body);

	try {
		// set the uploaded images address
		newProduct.images = req.files.map((element) => element.path);

		// validate the input
		await productValidate.validateAsync(req.body);

		// save the user in DB
		const savedProduct = await newProduct.save();

		// set the response
		res.status(201).json(savedProduct);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);

		newProduct.images.forEach((Image) => {
			if(typeof Image == "string")
			fs.unlinkSync(Image);
		});
		req.err = err;
		next();
	}
};

// update Product
const updateProductController = async (req, res, next) => {
	try {
		if (!req.body) return res.status(400).json({ massage: 'the request needs a body' });
		if (!req.params.id) return res.status(400).json({ massage: 'the request needs an Id params.' });

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

		oldProduct.images?.forEach((Image) => {
			fs.unlinkSync(Image);
		});

		//set the response
		res.status(200).json(updatedProduct);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);

		req.files
			.map((element) => element.path)
			.forEach((Image) => {
				if(typeof Image == "string")
				fs.unlinkSync(Image);
			});

		req.err = err;
		next();
	}
};

// delete product by Id
const deleteProductByIdController = async (req, res, next) => {
	try {
		if (!req.params.id) return res.status(400).json({ massage: 'the request needs an Id params.' });

		// find By Id And Delete the Product
		const deletedProduct = await Product.findByIdAndDelete(req.params.id);

		if (deletedProduct == null) return res.status(200).json('there is No Product with that Id.');

		// delete the related images from the server
		deletedProduct.images.forEach((Image) => {
			fs.unlinkSync(Image);
		});

		//set the respond
		res.status(200).json('Product has been deleted...');
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

// delete product by shortName
const deleteProductByShortNameController = async (req, res, next) => {
	try {
		if (!req.params.shortname)
			return res.status(400).json({ massage: 'the request needs an shortname params.' });

		// find By shortname And Delete the Product
		const deletedProduct = await Product.findOneAndRemove({ shortName: req.params.shortname });

		if (deletedProduct == null) return res.status(200).json('there is No Product with that Name.');

		// delete the related images from the server
		deletedProduct.images.forEach((Image) => {
			fs.unlinkSync(Image);
		});

		//set the respond
		res.status(200).json('Product has been deleted...');
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

// get product By Id
const getProductByIdController = async (req, res, next) => {
	try {
		if (!req.params.id) return res.status(400).json({ massage: 'the request needs an Id params.' });

		// find the card By the ID
		const product = await Product.findById(req.params.id);
		//set the response
		res.status(200).json(product);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

// get Product by shortName
const getProductByShortName = async (req, res, next) => {
	try {
		if (!req.params.shortname)
			return res.status(400).json({ massage: 'the request needs an shortName params.' });

		// find the card By the shortName.
		const product = await Product.findOne({ shortName: req.params.shortname });

		//set the response
		res.status(200).json(product);
	} catch (err) {
		// return the err if there is one
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

// get all product
const getAllProductsController = async (req, res, next) => {
	// Define queries
	const qNew = req.query.new;
	const qSearch = req.query.search;
	const qBestSeller = req.query.bestseller;
	const qPage = req.query.page;
	const qCategory = req.query.category;
	const qPriceSort = req.query.pricesort;

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
				category: qCategory.trim()
			})
				.skip(qPage * 9)
				.limit(9);

			const countProductsCategory = await Product.countDocuments({
				category: qCategory.trim()
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
			products = await Product.find({ best_seller: true });
		} // if there is "Page" query
		else if (qPage) {
			// return the page of Products
			products = await Product.find()
				.skip((qPage - 1) * 9)
				.limit(9);

			const countProducts = await Product.countDocuments();
			pages = Math.ceil(countProducts / 9);
		} else if (qPriceSort) {
			products = await Product.find().sort({ finalPrice: qPriceSort });
		} else {
			//return All Products
			products = await Product.find();
		}

		// set the response
		res.status(200).json({ products, pages });
	} catch (err) {
		res.status(400).json(err);
		req.err = err;
		next();
	}
};

// export functions
module.exports = {
	createProductController,
	updateProductController,
	deleteProductByIdController,
	deleteProductByShortNameController,
	getProductByIdController,
	getProductByShortName,
	getAllProductsController
};
