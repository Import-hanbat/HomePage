var express = require('express');
var db = require('../modules/db');
var router = express.Router();

/* GET /ai */
router.get('/', function(req, res) {
    db.get().collection('ai').find().toArray(function(err, resu) {
        console.log(resu);
        res.render('list', {data : resu});
    });
});

module.exports = router;

