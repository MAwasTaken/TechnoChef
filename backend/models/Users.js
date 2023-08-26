// mongoose set up
const mongoose = require('mongoose');

// create the mongoose schema
const userSchema = mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		firstName: { type: String },
		lastName: { type: String },
		phoneNumber: { type: String, unique: true },
		email: { type: String, unique: true },
		postalCode: { type: String },
		nationalCode: { type: String, unique: true },
		address: { type: String },
		isAdmin: { type: Boolean, default: false }
	},
	{ timestamps: true }
);

// export
module.exports = mongoose.model('User', userSchema);
