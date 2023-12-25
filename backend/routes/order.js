// dependency imports
const router = require('express').Router();
const controller = require('../controllers/orderController');

// Create Order
router.post('/', controller.createOrderController);

// update Order
router.put('/:id', controller.updateOrderController);

// delete Order
router.delete('/:id', controller.deleteOrderController);

// get Order by Username
router.get('/getByUser/:username', controller.getOrderByUsernameController);

// get Order By Id
router.get('/getById/:id', controller.getOrderByIdController);

// get All of Orders
router.get('/', controller.getAllOrdersController);

//export the Router
module.exports = router;
