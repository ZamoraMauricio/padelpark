const Router = require("express");
const {getAllGorras,createGorra}= require("../controllers/gorras");
//const { verifyAdminRole } = require("../middlewares/verifyAdminRole");
const router = Router();

router.get('/', getAllGorras);
//router.get('/:id',[validateJWT,verifyAdminRole], getCartoonById);
//router.get('/sort/asc', sortCartoonsAsc);
//router.get('/sort/desc', sortCartoonsDesc);
//router.get('/show/shuffle', shuffleCartoons);
router.post('/',createGorra);
//router.delete('/:id', deleteCartoonById);
//router.get('/detalles/:id', getCartoonInfo);
//router.put('/', updateCartoon)

module.exports = router;