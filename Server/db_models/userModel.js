const mongoose = require("mongoose")
const Schema = mongoose.Schema
const userSchema = new Schema({
    email:{
        type: String,
        unique: true,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    address:{
        country:{
            type: String,
            // required: true,
        },
        city:{
            type: String,
            // required: true,
        },
        postcode:{
            type: String,
            // required: true,
        }
    },
    contact:{
        type: String,
        // required: true,
    },
    wishlist:{
        type: Array,
    },
    cart:{
        type: Array,
    },
}, {timestamps: true})

module.exports = mongoose.model('User',userSchema)