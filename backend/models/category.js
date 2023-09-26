// mongoose set up
const mongoose = require('mongoose');

// create the mongoose schema
const categorySchema = mongoose.Schema(
	{
		shortName: { type: String, required: true, unique: true },
		href: { type: String, required: true },
		Name: { type: String, required: true },
		image: { type: String },
		gradientColor: { type: String }
	},
	{ timestamps: true }
);

// export
module.exports = mongoose.model('category', categorySchema);
