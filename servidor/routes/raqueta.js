const Router = require("express");
const {getAllRaquetas,createRaqueta}= require("../controllers/raquetas");
//const { verifyAdminRole } = require("../middlewares/verifyAdminRole");
const router = Router();

router.get('/', getAllRaquetas);
//router.get('/:id',[validateJWT,verifyAdminRole], getCartoonById);
//router.get('/sort/asc', sortCartoonsAsc);
//router.get('/sort/desc', sortCartoonsDesc);
//router.get('/show/shuffle', shuffleCartoons);
router.post('/',createRaqueta);
//router.delete('/:id', deleteCartoonById);
//router.get('/detalles/:id', getCartoonInfo);
//router.put('/', updateCartoon)

module.exports = router;