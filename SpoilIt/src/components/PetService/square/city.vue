<template>
<div>
  城市
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'city',
  mounted () {
    let self = this
    axios({
      url: 'http://iwenwiki.com:3002/api/hot/city', // api 代理到json文件地址，后面的后缀是文件中的对象或者是数组
      method: 'get'// 请求方式
      // 这里可以添加axios文档中的各种配置
    }).then(function (res) {
      console.log(res, '成功')
      self.items = res.data
    }).catch(function () {
      console.log('请求失败')
    })
  }
}
</script>

<style scoped>

</style>
