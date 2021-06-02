let mysql = require('mysql');

// Create a connection string to the database by calling it's createConnection method
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_tasteful_table'
});

// connect() method on the connection object to connect MySQL database
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });