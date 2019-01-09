import $ from '@/utils'
import {
  mavonEditor
} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import CategoryModal from './categoryModal'



export default {
  name: 'addArticle',
  data() {
    return {
      config: {
        article: '',
        category: 'markdown',
        tags: ['js', 'vue', 'markdown'],
      },
      showCategory: false
    }
  },
  computed: {
    contentHeight() {
      return (document.body.clientHeight || document.documentElement.clientHeight || 0) - 60;
    },
  },
  methods: {
    editorChange(value, render) {
      this.config.article = value;
    },
    submit() {
      console.log(this.config, 'config')
      this.showCategory = true;
      // $.post('/article/addArticle', this.config).then(res => {
      //   console.log(res, 'article')
      // })
    }
  },
  components: {
    mavonEditor,
    CategoryModal
  }
}