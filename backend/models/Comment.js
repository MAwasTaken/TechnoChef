// mongoose set up
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

// create the mongoose schema
const commentSchema = mongoose.Schema(
	{
		user_Id: { type: ObjectId, required: true, ref: 'Users' },
		product_Id: { type: ObjectId, required: true, ref: 'Products' },
		text: { type: String, required: true },
		valid: { type: Boolean, default: false }
	},
	{ timestamps: true }
);

// export
module.exports = mongoose.model('comment', commentSchema);
