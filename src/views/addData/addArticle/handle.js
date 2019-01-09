import {
  mavonEditor
} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import CategoryModal from './categoryModal'



export default {
  name: 'addArticle',
  data() {
    return {
      article: '',
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
      this.article = value;
    },
    submit() {
      console.log(this.config, 'config')
      this.showCategory = true;
    }
  },
  components: {
    mavonEditor,
    CategoryModal
  }
}