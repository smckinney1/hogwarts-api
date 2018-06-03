const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongo = require('./mongo');

// We need to use bodyParser to access the body of the request
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded: query strings

// Handle a GET request (i.e. someone visits the /classroom route)
app.get('/professors', (req, res) => {
  // To see the results of .find, we have to use .toArray() method.
  mongo
    .getProfessor({ name: 'Flitwick' })
    .toArray(((err, docs) => {
      res.json(docs);
    }));
});

// What happens when PUT request is made
app.put('/professors', (req, res) => {
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