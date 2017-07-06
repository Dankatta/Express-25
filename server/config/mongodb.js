const { MongoClient } = require('mongodb');

const connectionString = 'mongodb://localhost:/express25';
const connect = (connectionString) => {
    return MongoClient.connect(connectionString);
};

module.exports = { connect };