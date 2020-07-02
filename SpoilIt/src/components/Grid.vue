<template>
  <van-grid :column-num="GridNum">
    <!--v-for="value in 6"-->
    <!--:key="value">-->
    <van-grid-item v-for="index in ListIcon" :key="index.id">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="index.icon"></use>
      </svg>
      <span>{{index.text}}</span>
    </van-grid-item>
    <!--<van-grid-item>-->
      <!--<svg class="icon" aria-hidden="true">-->
        <!--<use xlink:href="#icon-chongwuyiliao-copy"></use>-->
      <!--</svg>-->
      <!--<span>医疗美容</span>-->
    <!--</van-grid-item>-->
    <!--<van-grid-item >-->
      <!--<svg class="icon" aria-hidden="true">-->
        <!--<use xlink:href="#icon-chongwuleyuan-copy"></use>-->
      <!--</svg>-->
      <!--<span>宠物百科</span>-->
    <!--</van-grid-item>-->
    <!--<van-grid-item>-->
    <!--<svg class="icon" aria-hidden="true">-->
      <!--<use xlink:href="#icon-chongwulianmeng-copy"></use>-->
    <!--</svg>-->
    <!--<span>同城服务</span>-->
  <!--</van-grid-item>-->
  </van-grid>

</template>

<script>
export default {
  name: 'Grid',
  props: ['GridNum', 'ListIcon']
}
</script>

<style scoped>

  span{
    color: #646566;
    font-size: 12px;
    word-wrap: break-word;
    margin: 8px 0 0;
  }
</style>
