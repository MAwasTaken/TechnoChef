const joi = require('joi');

// USER JOI MODEL  (A model for validation)
const model = joi.object({
	username: joi.string().alphanum().min(3).max(30),
	firstName: joi.string(),
	lastName: joi.string(),
	password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).min(8),
	email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'ir', 'net', 'org'] } }),
	isAdmin: joi.boolean(),
	phoneNumber: joi.string().allow('').pattern(new RegExp('^(\\+98|0)?9\\d{9}$')),
	postalCode: joi
		.string()
		.allow('')
		.pattern(new RegExp('\\b(?!(\\d)\\1{3})[13-9]{4}[1346-9][013-9]{5}\\b')),
	nationalCode: joi.string().allow('').pattern(new RegExp('^[0-9]{10}$')),
	address: joi.string().allow(''),
	basket: joi.object()
});

// export the models
module.exports = model;
