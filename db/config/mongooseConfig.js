// mongoose import
const { default: mongoose } = require('mongoose');

// .env file config
const dotenv = require('dotenv');
dotenv.config();

// connect to mongoose
mongoose
.connect(process.env.DB_URL+"/"+process.env.DB_NAME)
.then(() => {
    console.log(`MongoDB started and (${process.env.DB_NAME}) is now available`);
})
.catch((err) => console.log(err.message))