const mongoose = require("mongoose")
const Schema = mongoose.Schema
const adminSchema = new Schema({
    email:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    contact:{
        type: String,
        required: true,
    },
}, {timestamps: true, capped: { size: 1024, max: 1 }})

module.exports = mongoose.model('Admin',adminSchema)