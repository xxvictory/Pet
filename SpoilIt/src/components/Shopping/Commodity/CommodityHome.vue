<template>
  <div>
    <Search></Search>
    <DrMenuSer></DrMenuSer>
    <StoreSer v-bind:recommendList="recommendList">
      <svg slot="money" class="icon" aria-hidden="true">
        <use xlink:href="#icon-qian-copy"></use>
      </svg>
    </StoreSer>
  </div>
</template>

<script>
import Search from '../../Search'
import DrMenuSer from '../../PetService/DrMenuSer'
import StoreSer from '../../PetService/StoreSer'
export default {
  name: 'commodity',
  components: {
    Search,
    DrMenuSer,
    StoreSer
  },
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          url: '//img13.360buyimg.com/n7/jfs/t1/20303/24/13890/74318/5ca4181cEb0e3c92a/e474943ca53ff3df.jpg',
          text: '凯锐思 宠物狗狗训练奖励零食补钙火腿肠香肠泰迪金毛食品大礼包',
          type: '中国 | 适用品种:通用 | 香肠',
          money: '23.00',
          num: '1.6万人付款',
          ser1: '宠物卡9.5折',
          ser2: '包邮',
          ser3: '免费取退',
          add: '凯瑞斯旗舰店 上海 >'
        }, {
          id: '0002',
          url: '//img11.360buyimg.com/n7/jfs/t1/22470/7/928/147901/5c0df7d8Ebc3b32ad/cfd08b98247857d2.jpg',
          text: 'meatyway宠物狗狗零食鸭胸肉干 训犬大礼包鸭肉干908g',
          type: '中国 | 适用品种:通用 | 鸭肉干',
          money: '222.00',
          num: '3.2万人付款',
          ser1: '宠物卡9.5折',
          ser2: '包邮',
          ser3: '免费取退',
          add: '好适嘉旗舰店 江苏 >'
        }, {
          id: '0003',
          url: '//img11.360buyimg.com/n7/jfs/t17239/331/426128621/144250/b38217cb/5a77ed29Nc7ef1973.jpg',
          text: '顽皮（Wanpy）狗零食宠物磨牙洁齿消臭狗饼干480g',
          type: '中国 | 适用品种:通用 | 饼干',
          money: '24.90',
          num: '7.4万人付款',
          ser1: '宠物卡9.5折',
          ser2: '包邮',
          ser3: '免费取退',
          add: '顽皮旗舰店 山东 >'
        }, {
          id: '0004',
          url: '//img14.360buyimg.com/n7/jfs/t1/88473/21/13580/285172/5e5a2a8eE168d916b/a6aa3521765743a8.jpg',
          text: '凯锐思狗零食狗罐头湿粮狗粮幼犬成犬罐头零食营养 全阶段狗罐头1箱',
          type: '中国 | 适用品种:通用 | 罐头',
          money: '49.00',
          num: '2.5万人付款',
          ser1: '宠物卡9.5折',
          ser2: '包邮',
          ser3: '免费取退',
          add: '凯瑞斯旗舰店 上海 >'
        }, {
          id: '0005',
          url: '//img11.360buyimg.com/n7/jfs/t1/103287/36/13387/314171/5e547db9E9b9620b0/a1cf49c8d99d222f.jpg',
          text: '益和 MATCHWELL 宠物狗狗零食大礼包鸡胸肉 鸭胸肉 牛肉粒 牛肉片 磨牙骨头饼干肉香肠等800g',
          type: '中国 | 适用品种:通用 | 大礼包',
          money: '89.90',
          num: '4.9万人付款',
          ser1: '宠物卡9.5折',
          ser2: '包邮',
          ser3: '免费取退',
          add: '益和宠物食品旗舰店 西安 >'
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
    margin-top: 0.4rem;
  }
</style>
