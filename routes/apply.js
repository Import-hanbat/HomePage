var express = require('express');
var router = express.Router();

/* GET /apply */
router.get('/', function(req, res) {
  res.render('apply');
});

module.exports = router;
