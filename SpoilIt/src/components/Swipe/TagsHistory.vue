<template>
  <div class="history">
    <van-row type="flex" justify="space-around">
      <van-col span="6"><van-tag round  color="#8479EF"><p>宠物零食 狗狗</p></van-tag></van-col>
      <van-col span="2"><van-tag round  color="#8479EF" plain>宠物</van-tag></van-col>
      <van-col span="4"><van-tag round  color="#8479EF"><p>宠物用品</p></van-tag></van-col>
      <van-col span="4"><van-tag round  color="#8479EF" plain><p>猫爬架</p></van-tag></van-col>
      <van-col span="2"><van-tag round  color="#8479EF">零食</van-tag></van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'Tags'
}
</script>

<style scoped>
  .history{
    width: 90%;
    text-align: center;
    margin: 0 auto;
    padding: 1rem;
  }
  p{
    font-size: 0.8rem;
  }

</style>
