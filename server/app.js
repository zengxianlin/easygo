// 引入模块
var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var superagent = require('superagent'); //http://visionmedia.github.io/superagent/#response-properties

// 设置node服务
app.set('port', 3333);
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
http.createServer(app).listen(app.get('port'), function() {
  console.log("服务已经启动，APIhost：http://127.0.0.1:3333/");
});


/******************支持跨域请求***********************/
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.set({
      'Content-Type':'Content-Type:application/json; charset=UTF-8',
  })
  if (req.method == 'OPTIONS') {
    res.send(200);
//     /让options请求快速返回/
  } else {
    next();
  }
});

/******************以下是api部分***********************/
var dbUrl = 'http://test.open.easygovm.com'

// 初始化机器
app.post('/api/machine/init', function(req, res) {
  var sreq = superagent.post(dbUrl + '/api/v2/machine/init');
  sreq.type('form')
  sreq.send(req.body);
  sreq.pipe(res);
  sreq.on('end', function() {
    console.log('初始化机器');
  });
});

//微信请求支付
app.post('/api/show/wxqrcode', function(req, res) {
  var sreq = superagent.post(dbUrl + '/api/v1/show/wxqrcode');
  sreq.type('json')
  sreq.send(req.body);
  sreq.pipe(res);
  sreq.on('end', function() {
    console.log('微信支付订单');
  });
});

//支付宝请求支付
app.post('/api/show/aliqrcode', function(req, res) {
  var sreq = superagent.post(dbUrl + '/api/v1/show/aliqrcode');
  sreq.type('json')
  sreq.send(req.body);
  sreq.pipe(res);
  sreq.on('end', function() {
    console.log('支付宝支付订单');
  });
});
