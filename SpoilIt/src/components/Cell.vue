<template>
  <van-cell-group>
    <van-cell :title="titleName" value="查看全部>"  size="large"></van-cell>
  </van-cell-group>
</template>

<script>
export default {
  name: 'Cell',
  props: ['titleName']
}
</script>

<style scoped>

</style>
