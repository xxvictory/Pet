<template>
    <div class="BJ_Img">
      <div class="icon_ringht">
        <div class="fx" @click="showShare = true">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenxiang-copy"></use>
          </svg>
        </div>
        <div class="icon_ss">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shezhi-copy"></use>
          </svg>
        </div>
      </div>
      <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
      />
      <div class="user_info">
        <van-image
          width="5rem"
          height="5rem"
          round
          fit="cover"
          src="https://img.zcool.cn/community/01ad4f5e74699ea801216518334758.jpg@1280w_1l_2o_100sh.jpg"
        />
        <div class="info_name">
          <p>牛奶不是奶</p>
          <p class="ID">ID:1042347607</p>
        </div>
        <div class="icon_right" @click="onClickLogin">
          <i class="iconfont">&#xe875;</i>
        </div>
      </div>

      <div class="fan">
        <div class="attention">
          <p class="num">27</p>
          <p>关注</p>
        </div>
        <div class="fan_num">
          <p class="num">99</p>
          <p>粉丝</p>
        </div>
        <div class="praise">
          <p class="num">1.5w</p>
          <p>获赞</p>
        </div>
      </div>
      <div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'BJ',
  data () {
    return {
      showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' }
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' }
        ]
      ]
    }
  },
  methods: {
    onSelect (option) {
      // Toast(option.name)
      this.showShare = false
    },
    onClickLogin () {
      this.$router.push({path: '/Login'})
    }
  }
}
</script>

<style scoped>
  .icon_ringht{
    width: 100%;
    text-align: right;
  }
  .fx{
    float: right;
  }
  .icon_ringht .icon{
    margin-right: 10px;
    margin-top: 10px;
    font-size: 0.8rem;
  }
  .BJ_Img{
    width: 100%;
    height: 200px;
    background: url("../../assets/img_head/BE513EC63F000A970A77171B4AF06BCC.png") no-repeat rgba(173,127,252,0.3);
  }
  .user_info{
    display: flex;
    margin-left: 1rem;
    margin-top: 0.2rem;
  }
  .info_name{
    margin-left: 1rem;
  }
  .info_name p{
    color: #000;
    line-height:3.5rem;
  }
  .BJ_Img .ID{
    font-size: 0.6rem;
    line-height:0rem;
  }
  .iconfont{
    color: #000;
    float: right;
    font-size: 2rem;
    margin-top: 1.5rem;
  }
  .icon_right{
    width: 40%;
  }
  .fan{
    display: flex;
    color: #000;
    /*background: lightcoral;*/
    float: right;
    margin-right: 2rem;
    margin-top: 1.5rem;
  }
  .fan p{
    margin-left: 2rem;
  }
  .num{
    text-align: center;
  }
</style>
