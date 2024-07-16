const express = require("express")
const errorHandler = require("./middlewares/Errormiddleware")
const connectDB = require("./config/connection")
const app = express()

// Color library
require("colors")
// Env config 
require("dotenv").config()
// Connection db
connectDB()
// coverting into JSOn
app.use(express.json())
// enconding
app.use(express.urlencoded({extended:false}))
// Api calling
app.use('/user/', require("./routers/Userrouters"))
// Error Middleware Handler
app.use(errorHandler)
// App port listen 
app.listen(process.env.PORT,()=>console.log(`Listen on ${process.env.PORT.red}`))