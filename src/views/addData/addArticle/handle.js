import {
  mavonEditor
} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import CategoryModal from './categoryModal'
import $ from '@/utils'



export default {
  name: 'addArticle',
  data() {
    return {
      article: '',
      showCategory: false,
      articleId: '',
      userId: '',
      type: '',
      articleConfig: {
        title: '',
        author: '',
        category: '',
        article: '',
        tags: []
      }
    }
  },
  created() {
    try {
      this.articleId = this.$route.query._id || '';
      this.userId = this.$route.query.user_id || '';
      this.type = this.$route.query.type || ''
    } catch (e) {}

  },
  computed: {
    contentHeight() {
      return (document.body.clientHeight || document.documentElement.clientHeight || 0) - 60;
    },
  },
  methods: {
    getUpdateArticle(value) {
      this.article = value;
    },
    editorChange(value, render) {
      console.log(value)
      this.article = value;
    },
    submit() {
      if (this.type) {}
      this.showCategory = true;
    },
    lookArticle(_id, user_id) {
      $.post('/article/findOneArticle', {
        _id,
        user_id
      }).then(res => {
        console.log(res)
        this.article = res.data.article
        this.articleConfig = Object.assign({}, res.data)
      })
    },
  },
  mounted() {
    if (this.type === 'modify') {
      this.lookArticle(this.articleId, this.userId);
    }
  },
  components: {
    mavonEditor,
    CategoryModal
  }
}