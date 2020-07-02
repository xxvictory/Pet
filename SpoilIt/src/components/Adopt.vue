<template>
  <div>
  <AdNavBar></AdNavBar>
    <div class="img">
      <div class="img_bg">
        <!--<van-image-->
          <!--width="100%"-->
          <!--fit="scale-down"-->
          <!--radius="20px"-->
          <!--src=""-->
        <!--/>-->
        <img src="../assets/img_head/BE513EC63F000A970A77171B4AF06BCC.png" alt="">
      </div>
      <div class="img_head">
          <van-image
            round
            width="5rem"
            height="5rem"
            src="https://hellorfimg.zcool.cn/preview260/1178745415.jpg"
          />
      </div>
    </div>
    <div class="bg_color">
      <van-cell-group>
        <van-cell>
          <div class="ad_name">
            <p>爱助宠物之家</p>
          </div>
        </van-cell>
        <div class="star">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-iconzhengli--copy">
              </use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-iconzhengli--copy">
              </use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-iconzhengli--copy">
              </use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-iconzhengli--copy">
              </use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-iconzhengli--copy">
              </use>
            </svg>
            <p>5.0</p>
        </div>
        <van-cell title="机构介绍" label="描述信息" />
        <van-cell title="所在地址" label="描述信息" />
        <van-cell title="待领养爱宠" value="更多">
        </van-cell>
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
                <div class="tag_adopt">
                  <van-tag  round color="#8479EF">领养</van-tag>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        <van-cell title="评价" label="描述信息" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import AdNavBar from '../components/Adopt_item/ad_NavBar'
export default {
  name: 'Adopt',
  components: {
    AdNavBar
  },
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
  }
  // mounted () {
  //   let self = this
  //   axios({
  //     url: 'http://localhost:3000/api/adopt', // api 代理到json文件地址，后面的后缀是文件中的对象或者是数组
  //     method: 'get'// 请求方式
  //     // 这里可以添加axios文档中的各种配置
  //   }).then(function (res) {
  //     // console.log(res, '成功')
  //     self.items = res.data
  //   }).catch(function () {
  //     console.log('请求失败')
  //   })
  // }
}
</script>

<style scoped>
  .img{
    position: relative;
    margin-bottom: 4rem;
  }
.img_bg img{
  width: 100%;
  border-radius: 8px;
}
  .img_head{
    top: 6.5rem;
    left: 9.5rem;
    position: absolute;
    z-index: 1;
  }
  .bg_color{
    width: 100%;
    height: 300px;
    background: #f6f6f6;
    margin: 0 auto;
    border-radius: 8px;
  }
  .swiper{
    width: 100%;
    height: 100%;
    margin-left: 2%;
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
  .tag_adopt{
    position: absolute;
    top: -0.8rem;
    left: 1.8rem;
  }
  .star{
    margin-left: 10px;
  }
  .star p{
    margin-right: 20px;
    margin-top: 10px;
    float: right;
    font-size: 0.8rem;
    color: #999;
  }
  .star .icon{
    font-size: 0.7rem;
  }
  .ad_name{
    font-size: 18px;
    font-weight: normal;
  }
</style>
