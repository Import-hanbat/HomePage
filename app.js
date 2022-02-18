var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 메인 홈페이지
var indexRouter = require('./routes/index');
// 임원진
var executiveRouter = require('./routes/executive');
// 동아리 소개
var introduceRouter = require('./routes/introduce');
// 동아리 규칙
var ruleRouter = require('./routes/rule');
// 회의록
var meetingRouter = require('./routes/meeting');
// 프로젝트
var projectRouter = require('./routes/project');
// 웹
var webRouter = require('./routes/web');
// 모바일
var mobileRouter = require('./routes/mobile');
// 데이터 분석
var dataAnalysisRouter = require('./routes/dataAnalysis');
// AI
var aiRouter = require('./routes/ai');
// 질문 게시판
var questionRouter = require('./routes/question');
// 지원서 작성
var applyRouter = require('./routes/apply');
// 게시글
var postRouter = require('./routes/post');
// 게시글 작성
var writeRouter = require('./routes/write');
// db 업로드
var addRouter = require('./routes/add');
// 게시글 삭제
var deleteRouter = require('./routes/delete');
// 게시글 수정
var editRouter = require('./routes/edit');
// 파일 업로드
var fileRouter = require('./routes/file');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser({limit: '50mb'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/executive', executiveRouter);
app.use('/introduce', introduceRouter);
app.use('/rule', ruleRouter);
app.use('/meeting', meetingRouter);
app.use('/project', projectRouter);
app.use('/web', webRouter);
app.use('/mobile', mobileRouter);
app.use('/dataAnalysis', dataAnalysisRouter);
app.use('/ai', aiRouter);
app.use('/question', questionRouter);
app.use('/apply', applyRouter);
app.use('/post', postRouter);
app.use('/write', writeRouter);
app.use('/add', addRouter);
app.use('/delete', deleteRouter);
app.use('/edit', editRouter);
app.use('/file', fileRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
