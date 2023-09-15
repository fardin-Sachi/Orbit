const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    genre:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    /* cover:{

    } */
}, {timestamps: true})

module.exports = mongoose.model('book',bookSchema)