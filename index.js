const express = require ('express')
const mongoose = require ('mongoose')
require('dotenv').config()
const itemApi = require('./server/routs/item.api')


const app = express()
const PORT = 3001

mongoose.connect(process.env.MONGODB_URI) 
    .then(() => console.log("connected to dataBase"))
 
app.use(express.json())
app.use("/Expenses" , itemApi)

app.listen(PORT , function () {
    console.log("up and running on Port " + PORT);
})