<template>
  <div>
    <BJ></BJ>
      <div class="img_carnival">
        <van-image
          width="100%"
          fit="scale-down"
          src="https://img.zcool.cn/community/016fa85dc112c9a801209e1f2f8f86.png@3000w_1l_2o_100sh.jpg"
        />
      </div>
    <Cell :titleName="titles.title_tool"></Cell>
    <Grid :GridNum="5" v-bind:ListIcon="ListTool"></Grid>
    <Cell :titleName="titles.title_attention"></Cell>
    <UserInfo></UserInfo>
  </div>
</template>
<script>
import BJ from '../components/Mine/BJ'
import Cell from '../components/Cell'
import Grid from '../components/Grid'
import UserInfo from '../components/Mine/UserInfo'
export default {
  components: {
    BJ,
    Cell,
    Grid,
    UserInfo
  },
  data () {
    return {
      titles: {
        title_tool: '我的工具',
        title_attention: '寄养动态'
      },
      ListTool: [
        {
          id: '0001',
          icon: '#icon-dingdan-copy',
          text: '我的订单'
        },
        {
          id: '0002',
          icon: '#icon-daifukuan-copy',
          text: '账户'
        },
        {
          id: '0003',
          icon: '#icon-shoucang-copy',
          text: '收藏'
        },
        {
          id: '0004',
          icon: '#icon-pingjia-copy',
          text: '消息'
        },
        {
          id: '0006',
          icon: '#icon-xiangce-copy',
          text: '相册'
        }
      ]
    }
  }
}
</script>
<style scoped>
  .img_carnival{
    width: 90%;
    margin: 0 auto;
  }
  </style>
