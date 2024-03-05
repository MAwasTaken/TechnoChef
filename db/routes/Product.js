// imports
const router = require('express').Router();
const productsUpdaterController = require('../controllers/productsUpdaterController')

// route for updating all products
router.patch('/update', productsUpdaterController.productsUpdater)

// route for getting all products in database
router.get('/get', productsUpdaterController.getAllProducts)

// exports
module.exports = router;
