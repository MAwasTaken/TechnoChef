const router = require('express').Router();
const Controller = require('../controllers/categoryController');
const { verifyTokenAndAdmin } = require('../middlewares/verifyTokens');
const uploader = require('../middlewares/uploader');

//CRUD

router.post(
	'/',
	verifyTokenAndAdmin,
	uploader.single('image'),
	Controller.createCategoryController
);

router.put(
	'/:id',
	verifyTokenAndAdmin,
	uploader.single('image'),
	Controller.updateCategoryController
);

router.delete('/:id', verifyTokenAndAdmin, Controller.deleteCategoryController);

router.get('/', Controller.getAllCategoryController);

module.exports = router;
