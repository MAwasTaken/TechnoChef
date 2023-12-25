// dependency imports
const router = require('express').Router();
const controller = require('../controllers/orderController');
const { verifyTokenAndAdmin, verifyTokenAndAuth } = require('../middlewares/verifyTokens');

// Create Order
//router.post('/', controller.createOrderController);

// update Order
router.put('/:id', verifyTokenAndAdmin, controller.updateOrderController);

// delete Order
router.delete('/:id', verifyTokenAndAdmin, controller.deleteOrderController);

// get Order by Username
router.get('/getByUser/:username', verifyTokenAndAuth, controller.getOrderByUsernameController);

// get Order By Id
router.get('/getById/:id', verifyTokenAndAuth, controller.getOrderByIdController);

// get All of Orders
router.get('/', verifyTokenAndAdmin, controller.getAllOrdersController);

//export the Router
module.exports = router;
