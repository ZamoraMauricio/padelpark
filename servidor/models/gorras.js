const mongoose = require('mongoose')

const gorrasScheme=mongoose.Schema({
    title: String,
    price: Number,
    category: String,
    description: String,
    image: String,
})

const Gorra = mongoose.model("Gorra",gorrasScheme);

module.exports = Gorra;