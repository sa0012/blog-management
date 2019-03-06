<template>
  <div class="fillcontain category" ref="category" v-show="showArticle">
    <section class="category-wrap" ref="look">
      <h3 class="category-title">{{ articleObj.title }}</h3>
      <!-- <div class="author">{{ articleObj.author }}</div> -->
      <i class="el-icon-close close-icon" @click="close"></i>
      <div class="show-template">
        <mavon-editor
          class="compile-md"
          v-model="articleObj.article"
          codeStyle="vs2015"
          :toolbarsFlag="toolbarsFlag"
          :subfield="subfield"
          defaultOpen="preview"
          :style="{ 'height': currentHeight }"
        ></mavon-editor>
      </div>
    </section>
  </div>
</template>

<script>
import $ from "@/utils";
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  props: {
    showArticle: {
      type: Boolean,
      default: false
    },
    articleObj: {
      type: Object,
      default: null
    }
  },
  watch: {
    showArticle(newVal, oldVal) {
      if (newVal) {
      }
    }
  },
  data() {
    return {
      article: "dddderrrrrr",
      toolbarsFlag: false,
      subfield: false
    };
  },
  computed: {
    currentHeight() {
      return (document.body.clientHeight || document.documentElement.clientHeight || 0) - 100 + 'px';
    }
  },
  created() {},
  methods: {
    close() {
      this.$emit("update:showArticle", false);
    }
  },
  mounted() {},
  components: {
    mavonEditor
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
    height: 100%;
    width: 100%;
    padding: 30px;
    border-radius: 5px;
    z-index: 1601;
    // overflow: hidden;
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


