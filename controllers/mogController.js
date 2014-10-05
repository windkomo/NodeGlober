function MogController() {
}
var mysql = rekuire('mysql.js');

MogController.prototype.getMogs = function getMogs(callback) {
    mysql.getConnection(function(err, connection){
        connection.query(
        "SELECT u.user_id, u.first_name, u.nick_name, u.last_name, u.user_picture, u.mini_blog_name, bposts.post_title,"
        + " bposts.post_text, bpictures.picture, bposts.post_date, SUM(bposts.views) as total FROM"
        + " USERS u"
        + " INNER JOIN (SELECT * FROM BLOG_POSTS ORDER BY blog_post_id DESC) as bposts ON u.user_id = bposts.user_id"
        + " LEFT OUTER JOIN BLOG_PICTURES bpictures ON bposts.blog_post_id = bpictures.blog_post_id"
        + " WHERE u.mini_blog_public_private = 0"
        + " group by u.user_id"
        + " order by total DESC", function(err, rows) {
         callback(err, JSON.stringify(rows, null));
        })
        connection.release();
    })

};

module.exports = MogController;