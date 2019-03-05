<template>
  <div class="user-list is-auto">
    <visitor-pie 
      class="charts" 
      :seriesName="seriesName"
      :title="title"
      :groupData="groupData"
      :seriesData="seriesData"></visitor-pie>
  </div>
</template>

<script>
import Controller from './handle'
export default Controller
</script>

<style lang="scss" scoped>
.charts {
  padding: 30px 0;
}
</style>
