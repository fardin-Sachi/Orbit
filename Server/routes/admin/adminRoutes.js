const express = require("express")
const adminRouter = express.Router()
const adminModel = require('../../db_models/adminModel')
const mongoose = require("mongoose")

adminRouter.get('/', async (req,res) => {
    const admin = await adminModel.find({})
    res.status(200).json(admin)
})
adminRouter.post('/',async (req,res) => {
    const {email,name,contact} = req.body
    try{
        const admin = await adminModel.create({email,name,contact})
        res.status(200).json(admin)
    } catch(err){
        res.status(400).json({error: err.message})
    }
})
/* adminRouter.patch('/:_id',async (req,res) => {
    let updateValue = req.body
    const {_id} = req.params
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).json({error:"No such Admin is found."})
    }
    const admin = await adminModel.find({_id: _id}, {$set: updateValue})
    if(!admin)
        return res.status(400).json({error: "No such Admin exists"})
    res.status(200).json(admin)
}) */

module.exports = adminRouter