const router = require('express').Router();
const Controller = require('../controllers/commentController');

// create Comment
router.post('/', Controller.createCommentController);

// update Comment
router.put('/:id', Controller.updateCommentController);

// confirmComment
router.put('/confirm/:id', Controller.confirmCommentController);

// delete Comment
router.delete('/:id', Controller.deleteCommentController);

// get All User Comments
router.get('/userComments/:user_Id', Controller.getAllUserCommentsController);

// get Comments Of Product
router.get('/productComments/:product_Id', Controller.getCommentByProductController);

// get One Comment By Id
router.get('/:id', Controller.getOneCommentByIdController);

//export the Router
module.exports = router;
