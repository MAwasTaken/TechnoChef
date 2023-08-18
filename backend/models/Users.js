const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username : { type : String , required : true , unique : true},
        password : {type : String , required : true },
        firstName : {type : String},
        lastName : {type : String}, 
        phoneNumber : {type : String , unique : true},
        email : { type : String , unique : true},
        postalCode : {type : String},
        nationalCode : {type: String , unique : true},
        address : {type : String }
    },
	{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema);