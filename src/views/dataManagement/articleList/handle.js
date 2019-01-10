import $ from '@/utils';
import { getSession } from '@/common/mutils';

export default {
  name: 'userList',
  data() {
    return {
      config: {
        size: 10,
        page: 1,
        user_id: getSession('userId')
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