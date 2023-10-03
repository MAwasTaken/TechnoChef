// mongoose set up
const mongoose = require('mongoose');

// create the mongoose schema
const productsSchema = new mongoose.Schema(
	{
		shortName: { type: String, required: true, unique: true },
		productName: { type: String, require: true },
		price: { type: Number },
		category: { type: String },
		productColor: { type: Array },
		details: { type: Object },
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
		finalPrice: { type: Number },
		cover: { type: String },
		images: { type: Array },
		description: { type: String },
		best_seller: { type: Boolean, default: false }
	},
	{ timestamps: true }
);

// export the model
module.exports = mongoose.model('Products', productsSchema);
