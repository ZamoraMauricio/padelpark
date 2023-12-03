const mongoose = require('mongoose')

const gorrasScheme=mongoose.Schema({
    id: Number,
    title: String,
    price: Number,
    category: String,
    description: String,
    image: String,
})
module.exports=mongoose.model("Gorras",gorrasScheme)