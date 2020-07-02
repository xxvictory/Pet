<template>
  <div>
    <DrMenuSer></DrMenuSer>
    <!--<Search :add="adds.name"></Search>-->
    <ImgSer></ImgSer>
    <!--<GridSer></GridSer>-->
    <!--<Cell :titleName="titles.title_store"></Cell>-->
    <!--<StoreSer v-bind:recommendList="recommendList">-->
      <!--<div slot="star">-->
        <!--<svg class="icon" aria-hidden="true">-->
          <!--<use xlink:href="#icon-iconzhengli&#45;&#45;copy">-->
          <!--</use>-->
        <!--</svg>-->
        <!--<svg class="icon" aria-hidden="true">-->
          <!--<use xlink:href="#icon-iconzhengli&#45;&#45;copy">-->
          <!--</use>-->
        <!--</svg>-->
        <!--<svg class="icon" aria-hidden="true">-->
          <!--<use xlink:href="#icon-iconzhengli&#45;&#45;copy">-->
          <!--</use>-->
        <!--</svg>-->
        <!--<svg class="icon" aria-hidden="true">-->
          <!--<use xlink:href="#icon-iconzhengli&#45;&#45;copy">-->
          <!--</use>-->
        <!--</svg>-->
        <!--<svg class="icon" aria-hidden="true">-->
          <!--<use xlink:href="#icon-iconzhengli&#45;&#45;copy">-->
          <!--</use>-->
        <!--</svg>-->
      <!--</div>-->
    <!--</StoreSer>-->
  </div>
</template>
<script>
// import Search from '../components/Search'
import ImgSer from '../components/PetService/ImgSer'
// import GridSer from '../components/PetService/GridSer'
// import Cell from '../components/Cell'
// import StoreSer from '../components/PetService/StoreSer'
import DrMenuSer from '../components/PetService/DrMenuSer'
export default {
  components: {
    // Search,
    ImgSer,
    // GridSer,
    // Cell,
    // StoreSer,
    DrMenuSer
  },
  data () {
    return {
      titles: {
        title_store: '精品旗舰店'
      },
      adds: {
        name: '天津'
      },
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
          text: '萌宠训练营',
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
    width: 1.3rem;
    height: 1.3rem;
  }
</style>
