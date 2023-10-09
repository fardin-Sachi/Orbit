const express = require("express")
const adminUserRouter = express.Router()
const userModel = require('../../db_models/userModel')
const mongoose = require("mongoose")

adminUserRouter.get('/', async (req,res) => {
    const users = await userModel.find({})
    res.status(200).json(users)
})
adminUserRouter.get('/:_id',async (req,res) => {
    const {_id} = req.params
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).json({error:"No such user is found."})
    }
    const users = await userModel.find({_id:_id})
    if(!users)
        return res.status(400).json({error: "No books of this genre"})
    res.status(200).json(users)
})

adminUserRouter.post('/',async (req,res) => {
    const {email,name,address,contact,wishlist,cart} = req.body //,wishlist,cart
    try{
        const users = await userModel.create({email,name,address,contact,wishlist,cart})
        res.status(200).json(users)
    } catch(err){
        res.status(400).json({error: err.message})
    }
})

adminUserRouter.delete('/:_id', async (req,res) => {
    const {_id} = req.params
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).json({error:"No such user is found."})
    }

    const user = await userModel.findOneAndDelete({_id:_id})
    if(!user)
        return res.status(400).json({error: "No user of this ID is found"})
    res.status(200).json(user)
})

adminUserRouter.patch('/:_id',async (req,res) => {
    let updateValue = req.body
    const {_id} = req.params
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).json({error:"No such user is found."})
    }
    const user = await userModel.findOneAndUpdate({_id: _id}, {$set: updateValue})
    if(!user)
        return res.status(400).json({error: "No such book exists"})
    res.status(200).json(user)
})

module.exports = adminUserRouter