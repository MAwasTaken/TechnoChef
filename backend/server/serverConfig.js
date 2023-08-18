// dependency imports
const express = require('express');
const cors = require('cors');

//use the routers and midlewares , Export the function
module.exports = function (app) {
	// CORS for browsers
	app.use(cors());

	// JSON converter
	app.use(express.json());

    app.get('/' , (req , res ) => {
        res.send("hello world");
    } )
};
