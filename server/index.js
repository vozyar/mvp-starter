// var express = require('express');
// var bodyParser = require('body-parser');
// // UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// // var items = require('../database-mysql');
// // var items = require('../database-mongo');

// var app = express();

// // UNCOMMENT FOR REACT
// // app.use(express.static(__dirname + '/../react-client/dist'));

// // UNCOMMENT FOR ANGULAR
// // app.use(express.static(__dirname + '/../angular-client'));
// // app.use(express.static(__dirname + '/../node_modules'));

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

// app.listen(3000, function() {
//   console.log('listening on port 3000!');
// });

var express = require('express');
var bodyParser = require('body-parser');
var movies = require('../database-mysql');

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/movies', function (req, res) {
  movies.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/movies', function (req, res) {
  let rating = req.body.rating !== undefined ? Number(req.body.rating) : 1;
  let name = req.body.name;
 
  console.log(req.body)
  if(!name) {
    res.sendStatus(400);
  } else {
    movies.insertOne(name, rating, function(err, data) {
      if(err) {
        res.sendStatus(500);
      } else {
        res.json(data);
      }
    });
  }
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

