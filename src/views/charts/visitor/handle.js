import visitorPie from '@/components/visitorPie';
import $ from '@/utils';

export default {
  name: 'userList',
  data() {
    return {
      userDist: {}
    }
  },
  methods: {
    queryUserDist() {
      $.get('/count/UserDistribution').then(res => {
        this.userDist = Object.assign({}, res.data);
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