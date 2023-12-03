const mongoose = require('mongoose')

const raquetaScheme=mongoose.Schema({
    id: Number,
    title: String,
    price: Number,
    category: String,
    description: String,
    image: String,
})
module.exports=mongoose.model("Raquetas",raquetaScheme)

