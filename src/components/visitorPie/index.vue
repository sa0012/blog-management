<template>
  <div class="visitorpie">
    <div id="visitorpie" class style="width: 90%;height:450px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  props: {
    userDist: {
      type: Object,
      dafault: {
        bjUser: 0,
        shUser: 0,
        gzUser: 0,
        szUser: 0,
        otherUser: 0
      }
    }
  },
  watch: {
    userDist: {
      handler(newVal, oldVal) {
        this.initData();
      },
    }
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById("visitorpie"));
    this.initData();
  },
  methods: {
    initData() {
      const option = {
        title: {
          text: "用户分布",
          subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["北京", "上海", "深圳", "杭州", "其他"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: this.userDist.bjUser, name: "北京" },
              { value: this.userDist.shUser, name: "上海" },
              { value: this.userDist.szUser, name: "深圳" },
              { value: this.userDist.gzUser, name: "杭州" },
              { value: this.userDist.otherUser, name: "其他" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };

      this.myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
.visitorpie {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
