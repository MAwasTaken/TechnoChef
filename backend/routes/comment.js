const router = require('express').Router();
const Controller = require('../controllers/commentController');
const { verifyTokenAndAdmin, verifyTokenAndAuth } = require('../middlewares/verifyTokens');

// create Comment
router.post('/', verifyTokenAndAuth, Controller.createCommentController);

// update Comment
router.put('/:id', verifyTokenAndAuth, Controller.updateCommentController);

// confirmComment
router.put('/confirm/:id', verifyTokenAndAdmin, Controller.confirmCommentController);

// delete Comment
router.delete('/:id', verifyTokenAndAuth, Controller.deleteCommentController);

// get All User Comments
router.get('/userComments/:username', Controller.getAllUserCommentsController);

// get Comments Of Product
router.get('/productComments/:shortName', Controller.getCommentByProductController);

// get One Comment By Id
router.get('/:id', verifyTokenAndAdmin, Controller.getOneCommentByIdController);

//export the Router
module.exports = router;
