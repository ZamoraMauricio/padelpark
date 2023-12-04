const Router = require("express");
const {getAllRaquetas,createRaqueta}= require("../controllers/raquetas");
const router = Router();

router.get('/', getAllRaquetas);
router.post('/',createRaqueta);

module.exports = router;