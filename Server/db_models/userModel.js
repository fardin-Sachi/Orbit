const mongoose = require("mongoose")
const Schema = mongoose.Schema
const userSchema = new Schema({
    email:{
        type: String,unique,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    Address:{

    },
    contact:{
        type: String,
        required: true,
    },
    wishList:{

    },
    cart:{

    },
}, {timestamps: true})

module.exports = mongoose.model('User',userSchema)