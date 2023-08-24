// dependency imports
const uploader = require('../middlewares/uploader');
const controller = require('../controllers/productController');
const router = require('express').Router();

//CREATE router
router.post('/', uploader.array('images', 5), controller.createProductController);

//UPDATE router
router.put('/:id', uploader.array('images', 5), controller.updateProductController);

//DELETE by ID router
router.delete('/deleteById/:id', controller.deleteProductByIdController);

//DELETE by shortName router
router.delete('/deleteByShortName/:shortname', controller.deleteProductByShortNameController);

//GET PRODUCT BY ID router
router.get('/findById/:id', controller.getProductByIdController);

//GET product by shortName
router.get('/findByShortName/:shortname', controller.getProductByShortName);

//GET ALL PRODUCTS router
router.get('/', controller.getAllProductsController);

// GET ALL Categories
router.get('/getCategories', controller.getAllCategoriesController);

//export the Router
module.exports = router;
