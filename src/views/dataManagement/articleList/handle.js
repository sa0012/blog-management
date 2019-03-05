import $ from '@/utils';
import LookArticle from './lookArticle'

export default {
  name: 'userList',
  data() {
    return {
      config: {
        size: 10,
        page: 1,
      },
      tableData: [],
      pagination: {
        page: 1,
        size: 0,
        total: 0
      },
      search: '',
      currentPage1: 5,
      showArticle: false,
      articleObj: {}
    }
  },
  computed: {
    userMsg() {
      return this.$store.state.user;
    },
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
        } catch (e) {}
        this.pagination = res.data.pagination
      })
    },
    addArticle() {
      this.$router.push('/addArticle?type=add')
    },
    modifyArticle(_id, user_id) {
      this.$router.push(`/addArticle?type=modify&_id=${_id}&user_id=${user_id}`)
      // let config = {
      //   _id,
      //   user_id,
      //   tags: [
      //     "更新"
      //   ],
      //   article: "更新的文章内容",
      //   category: "更新的分类",
      //   title: "更新的title",
      //   author: "更新",
      // }
      // $.post('/article/updateArticle', config)
    },
    deleteArticle(_id, user_id) {
      $.post('/article/removeArticle', {
        _id,
        user_id,
        user: this.userMsg
      }).then(res => {
        console.log(res, 'delete')
        this.config.page = 1;
        this.getArticleList();
      })
    },
    lookArticle(article) {
      // $.post('/article/findOneArticle', {_id, user_id}).then(res => {
      //   console.log(res)
      // })
      this.showArticle = true;
      console.log(article)
      this.articleObj = Object.assign({}, article)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.config.page = val;
      this.getArticleList()
      console.log(`当前页: ${val}`);
    },
  },
  mounted() {
    this.getArticleList()
  },
  components: {
    LookArticle
  }
}