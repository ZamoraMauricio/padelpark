const { request, response } = require("express");
const Gorra = require("../models/gorras");

const getAllGorras = async (req, res) => {
    try {
        const gorrasList = await Gorra.find();
        res.status(200).json(gorrasList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
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

const deleteGorraById = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedGorra = await Gorra.findByIdAndDelete(id);

        if (!deletedGorra) {
            return res.status(404).json({ message: 'Gorra not found' });
        }

        res.status(200).json({ message: 'Gorra deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getGorraInfo = async (req, res) => {
    const gorraId = req.params.id;

    try {
        const gorra = await Gorra.findById(gorraId);

        if (gorra) {
            res.status(200).json(gorra);
        } else {
            res.status(404).json({ message: "Gorra not found" });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const updateGorraById = async (req, res) => {
    const gorraId = req.params.id;
    const { title, price, category, description, image } = req.body;

    try {
        const existingGorra = await Gorra.findById(gorraId);
        if (!existingGorra) {
            return res.status(404).json({ message: 'Gorra not found' });
        }

        existingGorra.title = title;
        existingGorra.price = price;
        existingGorra.category = category;
        existingGorra.description = description;
        existingGorra.image = image;

        await existingGorra.save();

        res.status(200).json({ message: 'Gorra updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllGorras,
    createGorra,
    deleteGorraById,
    getGorraInfo,
    updateGorraById
}