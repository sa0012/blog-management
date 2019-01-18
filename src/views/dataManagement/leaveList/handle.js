import $ from '@/utils';

export default {
  name: 'userList',
  data() {
    return {
      commentList: {
        article_id: '',
        content: '',
        user: {
          user_id: '',
          user_name: 'sa0012',
          user_avatar: 'https://avatars3.githubusercontent.com/u/24355136?v=4'
        }
      },
      childComment: {
        comment_id: '5c3ebb28c496d8c51576005a',
        user: {
          user_id: '5c3c20482975bdf2f027c822',
          user_name: 'sa0012',
          user_avatar: 'https://avatars3.githubusercontent.com/u/24355136?v=4'
        },

        // 被评论人信息
        reply_to_user: {
          user_name: 'sa0012',
          user_id: '5c3c20482975bdf2f027c822',
          user_avatar: 'https://avatars3.githubusercontent.com/u/24355136?v=4'
        },
        //评论内容
        content: '',
      },
      article: {

      },
      queryFatherComment: {
        page: 1,
        size: 10,
        article_id: ''
      },
      queryReplyComment: {
        page: 1,
        size: 10,
        comment_id: ''
      },
      fatherCommentList: [],
      childCommentList: [],
      imgUrl: ''
    }
  },
  methods: {
    queryArticle() {
      $.post('/article/findOneArticle', {
        _id: '5c3d8268ca6b105455e60b16',
        user_id: '5c3c20482975bdf2f027c822'
      }).then(res => {
        this.article = Object.assign({}, res.data)
        this.commentList.article_id = res.data._id
        this.commentList.user.user_id = res.data.user_id
        this.queryCommentList(res.data._id)
      })
    },
    queryCommentList(articleId) {
      this.queryFatherComment.article_id = articleId;
      $.post('/comment/queryCommentList', this.queryFatherComment).then(res => {
        console.log(res.data.list, 'lsit')
        this.fatherCommentList = res.data.list;
      })
    },
    commentTest() {
      $.post('/comment/saveComment', this.commentList).then(res => {})
    },
    getReplyComment() {
      $.post('/comment/replySave', this.childComment)
    },
    queryReplyCommentsList(id) {
      this.queryReplyComment.comment_id = id;
      $.post('/comment/queryReleyCommentsList', this.queryReplyComment).then(res => {
        this.childCommentList = res.data.list;
      })
    },
    uploadTest() {
      $.get('/upload/imgUpload').then(res => {
        this.imgUrl = res.data.key
      })
    }
  },
  mounted() {
    this.queryArticle()
    // this.commentTest()
  }
}