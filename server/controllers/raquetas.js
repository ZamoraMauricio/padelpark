const { request, response } = require("express");
const Raqueta = require("../models/raqueta");

const getAllRaquetas = async (req, res) => {
    try {
        const raquetasList = await Raqueta.find();
        res.status(200).json(raquetasList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteRaquetaById = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedRaqueta = await Raqueta.findByIdAndDelete(id);

        if (!deletedRaqueta) {
            return res.status(404).json({ message: 'Raqueta not found' });
        }

        res.status(200).json({ message: 'Raqueta deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getRaquetaInfo = async (req, res) => {
    const raquetaId = req.params.id;

    try {
        const raqueta = await Raqueta.findById(raquetaId);

        if (raqueta) {
            res.status(200).json(raqueta);
        } else {
            res.status(404).json({ message: "Raqueta not found" });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const updateRaquetaById = async (req, res) => {
    const raquetaId = req.params.id;
    const { title, price, category, description, image } = req.body;

    try {
        const existingRaqueta = await Raqueta.findById(raquetaId);
        if (!existingRaqueta) {
            return res.status(404).json({ message: 'Raqueta not found' });
        }

        existingRaqueta.title = title;
        existingRaqueta.price = price;
        existingRaqueta.category = category;
        existingRaqueta.description = description;
        existingRaqueta.image = image;

        await existingRaqueta.save();

        res.status(200).json({ message: 'Raqueta updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

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
    createRaqueta,
    deleteRaquetaById,
    getRaquetaInfo,
    updateRaquetaById 
}