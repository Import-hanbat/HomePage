var express = require('express');
var router = express.Router();

/* GET /rule */
router.get('/', function(req, res) {
  res.render('rule');
});

module.exports = router;
