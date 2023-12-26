const mongoose = require('mongoose');

// const URI = 'mongodb://localhost:27017/mern-stack';

const URI = process.env.MONGO_URI;

const connectDb = async ()=>{
    try {
       await mongoose.connect(URI);
       console.log("database connection is succefull");
    } catch (error) {
        console.log('database connection is failed');
        process.exit();
    }
}

module.exports = connectDb;