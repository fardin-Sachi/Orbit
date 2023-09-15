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

booksRouter.post('/',async (req,res) => {
    const {title,author,genre,price,quantity} = req.body
    try{
        const books = await bookModel.create({title,author,genre,price,quantity})
        res.status(200).json(books)
    } catch(err){
        res.status(400).json({error: err.message})
    }
})

/* booksRouter.delete('/:title', async (req,res) => {
    const {genre} = req.params
    // if(!mongoose.Types.genre.isValid(genre)){
    //     if(!mongoose.Types.genre)
    //     return res.status(404).json({error:"No such genre"})
    // }

    const book = await bookModel.findOneAndDelete({genre:genre})
    if(!book)
        return res.status(400).json({error: "No books of this genre"})
    res.status(200).json(book)
}) */

/* booksRouter.patch('/',(req,res) => {
    const {quantity} = req.params
    const book = await bookModel.findOneAndUpdate({}, {
        ...req.body
    })
    if(!book)
        return res.status(400).json({error: "No such book exists"})
    res.status(200).json(book)
}) */
/* booksRouter.get('/', async (req,res) => {
    const books = await bookModel.find({})
    res.status(200).json(books)
}) */
/* booksRouter.get('/books/:genre',async (req,res) => {
    const {genre} = req.params
    const books = await bookModel.find({genre: genre})
    if(!books){
        console.log("eh")
        return res.status(404).json({error: "No Such genre"})
    }
    res.status(200).json(books)
}) */

module.exports = booksRouter