// mongoose set up
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

// create the mongoose schema
const transactionSchema = mongoose.Schema(
	{
		order_id: { type: ObjectId, required: true, unique: true },
		trans_id: { type: String, required: true, unique: true },
		amount: { type: Number }
	},
	{ timestamps: true }
);

// export
module.exports = mongoose.model('Transaction', transactionSchema);
