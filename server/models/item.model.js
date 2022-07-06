const mongoose = require("mongoose")


const Schema = mongoose.Schema

const itemSchema = new Schema({
    itemName: String,
    itemPrice: Number,
    itemCategory: String
})

const Item = mongoose.model( "item" , itemSchema )

module.exports = Item