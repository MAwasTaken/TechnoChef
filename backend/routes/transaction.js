const router = require('express').Router();
const { verifyTokenAndAuth } = require('../middlewares/verifyTokens');
const {
	transactionGatewayController,
	verifyTransactionController
} = require('../controllers/transactionController');

router.post('/gateway', verifyTokenAndAuth, transactionGatewayController);
router.get('/verify', verifyTransactionController);

module.exports = router;
