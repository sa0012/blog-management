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
        tags: [],
      },
      uploadImgArr: []
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
    userMsg() {
      return this.$store.state.user;
    },
  },
  methods: {
    // 绑定@imgAdd event
    imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      if (this.userMsg.role !== 'ADMIN') {
        this.$message.error('您不是超级管理员，没有权限上传图片');
        return;
      };
      const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      const formdata = new FormData();
      formdata.append("file", $file);
      // 从后端获取上传凭证token
      $.post("/upload/artiUploadImg", formdata, config).then(res => {
        this.$refs.editor.$img2Url(pos, res.data.key);
        this.uploadImgArr.push(res.data.key)
      });
    },
    imgDel(pos) {
      // delete this.img_file[pos];
      if (this.userMsg.role !== 'ADMIN') {
        this.$message.error('您不是超级管理员，没有权限删除图片');
        return;
      };
      const imgKey = this.uploadImgArr[pos[1]].split('/')[3]
      $.post('/upload/deleteArticleImg', {
        key: imgKey
      }).then(res => {
        this.$refs.editor.$refs.toolbar_left.$imgDelByFilename
        this.uploadImgArr.splice(pos[1], 1)
      })
    },
    getUpdateArticle(value) {
      this.article = value.article;
    },
    // 函数节流
    throttle(method, context) {
      method.tId && clearTimeout(method.tId)
      method.tId = setTimeout(() => {
        method.call(context)
      }, 600)
    },
    handleCertificateNoInput(value, render) {
      if (value) {
        this.article = value;
        this.throttle(this.editorChange)
      }
    },
    editorChange() {},
    submit() {
      if (this.userMsg.role !== 'ADMIN') {
        this.$message.error('您不是超级管理员，没有权限发布文章');
        return;
      };
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