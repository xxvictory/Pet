<template>
  <van-swipe :autoplay="3000" class="Swipe_img">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data () {
    return {
      images: [
        'https://hellorfimg.zcool.cn/preview260/791568358.jpg',
        'https://hellorfimg.zcool.cn/preview260/1034939470.jpg'
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
