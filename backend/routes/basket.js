// dependency imports
const router = require('express').Router();
const { verifyTokenAndAdmin, verifyTokenAndAuth } = require('../middlewares/verifyTokens');
const controller = require('../controllers/basketController');

//UPDATE router
router.put('/add', verifyTokenAndAuth, controller.addToBasketController);

router.put('/remove', verifyTokenAndAuth, controller.removeFromBasketController);

router.get('/', verifyTokenAndAuth, controller.getBasketController);

router.delete('/', verifyTokenAndAuth, controller.clearBasketController);

//export the Router
module.exports = router;
