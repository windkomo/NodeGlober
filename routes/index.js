var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'globreader',
        password : 'Glob!021289&Maxime1',
        database : 'upglober'
    });

    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        console.log('connected as id ' + connection.threadId);
    });

    connection.query('SELECT skill_name FROM skills', function(err, rows, fields) {
        if (err) throw err;

        console.log('The solution is: ', rows[0].skill_name);
    });

    connection.end();



  res.render('index', { title: 'NodeGlober' });
});

module.exports = router;
