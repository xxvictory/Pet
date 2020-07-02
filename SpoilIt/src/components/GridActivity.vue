<template>
  <van-grid :border="false" :column-num="2">
    <!--v-for="value in 6"-->
    <!--:key="value">-->
    <van-grid-item  v-for="(item, index) in items" :key="index" @click="onSearch">
      <div class="Activity">
        <div class="img">
          <div class="img_bg"></div>
          <van-image
            width="100%"
            height="100%"
            fit="scale-down"
            radius="8px"
            :src="item.img">
          </van-image>
        </div>
        <p class="name">{{item.name}}</p>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantou-copy-copy"></use>
        </svg>
      </div>
    </van-grid-item>
  </van-grid>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    onSearch () {
      this.$router.push({path: '/CommodityHome'})
    }
  },
  mounted () {
    let self = this
    axios({
      url: 'http://192.168.218.2:3000/api/foster', // api 代理到json文件地址，后面的后缀是文件中的对象或者是数组
      method: 'get'// 请求方式
      // 这里可以添加axios文档中的各种配置
    }).then(function (res) {
      console.log(res, '成功')
      self.items = res.data
    }).catch(function () {
      console.log('请求失败')
    })
  }
}

</script>

<style scoped>
  .img{
    position: relative;
  }
  .img_bg{
    background: #000000;
    position: absolute;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 8px;
  }
  .name{
    position: absolute;
    font-size: 0.9rem;
    top: 6.5rem;
    left: 1rem;
  }
  .icon{
    position: absolute;
    font-size: 0.9rem;
    top: 6.2rem;
    left: 8rem;
  }

</style>
