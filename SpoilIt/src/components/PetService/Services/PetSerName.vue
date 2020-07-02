<template>
    <div>
      <div>
      <p>宠物梦公馆</p>
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
        <p>5.0</p>
    </div>
      <div>
      <p>滨江道206号</p>
      <p>距离你780m</p>
    </div>
      <Cell :titleName="titles.title_business"></Cell>
      <Grid :GridNum="4" v-bind:ListIcon="ListIcon"></Grid>
      <Cell :titleName="titles.title_Discount"></Cell>
    </div>
</template>

<script>
import Cell from '../../Cell'
import Grid from '../../Grid'
export default {
  name: 'PetSerName',
  components: {
    Cell,
    Grid
  },
  data () {
    return {
      titles: {
        title_business: '主营业务',
        title_Discount: '优惠团购'
      },
      ListIcon: [
        {
          id: '0001',
          icon: '#icon-chongwushuiwo-copy',
          text: '洗澡'
        },
        {
          id: '0002',
          icon: '#icon-chongwuyiliao-copy',
          text: '美容'
        },
        {
          id: '0003',
          icon: '#icon-chongwuleyuan-copy',
          text: '寄养'
        },
        {
          id: '0004',
          icon: '#icon-chongwulianmeng-copy',
          text: '玩具'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
