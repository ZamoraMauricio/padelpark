const Router = require('express');
const { registerUser, login } = require('../controllers/users');
const router = Router();

router.post('/signup', registerUser);
router.post('/signin', login);

module.exports = router;