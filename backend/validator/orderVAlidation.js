const joi = require('joi');

// USER JOI MODEL  (A model for validation)
const model = joi.object({
	username: joi.string(),
	postalCode: joi.string().pattern(new RegExp('\\b(?!(\\d)\\1{3})[13-9]{4}[1346-9][013-9]{5}\\b')),
	address: joi.string(),
	products: joi
		.array()
		.sparse()
		.items(
			joi.object({
				productId: joi.string(),
				quantity: joi.number().positive(),
				_id: joi.object()
			})
		),
	totalPrice: joi.number().positive(),
	status: joi.string(),
	ref_id: joi.string()
});

// export the models
module.exports = model;
