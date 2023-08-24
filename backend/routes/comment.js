const router = require('express').Router();
const Controller = require('../controllers/commentController');

router.post('/', Controller.createCommentController);
router.put('/:id', Controller.updateCommentController);
router.put('confirm/:id', Controller.confirmCommentController);
router.delete('/:id', Controller.deleteCommentController);
router.get('/userComments/:user_Id', Controller.getAllUserCommentsController);
router.get('/productComments/:product_Id', Controller.getCommentByProductController);
router.get('/:id', Controller.getOneCommentByIdController);

module.exports = router;
