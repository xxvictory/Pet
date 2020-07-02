<template>
  <div>
  <div class="box"  v-for="(list, key) in lists" :key="key">
    <div class="name">
      <p class="tip">{{list.title}}</p>
      <p class="desc">{{list.desc}}</p>
      <div class="username_icon">
        <van-icon name="contact" />
        <p class="username">{{list.name}}</p>
      </div>
    <!--</div>-->
    </div>
  <div class="img">
      <van-image
        width="90%"
        radius="8px"
        fit="contain"
        :src="list.img"
      />
      <div class="box_i">
      <div class="box_icon">
      <van-icon class="icon_xiaoxi" color="#8479EF" name="chat-o"></van-icon>
      <p>{{list.num}}</p>
      </div>
      <div class="box_icon1">
      <van-icon class="icon_xiaoxi" color="#8479EF" name="eye-o" ></van-icon>
        <p>{{list.num_eys}}</p>
      </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'topic_Featured',
  data () {
    return {
      lists: []
    }
  },
  mounted () {
    let self = this
    axios({
      url: 'http://192.168.218.2:3000/api/tip', // api 代理到json文件地址，后面的后缀是文件中的对象或者是数组
      method: 'get'// 请求方式
      // 这里可以添加axios文档中的各种配置
    }).then(function (res) {
      // console.log(res, '成功')
      self.lists = res.data
    }).catch(function () {
      console.log('请求失败')
    })
  }
}
</script>

<style scoped>
.box {
  display: flex;
  margin-bottom: 0.8rem;
  margin-left: 0.5rem;
}
  .name{
    width: 50%;
    margin-left: 0.3rem;
    margin-top: 0.2rem;
    margin-right: 0.3rem;
  }
.img{
  width: 50%;
  margin: 0 auto;
}
.tip{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
  .desc{
    color: #a0a0a0;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    margin-bottom: 0.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .username{
    font-size: 0.9rem;
    color: #8479EF;
    margin-left: 0.2rem;
  }
  .username_icon{
    display: flex;
    margin-top: 0.3rem;
  }
.box_i{
  display: flex;
}
  .box_icon{
    display: flex;
    margin-right: 0.5rem;
  }
  .box_icon1{
    display: flex;
  }
  .box_i p{
    color: #8479EF;
    margin-left: 0.3rem;
  }
</style>
