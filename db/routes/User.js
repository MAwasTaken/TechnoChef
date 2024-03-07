// imports
const router = require('express').Router();
const usersUpdaterController = require('../controllers/usersUpdaterController')

// route for updating all users
router.patch('/update', usersUpdaterController.usersUpdater)

// route for getting all users in database
// router.get('/get', usersUpdaterController)

// exports
module.exports = router;
