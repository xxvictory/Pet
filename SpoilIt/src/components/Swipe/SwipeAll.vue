<template>
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    shape="round"
    @search="onSearch"
  >
    <div slot="action" @click="onSearch">搜索</div>
  </van-search>
</template>

<script>
export default {
  name: 'SwipeAll',
  methods: {
    onSearch () {
      this.$router.push({path: '/CommodityHome'})
    }
  }
}
</script>

<style scoped>

</style>
