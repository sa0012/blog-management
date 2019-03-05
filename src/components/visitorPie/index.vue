<template>
  <div class="visitorpie">
    <div id="visitorpie" class style="width: 90%;height:450px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  props: {
    groupData: {
      type: Array,
      dafault: []
    },
    seriesData: {
      type: Array,
      dafault: []
    },
    seriesName: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  watch: {
    seriesData: {
      handler(newVal, oldVal) {
        this.initData();
      }
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
          text: this.title,
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
          data: this.groupData
        },
        series: [
          {
            name: this.seriesName,
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.seriesData,
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
