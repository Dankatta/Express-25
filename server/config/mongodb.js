const { MongoClient } = require('mongodb');

const connectionString = 'mongodb://localhost:27017/express25';
module.exports = function(connect) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(connectionString)
            .then((db) => {
                db.close();

            })
            .then((resolve) => {

            });
    });
}