<template>
  <div class="fillcontain category" ref="category" v-show="showCategory">
    <section class="category-wrap">
      <h3 class="category-title">文章发布</h3>
      <el-row>
        <el-col :span="4">文章标题：</el-col>
        <el-col :span="20">
          <el-input size="small" v-model="config.title" maxlength="30"></el-input>
        </el-col>
      </el-row>
      <el-row style="padding-top: 20px;">
        <el-col :span="4">文章描述：</el-col>
        <el-col :span="20">
          <el-input size="small" v-model="config.desc" maxlength="100"></el-input>
        </el-col>
      </el-row>
      <el-row style="padding: 20px 0;">
        <el-col :span="4">文章作者：</el-col>
        <el-col :span="20">
          <el-input size="small" v-model="config.author"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">文章标签：</el-col>
        <el-col :span="20">
          <el-tag
            :key="tag"
            v-for="tag in config.tags"
            closable
            :disable-transitions="false"
            :color="tagColor"
            @close.stop="handleClose(tag)"
          >{{tag}}</el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          ></el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 创建标签</el-button>
        </el-col>
      </el-row>
      <el-col :span="20" :offset="4" style="padding: 20px 0;">最多只能添加5个标签</el-col>
      <el-row style="padding-top: 20px;">
        <el-col :span="4">文章分类</el-col>
        <el-col :span="20">
          <el-select v-model="value" placeholder="请选择文章分类">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-col :span="24" style="margin-top: 60px; text-align: right;">
        <el-button @click="close">取消</el-button>
        <el-button @click="publish">{{ type === 'modify' ? '修改文章' : '发布文章' }}</el-button>
      </el-col>
      <i class="el-icon-close close-icon" @click="close"></i>
    </section>
  </div>
</template>

<script>
import $ from "@/utils";
export default {
  props: {
    showCategory: {
      type: Boolean,
      default: false
    },
    article: {
      type: String,
      default: ""
    },
    articleId: {
      type: String,
      default: ""
    },
    userId: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    articleConfig: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      options: [
        {
          value: "1",
          label: "前端"
        },
        {
          value: "2",
          label: "后端"
        },
        {
          value: "3",
          label: "其他"
        }
      ],
      value: "",
      inputVisible: false,
      isShowCreateTags: false,
      inputValue: "",
      tagColor: "#fff",
      config: {
        title: "",
        author: "",
        desc: "",
        article: "",
        category: "",
        tags: [],
        user: {
          user_name: "",
          user_avatar: "",
          address: null
        }
      }
    };
  },
  computed: {
    userMsg() {
      return this.$store.state.user;
    },
  },
  watch: {
    showCategory(newVal, oldVal) {
      if (this.type === "modify" && newVal) {
        try {
          console.log(this.articleConfig, "configArticle");
          this.config.title = this.articleConfig.title;
          this.config.author = this.articleConfig.author;
          this.config.category = this.articleConfig.category;
          this.config.desc = this.articleConfig.desc;
          this.config.user = Object.assign({}, this.articleConfig.user);
          this.config.tags = JSON.parse(
            JSON.stringify(this.articleConfig.tags)
          );
          this.config._id = this.articleConfig._id;
          this.config.user_id = this.articleConfig.user_id;

          this.options.forEach((item, index) => {
            if (item.label === this.config.category) {
              this.value = item.value;
            }
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
  },
  created() {
    try {
      this.config.user.user_name = this.userMsg.user_id;
      this.config.user.user_avatar = this.userMsg.avatar;
      this.config.user.address = Object.assign({}, this.userMsg.address);
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    publish() {
      this.config.article = this.article;
      try {
        let category = this.options.filter(
          (item, index) => item.value === this.value
        );
        this.config.category = this.options[this.value];
        this.config.category = category[0].label;
      } catch (e) {
        console.log(e);
      }

      console.log(this.config, this.articleConfig, "config");
      if (!this.config.article) {
        this.$message.warning("你还没有填写文章内容");
        return;
      } else if (!this.config.title) {
        this.$message.warning("你还没有填写文章标题");
        return;
      } else if (!this.config.desc) {
        this.$message.warning("你还没有填写文章描述");
        return;
      } else if (!this.config.author) {
        this.$message.warning("你还没有填写文章作者");
        return;
      } else if (this.config.tags.length <= 0) {
        this.$message.warning("请添加文章标签");
        return;
      } else if (this.config.tags.length > 5) {
        this.$message.warning("文章标签不能超过5个");
        return;
      } else if (!this.config.category) {
        this.$message.warning("请选择一个文章分类");
        return;
      }
      if (this.type === "modify") {
        console.log(this.config, "modify");
        $.post("/article/updateArticle", this.config).then(res => {
          if (res.code == 200) {
            this.config.category = res.data.category;
            this.config.title = res.data.title;
            this.config.author = res.data.category;
            this.config.desc = res.data.desc;
            this.config.tags = JSON.parse(JSON.stringify(res.data.tags));
            this.config.user = Object.assign({}, res.data.user);
            this.$message.success("文章修改成功");
            this.$emit("update:showCategory", false);
            this.$emit("updateArticle", res.data.article);
          }
        });
      } else {
        console.log(this.config, "add");
        $.post("/article/addArticle", this.config).then(res => {
          this.$message.success("文章发布成功");
          this.$emit("update:showCategory", false);
          this.$emit("updateArticle", res.data);
        });
      }
    },
    handleClose(tag) {
      this.config.tags.splice(this.config.tags.indexOf(tag), 1);
    },

    showInput() {
      if (this.config.tags.length < 5) {
        this.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      } else {
        this.$message.warning("文章标签不能超过5个");
        this.inputVisible = false;
      }
    },

    handleInputConfirm() {
      console.log(111, "触发");
      let inputValue = this.inputValue;
      if (inputValue) {
        this.config.tags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    close() {
      this.$emit("update:showCategory", false);
    }
  },
  mounted() {
    if (this.config.tags.length > 5) {
      this.inputVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.category {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1600;

  .category-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    min-height: 300px;
    min-width: 520px;
    padding: 30px;
    border-radius: 5px;
    z-index: 1601;
    animation: slide 0.5s ease-out;

    .category-title {
      font-size: 18px;
      text-align: center;
      padding-bottom: 30px;
    }

    .close-icon {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 30px;
      color: #999;
      display: block;
      transition: all 0.5s ease;

      &:hover {
        transform: rotateZ(-180deg);
        color: red;
      }
    }
  }
}

.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

@keyframes slide {
  from {
    opacity: 0;
    transform: translate(-50%, 0);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
</style>


