import $ from '@/utils';

export default {
  name: 'userList',
  data() {
    return {
      tableData: [],
      search: '',
      currentPage1: 5,
      config: {
        page: 1,
        size: 1
      },
      pagination: {
        page: 0,
        size: 0,
        total: 0
      },
    }
  },
  methods: {
    queryUserList() {
      $.post('/user/queryAllUser', this.config).then(res => {
        try {
          let list = res.data.list && res.data.list.length ? res.data.list : []
          list.forEach((article, index) => {
            list[index].created_time = $.timeFormat(article.created_time - 0)
            list[index].edit_time = $.timeFormat(article.edit_time - 0)
          })
          this.tableData = res.data.list;
        } catch (e) {}
        this.pagination = res.data.pagination
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.config.page = val;
      this.queryUserList()
      console.log(`当前页: ${val}`);
    },
  },
  mounted() {
    this.queryUserList()
  }
}