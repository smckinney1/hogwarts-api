const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongo = require('./mongo');

// We need to use bodyParser to access the body of the request
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded: query strings

// Handle a GET request (i.e. someone visits the /classroom route)
app.get('/classroom', (req, res) => {
  res.send('<h1>What are you doing here?</h1>');
  mongo.insertProfessor({ name: 'Flitwick', teaches: 'Charms' });
});

// What happens when PUT request is made
app.put('/classroom', (req, res) => {
  // store the classroom
  // req.body comes from the PUT request
  const newClassroom = {
    id: Math.floor(Math.random() * 1000),
    name: req.body.name,
    teacher: req.body.teacher,
  };

  res.json(newClassroom);
});

app.listen(3001, () => { console.log('Listening at port 3001') });