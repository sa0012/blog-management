import TopTip from '@/components/topTip'
import UserCharts from '@/components/userCharts'
import $ from '@/utils'
export default {
  data() {
    return {
      countMes: {},
      todayMsg: {}
    }
  },
  methods: {
    queryCount() {
      $.get('/count/statistical').then(res => {
        this.countMes = Object.assign({}, res.data);
      })
    },
    queryTodayCount() {
      $.get('/count/todayCount').then(res => {
        this.todayMsg = Object.assign({}, res.data);
      })
    },
    queryAllCount() {
      $.get('/count/allOfCount').then(res => {
        console.log(res.data)
      })
    }
  },
  mounted() {
    Promise.all([
      this.queryTodayCount(),
      this.queryCount(),
      this.queryAllCount()
    ])
  },
  components: {
    TopTip,
    UserCharts
  }
}