// express package import
const express = require('express');
const app = express();

// Server config
require('./config/serverConfig')(app)

// DataBase config
require('./config/mongooseConfig')



// starting server
app.listen(process.env.PORT, () => {
    console.log('TECHNOSHEF DB UPDATER !');
    console.log(`Server is running on Port:${process.env.PORT}`);
    console.log(`You can access to server on this address ==> http://localhost:${process.env.PORT}`);
}).on('error', (err) => {
    console.log(err);
    console.log('Backend server is NOT STARTED !!!');
});