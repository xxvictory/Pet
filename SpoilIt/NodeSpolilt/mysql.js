// 连接数据库
var mysql = require('mysql')

var client = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'web1912',
  port: '3306'
})

// sql 可变的 数据
// 发送sql 执行sql语句

/**
 *
 * @param {*} sql  string sql语句
 * @param {*} arr  array   数组 参数
 * @param {*} callback  函数
 *
 */
// 封装的方法 发送sql到数据库
function sqlQuery (sql, arr, callback) {
  client.query(sql, arr, function (error, result) {
    if (error) return
    callback(result)
  })
}

module.exports = sqlQuery// {sqlQuery:sqlQuery}
