<template>
  <div>
    <Search></Search>
    <Swipe></Swipe>
    <Grid :GridNum="4" v-bind:ListIcon="ListTool"></Grid>
    <Cell :titleName="titles.title_name"></Cell>
    <GridAttention></GridAttention>
    <Cell :titleName="titles.title_activity"></Cell>
    <GridActivity></GridActivity>
    <Cell :titleName="titles.title_story"></Cell>
    <!--<Waterfalls v-bind:listImg="listImg" v-bind:listTitle="listTitle" v-bind:listName="listName" :icon_name="icon_name.icon_xin">-->
        <!--<img slot="c" src="../assets/img_head/0.jpg" alt="">-->
    <!--</Waterfalls>-->
    <StoreSer v-bind:recommendList="recommendList">
      <div slot="star">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconzhengli--copy">
          </use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconzhengli--copy">
          </use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconzhengli--copy">
          </use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconzhengli--copy">
          </use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconzhengli--copy">
          </use>
        </svg>
      </div>
    </StoreSer>
  </div>
</template>

<script>
import Search from '../components/Search'
import Grid from '../components/Grid'
import Swipe from '../components/Swipe'
import Cell from '../components/Cell'
import GridAttention from '../components/GridAttention'
import GridActivity from '../components/GridActivity'
import StoreSer from '../components/PetService/StoreSer'
// import Waterfalls from '../components/Waterfalls'
export default {
  components: {
    Search,
    Grid,
    Swipe,
    Cell,
    GridAttention,
    GridActivity,
    StoreSer
    // Waterfalls
  },
  data () {
    return {
      titles: {
        title_name: '领养机构',
        title_activity: '寄养中心',
        title_story: '热门推荐'
      },
      // listImg:
      //   [
      //     'https://hellorfimg.zcool.cn/preview260/731766994.jpg',
      //     'https://hellorfimg.zcool.cn/preview260/113951887.jpg',
      //     'https://hellorfimg.zcool.cn/preview260/646123120.jpg',
      //     'https://hellorfimg.zcool.cn/preview260/1024473769.jpg',
      //     'https://hellorfimg.zcool.cn/provider_image/preview260/2234704896.jpg',
      //     'https://hellorfimg.zcool.cn/preview260/1534296887.jpg',
      //     'https://hellorfimg.zcool.cn/preview260/407893192.jpg',
      //     'https://hellorfimg.zcool.cn/preview260/1077568103.jpg',
      //     'https://hellorfimg.zcool.cn/preview260/520870675.jpg',
      //     'https://hellorfimg.zcool.cn/provider_image/preview260/2237373145.jpg',
      //     'https://hellorfimg.zcool.cn/preview260/695776048.jpg',
      //     'https://hellorfimg.zcool.cn/provider_image/preview260/2237373141.jpg',
      //     'https://hellorfimg.zcool.cn/preview260/706770268.jpg',
      //     'https://hellorfimg.zcool.cn/preview260/1120210925.jpg',
      //     'https://hellorfimg.zcool.cn/preview260/153695291.jpg'
      //   ],
      // listTitle:
      //   [
      //     '养宠物后你最害怕什么',
      //     '大黄和我的快乐时光',
      //     '猫与狗的相处之道',
      //     '宠物派对',
      //     '挪威森么猫—Poble',
      //     '猫对窝装物的喜爱',
      //     '带宠物出行',
      //     '什么种类狗性格好',
      //     '让你的宠物更健康',
      //     '猫咪为我指路',
      //     '狗狗身上的【体味】',
      //     '快说,本猫可爱吗',
      //     '仙女猫的日常',
      //     '朕怎么样才更漂亮',
      //     '提高智商有妙招'
      //   ],
      // listName:
      //   [
      //     '牛奶不是奶',
      //     '凤爪没有泡椒',
      //     '巧克力没有可可豆',
      //     '露露没有杏仁',
      //     '咖啡不加糖',
      //     '冰淇淋没有奶油',
      //     '面包不是面包',
      //     '可乐不是可乐',
      //     '牛奶不加糖',
      //     '辣条不是辣条',
      //     '雪碧不是雪碧',
      //     '芬达不是芬达',
      //     '果汁不是果汁',
      //     '零食不是零食',
      //     '西瓜不是西瓜'
      //   ],
      icon_name:
        {
          icon_xin: '#icon-dianzan-copy'
        },
      ListTool: [
        {
          id: '0001',
          icon: '#icon-xiaogouchushou-copy',
          text: '爱心公益'
        },
        {
          id: '0002',
          icon: '#icon-chongwuyiliao-copy',
          text: '医疗美容'
        },
        {
          id: '0003',
          icon: '#icon-chongwuleyuan-copy',
          text: '乐园'
        },
        {
          id: '0004',
          icon: '#icon-chongwujiyang-copy',
          text: '宠物店'
        }
      ],
      recommendList: [
        {
          id: '0001',
          url: 'https://hellorfimg.zcool.cn/preview260/175424984.jpg',
          text: '宠物梦公馆',
          type: '宠物店',
          ser1: '洗澡',
          ser2: '美容',
          ser3: '寄养 | 领养',
          add: '和平区 671m'
        }, {
          id: '0002',
          url: 'https://hellorfimg.zcool.cn/preview260/445800832.jpg',
          text: 'LIEBE宠物客栈',
          type: '宠物店',
          ser1: '住店',
          ser2: '休闲 | 撸宠',
          ser3: '聚会',
          add: '河东区 88m'
        }, {
          id: '0003',
          url: 'https://hellorfimg.zcool.cn/preview260/1151019821.jpg',
          text: 'LIEBE宠物医院',
          type: '医疗健康',
          ser1: '住院服务',
          ser2: '手术',
          ser3: '体检 | 疫苗',
          add: '南开区 26m'
        }, {
          id: '0004',
          url: 'https://hellorfimg.zcool.cn/preview260/374801014.jpg',
          text: '导盲犬训练营',
          type: '训练营',
          ser1: '训练',
          ser2: '比赛',
          ser3: '寄养 | 领养',
          add: '空港区 120m'
        }, {
          id: '0005',
          url: 'https://hellorfimg.zcool.cn/preview260/282554834.jpg',
          text: '宠它俱乐部',
          type: '俱乐部',
          ser1: '聚会',
          ser2: '寄养 | 领养',
          ser3: '比赛',
          add: '河西区 1km'
        }
      ]
    }
  }
}
</script>

<style scoped>
.icon{
  font-size: 0.7rem;
}
</style>
