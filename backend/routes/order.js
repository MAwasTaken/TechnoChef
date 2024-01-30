// dependency imports
const router = require('express').Router();
const controller = require('../controllers/orderController');
const { verifyTokenAndAdmin, verifyTokenAndAuth } = require('../middlewares/verifyTokens');

// Create Order
//router.post('/', controller.createOrderController);

// update Order
router.put('/:ref_id', verifyTokenAndAdmin, controller.updateOrderController);

// delete Order
router.delete('/:ref_id', verifyTokenAndAdmin, controller.deleteOrderController);

// get Order by Username
router.get('/getByUser/:username', verifyTokenAndAuth, controller.getOrderByUsernameController);

// get Order By Id
router.get('/getById/:ref_id', verifyTokenAndAuth, controller.getOrderByIdController);

// get All of Orders
router.get('/', verifyTokenAndAdmin, controller.getAllOrdersController);

//export the Router
module.exports = router;
