const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 30000, // 30 seconds
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error('something went wrong', err);
        process.exit(1);
    }
};

module.exports = connectDb;
