<template>
  <div>
    <van-steps :active="active" active-icon="success" active-color="#8479EF">
      <van-step><span @click="Submit(1)">寄养下单</span></van-step>
      <van-step><span @click="Submit(2)">寄养接单</span></van-step>
      <van-step><span @click="Submit(3)">宠物寄养中</span></van-step>
      <van-step><span @click="Submit(4)">寄养完成</span></van-step>
      <van-step><span @click="Submit(5)">付款/评价</span></van-step>
    </van-steps>
    <van-steps direction="vertical" :active="2" active-color="#8479EF">
      <div class="page">
        <van-step id="page1">
          <h3>寄养下单</h3>
          <p>2016-07-12 12:40</p>
        </van-step>
        <van-step id="page2">
          <h3>商家接单/上门取宠物</h3>
          <p>2016-07-11 10:00</p>
        </van-step>
        <van-step id="page3">
          <h3>宠物寄养中</h3>
          <p>2016-07-10 09:30</p>
          <div  v-for="(list, index) in lists" :key="index">
            <div class="pet_top">
              <van-image
                round
                width="2.5rem"
                height="2.5rem"
                fit="cover"
                :src="list.img"
              />
              <span class="pet_name">{{list.name}}</span>
            </div>
            <span class="desc">{{list.desc}}</span>
            <div class="pet_photo">
              <van-image
                width="5rem"
                height="5rem"
                fit="cover"
                :src="list.img1"
              ></van-image>
              <van-image
                width="5rem"
                height="5rem"
                fit="cover"
                :src="list.img2"
              ></van-image>
              <van-image
                width="5rem"
                height="5rem"
                fit="cover"
                :src="list.img3"
              ></van-image>
            </div>
            <p>...</p>
          </div>
        </van-step>
        <van-step id="page4">
          <h3>寄养完成</h3>
          <p>2016-07-10 09:30</p>
        </van-step>
        <van-step id="page5">
          <h3>付款/评价</h3>
          <p>2016-07-10 09:30</p>
        </van-step>
        <van-step>
          <h3>评价</h3>
          <p>2016-07-10 09:30</p>
        </van-step>
      </div>
    </van-steps>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UserInfo',
  data () {
    return {
      active: 2,
      lists: []
    }
  },
  mounted () {
    let self = this
    axios({
      url: 'http://192.168.218.2:3000/api/mine', // api 代理到json文件地址，后面的后缀是文件中的对象或者是数组
      method: 'get'// 请求方式
      // 这里可以添加axios文档中的各种配置
    }).then(function (res) {
      console.log(res, '成功')
      self.lists = res.data
    }).catch(function () {
      console.log('请求失败')
    })
  },
  methods: {
    Submit (key) {
      // 获取点击的按钮对应页面的id
      var PageId = document.querySelector('#page' + key)
      // 打印出对应页面与窗口的距离
      console.log(PageId.offsetTop)
      // 使用平滑属性，滑动到上方获取的距离
      // 下方我只设置了top，当然 你也可以加上 left 让他横向滑动
      // widow 根据浏览器滚动条，如果你是要在某个盒子里面产生滑动，记得修改
      window.scrollTo({
        'top': PageId.offsetTop,
        'behavior': 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.pet_top{
  display: flex;
  margin-bottom: 0.6rem;
}
  .pet_name{
    color: #000;
    line-height: 2.5rem;
    margin-left: 1rem;
  }
  .desc{
    margin-left: 1rem;
    color: #000;
  }
  .pet_photo{
    margin-top: 0.6rem;
  }
</style>
