var mysql = require('mysql');
var db = {};
db.query = function(sql, callback) {
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'home_work'
    });
    con.query(sql, (err, results) => {
        callback(err, results);
    });
    con.end();
}


module.exports = db;