<template>
  <van-nav-bar left-text="返回" left-arrow
               @click-left="onClickLeft">
    <van-icon name="star-o" slot="right" />
  </van-nav-bar>
</template>

<script>
export default {
  name: 'ShopSwipe',
  methods: {
    onClickLeft () {
      // this.$router.push({path: '/shopping'})
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
