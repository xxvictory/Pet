<template>
  <!--<van-search v-model="value"-->
              <!--placeholder="请输入搜索关键词"-->
              <!--shape="round"-->
              <!--show-action-->
              <!--autofocus="true"-->
              <!--:action-text="add"-->
  <!--&gt;-->
    <!--<div slot="action">-->
      <!--<van-icon :name="icon"></van-icon>-->
    <!--</div>-->
  <!--</van-search>-->
  <form action="/">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
      @focus="onfocus"
    >
      <div slot="action">
        <van-icon :name="icon"></van-icon>
      </div>
    </van-search>
  </form>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  props: ['icon', 'add'],
  methods: {
    onSearch (val) {
      // Toast(val)
      this.$router.push({path: '/CommodityHome'})
    },
    onCancel () {
      // Toast('取消')
    },
    onfocus () {
      this.$router.push({path: '/SwipeHome'})
    }
  }
}
</script>

<style scoped>

</style>
