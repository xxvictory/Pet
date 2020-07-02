<template>
  <div>
    <div  v-for="(item, index) in items" :key="index">
    <div class="box">
    <van-image
      radius="8px"
      width="100%"
      fit="contain"
      :src="item.img"
    />
      <p>{{item.name}}<span> | </span ><span class="box_desc">{{item.desc}}</span></p>
      <div class="box_descs">
        <div class="box_time">
          <p>报名截止时间:</p>
          <p class="time">{{item.time}}</p>
        </div>
         <p>{{item.address}}</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'activity',
  data () {
    return {
      items: []
    }
  },
  mounted () {
    let self = this
    axios({
      url: 'http://192.168.218.2:3000/api/game', // api 代理到json文件地址，后面的后缀是文件中的对象或者是数组
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
.box{
  width: 90%;
  margin: 1rem auto;
}
  .box_time{
    display: flex;
  }
  .time{
    margin-left: 0.6rem;
  }
  .box_desc{
    font-size: 0.9rem;
  }
  .box_descs p{
    color: #a0a0a0;
    font-size: 0.7rem;
    margin-top: 0.3rem;
  }
</style>
