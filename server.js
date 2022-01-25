const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extends : true}));

app.set('view engine', 'ejs');

//ejs를 제외한 폴더를 추가 하고 싶을 시에는 밑에 있는 코드를 써야함
app.use('/css',express.static('css')); //미들웨어
app.use('/fontawesome-free-5.15.4-web',express.static('fontawesome-free-5.15.4-web')); //미들웨어
app.use('/images',express.static('images'));

app.listen(8080, function() {
    console.log('listening on 8080')
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