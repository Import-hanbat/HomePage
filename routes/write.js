var express = require('express');
var router = express.Router();

const pwd = Buffer.from('', "utf8").toString('base64');

/* GET /write */
router.post('/', function(req, res) {
  if(pwd.toString("utf8") == Buffer.from(req.body.pwd, "utf8").toString('base64')) {
    res.render('write');
  } else {
    res.redirect('/');
  }
});

module.exports = router;
