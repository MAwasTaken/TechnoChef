// mongoose set up
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

// create the mongoose schema
const commentSchema = mongoose.Schema(
	{
		username: { type: String, required: true },
		shortName: { type: String, required: true },
		text: { type: String, required: true },
		valid: { type: Boolean, default: false }
	},
	{ timestamps: true }
);

// export
module.exports = mongoose.model('comment', commentSchema);
