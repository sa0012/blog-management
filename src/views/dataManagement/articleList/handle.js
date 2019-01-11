import $ from '@/utils';
import {
  getSession
} from '@/common/mutils';

export default {
  name: 'userList',
  data() {
    return {
      config: {
        size: 1,
        page: 1,
      },
      tableData: [],
      pagination: {
        page: 0,
        size: 0,
        total: 0
      },
      search: '',
      currentPage1: 5
    }
  },
  methods: {
    getArticleList() {
      $.post('/article/getArticle', this.config).then(res => {
        try {
          let list = res.data.list && res.data.list.length ? res.data.list : []
          list.forEach((article, index) => {
            list[index].create_time = $.timeFormat(article.create_time - 0)
            list[index].edit_time = $.timeFormat(article.edit_time - 0)
          })
          this.tableData = res.data.list;
        } catch(e) {}
        this.pagination = res.data.pagination
      })
    },
    addArticle() {
      this.$router.push('/addArticle?type=add')
    },
    modifyArticle() {
      this.$router.push('/addArticle?type=modify')
    },
    deleteArticle(article_id) {
      $.post('/article/removeArticle', { article_id }).then(res => {
        console.log(res, 'delete')
      })
    },
    lookArticle() {
      
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.config.page = val;
      this.getArticleList()
      console.log(`当前页: ${val}`);
    }
  },
  mounted() {
    this.getArticleList()
  }
}