<template>
  <van-grid :column-num="2" :gutter="10">
    <van-grid-item >
      <div class="img">
        <van-image
          width="100%"
          height="100%"
          fit="scale-down"
          radius="8px"
          src="https://hellorfimg.zcool.cn/preview260/1043814685.jpg">
        </van-image>
        <!--<img src="https://ww4.sinaimg.cn/orj360/a629e291gy1gc45r24i0mj20jg0j0acu.jpg" alt="">-->
      </div>
      <p class="name">记录您与宠物的日常</p>
      <p class="desc">分享您和它有趣的故事</p>
    </van-grid-item >
    <van-grid-item >
      <div class="img">
        <van-image
          width="100%"
          height="100%"
          radius="8px"
          src="https://hellorfimg.zcool.cn/preview260/695184616.jpg">
        </van-image>
        <!--<img src="https://ww4.sinaimg.cn/orj360/a629e291gy1gc45r24i0mj20jg0j0acu.jpg" alt="">-->
      </div>
      <p class="name">为您的宠物拍照</p>
      <p class="desc">分享萌宠美拍活动</p>
    </van-grid-item >
  </van-grid>
</template>

<script>
export default {
  name: 'GridAttention'
}
</script>
<style scoped>
  .name{
    font-size: 0.8rem;
  }
  .desc{
    font-size: 0.6rem;
    color: #8C8C8C;
  }

</style>
