// imports
const express = require('express')

// update database controller
const dbUpdater = (req, res) => {
    try {
        
        res
            .status(200)
            .json('database updated successfully')
    } catch (err) {
        res
        .status(400)
    }
}
module.exports = { dbUpdater }