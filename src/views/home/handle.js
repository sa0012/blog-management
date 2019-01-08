import TopTip from '@/components/topTip'
import $ from '@/utils'
export default {
  data() {
    return {

    }
  },
  methods: {
    testAuth() {
      $.post('/leave', { content: '这是留言' }).then(res => {
        alert('留言')
        console.log(res, 'article')
      })
    }
  },
  mounted() {},
  components: {
    TopTip
  }
}