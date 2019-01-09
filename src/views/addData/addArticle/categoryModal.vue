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
              v-for="tag in dynamicTags"
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
        <el-col :span="20" :offset="4" style="padding: 10px 0;">最多只能添加5个标签</el-col>
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
        <el-row>
          <el-col :span="24"></el-col>
        </el-row>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    showCategory: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dynamicTags: ["标签一", "标签二", "标签三"],
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
      inputValue: "",
      tagColor: "#fff"
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    close() {
      this.$emit("update:showCategory", false);
    }
  },
  mounted() {}
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
    min-height: 400px;
    min-width: 520px;
    padding: 30px;
    border-radius: 5px;

    .category-title {
      font-size: 18px;
      text-align: center;
      padding-bottom: 30px;
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


