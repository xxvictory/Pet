<template>
  <div class="top">
  <p>-----<span>热门话题</span>-----</p>
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="swiper_width" v-for="(item, index) in items" :key="index">
        <div class="box">
          <van-image
            width="100%"
            height="50%"
            radius="8px"
            :src="item.img">
          </van-image>
          <p class="name">{{item.name}}</p>
        </div>
      </swiper-slide>
    </swiper>
    <div class="tag_activity">
      <div class="tag">
      <van-tag round  color="#8479EF"># 今天一起散步 #</van-tag>
      <van-tag round  color="#8479EF" plain># 家有萌宠 #</van-tag>
      <van-tag round  color="#8479EF"># 喵喵陪我 #</van-tag>
      <van-tag round  color="#8479EF" plain># 家里个心机宠 #</van-tag>
      </div>
    </div>
    <Cell :titleName="titles.title_activity"></Cell>
    <topicFeatured></topicFeatured>
  </div>

</template>

<script>
import axios from 'axios'
import Cell from '../../../../components/Cell'
import topicFeatured from './topic_Featured'
export default {
  name: 'topic',
  components: {
    Cell,
    topicFeatured
  },
  data () {
    return {
      items: [],
      swiperOptions: {
        slidesPerView: 3
      },
      titles: {
        title_activity: '精选'
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    let self = this
    axios({
      url: 'http://192.168.218.2:3000/api/top', // api 代理到json文件地址，后面的后缀是文件中的对象或者是数组
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
  .top{
    width: 100%;
    margin-top: 1rem;
  }
.top p{
  color: #a0a0a0;
  text-align: center;
}
  .swiper{
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .swiper_width{
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
  .tag_activity{
    width: 100%;
  }
  .tag{
    text-align: center;
  }
</style>
