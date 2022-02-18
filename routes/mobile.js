var express = require('express');
var db = require('../modules/db');
var router = express.Router();

/* GET /mobile */
router.get('/', function(req, res) {
    db.get().collection('mobile').find().toArray(function(err, resu) {
        console.log(resu);
        res.render('list', {data : resu});
    });
});

module.exports = router;

