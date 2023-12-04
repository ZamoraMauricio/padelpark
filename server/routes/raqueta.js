const Router = require("express");
const {getAllRaquetas,createRaqueta, deleteRaquetaById, getRaquetaInfo, updateRaquetaById}= require("../controllers/raquetas");
const router = Router();

router.get('/', getAllRaquetas);
router.post('/',createRaqueta);
router.delete('/:id', deleteRaquetaById);
router.get('/:id', getRaquetaInfo);
router.put('/:id', updateRaquetaById);

module.exports = router;