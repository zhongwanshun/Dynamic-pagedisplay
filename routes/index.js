var express = require('express');
var router = express.Router();
var db = require('./db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    db.query("select * from tab_show1", (err, results) => {
        // console.log(err);
        // console.log(results);
        res.render('index', { data: results });
    })

});





module.exports = router;