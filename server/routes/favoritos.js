const Router = require("express");
const { validateJWT } = require("../middlewares/verifyJWT");
const { createFav, getFavs, deleteFav } = require("../controllers/favoritos");
const router = Router();

router.get('/:idUser', [validateJWT], getFavs);
router.post('/', [validateJWT], createFav);
router.delete('/', [validateJWT], deleteFav);
// router.get('/raq', [validateJWT], getAllGorras);
// router.post('/raq', [validateJWT], createGorra);
// router.delete('/raq', [validateJWT], deleteGorraById);

module.exports = router;