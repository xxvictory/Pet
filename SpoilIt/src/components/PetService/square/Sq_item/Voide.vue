<template>
<div class="container_box" id="video_box">
  <div class="van_swipe">
    <!--vant van-swipe 滑动组件 -->
    <van-swipe :show-indicators="false" @change="onChange" vertical :loop="false">
      <van-swipe-item v-for="(item, index) in videoList" :key="index" class="product_swiper">
        <div class="video_container">
          <!--video属性
      webkit-playsinline ios 小窗播放，使视频不脱离文本流，安卓则无效
      微信内置x5内核，
      x5-video-player-type="h5-page" 启用H5播放器,是wechat安卓版特性，添加此属性，微信浏览器会自动将视频置为全屏
      x5-video-player-fullscreen="true" 全屏设置，设置为 true 是防止横屏
      x5-video-orientation 控制横竖屏 landscape 横屏，portrain竖屏； 默认portrain
      poster：封面
      src：播放地址
      -->
          <van-icon class="back" @click="handleBack" name="share" dot />
          <!--<button  >返回</button>-->
          <video class="video_box" loop webkit-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="true" playsinline preload="auto"
                 :poster="item.cover" :src="item.url" :playOrPause="playOrPause"
                 @click="pauseVideo" @ended="onPlayerEnded($event)"
          >
          </video>
          <!-- 封面 -->
          <img v-show="isVideoShow" class="play" @click="playvideo" :src="item.cover"/>
          <!-- 播放暂停按钮 -->
          <img v-show="iconPlayShow" class="icon_play" @click="playvideo"
               src="http://npjy.oss-cn-beijing.aliyuncs.com/images/file-1575340653940esdHR.png"/>
        </div>
        <!-- 右侧头像、点赞、评论、分享功能 -->
        <div class="tools_right">
          <div class="tools_r_li">
            <img :src="item.tag_image" class="tag_image">
            <i class="iconfont icon-jiahao tag_add" v-show="!item.tagFollow"
               @click="checkSubscribe(item,index)"></i>
            <i class="iconfont icon-duihao tag_dui" v-show="item.tagFollow"
               :class="item.tagFollow?'tag_dui_active':''"></i>
          </div>
          <div class="tools_r_li" @click="changeFabulous(item,index)">
            <i class="iconfont icon-shoucang icon_right"
               :class="item.fabulous?'fabulous_active':''"></i>
            <div class="tools_r_num">52.1w</div>
          </div>
          <div class="tools_r_li" @click="changeComment">
            <van-icon name="chat" size="40" dot />
            <div class="tools_r_num">12.5w</div>
          </div>
          <div class="tools_r_li" @click="changeShare">
            <i class="iconfont icon-iconfontforward icon_right"></i>
            <div class="tools_r_num">22.2w</div>
          </div>
        </div>
        <!-- 底部作品描述 -->
        <div class="production_box">
          <div class="production_name">
            @superKM
          </div>
          <div class="production_des">
            年轻的时候要注意‘养生’，少玩手机多睡觉！少玩手机多睡觉！少玩手机多睡觉！切记少玩手机多睡觉！少玩手机多睡觉！少玩手机多睡觉！@ 抖音小助手
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
    <!--评论弹窗-->
    <div class="share_box_active" :class="commentPop?'share_active':''">
      <div class="share_tips">评论</div>
      <comment :comments="commentData"></comment>
      <div class="share_cancel" @click="closeComment">取消</div>
    </div>
    <!--分享弹框-->
    <div class="share_box_active" :class="showShareBox?'share_active':''">
      <div class="share_tips">分享到</div>
      <ul class="share_ul">
        <li class="share_li pengyouquan_li">
          <i class="iconfont icon-pengyouquan pengyouquan"></i>
        </li>
        <li class="share_li">
          <i class="iconfont icon-weixin weixin"></i>
        </li>
        <li class="share_li" @click="copyUrl">
          <i class="iconfont icon-lianjie lianjie"></i>
        </li>
        <div class="clear"></div>
      </ul>
      <!--<comment :comments="commentData"></comment>-->
      <div class="share_cancel" @click="cancelShare">取消</div>
    </div>
  </div>
</div>
</template>
<script>
import * as CommentData from '../../square/mockdata'
import comment from '../../square/comment'
import axios from 'axios'
import Vue from 'vue'
import {
  Swipe,
  SwipeItem,
  Toast
} from 'vant'

Vue.use(Swipe, Toast).use(SwipeItem)

let videoProcessInterval
export default {
  name: 'home',
  components: {
    comment
  },
  data () {
    let u = navigator.userAgent
    return {
      commentData: [],
      current: 0,
      videoList: [],
      isVideoShow: true,
      playOrPause: true,
      video: null,
      iconPlayShow: true,
      tabIndex: 0,
      showShareBox: false, // 展示分享框
      commentPop: false, // 是否展示评论弹框
      // 评论相关
      comment_text: '', // 评论输入内容
      canSend: false, // 是否可以发送
      videoComment: [],
      commentPlaceholder: '留下你精彩的评论吧', // 评论Placeholder
      replayUserData: '',
      to_comment_id: '',
      videoProcess: 0// 视频播放进度
    }
  },
  created () {
    this.commentData = CommentData.comment.data
  },
  methods: {
    onSelect (item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false
      Toast(item.name)
    },
    // 评论点赞
    commentLove (item, index, index2) {
      let comment_id = item.comment_id,
        user_id = item.user_id,
        love_comment = item.love_comment,
        love_flag = 0// 0:取消点赞；1：点赞
      if (love_comment) {
        // 取消点赞
        love_flag = 0
      } else {
        // 添加点赞
        love_flag = 1
      }
      // setTimeout模拟Ajax请求
      setTimeout(() => {
        if (index2 == -1) {
          // 点赞一级评论
          this.videoComment[index].love_comment = !this.videoComment[index].love_comment
          if (love_flag == 1) {
            this.videoComment[index].love_count++
          } else {
            this.videoComment[index].love_count--
          }
        } else {
          // 点赞二级评论
          this.videoComment[index].child_comment[index2].love_comment = !this.videoComment[index].child_comment[index2].love_comment
          if (love_flag == 1) {
            this.videoComment[index].child_comment[index2].love_count++
          } else {
            this.videoComment[index].child_comment[index2].love_count--
          }
        }
      }, 500)
    },
    handleBack () {
      this.$router.back(-1)
    },
    // 弹出评论窗口
    changeComment () {
      this.commentPop = true
    },
    // 关闭评论弹窗
    closeComment () {
      this.commentPop = false
    },
    // 关注该作者
    checkSubscribe (item, index) {
      this.videoList.map(v => {
        v.author_id == item.author_id ? v.tagFollow = true : ''
      })
    },
    // 改变菜单
    changeTab (index) {
      this.tabIndex = index
    },
    // 改变收藏状态
    changeFabulous (item, index) {
      this.videoList[index].fabulous = !this.videoList[index].fabulous
    },
    // 展示分享弹窗
    changeShare () {
      this.showShareBox = true
    },
    // 取消分享
    cancelShare () {
      this.showShareBox = false
    },
    // 滑动改变播放的视频
    onChange (index) {
      // 改变的时候 暂停当前播放的视频
      clearInterval(videoProcessInterval)
      this.videoProcess = 0
      let video = document.querySelectorAll('video')[this.current]
      video.pause()
      this.playOrPause = false
      this.showShareBox = false
      this.current = index
      // 切换直接自动播放下一个
      this.isVideoShow = false
      this.pauseVideo()
    },
    // 开始播放
    playvideo (event) {
      let video = document.querySelectorAll('video')[this.current]
      console.log('playvideo：' + this.current)
      this.isVideoShow = false
      this.iconPlayShow = false
      this.showShareBox = false
      video.play()
      window.onresize = function () {
        video.style.width = window.innerWidth + 'px'
        video.style.height = window.innerHeight + 'px'
      }

      videoProcessInterval = setInterval(() => {
        this.changeProcess(video)
      }, 100)
    },
    pauseVideo () { // 暂停\播放
      let video = document.querySelectorAll('video')[this.current]
      console.log('pauseVideo' + this.current)
      if (this.playOrPause) {
        video.pause()
        this.iconPlayShow = true
        clearInterval(videoProcessInterval)
      } else {
        video.play()
        this.iconPlayShow = false
        videoProcessInterval = setInterval(() => {
          this.changeProcess(video)
        }, 100)
      }
      this.playOrPause = !this.playOrPause
      this.showShareBox = false
    },
    // 记录播放进度
    changeProcess () {
      let video = document.querySelectorAll('video')[this.current]
      let currentTime = video.currentTime.toFixed(1)
      let duration = video.duration.toFixed(1)
      this.videoProcess = parseInt((currentTime / duration).toFixed(2) * 100)
    },
    onPlayerEnded (player) { // 视频结束
      this.isVideoShow = true
      this.current += this.current
    },
    // 复制当前链接
    copyUrl () {
      let httpUrl = window.location.href
      var oInput = document.createElement('input')
      oInput.value = httpUrl
      document.body.appendChild(oInput)
      oInput.select() // 选择对象
      document.execCommand('Copy') // 执行浏览器复制命令
      oInput.className = 'oInput'
      oInput.style.display = 'none'
      alert('链接复制成功')
    }
  },
  mounted () {
    let self = this
    axios({
      url: 'http://192.168.218.2:3000/api/mp',
      method: 'get'// 请求方式
      // 这里可以添加axios文档中的各种配置
    }).then(function (res) {
      console.log(res, '成功')
      self.videoList = res.data
    }).catch(function () {
      console.log('请求失败')
    })
  }
}
</script>
<style scoped>
  .back{
    font-size: 2rem;
    width: 98%;
    position: absolute;
    z-index: 1004;
    color: #fff;
    text-align: right;
    margin-top: 0.3rem;
  }
  .clear {
    clear: both;
  }

  .video-player {
    height: 100vh;
    width: 100vw;
  }

  .product_swiper {
    width: 100vw;
    height: 100vh;
  }

  .van_swipe {
    width: 100vw;
    height: 100vh;
    max-width: 550px;
    margin: 0 auto;
    position: relative;
  }

  .van-swipe {
    width: 100%;
    height: 100%;
  }

  .container_box {
    width: 100vw;
    height: 100vh;
    background: #000;
  }

  .video_box {
    object-fit: fill !important;
    z-index: 999;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
  }

  video {
    object-position: 0 0;
  }

  .icon_play {
    position: absolute;
    top: 44%;
    right: 0;
    left: 0;
    bottom: auto;
    margin: auto;
    z-index: 999;
    height: 60px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }

  .play,
  .platStart {
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
  }

  /*头像， 点赞，转发 */
  .tag_image {
    width: 50px;
    height: 50px;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: 50%;
    margin-bottom: 20px;
    position: relative;
    box-shadow: 0px 0px 10px #9d9d9d;
  }

  .tag_add {
    position: absolute;
    bottom: 12px;
    left: 0;
    right: 0;
    border-radius: 67px;
    display: inline-block;
    width: 18px;
    height: 18px;
    line-height: 18px;
    margin: 0 auto;
    z-index: 1;
    font-size: 20px;
    color: #f44;
    background: #fff;
  }

  .tag_dui {
    position: absolute;
    bottom: 12px;
    left: 0;
    right: 0;
    border-radius: 67px;
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin: 0 auto;
    z-index: 1;
    font-size: 11px;
    color: #f44;
    background: #fff;
  }

  .tag_dui_active {
    opacity: 0;
    animation: showFollow 1.4s ease-in-out 0s;
  }

  .tag_add_num {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
  }

  @keyframes showFollow {
    0% {
      opacity: 1;
      color: #fff;
      background: #F44;
      transform: rotate(-180deg) scale(1);
    }
    35% {
      opacity: 1;
      color: #f44;
      background: #fff;
      transform: rotate(0deg) scale(1.2);
    }
    80% {
      opacity: 1;
      color: #f44;
      transform: scale(1.2);
    }
    100% {
      opacity: 0;
      display: none;
      color: #f44;
      transform: scale(0);
    }
  }

  .tools_right {
    z-index: 1001;
    position: absolute;
    right: 16px;
    bottom: 180px
  }

  .tools_r_li {
    margin-bottom: 20px;
    color: #fff;
    font-size: 14px;
    position: relative;
  }

  .tools_r_li:last-child {
    margin-bottom: 0px;
  }

  .icon_right {
    margin-bottom: 5px;
    font-size: 42px;
    display: block;
    text-shadow: 0px 0px 10px #9d9d9d;
    /*transition: .5s;*/
  }

  .production_box {
    z-index: 1001;
    position: absolute;
    /* right: 16px; */
    bottom: 48px;
    text-align: left;
    padding: 0 15px 15px 15px;
    color: #fff;
    width: 100%;
    left: 0;
    box-sizing: border-box;
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
    /* Firefox 3.6 - 15 */
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
    /* 标准的语法 */
  }

  .production_name {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .production_des {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    min-height: 62px;
    font-size: 13px;
  }

  .container_bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.85);
    height: 48px;
    /*border-top: 1px solid rgba(255, 255, 255, 0.7);*/
    max-width: 550px;
  }

  .production_top {
    display: inline-block;
    padding: 6px;
    margin-bottom: 5px;
    background: rgba(0, 0, 0, .3);
    border-radius: 6px;
    margin-top: 5px;
  }

  .product_go {
    color: #fbdd21;
  }

  .production_title {
    margin-left: 4px;
  }

  .border_progress {
    width: 0;
    height: 1px;
    background: #bababa;
    position: absolute;
    top: 0;
    transition: .1s all;
  }

  .bottom_tab {
    width: 33%;
    text-align: center;
    float: left;
    color: #c9c9c9;
    padding: 10px 0;
  }

  .bottom_tab_icon {
    width: 44px;
  }

  .bottom_tab_span {
    line-height: 28px;
    border-bottom: 2px solid transparent;
    font-weight: 600;
    font-size: 16px;
    display: inline-block;
    padding: 0 4px;
    transition: .5s all;
  }

  .tab_active .bottom_tab_span {
    border-bottom: 2px solid #fff;
    color: #fff;
  }

  .icon-shoucang {
    transition: .5s all;
  }

  .fabulous_active {
    color: #f44;
    animation: showHeart .5s ease-in-out 0s;
  }

  /*animation-name：用来调用@keyframes定义好的动画，与@keyframes定义的动画名称一致*/
  /*animation-duration ：指定元素播放动画所持续的时间*/
  /*animatino-timing-function ： 和transition中的transition-timing-function 中的值一样。根据上面@keframes中分析的animation中可能存在多个小动画，因此这里的值设置是针对每一个小动画所在时间范围内的属性变换速率。*/
  /*animation-delay：定义在浏览器开始执行动画之前等待的时间，这里是指整个animation执行之前的等待时间，而不是上面说的多个小动画*/
  /*animation-iteration-count：定义动画的播放次数，其通常为整数，默认是1,；取值为infinite，动画将无限次的播放。*/
  /*animation-direction：主要用来设置动画播放方向*/
  @keyframes showHeart {
    0% {
      color: #f44;
      transform: scale(1);
    }

    25% {
      color: #fff;
      transform: scale(0);
    }

    80% {
      color: #f44;
      transform: scale(1.2);
    }

    100% {
      color: #f44;
      transform: scale(1);
    }
  }

  /*分享样式*/
  .share_hover {
    position: fixed;
    display: none;

  }

  .share_box {
    position: fixed;
    bottom: -400px;
    width: 100%;
    z-index: 1002;
    background: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: .5s;
  }
  .share_box_active{
    position: fixed;
    bottom: -600px;
    width: 100%;
    max-height: 60%;
    z-index: 1010;
    background: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: .5s;
    overflow: scroll;
  }

  .share_tips {
    text-align: center;
    line-height: 38px;
    color: #333;
  }

  .share_ul {
    box-sizing: border-box;
    padding: 0 25px 25px;
    border-bottom: 1px solid #e8e8e8;
  }

  .share_li {
    float: left;
    width: 33%;
    text-align: center;
  }

  .share_li i {
    font-size: 44px;
  }

  .share_cancel {
    text-align: center;
    line-height: 48px;
    color: #777;
  }
  .share_cancel_active{
    text-align: center;
    width: 100%;
    height: 100%;
    color: #777;
    z-index: 1012;
  }

  .pengyouquan {
    color: #47D000;

  }

  .pengyouquan_li {
    animation: rotating 8s linear infinite
  }

  @keyframes rotating {
    from {
      transform: rotate(0)
    }

    to {
      transform: rotate(360deg)
    }
  }

  .weixin {
    color: #20CA2E;
  }

  .lianjie {
    color: #cdcdcd;
  }

  .share_active {
    bottom: 0px;
  }
  .comment_active{
    bottom: 0px;
  }

    /*评论样式*/
  ::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.20);
  }

  :-moz-placeholder {
    color: rgba(0, 0, 0, 0.20);;
  }

  ::-moz-placeholder {
    color: rgba(0, 0, 0, 0.20);
  }

  :-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.20);
  }

  .comment_container {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .comment_box {
    padding: 0 15px 52px 15px;
  }

  .comment_top {
    text-align: center;
    font-size: 12px;
    color: #000;
    line-height: 40px;
  }

  .guanbi3 {
    float: right;
    font-size: 12px;
    padding: 0 10px;
    position: absolute;
    right: 6px;
  }

  .comment_li {
    margin-bottom: 20px;
    font-size: 14px;
    text-align: left;
  }

  .comment_author_left {
    float: left;
  }

  .comment_author_left img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  .comment_author_right {
    margin-left: 46px;
    padding-top: 4px;
  }

  .comment_author_top {
    position: relative;
  }

  .comment_author_name {
    margin-bottom: 6px;
    color: #777;
  }

  .icon-shoucang1_box {
    position: absolute;
    right: 0px;
    top: 0;
    text-align: center;
    color: #777;
  }

  .comment_author_text {
    color: #555;
    margin-bottom: 10px;
    padding-right: 35px;
  }

  .comment_replay_box {
    padding-left: 46px;
    box-sizing: border-box;
  }

  .comment_replay_li {
    margin-bottom: 10px;
  }

  .comment_replay_left {
    float: left;
  }

  .comment_replay_left img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  .comment_replay_right {
    margin-left: 35px;
    padding-top: 2px;
  }

  .comment_replay_top {
    position: relative;
    margin-bottom: 6px;
  }

  .comment_replay_text {
    padding-right: 35px;
    margin-bottom: 10px;
    color: #555;
  }

  .comment_author_text span, .comment_replay_text span {
    color: #999;
    font-size: 13px;
    margin-left: 6px;
  }

  .shoucang1_num {
    text-align: center;
    width: 30px;
    font-size: 12px;
    /* right: -4px; */
    position: relative;
  }

  .comment_ul {
    height: 400px;
    overflow-y: auto;
  }

  .comment_input_box {
    position: fixed;
    bottom: 0;
    z-index: 2999;
    width: 100%;
    border-top: 1px solid #e8e8e8;
    background: #fff;
    padding: 10px 15px;
    box-sizing: border-box;
  }

  /*.comment_form {*/
  /**/
  /*}*/

  .comment_input {
    border: none;
    resize: none;
    width: 80%;
    float: left;
    color: #555;
    caret-color: #f44;
  }

  .comment_input_right {
    float: right;
  }

  .comment_i {
    font-size: 22px;
    color: #999;
    transition: .3s;
  }

  .comment_i_active {
    color: #f44;
  }

  .icon-zanwupinglun {
    font-size: 100px;
    color: #777;
  }

  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateY(80px);
  }

  .v-enter-active,
  .v-leave-active {
    transition: all .5s ease;
  }

  /*添加进场效果*/
  .v-move {
    transition: all 1s ease;
  }

  .v-leave-active {
    position: absolute;
  }

  .list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }

  .list-complete-enter, .list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-complete-leave-active {
    position: absolute;
  }

  .love_active {
    color: #f44;
  }

  /*评论样式*/
</style>
