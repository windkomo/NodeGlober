function MogController() {
}
var mysql = rekuire('mysql.js');

MogController.prototype.getMogs = function getMogs(callback) {
    mysql.getConnection(function(err, connection){
        connection.query("SELECT * FROM USERS INNER JOIN BLOG_POSTS LIMIT 1", function(err, rows) {
            console.log(rows);
        })
        connection.release();
    })

};

module.exports = MogController;