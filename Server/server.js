require('dotenv').config()
const mongoose = require("mongoose");
const express = require("express");
const booksRoute = require("./routes/booksRoute")
const app = express()

app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})
app.use('/api/books',booksRoute)
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`DB connected and Server listening on`,process.env.PORT)
        })
    })
    .catch((err) => {
        console.log("Error: ", err)
    })

/* app.listen(process.env.PORT, () => {
    console.log(`DB connected and Server listening on`,process.env.PORT)
}) */