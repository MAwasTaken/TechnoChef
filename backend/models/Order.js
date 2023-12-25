// mongoose set up
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

// create the mongoose schema
const orderSchema = mongoose.Schema(
	{
		username: { type: String },
		postalCode: { type: String },
		address: { type: String },
		products: [
			{
				productId: {
					type: ObjectId,
					ref: 'Products'
				},
				quantity: {
					type: Number,
					default: 1
				}
			}
		],
		totalPrice: { type: Number, required: true },
		paymentStatus: { type: Boolean, default: false },
		status: { type: String, default: 'pending' }
	},
	{ timestamps: true }
);

// export
module.exports = mongoose.model('Order', orderSchema);
