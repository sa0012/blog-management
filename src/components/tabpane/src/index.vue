<template>
  <div class="sq-tab-content" v-show="$parent.currentActive === name">
    <slot></slot>
    <div v-if="$slots.title" ref="title" class="sq-tab-title-wrapper">
      <slot name="title" />
    </div>
  </div>
</template>

<script>
export default {
  /**
   * name在tabs组件逻辑引用，若修改name值，则tabs中需相应修改
   */
  name: 'sq-tabpane',

  props: {
    name: [String, Number],
    label: [String, Number]
  },

  mounted () {
    this.$parent.updateNav()

    if (this.$slots.title) {
      this.$parent.renderTitle(this.$refs.title, this.$parent.getPane().indexOf(this))
    }
  }
}
</script>

<style lang="scss">
.sq-tab-title-wrapper {
  width: 100%;
  height: 100%;
}
</style>
