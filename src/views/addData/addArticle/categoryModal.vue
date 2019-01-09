<template>
  <div class="fillcontain category" ref="category" v-show="showCategory">
    <transition name="form-fade" mode="in-out">
      <section class="category-wrap">
        <h3 class="category-title">文章发布</h3>
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
        <el-row style="padding-top: 15px;">
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
          <el-button @click="publish">发布文章</el-button>
        </el-col>
        <i class="el-icon-close close-icon" @click="close"></i>
      </section>
    </transition>
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
      default: ''
    }
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "前端"
        },
        {
          value: "选项2",
          label: "后端"
        },
        {
          value: "选项3",
          label: "其他"
        }
      ],
      value: "",
      inputVisible: false,
      isShowCreateTags: false,
      inputValue: "",
      tagColor: "#fff",
      config: {
        article: this.article,
        category: '',
        tags: [],
      },
    };
  },
  methods: {
    publish() {
      if (!this.config.tags) {
        this.$message("请添加文章标签");
        return;
      } else if (this.config.tags.length > 5) {
        this.$message("文章标签不能超过5个");
        return;
      }
      $.post("/article/addArticle", this.config).then(res => {
        console.log(res, "article");
      });
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
        this.inputVisible = false;
      }
    },

    handleInputConfirm() {
      // if (this.config.tags.length > 5) return false;
      console.log("这是添加操作");
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
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(-50%, -50px, 0);
  opacity: 0;
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
</style>


