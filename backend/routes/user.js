// dependency imports
const router = require('express').Router();
const { verifyTokenAndAdmin, verifyTokenAndAuth } = require('../middlewares/verifyTokens');
const controller = require('../controllers/usersController');

//UPDATE router
router.put('/:id', verifyTokenAndAuth, controller.updateUserController);

//DELETE router
router.delete('/:id', verifyTokenAndAuth, controller.deleteUserController);

//GET USER router
router.get('/find/:id', verifyTokenAndAdmin, controller.getUserByIdController);

//GET ALL USER router
router.get('/getAll', verifyTokenAndAdmin, controller.getAllUsersController);

// GET Me router
router.get('/', verifyTokenAndAuth, controller.getMeController);

//export the Router
module.exports = router;
