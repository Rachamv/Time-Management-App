const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    database: 'timetable',
    host: 'localhost', 
    user: 'root', 
    password: '', 
});

// Connect to the database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database: ', error);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Perform database operations
// ...

// Close the database connection when finished
connection.end();
