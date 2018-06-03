const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

const dbName = 'hogwarts';

MongoClient.connect(url, (err, client) => {
  // Ensure that there are no errors
  assert.equal(null, err);
  console.log('Successfully connected to server');

  // const db = client.db(dbName);
  client.close();
});