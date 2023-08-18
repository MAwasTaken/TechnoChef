const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const orderSchema = mongoose.Schema(
    {
        userId: { type: ObjectId },
        postalCode : {type : String},
        address: { type: Object},
		products: [
			{
				productId: {
					type: String
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

module.exports = mongoose.model('Order', orderSchema);