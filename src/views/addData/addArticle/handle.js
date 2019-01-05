// let marked = require('marked');
// let hljs = require('highlight.js');
// import 'highlight.js/styles/default.css';

import {
  mavonEditor
} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'




export default {
  name: 'addArticle',
  data() {
    return {
      articleContent: '',
      toolArr: [{
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
    contentHeight() {
      return (document.body.clientHeight || document.documentElement.clientHeight || 0) - 60;
    }
  },
  methods: {
    showBackground(index) {
      console.log(index)
    }
  },
  components: {
    mavonEditor
  }
}