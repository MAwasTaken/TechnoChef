const joi = require('joi');

// USER JOI MODEL  (A model for validation)
const model = joi.object({
	user_Id: joi.string(),
	product_Id: joi.string(),
	text: joi.string(),
	valid: joi.boolean()
});

// export the models
module.exports = model;
