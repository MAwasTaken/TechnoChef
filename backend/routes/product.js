// dependency imports
const uploader = require('../middlewares/uploader');
const { verifyTokenAndAdmin, verifyTokenAndAuth } = require('../middlewares/verifyTokens');
const controller = require('../controllers/productController');
const router = require('express').Router();

//CREATE router
router.post(
	'/',
	verifyTokenAndAdmin,
	uploader.array('images', 5),
	controller.createProductController
);

//UPDATE router
router.put(
	'/:id',
	verifyTokenAndAdmin,
	uploader.array('images', 5),
	controller.updateProductController
);

//DELETE by ID router
router.delete('/deleteById/:id', verifyTokenAndAdmin, controller.deleteProductByIdController);

//DELETE by shortName router
router.delete(
	'/deleteByShortName/:shortname',
	verifyTokenAndAdmin,
	controller.deleteProductByShortNameController
);

//GET PRODUCT BY ID router
router.get('/findById/:id', controller.getProductByIdController);

//GET product by shortName
router.get('/findByShortName/:shortname', controller.getProductByShortName);

//GET ALL PRODUCTS router
router.get('/', controller.getAllProductsController);

//export the Router
module.exports = router;
