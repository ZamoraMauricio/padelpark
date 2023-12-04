const Router = require("express");
const { getAllGorras, createGorra, deleteGorraById, getGorraInfo, updateGorraById }= require("../controllers/gorras");
const router = Router();

router.get('/', getAllGorras);
router.post('/', createGorra);
router.delete('/:id', deleteGorraById);
router.get('/:id', getGorraInfo);
router.put('/:id', updateGorraById);

module.exports = router;