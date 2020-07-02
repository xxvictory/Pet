<template>
  <div>
    <SwipeAll></SwipeAll>
    <Cell :titleName="titles.title_history"></Cell>
    <TagsHistory></TagsHistory>
    <Cell :titleName="titles.title_find"></Cell>
    <TagsHistory></TagsHistory>
    <Cell :titleName="titles.title_hot"></Cell>
    <AllHot></AllHot>
  </div>
</template>

<script>
import SwipeAll from './SwipeAll'
import Cell from '../Cell'
import TagsHistory from './TagsHistory'
import AllHot from './AllHot'
export default {
  name: 'SwipeHome',
  components: {
    SwipeAll,
    Cell,
    TagsHistory,
    AllHot
  },
  data () {
    return {
      titles: {
        title_history: '历史记录',
        title_find: '搜索发现',
        title_hot: '全网热榜'
      }
    }
  }
}
</script>

<style scoped>

</style>
