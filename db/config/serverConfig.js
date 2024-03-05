// express package import
const express = require('express');
const app = express();

// body parser
const bodyParser = require('body-parser');

// .env file config
const dotenv = require('dotenv');
dotenv.config();

// cookie parser
const cookieParser = require('cookie-parser')

// middleware
const morgan = require('morgan');

// routers imports
const testRouter = require('./../routes/test');

module.exports = function (app) {
    // use middleware : morgan
    app.use(morgan('dev'))

    // use Parse JSON bodies
    app.use(bodyParser.json());

    // use Parse cookies
    app.use(cookieParser());

    // use Parse URL-encoded bodies
    app.use(bodyParser.urlencoded({ extended: true }));

    // set the reoutes
    app.use('/api',testRouter)
}