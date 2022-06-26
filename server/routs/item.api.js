const { response } = require("express")
const express = require("express")
const Item = require("../models/item.model")

const router = express.Router()

router.get("/getExpenses" , async function (req , res) {
    const item = await Item.find({})
    res.send(item)
})

router.post("/addNewExpeses" , async function (req , res){
    const item = new Item( req.body)
    const response = await Item.save()
    res.send(response)
} )
router.delete("/deleteExpenses" , function (req , res) {

})

module.exports = router