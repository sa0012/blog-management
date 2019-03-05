<template>
  <div class="user-list is-auto">
    <visitor-pie class="charts" :userDist.sync="userDist"></visitor-pie>
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
