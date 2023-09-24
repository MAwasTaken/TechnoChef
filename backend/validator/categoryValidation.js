const joi = require('joi');

// USER JOI MODEL  (A model for validation)
const model = joi.object({
	shortName: joi.string(),
	href: joi.string(),
	Name: joi.string(),
	image: joi.string(),
	gradientColor: joi.string()
});

// export the models
module.exports = model;
