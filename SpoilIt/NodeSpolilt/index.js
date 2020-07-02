var express = require('express')
var app = express()

// 使用路由
var router = require('./router')
// use() 参数1：根目录  参数2：路由
// app.use('/',router);
// post请求---配置中间件
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/api', router)

// 监听
app.listen(3000, '192.168.218.2', function (err) {
  if (err) {
    console.error(err)
  } else {
    console.info('服务器起动成功..3000')
  }
})
