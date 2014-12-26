function IntController() {
}
var mysql = require('../utils/mysql.js');
var mysqlModule = require('mysql');

IntController.prototype.getCompanies = function getCompanies(languageId, callback) {
    mysql.getConnection(function(err, connection){

        var query = "SELECT c.company_id, c.company_name, c.tagline, c.website, c.logo, t.town_name, sr.region_name, coun.country_name, ch.zip_code, c.registration_date"
            + " FROM companies c"
            + " INNER JOIN companies_headquarters ch ON c.company_id = ch.company_id"
            + "  INNER JOIN towns t ON t.town_id = ch.town_id AND t.language_id = 1"
            + "  INNER JOIN states_regions sr ON sr.region_id = t.region_id AND sr.language_id = ?"
            + "  INNER JOIN countries coun ON coun.country_id = sr.country_id AND coun.language_id = sr.language_id"
            + "  WHERE c.interesting = 1"
            + "  AND c.tagline IS NOT NULL AND c.tagline != ''"
            + "  AND c.website IS NOT NULL AND c.website != ''"
            + "  AND c.logo IS NOT NULL AND c.logo != ''"
            + "  AND c.registration_date IS NOT NULL AND c.registration_date != ''"
            + "  GROUP BY c.company_id"
            + "  ORDER BY c.registration_date DESC LIMIT 10;";

        var parameters = [languageId];

        query = mysqlModule.format(query, parameters);

        connection.query(
        query, function(err, rows) {
         callback(err, rows);
        });
        connection.release();
    })

};

module.exports = IntController;