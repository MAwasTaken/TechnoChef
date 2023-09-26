// mongoose set up
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

// create the mongoose schema
const verificationCodeSchema = mongoose.Schema(
	{
		user_id: { type: ObjectId, required: true, unique: true },
		verificationCode: { type: Number, required: true }
	},
	{ timestamps: true },
	{}
);

verificationCodeSchema.index({ createdAt: 1 }, { expireAfterSeconds: 180 });

// export
module.exports = mongoose.model('verificationCode', verificationCodeSchema);
