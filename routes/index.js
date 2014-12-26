var express = require('express');
var router = express.Router();
var MogController = rekuire('mogController.js');

/* GET home page. */
router.get('/', function(req, res) {

  res.render('index', { title: 'NodeGlober' });
});

module.exports = router;
