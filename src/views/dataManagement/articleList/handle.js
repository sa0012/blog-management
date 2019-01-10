import $ from '@/utils';

export default {
  name: 'userList',
  data() {
    return {
      config: {
        size: 10,
        page: 1,
        user_id: '5c3306ab734e842ae4a1ebb0'
      }
    }
  },
  methods: {
    getArticleList() {
      $.post('/article/getArticle', this.config).then(res => {
        console.log(res)
      })
    }
  },
  mounted() {
    this.getArticleList()
  }
}