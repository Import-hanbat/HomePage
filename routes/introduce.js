var express = require('express');
var router = express.Router();

/* GET /introduce */
router.get('/', function(req, res) {
  res.render('introduce');
});

module.exports = router;
