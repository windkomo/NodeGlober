function MogController() {
}
var mysql = require('../utils/mysql.js');
var mysqlModule = require('mysql');

MogController.prototype.getMogs = function getMogs(languageId, callback) {
    mysql.getConnection(function(err, connection){

         var query = "SELECT u.mini_blog_name, BP.user_id, u.first_name, u.nick_name, u.last_name, occ.occupation_name, SUM(BP.views) AS total,"
            + " u.user_picture,  a.avatar_picture_path, u.avatar_or_photo, BP.post_date, BP.post_title, BP.post_text,"
            + " BPICS.picture, BPICS.caption"
            + " FROM (SELECT blog_post_id, user_id, post_date, views, post_title, post_text FROM blog_posts ORDER BY post_date DESC) AS BP"
            + " INNER JOIN users u ON BP.user_id = u.user_id"
            + " LEFT OUTER JOIN avatars a ON u.user_id = a.user_id"
            + " LEFT OUTER JOIN blog_pictures BPICS ON BP.blog_post_id = BPICS.blog_post_id"
            + " LEFT OUTER JOIN occupations occ ON occ.occupation_id = u.occupation_id AND occ.language_id = ?"
            + " AND BPICS.index_number = (SELECT MIN(index_number) FROM blog_pictures WHERE blog_post_id = BP.blog_post_id)"
            + " WHERE u.mini_blog_public_private = 0"
            + " GROUP BY BP.user_id"
            + " ORDER BY total DESC LIMIT 3;";

        var parameters = [languageId];

        query = mysqlModule.format(query, parameters);

        connection.query(
        query, function(err, rows) {
         callback(err, rows);
        });
        connection.release();
    })

};

module.exports = MogController;