const express = require ('express')
const mongoose = require ('mongoose')

const app = express()
const PORT = 3001 
app.use(express.json())

app.listen(PORT , function () {
    console.log("up and running on Port " + PORT);
})