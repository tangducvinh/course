const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/v7_database_dev');
        console.log('Connect!');
    } catch (error) {
        console.log('Disconnect');
    }
}

module.exports = {connect}