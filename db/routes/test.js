// imports
const router = require('express').Router();
const dbUpdaterController = require('../controllers/dbUpdateController')

// route test
router.get('/update', dbUpdaterController.dbUpdater)

// exports
module.exports = router;
