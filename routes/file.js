var express = require('express');
var db = require('../modules/db');
var upload = require('../modules/upload');
var router = express.Router();

/* POST /image */
router.post('/image', upload.single('image'), function(req, res) {
    res.send(JSON.stringify(req.file));
});

module.exports = router;

