const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

const dbName = 'hogwarts';

// Deviating from Quick Start
let db;

MongoClient.connect(url, (err, client) => {
  // Ensure that there are no errors
  assert.equal(null, err);
  console.log('Successfully connected to server');

  db = client.db(dbName);
  // client.close();
});

module.exports = {
  insertProfessor: (professor) => {
    db.collection('professors').insertOne(professor);
  },
  getProfessor: (query) => {
    return db.collection('professors').find(query);
  }
}