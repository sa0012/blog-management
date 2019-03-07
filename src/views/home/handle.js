import TopTip from '@/components/topTip'
import UserCharts from '@/components/userCharts'
import $ from '@/utils'
export default {
  data() {
    return {
      countMes: {},
      todayMsg: {},
      xAxisData: [],
      countData: {}
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
        let result = res.data;
        this.xAxisData = Object.keys(result.article).sort();
        for (let key in result) {
          let yAxisData = [];
          this.xAxisData.forEach((item, index) => {
            yAxisData.push(result[key][item])
          });
          this.countData[key] = yAxisData;
        }
        // this.countData = Object.assign({}, result);
        console.log(this.countData, 'countData')
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