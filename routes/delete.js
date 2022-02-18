var express = require('express');
var db = require('../modules/db');
var router = express.Router();

/* DELETE /delete */
router.delete('/', function(req, res) {
    req.body._id = parseInt(req.body._id);
    db.get().collection(req.query.category).deleteOne(req.body, function(ree, resu) {
        console.log('삭제완료');
        res.status(200).send({message: '성공했습니다.'});
    });
});

module.exports = router;

