require('dotenv').config()
const mongoose = require("mongoose");
const express = require("express");
const booksRoute = require('./routes/user/booksRoute')
const app = express()
const adminBooksRouter = require('./routes/admin/adminBooksRoute');
const adminUserRouter = require('./routes/admin/adminUserRoutes');
const adminRouter = require('./routes/admin/adminRoutes');
const userRouter = require('./routes/user/userRoutes');

app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})
app.use('/api/books',booksRoute)
app.use('/api/user',userRouter)

//Admin accessess
app.use('/api/admin/books',adminBooksRouter)
app.use('/api/admin/users',adminUserRouter)
app.use('/api/admin/admins',adminRouter)

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`DB connected and Server listening on`,process.env.PORT)
        })
    })
    .catch((err) => {
        console.log("Error: ", err)
    })
