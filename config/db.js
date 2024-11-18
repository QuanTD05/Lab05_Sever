const mongoose = require('mongoose');

const local = "mongodb+srv://admin2:MWby6TxnyqUzC3cC@cluster0.dfdlq.mongodb.net/test";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
