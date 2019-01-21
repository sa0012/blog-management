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
    // 绑定@imgAdd event
    imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      const formdata = new FormData();
      formdata.append("file", $file);
      console.log($file, 'formdata')
      // 从后端获取上传凭证token
      $.post("/upload/artiUploadImg", formdata, config).then(res => {
        console.log(res, "imgUrl");
        $vm.$img2Url(pos, res.data.key);
      });
      // axios({
      //   url: 'server url',
      //   method: 'post',
      //   data: formdata,
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   },
      // }).then((url) => {
      //   // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
      //   /**
      //    * $vm 指为mavonEditor实例，可以通过如下两种方式获取
      //    * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
      //    * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
      //    */
      //   $vm.$img2Url(pos, url);
      // })
    },
    imgDel(pos, $file) {
      // delete this.img_file[pos];
      console.log(pos, $file)
    },
    getUpdateArticle(value) {
      this.article = value.article;
    },
    editorChange(value, render) {
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