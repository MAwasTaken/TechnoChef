// dependency imports
const router = require('express').Router();
const authController = require('../controllers/authController');
const emailController = require('../controllers/accountVerification');
const { verifyTokenAndAuth } = require('../middlewares/verifyTokens');

//REGISTER router
router.post('/register', authController.registerController);

// LOGIN router
router.post('/login', authController.logInController);

// LOGOUT router
router.post('/logOut', authController.logOutController);

// send a verification email
router.post('/sendVerificationEmail', verifyTokenAndAuth, emailController.sendValidateUserEmail);

//  verify email By sended code
router.post('/VerifyEmail', verifyTokenAndAuth, emailController.validateUserByCode);

//export the Router
module.exports = router;
