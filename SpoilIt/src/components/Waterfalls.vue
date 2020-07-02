<template>
  <div id="waterfull_box">
    <div class="container" >
      <Waterfall :list="list" :gutter="2" :width="240" :phoneCol="2" backgroundColor="#eee" ref="waterfall">
        <template slot="item" slot-scope="props">
          <div class="card">
            <div class="cover">
              <img :src="props.data.src" alt="" @load="$refs.waterfall.refresh()">
            </div>
            <div class="name">
              <slot name="a"></slot>
            <p>{{props.data.title}}</p>
              <div class="ticket">
                <slot name="b"></slot>
              </div>
          </div>
            <div class="waterfall_desc">
              <div class="desc_all">
                <div class="desc_img">
                  <slot name="c"></slot>
                  <slot name="d"></slot>
                </div>
                <a href="#">
                  <p>{{props.data.name}}</p>
                </a>
              </div>
              <div class="desc_link">
                <p>
                  <svg class="icon" aria-hidden="true">
                    <use :xlink:href="icon_name"></use>
                  </svg>
                </p>
              </div>
            </div>
            </div>
        </template>
      </Waterfall>
      <!--<div class="menu-wrapper">-->
        <!--<button class="menu" @click="addNewList">Add More</button>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import Waterfall from 'vue-waterfall-plugin'
export default {
  name: 'waterfulla',
  props: ['listImg', 'listTitle', 'listName', 'icon_name'],
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.list = this.createList(0)
  },
  methods: {
    addNewList () {
      this.list.push(...this.createList(this.list.length))
    },
    createList (startNum) {
      let list = []
      for (let i = 0; i < 15; i++) {
        list.push({
          src: this.listImg[i],
          title: this.listTitle[i],
          name: this.listName[i]
        })
      }
      return list
    }
  },
  components: {
    Waterfall
  }
}
</script>

<style lang="scss">
  #waterfull_box {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #fff;
  }
  /*.container {*/
    /*background: #66677c;*/
  /*}*/
  .card {
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    transition: 0.2s;
    top: 0;
    &:hover {
      top: -3px;
    }
    .cover {
      padding: 10px 10px 0 10px;
      line-height: 0;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .name{
      width: 80%;
      padding: 10px 20px;
      display: inline-block;
    }
    .name>p{
      color: #666;
      font-weight: 600;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-top: 0.2rem;
    }
    .ticket{
      margin-top: 0.3rem;
    }
  }
  .menu-wrapper {
    padding: 20px;
    .menu {
      display: block;
      width: 180px;
      height: 40px;
      border-radius: 3px;
      background: #fff;
      border: none;
      outline: none;
      color: #666;
      margin: 0 auto;
      cursor: pointer;
    }
  }
  .child{
    height: 100px;
  }
  .waterfall_desc{
    margin: 0.5rem;
    overflow: hidden;
    position: relative;
    display: flex;
  }
  .desc_all{
    display: flex;
    float: left;
  }
  .desc_all>a{
    color: #333;
    font-size: 0.8rem;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 0.5rem;
    line-height: 29px;
  }
  .desc_img{
    float: left;
    width: 1.7rem;
    height: 1.7rem;
  }
  .desc_img>img{
    border-radius: 50%;
    display: block;
    width: 100%;
    height: 100%;
    margin-left: 0.3rem;
  }
  .desc_link{
    float: right;
    display: inline-block;

  }
  .waterfall_desc .icon{
    font-size: 0.6rem;
    margin-top: 0.3rem;
    margin-right: 0.3rem;
  }
  .desc_all p{
    width: 6.5rem;
    overflow: hidden;
    text-overflow:ellipsis;
  }
</style>
