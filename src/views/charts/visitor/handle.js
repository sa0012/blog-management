import visitorPie from '@/components/visitorPie';
import $ from '@/utils';

export default {
  name: 'userList',
  data() {
    return {
      userDist: {},
      seriesName: "访问来源",
      title: "用户分布",
      groupData: ["北京", "上海", "深圳", "杭州", "其他"],
      seriesData: []
    }
  },
  methods: {
    queryUserDist() {
      $.get('/count/UserDistribution').then(res => {
        this.userDist = Object.assign({}, res.data);
        this.seriesData = [{
            value: this.userDist.bjUser,
            name: "北京"
          },
          {
            value: this.userDist.shUser,
            name: "上海"
          },
          {
            value: this.userDist.szUser,
            name: "深圳"
          },
          {
            value: this.userDist.gzUser,
            name: "杭州"
          },
          {
            value: this.userDist.otherUser,
            name: "其他"
          }
        ]
      })
    }
  },
  mounted() {
    this.queryUserDist();
  },
  components: {
    visitorPie
  }
}