// 模拟评论数据
const comment = {
  status: '成功',
  code: 200,
  data: [
    {
      id: 'comment0001', // 主键id
      date: '2018-07-05 08:30', // 评论时间
      ownerId: 'talents100020', // 文章的id
      fromId: 'errhefe232213', // 评论者id
      fromName: '你算哪杯纯牛奶', // 评论者昵称
      fromAvatar: 'https://img.yzcdn.cn/vant/cat.jpeg', // 评论者头像
      likeNum: 3, // 点赞人数
      content: '好可爱，好想收养这几只小可爱，可惜没有时间照顾他们', // 评论内容
      reply: [ // 回复，或子评论
        {
          id: '34523244545', // 主键id
          commentId: 'comment0001', // 父评论id，即父亲的id
          fromId: 'observer223432', // 评论者id
          fromName: '爱助宠物之家', // 评论者昵称
          fromAvatar: 'https://img.yzcdn.cn/vant/cat.jpeg', // 评论者头像
          toId: 'errhefe232213', // 被评论者id
          toName: '你算哪杯纯牛奶', // 被评论者昵称
          toAvatar: 'https://img.yzcdn.cn/vant/cat.jpeg', // 被评论者头像
          content: '你可以来救助站看他们呀', // 评论内容
          date: '2018-07-05 08:35' // 评论时间
        }
        // {
        //   id: '34523244545',
        //   commentId: 'comment0001',
        //   fromId: 'observer567422',
        //   fromName: '咖啡不放糖',
        //   fromAvatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
        //   toId: 'observer223432',
        //   toName: '奶瓶给你打翻',
        //   toAvatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
        //   content: '一起去',
        //   date: '2018-07-05 08:50'
        // }
      ]
    },

    {
      id: 'comment0002',
      date: '2018-07-05 08:30',
      ownerId: 'talents100020',
      fromId: 'errhefe232213',
      fromName: '毒蛇郭德纲',
      fromAvatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
      likeNum: 0,
      content: '从没见过这么优秀的人',
      reply: []
    }
  ]

}

export {comment}
