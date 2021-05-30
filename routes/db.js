var mysql = require('mysql');
var db = {};
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'home_work'
});

connection.connect();

db.query(sql, function(error, results, fields) {
    if (error) throw error;
    callback(results);
});

connection.end();