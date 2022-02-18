var express = require('express');
var router = express.Router();

/* GET /write */
router.get('/', function(req, res) {
  res.render('write');
});

module.exports = router;
