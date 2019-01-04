<template>
  <div class="user-list" :style="{ height: `${contentHeight}px` }">
    <div class="edit-tool">
      <div class="author">
        <!-- <i class="el-icon-arrow-left author-back"></i> -->
        <span>创作中心</span>
      </div>
      <div class="md-tool">
        <i class="el-icon-refresh tool-icon" v-for="(item, index) in toolArr" :key="index" @mousemove="showBackground(index)"></i>
      </div>
    </div>
    <div class="edit" :style="{ height: `${contentHeight - 74}px` }">
      <div class="entry-mes">
        <textarea v-model="articleContent" class="art-edit"></textarea>
      </div>
      <div class="show-template">
        <div v-html="compiledMarkdown" class="compile-md"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Controller from "./handle";
export default Controller;
</script>


<style lang="scss" scoped>
.user-list {
  padding: 15px;
  box-sizing: border-box;
}

.edit {
  display: flex;
}

.entry-mes,
.show-template {
  flex: 1;
  height: 100%;
  padding: 20px;
  overflow: hidden;
}

.show-template {
  // text-align: center;
}

.entry-mes {
  background: #f5f5f5;
  box-sizing: border-box;
}

.edit-tool {
  height: 44px;
  line-height: 44px;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  color: #666;

  .author {
    font-size: 20px;
    font-weight: bold;
    padding: 0 10px;
  }

  .md-tool {
    padding: 0 20px 0 50px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .tool-icon {
      font-size: 18px;
      font-weight: bold;
    }
  }
}

.art-edit {
  border: none;
  outline: none;
  -webkit-appearance: none;
  resize: none;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.compile-md {
  width: 100%;
  height: 100%;
  overflow: auto;
  // background: green;
}
</style>
