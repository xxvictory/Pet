<template>
  <div>
    <div ref="wrapper">
      <ul class="cont" ref="cont">
        <li class="cont-item" v-for="item of recommendList" :key="item.id">
          <div class="cont-img">
            <img class="img" :src="item.url" :alt="item.text">
          </div>
          <div class="cont-dest">{{item.text}}</div>
          <div class="cont-price">
            <span class="price">￥{{item.price}}</span>
            <span>起</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          url: '//img11.360buyimg.com/n3/jfs/t20809/184/825371581/238109/e70030e9/5b19043cNe2b2c354.jpg!q80.webp',
          text: '麦富迪 宠物猫粮藻趣儿三文鱼通用成猫粮1.5kg ',
          price: '46.00'

        }, {
          id: '0002',
          url: '//img11.360buyimg.com/n7/jfs/t17239/331/426128621/144250/b38217cb/5a77ed29Nc7ef1973.jpg',
          text: '顽皮（Wanpy）狗零食宠物磨牙洁齿消臭狗饼干480g ',
          price: '24.90'

        }, {
          id: '0003',
          url: '//img14.360buyimg.com/n7/jfs/t1/45876/26/10399/400011/5d775c33E21beb902/392f649f10eefc5c.jpg',
          text: '顽皮狗零食大礼包1200g宠物零食泰迪金毛训练零食牛肉棒香脆牛肝片三明治鸡肉丝',
          price: '128.00'

        }, {
          id: '0004',
          url: '//img14.360buyimg.com/n7/jfs/t1/61883/37/1591/251552/5cff5299E0b02df1a/11041cfe818ca143.jpg',
          text: '疯狂的小狗 狗狗零食宠物泰迪幼犬成犬食品训狗奖励 靓毛牛肉粒 180g',
          price: '16.90'
        }, {
          id: '0005',
          url: '//img12.360buyimg.com/n7/jfs/t1/50602/31/3894/215271/5d197056Ea5815253/9b485dc7e5be6861.jpg',
          text: '好命天生（Honeycare） 活性炭倍净膨润土猫砂10L（2.5L*4包）小颗粒结团无尘猫砂10KG干垃圾分类猫砂',
          price: '49.00'
        }
      ]

    }
  },
  methods: {
    verScroll () {
      let width = this.recommendList.length * 102// 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度
      this.$refs.cont.style.width = width + 'px' // 修改滚动区域的宽度
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0, // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: 'vertical'
          })
        } else {
          this.scroll.refresh() // 如果dom结构发生改变调用该方法
        }
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      let timer = setTimeout(() => { // 其实我也不想写这个定时器的，这相当于又嵌套了一层$nextTick，但是不这么写会失败
        if (timer) {
          clearTimeout(timer)
          this.verScroll()
        }
      }, 0)
    })
  }
}
</script>

<style lang="scss" scoped>
    .cont {
      list-style: none;
      /*overflow-x: scroll;*/
      white-space: nowrap;
      font-size: 12px;
      padding-right: .24rem;
      .cont-item {
        position: relative;
        display: inline-block;
        padding: .1rem 0 .5rem;
        width: 6rem;
        margin: 0 .2rem;
        .cont-img {
          overflow: hidden;
          width: 100%;
          height: 0;
          padding-bottom: 100%;
          .img {
            width: 100%;
          }
        }
        .cont-dest {
          margin: .3rem .1rem;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .cont-price {
          .price {
            margin-left: .1rem;
            color: #8479EF;
          }
        }
      }
    }
</style>
