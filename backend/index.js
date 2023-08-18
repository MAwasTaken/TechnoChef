const dotenv = require('dotenv');
const mongoose = require('mongoose');

const express = require('express');
const app = express();

dotenv.config();
const PORT = 3000;

require('./server/serverConfig')(app);

mongoose
.connect(process.env.MONGODB_URL)
.then(() =>{
    console.log("DB conected successfully !!");
    app.listen(process.env.PORT || PORT);
    console.log("backend server is running !!");
}).catch((err) => {
    console.log(err);
})