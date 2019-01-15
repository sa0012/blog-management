import $ from '@/utils';

export default {
  name: 'userList',
  data() {
    return {
      commentList: {
        article_id: '',
        content: '',
        fromId: '',
        fromName: 'sa0012',
        fromAvatar: 'https://avatars3.githubusercontent.com/u/24355136?v=4'
      },
      article: {

      }
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
        this.commentList.fromId = res.data.user_id
      })
    },
    commentTest() {
      $.post('/comment/saveComment', this.commentList)
    }
  },
  mounted() {
    this.queryArticle()
    // this.commentTest()
  }
}