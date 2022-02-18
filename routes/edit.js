var express = require('express');
var db = require('../modules/db');
var router = express.Router();

/* GET /edit:id */
router.get('/:id', function(req, res) {
    db.get().collection(req.body.category).findOne({_id: parseInt(req.params.id)}, function(err, resu) {
        console.log(resu);
        res.render('edit', {data : resu});
    });
});

/* PUT /edit */
router.put('/', function(req, res) {
    db.get().collection(req.body.category).updateOne({_id : parseInt(req.body.id)}, {$set : {title: req.body.title, content: req.body.content}}, function(err, resu) {
        console.log('수정완료');
        res.redirect('/list');
    });
});

module.exports = router;

