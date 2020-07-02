<template>
  <van-grid :column-num="2">
    <van-grid-item>
      <div class="box_Pet">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiaogouchushou-copy"></use>
        </svg>
        <div class="name_abc">
          <p class="Grid_name">爱心公益</p>
          <p class="Grid_desc">宠物公益活动</p>
        </div>
      </div>
    </van-grid-item>
    <van-grid-item>
      <div class="box_Pet">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-chongwuyiliao-copy"></use>
        </svg>
        <div class="name_abc">
          <p class="Grid_name">医疗美容</p>
          <p class="Grid_desc">治病、美容</p>
        </div>
      </div>
    </van-grid-item>
    <van-grid-item>
      <div class="box_Pet">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-chongwujiyang-copy"></use>
        </svg>
        <div class="name_abc">
          <p class="Grid_name">寄养</p>
          <p class="Grid_desc">假日寄养、领养</p>
        </div>
      </div>
    </van-grid-item>
    <van-grid-item>
      <div class="box_Pet">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-chongwuleyuan-copy"></use>
        </svg>
        <div class="name_abc">
          <p class="Grid_name">乐园</p>
          <p class="Grid_desc">聚会、训练</p>
        </div>
      </div>
    </van-grid-item>
  </van-grid>
</template>

<script>
export default {
  name: 'GridSer'
}
</script>

<style scoped>
  .box_Pet{
    display: flex;
  }
  .name_abc{
    margin-left: 0.3rem;
  }
  .Grid_name{
    font-size: 0.8rem;
    line-height: 32px;
  }
  .Grid_desc{
    font-size: 0.7rem;
    color: #8c8c8c;
  }
  .icon{
    width: 3.5em;
    height: 3.5em;
  }

</style>
