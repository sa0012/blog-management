<template>
  <div class="user-list" :style="{ height: `${contentHeight}px` }">
    <div class="edit-tool"></div>
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
  padding: 20px;overflow: hidden;
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
