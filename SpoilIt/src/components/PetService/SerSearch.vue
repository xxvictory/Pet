<template>
  <div>
    <div v-for="(list, index) in lists" :key="index">
    <div class="name">
      <van-image
        round
        width="3rem"
        height="3rem"
        fit="cover"
        :src="list.img"
      ></van-image>
      <p>{{list.name}}</p>
      <div class="tag">
        <van-tag round  color="#8479EF">关注</van-tag>
      </div>
    </div>
    <div class="desc">
      <p>{{list.desc}}</p>
      <div>
        <van-image
          width="5rem"
          height="5rem"
          fit="cover"
          :src="list.img1"
        ></van-image>
        <van-image
          width="5rem"
          height="5rem"
          fit="cover"
          :src="list.img2"
        ></van-image>
        <van-image
          width="5rem"
          height="5rem"
          fit="cover"
          :src="list.img3"
        ></van-image>
      </div>
      <div class="icon_item">
        <van-icon name="chat-o" color="#8479EF"></van-icon>
        <p class="active">{{list.comment}}</p>
        <van-icon name="like-o" color="#8479EF"></van-icon>
        <p>{{list.like}}</p>
      </div>

    </div>
      <div class="container">
        <div class="comment">
          <div class="info">
            <img class="avatar" :src="list.fromAvatar" width="36" height="36"/>
            <div class="right">
              <div class="name">{{list.fromName}}</div>
              <div class="date">{{list.date}}</div>
            </div>
          </div>
          <div class="content">{{list.content}}</div>
          <div class="control">
        <span class="like" :class="{active: list.isLike}" @click="likeClick(list)">
          <i class="iconfont icon-like"></i>
          <span class="like-num">{{list.likeNum > 0 ? list.likeNum + '人赞' : '赞'}}</span>
        </span>
            <span class="comment-reply" @click="showCommentInput(list)">
          <span>回复</span>
        </span>
          </div>
          <div class="reply">
            <div class="item" v-for="(reply, index) in list.reply" :key="index">
              <div class="reply-content">
                <span class="from-name">{{reply.fromName}}</span><span>: </span>
                <span class="to-name">@{{reply.toName}}</span>
              </div>
              <span class="rely_span">{{reply.content}}</span>
              <div class="reply-bottom">
                <span>{{reply.date}}</span>
                <span class="reply-text" @click="showCommentInput(list, reply)">
              <span>回复</span>
            </span>
              </div>
              <div class="reply-content">
                <span class="from-name">{{reply.fromName1}}</span><span>: </span>
                <span class="to-name">@{{reply.toName1}}</span>
              </div>
              <span class="rely_span">{{reply.content1}}</span>
              <div class="reply-bottom">
                <span>{{reply.date}}</span>
                <span class="reply-text" @click="showCommentInput(list, reply)">
              <span>回复</span>
            </span>
              </div>
            </div>
            <div class="write-reply" v-if="list.reply.length > 0" @click="showCommentInput(list)">
              <i class="el-icon-edit"></i>
              <span class="add-comment">添加新评论</span>
            </div>
            <transition name="fade">
              <div class="input-wrapper" v-if="showItemId === list.id">
                <van-field class="gray-bg-input"
                           v-model="inputComment"
                           type="textarea"
                           :rows="3"
                           autofocus
                           placeholder="写下你的评论">
                </van-field>
                <div class="btn-control">
                  <span class="cancel" @click="cancel">取消</span>
                  <van-button class="btn" type="success" round @click="commitComment">确定</van-button>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
  </div>
    </div>

</template>

<script>
import * as CommentData from './square/mockdata'
import comment from './square/active_com'
import axios from 'axios'
import Vue from 'vue'
export default {
  components: {
    comment
  },
  data () {
    return {
      activeNames: ['0'],
      lists: [],
      commentData: [],
      inputComment: '',
      showItemId: ''
    }
  },
  created () {
    this.commentData = CommentData.comment.data
    console.log(this.comments)
  },
  mounted () {
    let self = this
    axios({
      url: 'http://192.168.218.2:3000/api/recommend', // api 代理到json文件地址，后面的后缀是文件中的对象或者是数组
      method: 'get'// 请求方式
      // 这里可以添加axios文档中的各种配置
    }).then(function (res) {
      console.log(res.data, '成功')
      self.lists = res.data
    }).catch(function () {
      console.log('请求失败')
    })
  },
  methods: {
    /**
     * 点赞
     */
    likeClick (list) {
      if (list.isLike === null) {
        Vue.$set(list, 'isLike', true)
        list.likeNum++
      } else {
        if (list.isLike) {
          list.likeNum--
        } else {
          list.likeNum++
        }
        list.isLike = !list.isLike
      }
    },

    /**
     * 点击取消按钮
     */
    cancel () {
      this.showItemId = ''
    },

    /**
     * 提交评论
     */
    commitComment () {
      console.log(this.inputComment)
    },

    /**
     * 点击评论按钮显示输入框
     * item: 当前大评论
     * reply: 当前回复的评论
     */
    showCommentInput (list, reply) {
      if (reply) {
        this.inputComment = '@' + reply.fromName + ' '
      } else {
        this.inputComment = ''
      }
      this.showItemId = list.id
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/scss/index.scss";
  .name{
    display: flex;
    margin: 1rem 1rem;
  }
  .name>p{
    line-height: 3rem;
    margin-left: 0.6rem;
  }
  .tag{
    line-height: 3rem;
    margin-left: 9rem;
  }
  .desc{
    margin: 0.6rem 2rem;
  }
  .desc>p{
    margin-bottom: 0.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
.icon_item{
  display: flex;
}
.icon_item .active{
  margin-right: 0.6rem;
}
  .icon_item p{
    color: #a0a0a0;
    font-size: 0.8rem;
    margin-left: 0.2rem;
  }
  .desc_pl{
    color: #a0a0a0;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 65%;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .comment{
    display: flex;
  }
  .comment_name{
    width: 80%;
    margin-left: 0.3rem;
  }
  .comment_uname{
    line-height: 2rem;
    color: #000;
  }
  .reply{
    float: right;
    margin-top: -1.7rem;
  }
  .comment_reply{
    display: flex;
    width: 80%;
    margin: 0 auto;
  }
 .reply_item .active{
    color: #8479EF;
   margin-left: 0.3rem;
  }
  .reply_xin{
    margin-right: 0.6rem;
  }
  .container {
    /*padding: 0 10px;*/
    box-sizing: border-box;
    margin-left: 1.5rem;
    .comment {
      display: flex;
      flex-direction: column;
      padding: 10px;
      border-bottom: 1px solid $border-fourth;
      .info {
        display: flex;
        align-items: center;
        .avatar {
          border-radius: 50%;
        }
        .right {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          .name {
            font-size: 12px;
            color: $text-main;
            margin-bottom: 5px;
            font-weight: 500;
          }
          .date {
            font-size: 10px;
            color: $text-minor;
          }
        }
      }
      .content {
        font-size: 14px;
        color: $text-main;
        line-height: 20px;
        padding: 10px 0;
      }
      .control {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: $text-minor;
        .like {
          display: flex;
          align-items: center;
          margin-right: 20px;
          cursor: pointer;
          &.active, &:hover {
            color: #8479EF;
          }
          .iconfont {
            font-size: 14px;
            margin-right: 5px;
          }
        }
        .comment-reply {
          display: flex;
          align-items: center;
          cursor: pointer;
          &:hover {
            color: $text-333;
          }
          .iconfont {
            font-size: 16px;
            margin-right: 5px;
          }
        }

      }
      .reply {
        margin: 10px 0;
        border-left: 2px solid $border-first;
        .item {
          margin: 0 10px;
          padding: 10px 0;
          border-bottom: 1px dashed $border-third;
          .rely_span{
            font-size: 0.9rem;
            margin-left: 0.6rem;
          }
          .reply-content {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: $text-main;
            .from-name {
              color: #8479EF;
            }
            .to-name {
              color: #8479EF;
              margin-left: 5px;
              margin-right: 5px;
            }
          }
          .reply-bottom {
            display: flex;
            align-items: center;
            margin-top: 6px;
            font-size: 12px;
            color: $text-minor;
            .reply-text {
              display: flex;
              align-items: center;
              margin-left: 10px;
              cursor: pointer;
              &:hover {
                color: $text-333;
              }
              .icon-comment {
                margin-right: 5px;
              }
            }
          }
        }
        .write-reply {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: $text-minor;
          padding: 10px;
          cursor: pointer;
          &:hover {
            color: $text-main;
          }
          .el-icon-edit {
            margin-right: 5px;
          }
        }
        .fade-enter-active, fade-leave-active {
          transition: opacity 0.5s;
        }
        .fade-enter, .fade-leave-to {
          opacity: 0;
        }
        .input-wrapper {
          padding: 10px;
          .gray-bg-input, .el-input__inner {
            /*background-color: #67C23A;*/
          }
          .btn-control {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-top: 10px;
            .cancel {
              font-size: 16px;
              color: $text-normal;
              margin-right: 20px;
              cursor: pointer;
              &:hover {
                color: $text-333;
              }
            }
            .confirm {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
</style>
