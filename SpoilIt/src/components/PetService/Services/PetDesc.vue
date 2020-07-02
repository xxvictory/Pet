<template>
  <div>
    <!--<ShopSwipe></ShopSwipe>-->
    <van-image
      width="100%"
      src="https://img.zcool.cn/community/01bb255e6afa47a80120a8951dfe43.jpg@1280w_1l_2o_100sh.jpg"
    />
    <div class="bj_color">
      <PetSerName></PetSerName>
    </div>
  </div>

</template>

<script>
// import ShopSwipe from './ShopSwipe'
import PetSerName from './PetSerName'
export default {
  name: 'PetDesc',
  date () {
    return {
    }
  },
  components: {
    // ShopSwipe.
    PetSerName
  }
}
</script>

<style scoped>
  .bj_color{
    background: #fff;
    width: 100%;
    height: 350px;
    top: 222px;
    border-radius: 30px;
    position: absolute;
  }

</style>
