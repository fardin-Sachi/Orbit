const express = require("express")
const booksRouter = express.Router()
const bookModel = require('../db_models/bookModel')
const mongoose = require("mongoose")

booksRouter.get('/', async (req,res) => {
    const books = await bookModel.find({})
    res.status(200).json(books)
})
booksRouter.get('/:genre',async (req,res) => {
    const {genre} = req.params
    /* if(!mongoose.Types.genre.isValid(genre)){
        if(!mongoose.Types.genre)
        return res.status(404).json({error:"No such genre"})
    } */

    const book = await bookModel.find({genre:genre})
    if(!book)
        return res.status(400).json({error: "No books of this genre"})
    res.status(200).json(book)
})

module.exports = booksRouter