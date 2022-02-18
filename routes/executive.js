var express = require('express');
var router = express.Router();

/* GET /executive */
router.get('/', function(req, res) {
  res.render('executive');
});

module.exports = router;
