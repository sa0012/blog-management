<template>
  <div class="user-list" :style="{ height: `${contentHeight}px` }">
    <div class="show-template" :style="{ height: `${contentHeight - 30}px` }">
      <mavon-editor 
        class="compile-md" 
        style="height: 100%;" 
        :ishljs = "true"
        @change="changeEdit"></mavon-editor>
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

</style>
