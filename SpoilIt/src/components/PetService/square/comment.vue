<!--评论模块-->
<template>
  <!--<van-collapse v-model="activeNames">-->
    <!--<van-collapse-item title="评论..." name="1">-->
  <div class="container">
    <div class="comment" v-for="(item,index) in comments" :key="index">
      <div class="info">
        <img class="avatar" :src="item.fromAvatar" width="36" height="36"/>
        <div class="right">
          <div class="name">{{item.fromName}}</div>
          <div class="date">{{item.date}}</div>
        </div>
      </div>
      <div class="content">{{item.content}}</div>
      <div class="control">
        <span class="like" :class="{active: item.isLike}" @click="likeClick(item)">
          <i class="iconfont icon-like"></i>
          <span class="like-num">{{item.likeNum > 0 ? item.likeNum + '人赞' : '赞'}}</span>
        </span>
        <span class="comment-reply" @click="showCommentInput(item)">
          <!--<i class="iconfont icon-comment"></i>-->
          <span>回复</span>
        </span>
      </div>
      <div class="reply">
        <!--<van-collapse v-model="activeNames">-->
          <!--<van-collapse-item title="标题1" name="1">-->
        <div class="item" v-for="(reply, index) in item.reply" :key="index">
          <div class="reply-content">
            <span class="from-name">{{reply.fromName}}</span><span>: </span>
            <span class="to-name">@{{reply.toName}}</span>
          </div>
          <span class="rely_span">{{reply.content}}</span>
          <div class="reply-bottom">
            <span>{{reply.date}}</span>
            <span class="reply-text" @click="showCommentInput(item, reply)">
              <!--<i class="iconfont icon-comment"></i>-->
              <span>回复</span>
            </span>
          </div>
        </div>
          <!--</van-collapse-item>-->
        <!--</van-collapse>-->
        <div class="write-reply" v-if="item.reply.length > 0" @click="showCommentInput(item)">
          <i class="el-icon-edit"></i>
          <span class="add-comment">添加新评论</span>
        </div>
        <transition name="fade">
          <div class="input-wrapper" v-if="showItemId === item.id">
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
    <!--</van-collapse-item>-->
  <!--</van-collapse>-->
</template>

<script>

import Vue from 'vue'

export default {
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  components: {},
  data () {
    return {
      inputComment: '',
      showItemId: ''

    }
  },
  computed: {
  },
  methods: {
    /**
       * 点赞
       */
    likeClick (item) {
      if (item.isLike === null) {
        Vue.$set(item, 'isLike', true)
        item.likeNum++
      } else {
        if (item.isLike) {
          item.likeNum--
        } else {
          item.likeNum++
        }
        item.isLike = !item.isLike
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
    showCommentInput (item, reply) {
      if (reply) {
        this.inputComment = '@' + reply.fromName + ' '
      } else {
        this.inputComment = ''
      }
      this.showItemId = item.id
    }
  },
  created () {
    console.log(this.comments)
  }
}
</script>
<style scoped lang="scss">

  @import "../../../assets/scss/index.scss";

  .container {
    padding: 0 10px;
    box-sizing: border-box;
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
