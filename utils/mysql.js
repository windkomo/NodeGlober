var mysql      = require('mysql');

var connectionPool = mysql.createPool({
    host     : 'localhost',
    user     : 'globreader',
    password : 'Glob!021289&Maxime1',
    database : 'upglober'
});

var getConnection = function(callback) {
    connectionPool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};

exports.getConnection = getConnection;

exports.connectionPool = connectionPool;