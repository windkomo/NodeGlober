/**
 * Created by Komo on 26/12/2014.
 */

var express = require('express');
var router = express.Router();
var IntController = rekuire('intController');

/* GET top mogs listing. */
router.get('/companies', function(req, res) {

    var languageId = req.param('languageId');

    var intController = new IntController();
    intController.getCompanies(languageId, function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = router;
