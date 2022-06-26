const mongoose = require("mongoose")


const Schema = mongoose.Schema
const itemSchema = new Schema({
    itemName: String,
    itemPrice: Number,
    iitemCategory: String
})

const Item = mongoose.model( "Item" , itemSchema )

module.exports = Item