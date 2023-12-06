const { request, response } = require("express");
const Favorito = require("../models/favorito");
const Raqueta = require("../models/raqueta");
const Gorra = require("../models/gorras");

// const getAllGorras = async (req, res) => {
//     try {
//         const gorrasList = await Gorra.find();
//         res.status(200).json(gorrasList);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

const createFav = async(req = request, res = response) => {

    const { idUser, idProduct, category, } = req.body;
    const favorito = new Favorito({ idUser: idUser, idProduct: idProduct, category: category });
    favorito.save().then((favorito) => {
            res.status(200).json(favorito);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

const getFavs = (req = request, res = response) => {
    const { idUser } = req.params;
    Favorito.find({ idUser: idUser }).then((favoritos) => {
            res.status(200).json(favoritos);
        })
        .catch((err) => {
            res.status(500).json(err);
        });

}

const deleteFav = (req = request, res = response) => {
    const favorito = req.body;

    console.log(favorito);

    Favorito.deleteOne().then((result) => {

        res.status(200).json(message = "Favorito eliminado");

    }).catch((err) => res.status(500).json({ error: err.message }));
}

const getFavsByIds = async(req = request, res = response) => {
    const { ids } = req.params;

    const idArray = ids.split(',');

    const favoritosList = [];

    await Raqueta.find({ _id: { $in: idArray } }).then((favoritos) => {
        favoritosList.push(favoritos);
        console.log(favoritosList);
    })

    await Gorra.find({ _id: { $in: idArray } }).then((favoritos) => {
        favoritosList.push(favoritos);
    })
    console.log(favoritosList);

    if (favoritosList.length > 0) {
        return res.status(200).json(favoritosList);
    } else {
        console.log("Favoritos not found");
        return res.status(404).json({ message: "Favoritos not found" });
    }





}

// const deleteGorraById = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const deletedGorra = await Gorra.findByIdAndDelete(id);

//         if (!deletedGorra) {
//             return res.status(404).json({ message: 'Gorra not found' });
//         }

//         res.status(200).json({ message: 'Gorra deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// const getGorraInfo = async (req, res) => {
//     const gorraId = req.params.id;

//     try {
//         const gorra = await Gorra.findById(gorraId);

//         if (gorra) {
//             res.status(200).json(gorra);
//         } else {
//             res.status(404).json({ message: "Gorra not found" });
//         }

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: error.message });
//     }
// };

// const updateGorraById = async (req, res) => {
//     const gorraId = req.params.id;
//     const { title, price, category, description, image } = req.body;

//     try {
//         const existingGorra = await Gorra.findById(gorraId);
//         if (!existingGorra) {
//             return res.status(404).json({ message: 'Gorra not found' });
//         }

//         existingGorra.title = title;
//         existingGorra.price = price;
//         existingGorra.category = category;
//         existingGorra.description = description;
//         existingGorra.image = image;

//         await existingGorra.save();

//         res.status(200).json({ message: 'Gorra updated successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: error.message });
//     }
// };

module.exports = {
    createFav,
    getFavs,
    deleteFav,
    getFavsByIds
}