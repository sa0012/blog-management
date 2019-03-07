import ArticleChart from '@/components/articleChart';
import visitorPie from '@/components/visitorPie';
import RingChart from '@/components/ringChart';
import $ from '@/utils';
export default {
  name: 'userList',
  data() {
    return {
      seriesName: "标签类型",
      title: "文章标签分布",
      groupData: [],
      seriesData: [],
      ringSeriesName: '分类类型',
      ringTitle: '文章分类分布',
      ringGroupData: [],
      ringSeriesData: [],
      articleSeriesName: '分类类型',
      articleTitle: '文章分类分布',
      articleGroupData: [],
      articleSeriesData: [],
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
    },
    queryAllCategory() {
      $.get('/count/categoryCount').then(res => {
        let categoryArr = res.data;
        categoryArr.forEach((cate, index) => {
          this.ringGroupData.push(cate.category_name);
          this.ringSeriesData.push({
            value: cate.category_count,
            name: cate.category_name,
          })
        })
      })
    },
    queryMonthDate() {
      $.get('/count/montylyCount').then(res => {
        // let keyArr = Object.keys(res.data);
        // let valuesArr = Object.values(res.data);
        let article = res.data.article;
        for (let key in article) {
          this.articleGroupData.push(key);
        }
        this.articleGroupData.sort();
        this.articleGroupData.forEach((item, index) => {
          this.articleSeriesData.push({
            value: article[item],
            name: article[item],
          })
        });

        console.log(this.articleGroupData, this.articleSeriesData)

      })
    }
  },
  mounted() {
    Promise.all([
      this.queryMonthDate(),
      this.queryAllTags(),
      this.queryAllCategory(),
    ])
  },
  components: {
    ArticleChart,
    visitorPie,
    RingChart
  }
}