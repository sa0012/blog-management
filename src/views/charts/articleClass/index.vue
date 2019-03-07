<template>
  <div class="user-list is-auto">
    <h2 class="section-title">文章统计</h2>
    <article-chart
      :articleSeriesName="articleSeriesName"
      :articleTitle="articleTitle"
      :articleGroupData="articleGroupData"
      :articleSeriesData="articleSeriesData"
    ></article-chart>
    <visitor-pie
      class="charts"
      :seriesName="seriesName"
      :title="title"
      :groupData="groupData"
      :seriesData="seriesData"
    ></visitor-pie>
    <ring-chart
      :ringSeriesName="ringSeriesName"
      :ringTitle="ringTitle"
      :ringGroupData="ringGroupData"
      :ringSeriesData="ringSeriesData"
    ></ring-chart>
  </div>
</template>

<script>
import Controller from "./handle";
export default Controller;
</script>

<style lang="scss" scoped>
.section-title {
  text-align: center;
  font-size: 30px;
  margin-bottom: 10px;
}
</style>

