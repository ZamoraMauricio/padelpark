const Router = require("express");
const { validateJWT } = require("../middlewares/verifyJWT");
const { getAllGorras, createGorra, deleteGorraById, getGorraInfo, updateGorraById }= require("../controllers/gorras");
const router = Router();

router.get('/', [validateJWT], getAllGorras);
router.post('/', [validateJWT], createGorra);
router.delete('/:id', [validateJWT], deleteGorraById);
router.get('/:id', [validateJWT], getGorraInfo);
router.put('/:id', [validateJWT], updateGorraById);

module.exports = router;