const joi = require('joi');

// USER JOI MODEL  (A model for validation)
const model = joi.object({
	shortName: joi.string().max(10),
	productName: joi.string(),
	price: joi.number().positive(),
	category: joi.string(),
	pricePerColor: joi
		.array()
		.sparse()
		.items(joi.object({
			price: joi.number().positive(),
			finalPrice: joi.number().positive(),
			QTY: joi.number().positive(),
			productColor: joi.array().single(),
			shortCode : joi.string()
		})
		),
	productColor: joi.array().single(),
	details: joi.array().sparse().items(joi.object()),
	QTY: joi.number().positive(),
	cover: joi.string(),
	images: joi.array().single().max(5),
	description: joi.string(),
	best_seller: joi.boolean()
});

// export the models
module.exports = model;
