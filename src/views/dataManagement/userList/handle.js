export default {
  name: 'userList',
  data() {
    return {
      tableData: [{
        _id: '5c360767f0591e6e249e80ab',
        avator: '',
        date: '2016-05-02',
        user_id: '王小虎',
        iphone: '13333333333',
        email: '153654@qq.com',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        _id: '5c360767f0591e6e249e80ab',
        avator: '',
        date: '2016-05-02',
        user_id: '王小虎',
        iphone: '13333333333',
        email: '153654@qq.com',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        _id: '5c360767f0591e6e249e80ab',
        avator: '',
        date: '2016-05-02',
        user_id: '王小虎',
        iphone: '13333333333',
        email: '153654@qq.com',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        _id: '5c360767f0591e6e249e80ab',
        avator: '',
        date: '2016-05-02',
        user_id: '王小虎',
        iphone: '13333333333',
        email: '153654@qq.com',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      search: '',
      currentPage1: 5
    }
  },
  methods: {
    handleClick(index) {
      console.log(index)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}