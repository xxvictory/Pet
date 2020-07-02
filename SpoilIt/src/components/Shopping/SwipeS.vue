<template>
  <van-swipe :autoplay="3000" class="Swipe_img" >
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data () {
    return {
      images: [
        'https://img.zcool.cn/community/01dd785e51800da80120a8953df2c7.jpg@1280w_1l_2o_100sh.jpg',
        'https://img.zcool.cn/community/01d5da5c92e8a2a801214168127dc8.jpg@1280w_1l_2o_100sh.jpg'
      ]
    }
  }
}
</script>

<style scoped>
.Swipe_img{
  width: 95%;
  margin: 0 auto;
}
  img{
    width: 100%;
    border-radius: 8px;
  }
</style>
