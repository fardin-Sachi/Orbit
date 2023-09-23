const express = require("express")
const adminBooksRouter = express.Router()
const bookModel = require('../../db_models/bookModel')
const mongoose = require("mongoose")

adminBooksRouter.get('/', async (req,res) => {
    const books = await bookModel.find({})
    res.status(200).json(books)
})
adminBooksRouter.get('/:_id', async (req,res) => {
    const {_id} = req.params
    const books = await bookModel.findOne({_id: _id})
    res.status(200).json(books)
})
adminBooksRouter.post('/',async (req,res) => {
    const {title,author,genre,price,quantity} = req.body
    try{
        const book = await bookModel.create({title,author,genre,price,quantity})
        res.status(200).json(book)
    } catch(err){
        res.status(400).json({error: err.message})
    }
})

adminBooksRouter.delete('/:_id', async (req,res) => {
    const {_id} = req.params
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).json({error:"No such book is found."})
    }

    const book = await bookModel.findOneAndDelete({_id:_id})
    if(!book)
        return res.status(400).json({error: "No book of this ID is found"})
    res.status(200).json(book)
})

adminBooksRouter.patch('/:_id',async (req,res) => {
    let updateValue = req.body
    const {_id} = req.params
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).json({error:"No such book is found."})
    }
    const book = await bookModel.findOneAndUpdate({_id: _id}, {$set: updateValue})
    if(!book)
        return res.status(400).json({error: "No such book exists"})
    res.status(200).json(book)
})

module.exports = adminBooksRouter