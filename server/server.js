const { mongoose } = require('mongoose');

const db = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log('DB connection successful');
    } catch (error) {
        console.log('DB connection error:', error);
    }
};

module.exports = db;
