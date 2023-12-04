const Router = require("express");
const { getAllGorras, createGorra }= require("../controllers/gorras");
const router = Router();

router.get('/', getAllGorras);
router.post('/', createGorra);

module.exports = router;