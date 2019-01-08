import $ from '@/utils'
import {
  mavonEditor
} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'




export default {
  name: 'addArticle',
  data() {
    return {
      config: {
        articleContent: '',
        category: 'markdown',
        tags: ['js', 'vue', 'markdown'],
        // code_token: window.sessionStorage.getItem('code_token')
      }
    }
  },
  computed: {
    contentHeight() {
      return (document.body.clientHeight || document.documentElement.clientHeight || 0) - 60;
    },
  },
  methods: {
    editorChange(value, render) {
      this.config.articleContent = value;
    },
    submit() {
      console.log(this.config, 'config')
      $.post('/leave', this.config).then(res => {
        console.log(res, 'article')
      })
    }
  },
  components: {
    mavonEditor
  }
}