// dependency imports
const router = require('express').Router();
const { verifyTokenAndAdmin, verifyTokenAndAuth } = require('../middlewares/verifyTokens');
const controller = require('../controllers/usersController');

//UPDATE router
router.put('/:id', verifyTokenAndAuth, controller.updateUserController);

//DELETE router
router.delete('/:id', verifyTokenAndAuth, controller.deleteUserController);

//GET USER router
router.get('/find/:id', verifyTokenAndAuth, controller.getUserByIdController);

//GET ALL USER router
router.get('/', verifyTokenAndAdmin, controller.getAllUsersController);

//export the Router
module.exports = router;
