var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'review'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM movies', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var insertOne = function(name, rating, callback) {
  console.log(name, rating)
  connection.query('INSERT INTO movies (name, rating) values (?, ?)', [ name, rating ], function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;

