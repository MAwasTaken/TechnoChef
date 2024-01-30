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
		email: { type: String, unique: true, required: true },
		postalCode: { type: String },
		nationalCode: { type: String },
		address: { type: String },
		isAdmin: { type: Boolean, default: false },
		emailVerified: { type: Boolean, default: false },
		basket: {
			products: [
				{
					productId: {
						type: mongoose.Types.ObjectId,
						ref: 'Products'
					},
					quantity: {
						type: Number,
						default: 1
					}
				}
			],
			totalPrice: { type: Number, required: true, default: 0 }
		}
	},
	{ timestamps: true }
);

// export
module.exports = mongoose.model('User', userSchema);
