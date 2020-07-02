<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <!--<van-cell v-for="item in list" :key="item" :title="item" >-->
    <!--</van-cell>-->
    <van-cell v-for="index in recommendList" :key="index.id" @click="handleDesc">
      <div class="Card_box">
      <van-image
        width="90%"
        radius="30px"
        fit="scale-down"
        :src="index.url"
      ></van-image>
        <div class="Card_box_desc">
          <p class="desc_name">{{index.text}}</p>
          <slot name="star"></slot>
          <p class="desc_types">{{index.type}}</p>
          <div class="desc_money">
            <p>{{index.money}}</p>
            <p class="num">{{index.num }}</p>
          </div>
          <div class="desc_ser">
            <div class="tags">
              <van-tag color="#8479EF">{{index.ser1}}</van-tag>
              <van-tag color="#8479EF" plain>{{index.ser2}}</van-tag>
              <van-tag color="#8479EF">{{index.ser3}}</van-tag>
            </div>
            <!--<van-tag color="#8479EF" plain>{{index.ser4}}</van-tag>-->
          <p class="desc_addDistance">{{index.add}}</p>
          </div>
        </div>
      </div>
    </van-cell>
  </van-list>
</template>

<script>
export default {
  props: ['recommendList'],
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    },
    handleDesc () {
      // Toast(val)
      this.$router.push({path: '/PetDesc'})
    }
  }
}
</script>

<style scoped>
  .Card_box{
    display: flex;
  }
  .Card_box_desc{
    margin-left: 1rem;
    width: 100%;
  }
  .desc_name{
    margin-top: 0.3rem;
    margin-left: 0.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .desc_types{
    font-size: 0.7rem;
    color: #8c8c8c;
    margin-left: 0.2rem;
    margin-top: 0.2rem;
  }
  .desc_ser{
    margin-left: 0.2rem;
  }
  .desc_addDistance{
    font-size: 0.7rem;
    text-align: right;
    margin-top: 0.3rem;
  }
  .desc_money{
    display: flex;
    line-height: 28px;
  }
  .desc_money>p{
    margin-left: 0.2rem;
    margin-top: 0.2rem;
  }
  .desc_money .num{
    color: #8c8c8c;
    font-size: 0.6rem
  }
  .tags{
    margin-top: 0.2rem;
  }
</style>
