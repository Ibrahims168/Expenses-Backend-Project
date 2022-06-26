const express = require ('express')
const mongoose = require ('mongoose')
const itemsApi = require("./server/routs/item.api")
require('dotenv').config()

mongoose.connect(process.env.MONGOBD_URI)
    .then(() => console.log("connected to Database "))

const app = express()
const PORT = 3001 

app.use(express.json())
app.use("Expenses" , itemsApi)

app.listen(PORT , function () {
    console.log("up and running on Port " + PORT);
})