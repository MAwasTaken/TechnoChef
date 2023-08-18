const mongoose =require('mongoose')
const ObjectId = mongoose.Schema.ObjectId;

const transactionScheam = mongoose.Schema(
    {
        order_id : {type: ObjectId , required : true , unique : true},
        trans_id : {type: String , required : true , unique : true },
        amount : {type : Number }
        
    },
	{ timestamps: true }
);


module.exports = mongoose.model('Transaction' ,transactionScheam);