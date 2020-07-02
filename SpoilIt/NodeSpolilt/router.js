var express = require('express')
// 创建路由
var router = express.Router()
var sqlQuery = require('./mysql')
var data = require('./foster')
var squareData = require('./square')
var topData = require('./topic')
var mpData = require('./mp')
var meData = require('./mine')

router.all('*', function (req, res, next) {
  // 设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*')
  // 允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type')
  // 跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')
  // if (req.method.toLowerCase() === 'options') {
  //   // res.send(200)
  // }
  // // 让options尝试请求快速结束
  // else {
  next()
  // }
})
// 2.静态文件托管--
router.use('/', express.static('public'))
router.use('/static', express.static('common'))

router.get('/', function (req, res) {
  res.send(data)
})

// 寄养中心
router.get('/foster', function (req, res) {
  res.send(data.filter(function (item) {
    return item && item.id <= 2
  }))
})

// 领养机构
router.get('/adopt', function (req, res) {
  res.send(data.filter(function (item) {
    return item && item.id > 2
  }))
})

// 广场动态
router.get('/recommend', function (req, res) {
  res.send(squareData.filter(function (item) {
    return item && item.id <= 4
  }))
})

router.get('/top', function (req, res) {
  res.send(squareData.filter(function (item) {
    return item && item.id >= 5
  }))
})

router.get('/tip', function (req, res) {
  res.send(topData.filter(function (item) {
    return item && item.id <= 6
  }))
})

router.get('/game', function (req, res) {
  res.send(topData.filter(function (item) {
    return item && item.id >= 7
  }))
})
//
// router.get('/mp', function (req, res) {
//   res.send(mpData.filter(function (item) {
//     return item && item.id <= 4
//   }))
// })

router.get('/mp', function (req, res) {
  res.send(mpData.data)
})

router.get('/mine', function (req, res) {
  res.send(meData)
})

// // 广场动态图片
// router.get('/userimg', function (req, res) {
//   res.send(imgData.filter(function (item) {
//     return item && item.id <= 4
//   }))
// })
// 1.查询所有的数据信息
router.get('/list', function (req, res) {
  var sql = 'select * from userinfo'
  sqlQuery(sql, [], function (result) {
    res.send(result)
  })
})
// 2.登录接口----
router.post('/login', function (req, res) {
  var uname = req.body.uname
  var upwd = req.body.upwd
  // var sql=`select * from userinfo where username='${uname}' and password='${upwd}'`;
  var sql = `select * from userinfo where username=? and password=?`
  var arr = [uname, upwd]
  sqlQuery(sql, arr, function (result) {
    if (result.length > 0) {
      res.send('登录成功')
    } else {
      res.send('账号或者密码错误')
    }
  })
})

// 3.注册---post
// 思路：1.获取账号和密码 2.sql语句 先查询 账号是否存在 3.如果账号存在长度>0 提示已存在  4.不存在这个账号--插入语句
router.post('/zhuce', function (req, res) {
  var uname = req.body.uname
  var mima = req.body.mima
  // 插入数据的时候--1.查询账号是否存在  2.不存在再插入
  // var sql=`select * from userinfo where username='${uname}'`;
  var sql = `select * from userinfo where username=?`
  var arr = [uname]
  sqlQuery(sql, arr, function (result) {
    if (result.length > 0) {
      res.send('账号已存在 重新输入')
    } else {
      // 账号不存在---插入语句
      // var insertSql=`insert into userinfo(username,password) values('${uname}','${mima}')`;
      var insertSql = `insert into userinfo(username,password) values(?,?)`
      var insertArr = [uname, mima]
      sqlQuery(insertSql, insertArr, function (data) {
        if (data.affectedRows > 0) {
          res.send('插入数据成功')
        } else {
          res.send('插入数据失败')
        }
      })
    }
  })
})

// 暴露
module.exports = router
