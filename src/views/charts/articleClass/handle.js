import ArticleChart from '@/components/articleChart';
import visitorPie from '@/components/visitorPie';
import $ from '@/utils';
export default {
  name: 'userList',
  data() {
    return {
      seriesName: "标签类型",
      title: "文章标签分布",
      groupData: [],
      seriesData: []
    }
  },
  methods: {
    queryAllTags() {
      $.get('/tag/query').then(res => {
        let tagsArr = res.data;
        tagsArr.forEach((tag, index) => {
          this.groupData.push(tag.tag_name);
          this.seriesData.push({
            value: tag.tag_count,
            name: tag.tag_name
          })
        })

      })
    }
  },
  mounted() {
    this.queryAllTags();
  },
  components: {
    ArticleChart,
    visitorPie
  }
}