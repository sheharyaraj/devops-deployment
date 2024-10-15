const mongoose = require('mongoose');
require("dotenv").config();
const mongoURI = process.env.REACT_APP_MONGOURL;


async function fetchData() {
    try {
        
        console.log('end');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
        fetchData();
        console.log('end');

    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
};

module.exports = mongoDB;
