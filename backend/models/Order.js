// mongoose set up
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

// create the mongoose schema
const orderSchema = mongoose.Schema(
	{
		userId: { type: ObjectId },
		postalCode: { type: String },
		address: { type: Object },
		products: [
			{
				productId: {
					type: ObjectId
				},
				quantity: {
					type: Number,
					default: 1
				}
			}
		],
		totalPrice: { type: Number, required: true },
		status: { type: String, default: 'pending' }
	},
	{ timestamps: true }
);

// export
module.exports = mongoose.model('Order', orderSchema);
