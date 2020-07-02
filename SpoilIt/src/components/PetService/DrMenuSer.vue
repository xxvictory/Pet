<template>
  <van-nav-bar title="广场动态" @click-left="onClickLeft">
    <template #left>
      <p style="color: #8479EF;">天津</p>
      <van-icon name="location-o" size="18" />
    </template>
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  methods: {
    onClickLeft () {
      this.$router.push({path: '/city'})
    }
  }

}
</script>

<style scoped>

</style>
