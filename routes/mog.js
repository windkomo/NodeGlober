var express = require('express');
var router = express.Router();
var MogController = rekuire('mogController');

/* GET top mogs listing. */
router.get('/topmogs/:language', function(req, res) {

    var languageId = req.params.language;
    var mogController = new MogController();
    mogController.getMogs(languageId, function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = router;
