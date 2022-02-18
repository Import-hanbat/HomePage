var express = require('express');
var db = require('../modules/db');
var router = express.Router();

/* POST /add */
router.post('/', function(req, res) {
    console.log(req.body.title);
    console.log(req.body.category);
    console.log(req.body.content);
    
    db.get().collection('counter').findOne({name: req.body.category}, function(err,resu) {
        console.log(resu.totalPosts);
        var totalpostnum = resu.totalPosts;
        
        db.get().collection(req.body.category).insertOne({_id : totalpostnum+1, title: req.body.title, category:req.body.category, content: req.body.content}, function(err,resu) {
            console.log('저장완료');
        });

        db.get().collection('counter').updateOne({name: req.body.category},{$inc :{totalPosts:1}}, function(err, reus) {
            if(err){return console.log(err)};
        });
    });
});

module.exports = router;