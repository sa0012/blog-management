<template>
  <div class="user-list" :style="{ height: `${contentHeight}px` }">
    <div class="edit-tool"></div>
    <div class="edit">
      <textarea class="entry-mes" v-model="articleContent"></textarea>
      <div v-html="compiledMarkdown" class="show-template"></div>
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
  height: 100%;
  display: flex;
}

.entry-mes,
.show-template {
  flex: 1;
  height: 100%;
}

.show-template {
  // text-align: center;
}

.entry-mes {
  resize: none;
  padding: 20px;
  background: #f5f5f5;
  box-sizing: border-box;
  border: none;
  outline: none;
  -webkit-appearance: none;
}

.edit-tool {
  height: 44px;
  width: 100%;
  line-height: 44px;
  background: #e0e0e0;
}
</style>
