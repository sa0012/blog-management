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
  computed: {
    compiledMarkdown() {
      let detail = '当马孔多在《圣经》所载那种龙卷风的怒号中化作可怕的瓦砾与尘埃漩涡时，奥雷里亚诺为避免在熟知的事情上浪费时间又跳过十一页 `test` 预言他正在破解羊皮卷的最后一页，宛如他正在会言语的镜中照影。他再次跳读去寻索自己死亡的日期和情形，但没等看到最后一行便已明白自己不会再走出这房间，因为可以预料这座镜子之城——或蜃景之城——将在奥雷里亚诺·巴比伦全部译出羊皮卷之时被飓风抹去 `test`、`test` 两大应用系统，让开发者更好、更快、更方便开发移动应用。\n\n';
      return marked(detail || '', {
        sanitize: true
      });
    }
  }
}