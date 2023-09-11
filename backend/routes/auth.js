// dependency imports
const router = require('express').Router();
const Controller = require('../controllers/authController');

//REGISTER router
router.post('/register', Controller.registerController);

// LOGIN router
router.post('/login', Controller.logInController);

router.get('/verifyEmail', Controller.validateUserEmail);

//export the Router
module.exports = router;
