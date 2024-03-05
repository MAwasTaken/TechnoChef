const { Schema, model} = require("mongoose");

const authSchema = new Schema({
    username: { type: String, required: true, trim:true },
    password: { type: String, required: true }
},
    { timestamps: true }

)

// export
const authModel = model("auth", authSchema)
module.exports = {authModel}