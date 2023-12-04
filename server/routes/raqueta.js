const Router = require("express");
const { validateJWT } = require("../middlewares/verifyJWT");
const {getAllRaquetas,createRaqueta, deleteRaquetaById, getRaquetaInfo, updateRaquetaById}= require("../controllers/raquetas");
const router = Router();

router.get('/', [validateJWT], getAllRaquetas);
router.post('/', [validateJWT], createRaqueta);
router.delete('/:id', [validateJWT], deleteRaquetaById);
router.get('/:id', [validateJWT], getRaquetaInfo);
router.put('/:id', [validateJWT], updateRaquetaById);

module.exports = router;