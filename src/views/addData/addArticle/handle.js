let marked = require('marked');
let hljs = require('highlight.js');
import 'highlight.js/styles/default.css';


marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value;
    } else {
      return hljs.highlightAuto(code).value;
    }
  }
});


export default {
  name: 'addArticle',
  data() {
    return {
      articleContent: ''
    }
  },
  computed: {
    compiledMarkdown() {
      // let detail = '```js\n console.log("hello"); \n```';
      return marked(this.articleContent || '', {
        sanitize: true
      });
    },
    contentHeight() {
      return (document.body.clientHeight || document.documentElement.clientHeight || 0) - 60;
    }
  }
}