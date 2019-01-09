<template>
  <div class="user-list" :style="{ height: `${contentHeight}px` }">
    <el-row style="margin-bottom: 20px; display: flex; align-items: center;">
      <el-col :span="12" style="font-size: 24px; font-weight: bold; letter-spacing: 1px;">BLOG文章发布</el-col>
      <el-col :span="12">
        <el-button type="primary" style="float: right;" @click="submit">文章发布</el-button>
      </el-col>
    </el-row>
    <div class="show-template" :style="{ height: `${contentHeight - 100}px` }">
      <mavon-editor 
        class="compile-md" 
        style="height: 100%;"
        @change="editorChange"></mavon-editor>
    </div>

    <category-modal :showCategory.sync="showCategory"></category-modal>
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
</style>
