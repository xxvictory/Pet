<template>
  <div>
    <Search :icon="icons.icon_shopping"></Search>
    <SwipeS></SwipeS>
    <!--<CridShopp></CridShopp>-->
    <Grid :GridNum="4" v-bind:ListIcon="ListTool"></Grid>
    <ImgShopp></ImgShopp>
    <LayoutShopp></LayoutShopp>
    <Cell :titleName="titles.title_name"></Cell>
    <paragraphShopp></paragraphShopp>
    <Cell :titleName="titles.title_watershopp"></Cell>
    <Waterfalls v-bind:listImg="listImg" v-bind:listTitle="listTitle" v-bind:listName="listName" :icon_name="icon_name.icons_details">
      <van-tag slot="a" color="#8479EF">宠它 | 618</van-tag>
      <div slot="b">
        <van-tag  slot="b" color="#8479EF" plain>每300减30</van-tag>
        <van-tag  slot="b" color="#8479EF" plain>金币可抵3%</van-tag>
      </div>
      <svg slot="d" class="icon" aria-hidden="true">
        <use xlink:href="#icon-qian-copy"></use>
      </svg>
    </Waterfalls>
  </div>
</template>
<script>
import Search from '../components/Search'
import SwipeS from '../components/Shopping/SwipeS'
import Grid from '../components/Grid'
import ImgShopp from '../components/Shopping/ImgShopp'
import LayoutShopp from '../components/Shopping/LayoutShopp'
import Cell from '../components/Cell'
import paragraphShopp from '../components/Shopping/paragraphShopp'
import Waterfalls from '../components/Waterfalls'
export default {
  components: {
    Search,
    SwipeS,
    // CridShopp,
    Grid,
    ImgShopp,
    LayoutShopp,
    Cell,
    paragraphShopp,
    Waterfalls
  },
  data () {
    return {
      icons: {
        icon_shopping: 'shopping-cart-o'
      },
      titles: {
        title_name: '亚展同款',
        title_watershopp: '好物推荐'
      },
      listImg:
        [
          '//img12.360buyimg.com/n7/jfs/t1/81494/14/4776/248931/5d2e9c40E5632ca76/324dde043a941a5d.jpg',
          '//img13.360buyimg.com/n7/jfs/t1/48937/36/11809/970630/5d8c6379Ef456dccd/7a9386933a735fd0.png',
          '//g-search1.alicdn.com/img/bao/uploaded/i4/i1/3340982940/O1CN01NQ0zuZ1XaZ0iuEyo9_!!0-item_pic.jpg_180x180.jpg_.webp',
          '//img10.360buyimg.com/n7/jfs/t1/41931/35/13389/299909/5d6a45b4E6646e9fe/30c03e29f10bee2f.jpg',
          '//img14.360buyimg.com/n1/jfs/t1/88473/21/13580/285172/5e5a2a8eE168d916b/a6aa3521765743a8.jpg',
          '//img13.360buyimg.com/n7/jfs/t1/94705/36/1603/99859/5dc11f5cE32a58f96/df53f69d89767744.jpg',
          '//img13.360buyimg.com/n7/jfs/t1/88480/27/10101/131575/5e168e70Eb2fb2027/ee1ce13902390bf6.jpg',
          '//img13.360buyimg.com/n7/jfs/t1/82498/17/6809/39453/5d4e8de0E7d5ee22f/24d4ae30bc2b6704.jpg',
          '//img14.360buyimg.com/n7/jfs/t1/75624/4/13031/87856/5da52cffE12b951c1/9552d1d312d7511d.jpg',
          '//img14.360buyimg.com/n7/jfs/t1/49233/3/1711/131046/5cf76541Ee0da647d/d9c36df46f1ce54b.jpg',
          '//img14.360buyimg.com/n7/jfs/t19903/349/2166236741/422662/f87cf23/5b35cd01N72806918.jpg',
          '//img10.360buyimg.com/n7/jfs/t1/32325/40/12327/132517/5cb70813E2dc92ce0/9f6aceb10cb4ff49.jpg',
          '//img13.360buyimg.com/n7/jfs/t1/25281/20/956/160231/5c0df6faEbf9d5bc7/ecaa65f8ee58f2a7.jpg',
          '//img12.360buyimg.com/n7/jfs/t1/2670/3/10331/490533/5bcad24fE389685c9/fb5d042327a15cd8.jpg',
          '//img12.360buyimg.com/n7/jfs/t1/69976/31/7326/128011/5d5665e7E7dbf96e5/bf04c4925af64fd9.jpg'
        ],
      listTitle:
        [
          '疯狂的小狗狗粮 泰迪贵宾比熊博美小型幼犬成犬宠物2kg肉松粮4斤',
          '【加厚加绒】憨憨宠 狗窝猫窝宠物窝 可水洗法斗泰迪保暖狗窝中小型犬狗垫子沙发狗床狗屋猫咪狗狗宠物用品 灯芯绒圆窝M号推荐15斤以下宠物 ',
          'PetPositioning 尼德利宠物定位项圈',
          '凯锐思狗零食狗罐头湿粮狗粮幼犬期罐头零食营养整箱 幼犬罐头1箱 ',
          '凯锐思狗零食狗罐头湿粮狗粮幼犬成犬罐头零食营养 全阶段狗罐头1箱',
          '疯狂的小狗 狗零食狗狗磨牙棒宠物幼犬洁齿骨棒训练狗咬胶 混合口味食品 220g ',
          ' Petsbelle猫爬架大型实木猫树猫抓板猫玩具剑麻猫架子猫抓柱猫窝 森林猫树窝【奢华版】',
          '梦想猫 狗碗猫碗猫咪饮水机 自动饮水器+食盆 猫盆猫咪食盆狗狗盆猫饭盆宠物用品 自动饮水器+单食碗（S号 猫及小型犬） ',
          '猫窝狗窝冬季保暖网红封闭式猫屋别墅房子蒙古包垫子猫玩具小型犬泰迪宠物用品四季通用 双色大号【15斤猫咪10斤狗狗】 ',
          '【3件7折】疯狂的小狗 磨牙棒狗狗零食泰迪金毛幼犬成犬训练奖励宠物零食洁齿棒狗咬胶 奶香口味  ',
          '华元宠具 hoopet 宠物饮水器自动循环喝水喂水狗狗流动水盆水壶喷泉猫咪饮水机 ',
          ' LORDE里兜 猫零食 混合口味猫条10g*20条(金枪鱼三文鱼扇贝鸡肉) 猫咪零食 猫湿粮 成猫幼猫猫粮猫罐头营养膏 ',
          'meatyway宠物狗狗零食鸭胸肉缠地瓜干 训犬大礼包1.13kg',
          '华畜 猫薄荷棒棒糖逗猫棒猫薄荷球猫玩具猫磨牙棒小猫猫咪用品猫薄荷糖猫咪零食 ',
          '【特价】猫砂盆全封闭顶入式猫屎盆特大号防外溅双门防臭除臭猫咪用品猫厕所 绅士灰【特大号】 【收藏加购赠铲垫】 '
        ],
      listName:
        [
          '59.00',
          '59.00',
          '228.00',
          '49.00',
          '49.00',
          '16.50',
          '1180.00',
          '39.80',
          '89.00',
          '18.90',
          '115.00',
          '49.00',
          '171.00',
          '9.90',
          '88.00'
        ],
      icon_name:
        {
          icons_details: '#icon-xiangqing-copy'
        },
      ListTool: [
        {
          id: '0001',
          icon: '#icon-shipinganliang-copy',
          text: '主食'
        },
        {
          id: '0002',
          icon: '#icon-lingshiguantou-copy',
          text: '零食'
        },
        {
          id: '0003',
          icon: '#icon-xiyuyongpin-copy',
          text: '清洁'
        },
        {
          id: '0004',
          icon: '#icon-chongwuwanju-copy',
          text: '玩具'
        },
        {
          id: '0005',
          icon: '#icon-fuzhuangzhuangshi-copy',
          text: '服饰'
        },
        {
          id: '0006',
          icon: '#icon-daichanyanghu-copy',
          text: '保养'
        },
        {
          id: '0007',
          icon: '#icon-lingshouyongpin-copy',
          text: '生活用品'
        },
        {
          id: '0008',
          icon: '#icon-xiaomaochushou-copy',
          text: '特价'
        }
      ]
    }
  }
}
</script>
<style scoped>
  .icon{
    margin-left: 0.5rem;
  }
</style>
