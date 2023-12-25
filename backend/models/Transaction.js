// mongoose set up
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

// create the mongoose schema
const transactionSchema = mongoose.Schema(
	{
		authority: { type: String },
		transactionDate: { type: String },
		amount: { type: Number },
		description: { type: String, default: 'for buying a product.' },
		verify: { type: Boolean, default: false },
		user_id: { type: ObjectId, ref: 'Users' },
		order_id: { type: ObjectId, ref: 'Order' },
		refID: { type: String, default: undefined },
		card_pan: { type: String, default: undefined }
	},
	{ timestamps: true }
);

// export
module.exports = mongoose.model('Transaction', transactionSchema);
