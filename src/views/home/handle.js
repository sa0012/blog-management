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
    }
  },
  mounted() {
    Promise.all([
      this.queryTodayCount(),
      this.queryCount(),
    ])
  },
  components: {
    TopTip,
    UserCharts
  }
}