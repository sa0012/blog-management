import $ from '@/utils';
export default {
  name: 'userList',
  data() {
    return {
      tableData: [{
          "_id": '',
          "title": "",
          "type": "",
          "content": "",
          "create_time": "",
          "__v": 0
        }
      ],
      config: {
        size: 10,
        page: 1
      },
      pagination: {
        page: 1,
        size: 0,
        total: 0
      },
    }
  },
  methods: {
    queryFeedback() {
      $.get('/feedback/query', this.config).then(res => {
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.config.page = val;
      this.queryFeedback()
      console.log(`当前页: ${val}`);
    },
  },
  mounted() {
    this.queryFeedback()
  }
}