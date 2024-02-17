// mongoose set up
const { array, string } = require('joi');
const mongoose = require('mongoose');

// create the mongoose schema
const productsSchema = new mongoose.Schema(
	{
		shortName: { type: String, required: true, unique: true },
		productName: { type: String, require: true },
		category: { type: String },
		pricePerColor:
			[{
				product: {
					price: { type: Number, required: true },
					finalPrice: { type: Number, required: true },
					QTY: {
						type: Number,
						required: true,
						validate: {
							validator: function (v) {
								return v >= 0;
							},
							message: (props) => `${props.value} is not a positive number!`
						}
					},
					productColor: { type: String, required: true },
					shortCode: { type: String, required: true, unique: true }
				}
			}],
		details: { type: Array },
		cover: { type: String },
		images: { type: Array },
		description: { type: String },
		best_seller: { type: Boolean, default: false }
	},
	{ timestamps: true }
);

// export the model
module.exports = mongoose.model('Products', productsSchema);
