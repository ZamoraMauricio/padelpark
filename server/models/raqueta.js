const mongoose = require('mongoose')

const raquetaScheme=mongoose.Schema({
    title: String,
    price: Number,
    category: String,
    description: String,
    image: String,
})

const Raqueta = mongoose.model("Raqueta",raquetaScheme);

module.exports = Raqueta;

