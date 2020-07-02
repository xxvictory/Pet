<template>
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="swiper_width" v-for="(item, index) in items" :key="index">
          <div class="box">
            <van-image
              round
              width="50%"
              height="50%"
              style="margin: 5px"
              :src="item.img">
            </van-image>
            <p class="name">{{item.name}}</p>
            <p class="desc">{{item.desc}}</p>
          </div>
          <div class="box_plus" @click="onSearch">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jiantou-copy-copy"></use>
            </svg>
          </div>
      </swiper-slide>
    </swiper>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      items: [],
      swiperOptions: {
        slidesPerView: 4
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    onSearch () {
      this.$router.push({path: '/Adopt'})
    }
  },
  mounted () {
    let self = this
    axios({
      url: 'http://192.168.218.2:3000/api/adopt', // api 代理到json文件地址，后面的后缀是文件中的对象或者是数组
      method: 'get'// 请求方式
      // 这里可以添加axios文档中的各种配置
    }).then(function (res) {
      // console.log(res, '成功')
      self.items = res.data
    }).catch(function () {
      console.log('请求失败')
    })
  }
}
</script>

<style scoped>
  .swiper{
    width: 100%;
    height: 100%;
    margin-left: 2%;
  }
.swiper_width{
  /*margin: 10px 20px;*/
  /*border: 1px solid #F6F6F6;*/
  margin-left: 5%;
}
.box{
  width: 100%;
  height: 100%;
  background-color: #F6F6F6;
  text-align: center;
}
.name{
  font-size: 0.8rem;
}
.desc{
  font-size: 0.6rem;
  color: #8C8C8C;
  height: 2rem;
}
.box_plus{
  width: 100%;
  height: 30px;
  text-align: center;
  position: relative;
}
  .icon{
    position: absolute;
    top: -1rem;
    left: 1.8rem;
  }
</style>
