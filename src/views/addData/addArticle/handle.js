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
      articleContent: '',
      toolArr: [
        {
          icon: '',
          text: '重做',
          isShow: false
        },
        {
          icon: '',
          text: '加粗',
          isShow: false
        },
        {
          icon: '',
          text: '斜体',
          isShow: false
        },
        {
          icon: '',
          text: '标题',
          isShow: false
        },
        {
          icon: '',
          text: '删除线',
          isShow: false
        },
        {
          icon: '',
          text: '无序列表',
          isShow: false
        },
        {
          icon: '',
          text: '有序列表',
          isShow: false
        },
        {
          icon: '',
          text: '待办事项',
          isShow: false
        },
        {
          icon: '',
          text: '引用',
          isShow: false
        },
        {
          icon: '',
          text: '代码',
          isShow: false
        },
        {
          icon: '',
          text: '超链接',
          isShow: false
        },
        {
          icon: '',
          text: '图片',
          isShow: false
        },
        {
          icon: '',
          text: '导入',
          isShow: false
        },
        {
          icon: '',
          text: '导出',
          isShow: false
        },
      ]
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
  },
  methods: {
    showBackground(index) {

    }
  }
}