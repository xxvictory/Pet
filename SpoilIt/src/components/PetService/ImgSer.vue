<template>
  <div>
  <SqActivity></SqActivity>
    <Cell :titleName="titles.title_activity"></Cell>
  <van-tabs type="card" v-model="active" animated color="#8479EF" @click="handlePet">
    <van-tab class="square" title="话题">
      <topic></topic>
    </van-tab>
    <van-tab class="square" title="活动">
      <activity></activity>
    </van-tab>
    <van-tab class="attention" title="宠物秀" >
    </van-tab>
    <van-tab class="square" title="关注">
      <!--<Waterfalls v-bind:listImg="listImg" v-bind:listTitle="listTitle" v-bind:listName="listName" :icon_name="icon_name.icon_xin">-->
      <!--<img slot="c" src="../../assets/img_head/0.jpg" alt="">-->
      <!--</Waterfalls>-->
      <SerSearch></SerSearch>
    </van-tab>
  </van-tabs>
  </div>
</template>

<script>
import SerSearch from '../../components/PetService/SerSearch'
import Waterfalls from '../../components/Waterfalls'
import SqActivity from '../../components/PetService/square/Sq_Activity'
import Cell from '../../components/Cell'
import activity from './square/Sq_item/activity'
import topic from './square/Sq_item/topic'
export default {
  components: {
    Waterfalls,
    SerSearch,
    SqActivity,
    Cell,
    activity,
    topic
  },
  data () {
    return {
      active: 5,
      titles: {
        title_name: '领养机构',
        title_activity: '热门活动',
        title_story: '热门推荐'
      },
      listImg:
        [
          'https://hellorfimg.zcool.cn/preview260/731766994.jpg',
          'https://hellorfimg.zcool.cn/preview260/113951887.jpg',
          'https://hellorfimg.zcool.cn/preview260/646123120.jpg',
          'https://hellorfimg.zcool.cn/preview260/1024473769.jpg',
          'https://hellorfimg.zcool.cn/provider_image/preview260/2234704896.jpg',
          'https://hellorfimg.zcool.cn/preview260/1534296887.jpg',
          'https://hellorfimg.zcool.cn/preview260/407893192.jpg',
          'https://hellorfimg.zcool.cn/preview260/1077568103.jpg',
          'https://hellorfimg.zcool.cn/preview260/520870675.jpg',
          'https://hellorfimg.zcool.cn/provider_image/preview260/2237373145.jpg',
          'https://hellorfimg.zcool.cn/preview260/695776048.jpg',
          'https://hellorfimg.zcool.cn/provider_image/preview260/2237373141.jpg',
          'https://hellorfimg.zcool.cn/preview260/706770268.jpg',
          'https://hellorfimg.zcool.cn/preview260/1120210925.jpg',
          'https://hellorfimg.zcool.cn/preview260/153695291.jpg'
        ],
      listTitle:
        [
          '这么可爱领养回家吧',
          '大黄和我的快乐时光',
          '猫与狗的相处之道',
          '宠物派对',
          '挪威森么猫—Poble',
          '猫对窝装物的喜爱',
          '带宠物出行',
          '什么种类狗性格好',
          '让你的宠物更健康',
          '猫咪为我指路',
          '狗狗身上的【体味】',
          '快说,本猫可爱吗',
          '仙女猫的日常',
          '朕怎么样才更漂亮',
          '提高智商有妙招'
        ],
      listName:
        [
          '爱助宠物之家',
          '凤爪没有泡椒',
          '巧克力没有可可豆',
          '露露没有杏仁',
          '咖啡不加糖',
          '冰淇淋没有奶油',
          '面包不是面包',
          '可乐不是可乐',
          '牛奶不加糖',
          '辣条不是辣条',
          '雪碧不是雪碧',
          '芬达不是芬达',
          '果汁不是果汁',
          '零食不是零食',
          '西瓜不是西瓜'
        ],
      icon_name:
        {
          icon_xin: '#icon-dianzan-copy'
        }
    }
  },
  methods: {
    handlePet (name, title) {
      if (title === '宠物秀') {
        this.$router.push({path: '/Voide'})
      }
    }
  }
}
</script>

<style scoped>
</style>
