const joi = require('joi');

// USER JOI MODEL  (A model for validation)
const model = joi.object({
	shortName: joi.string().max(10),
	productName: joi.string(),
	price: joi.number().positive(),
	category: joi.string(),
	productColor: joi.array(),
	QTY: joi.number().positive(),
	finalPrice: joi.number().positive(),
	images: joi.array().max(5),
	description: joi.string(),
	best_seller: joi.boolean(),
	_id: joi.object()
});

// export the models
module.exports = model;
