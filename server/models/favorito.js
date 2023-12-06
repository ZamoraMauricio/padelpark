const mongoose = require('mongoose');

const favoritoSchema = new mongoose.Schema({
    idUser: String,
    idProduct: String,
    category: String
});

module.exports = mongoose.model('favorito', favoritoSchema);