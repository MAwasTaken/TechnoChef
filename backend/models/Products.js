const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema(
	{
        shortName : {type : String , required : true , unique : true},
		productName: { type: String, require: true},
		price: { type: Number },
		categories: { type: Array },
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
		images: { type: Array },
		description: { type: String },
		best_seller: { type: Boolean , default: false }
		

	},
	{ timestamps: true }
);

// export the model
module.exports = mongoose.model('Products', productsSchema);
