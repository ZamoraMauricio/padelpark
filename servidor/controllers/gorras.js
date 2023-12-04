const { request, response } = require("express");
const Gorra = require("../models/gorras");

const getAllGorras = (req = request, res = response) => {
    const { searchTerm } = req.query;
    Gorra.find({ title: RegExp(searchTerm) }).then(
        (result) => {
            res.status(200).json({
                gorraList: result,
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
                msg: "error a pasar datos"
            });
        })
}

const createGorra = async (req = request, res = response) =>  {
    
    const { title, price, category, description, image } = req.body;

    try {
        const newGorra = new Gorra({ title, price, category, description, image });
        await newGorra.save();

        res.status(201).json({ message: 'Gorra saved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllGorras,
    createGorra
}