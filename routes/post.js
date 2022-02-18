var express = require('express');
var db = require('../modules/db');
var router = express.Router();

/* GET /post */
router.get('/:id', function(req, res) {
    console.log(req.query.category);

    db.get().collection(req.query.category).findOne({_id: parseInt(req.params.id)}, function(err, resu) {
        res.render('post', {data : resu});
    });
});

module.exports = router;