const { request, response } = require("express");
const Raqueta = require("../models/raqueta");

const getAllRaquetas = (req = request, res = response) => {
    const { searchTerm } = req.query;
    Raqueta.find({ title: RegExp(searchTerm) }).then(
        (result) => {
            res.status(200).json({
                raquetaList: result,
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
                msg: "error a pasar datos"
            });
        })
}
const createRaqueta = async (req = request, res = response) => {

    const { title, price, category, description, image } = req.body;

    try {
        const newRaqueta = new Raqueta({ title, price, category, description, image });
        await newRaqueta.save();

        res.status(201).json({ message: 'Raqueta saved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { 
    getAllRaquetas, 
    createRaqueta 
}