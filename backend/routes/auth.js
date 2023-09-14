// dependency imports
const router = require('express').Router();
const authController = require('../controllers/authController');
const emailController = require('../controllers/accountVerification');

//REGISTER router
router.post('/register', authController.registerController);

// LOGIN router
router.post('/login', authController.logInController);

// send a verification email
router.post('/sendVerificationEmail', emailController.sendValidateUserEmail);

//  verify email By sended code
router.post('/VerifyEmail', emailController.validateUserByCode);

//export the Router
module.exports = router;
