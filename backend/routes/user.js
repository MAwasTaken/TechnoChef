// dependency imports
const router = require('express').Router();
const controller = require('../controllers/usersController');

//UPDATE router
router.put('/:id', controller.updateUserController);

//DELETE router
router.delete('/:id', controller.deleteUserController);

//GET USER router
router.get('/find/:id', controller.getUserByIdController);

//GET ALL USER router
router.get('/', controller.getAllUsersController);

//export the Router
module.exports = router;
