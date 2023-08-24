const joi = require('joi');

// USER JOI MODEL  (A model for validation)
const model = joi.object({
	user_Id: joi.object(),
	product_Id: joi.object(),
	text: joi.string(),
	valid: joi.boolean(),
	_id: joi.object()
});

// export the models
module.exports = model;
