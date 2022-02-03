const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

//ejs를 제외한 폴더를 추가 하고 싶을 시에는 밑에 있는 코드를 써야함
app.use('/css',express.static('css')); //미들웨어
app.use('/fontawesome-free-5.15.4-web',express.static('fontawesome-free-5.15.4-web')); //미들웨어
app.use('/images',express.static('images'));
MongoClient.connect('mongodb+srv://import:import1015@cluster0.a1cx0.mongodb.net/HomePage?retryWrites=true&w=majority',function(err, client){
    if(err) return console.log(err);
    app.listen(8080, function() {
        console.log('listening on 8080');
    })
})

//메인 홈페이지
app.get('/', function(req,res){
    res.render('index.ejs');
});


//임원진
app.get('/executive', function(req, res){
    res.render('executive.ejs');
    
})
//동아리 소개
app.get('/introduce',function(req,res){
    res.render('introduce.ejs');
});
//동아리 규칙
app.get('/rule',function(req, res){
    res.render('rule.ejs');
});
//회의록
app.get('/meeting',function(req,res){
    res.render('list.ejs');
});

//프로젝트
app.get('/project',function(req,res){
    res.render('list.ejs');
});

//웹
app.get('/web',function(req,res){
    res.render('list.ejs');
});

//모바일
app.get('/mobile',function(req, res){
    res.render('list.ejs');
});
//데이터분석
app.get('/dataAnalysis',function(req, res){
    res.render('list.ejs');
});
//ai
app.get('/ai',function(req, res){
    res.render('list.ejs');
});
//질문 게시판
app.get('/question',function(req, res){
    res.render('list.ejs');
});
//지원서 작성 페이지
app.get('/apply',function(res,req){
    res.render('apply.ejs');
});

//게시글 페이지
app.get('/post',function(req,res){
    res.render('post.ejs');
});

app.get('/write',function(req,res){
    res.render('write.ejs')
})


/* db 업로드 코드 */

app.post('/add',function(req,res){
    // console.log(req.body.title);
    // console.log(req.body.category);
    console.log(req.body.content);


    // db.collection('counter').findOne({name : 'web'},function(err, resu){
    //     console.log(resu.totalPosts);
    //     var totalpostnum = resu.totalPosts;
    //     db.collection('post').insertOne({_id : totalpostnum + 1,제목 : req.body.title, 카테고리 : req.body.category, 내용: req.body.content}, function(err,resu){
    //         console.log('저장완료');
    //     }); 
    //     //counter라는 콜렉션에 있는 totalPost라는 항목도 1이 증가해야됨.(수정)
    //     db.collection('counter').updateOne({name : 'web'},{$inc :{totalPosts:1}},function(err, resu){
    //         if(err){return console.log(err)}; 
    //     });//수정을 할 때 쓰는 함수(한개만 가능, 여러개는 updateMany로 쓰면 됨)
    // });//updateOne({/* 어떤 데이터를 수정할지 */},{/* 수정 값 */},function(){})
    
    
    

})




/*
 *
DB 데이터 구성

처음 데이터 값은 

--글쓰기 후에 DB저장시에 -- 
카테고리, 개시글 날짜, 개시글 쓴 사람
개시글 내용

 * 
 * 
 */
/*********************************************** */
//메인 페이지 서버 끝