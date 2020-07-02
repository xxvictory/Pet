<template>
<div class="hot">
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="van-clearfix">
      <van-cell v-for="item in listHot" :key="item.id">
        <div class="hot_box">
          <p>{{item.id}}</p>
          <van-image
            width="30%"
            fit="scale-down"
            :src="item.url"
          />
          <div class="desc_all">
            <div class="disc_hot">
                <p>{{item.text}}</p>
              <div class="hot_tags">
                <van-tag round  color="#8479EF">爆</van-tag>
              </div>
            </div>
              <p class="num_hot"><span class="up">↑</span>3473958</p>
          </div>
        </div>
      </van-cell>
    </div>
  </van-list>

</div>
</template>

<script>
export default {
  name: 'AllHot',
  data () {
    return {
      listHot: [
        {
          id: '1',
          url: '//img14.360buyimg.com/n3/jfs/t1/61883/37/1591/251552/5cff5299E0b02df1a/11041cfe818ca143.jpg!q80.webp',
          text: '疯狂的小狗 狗狗零食',
          num: '3473958'
        }, {
          id: '2',
          url: '//img12.360buyimg.com/n3/jfs/t17782/211/1158904478/372653/75ada41a/5abe01c4N07aaca4d.jpg!q80.webp',
          text: '超浓缩狗狗卵磷脂',
          num: '3247010'
        }, {
          id: '3',
          url: '//img10.360buyimg.com/n3/jfs/t7363/341/3283180147/252818/cca6476a/59e358c4N86e1fae8.jpg!q80.webp',
          text: '狗链胸背带项圈',
          num: '2326982'
        }, {
          id: '4',
          url: '//img10.360buyimg.com/n3/jfs/t1/62635/1/8484/345535/5d65ef93E1cb42612/46dcd437c7f4d536.jpg!q80.webp',
          text: '大型犬健骨补钙',
          num: '2302982'
        }, {
          id: '5',
          url: '//img12.360buyimg.com/n3/jfs/t1/32133/4/12163/263926/5cb6e34bE1602b7ab/7511c0ed0b656151.jpg!q80.webp',
          text: '香味豆腐猫砂',
          num: '1302982'
        }
      ],
      loading: false,
      finished: false
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.hot{
  width: 90%;
  height: 100px;
  margin: 0 auto;
}
  .hot_box{
    display: flex;
    width: 90%;
  }
  .desc_all{
    width: 100%;
  }
  .disc_hot{
    width: 100%;
    margin-top: 1rem;
    margin-left: 1rem;
  }
  .disc_hot>p{
    float: left;
    font-size: 1rem;
  }
  .hot_tags{
    float: right;
  }
  .num_hot{
    color: #8c8c8c;
    margin-top: 3rem;
    margin-left: 1rem;
  }
  .up{
    color: #8479EF;
    margin-right: 0.5rem;
  }
  .hot_box>p{
    font-size: 1rem;
    margin: auto 0;
    padding-right: 1rem;
    color: #8479EF;
    font-family: "Open Sans";
  }
</style>
