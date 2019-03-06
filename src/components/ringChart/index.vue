<template>
  <div class="ring">
    <div id="ring" class style="width: 90%;height:450px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  props: {
    ringGroupData: {
      type: Array,
      dafault: []
    },
    ringSeriesData: {
      type: Array,
      dafault: []
    },
    ringSeriesName: {
      type: String,
      default: ""
    },
    ringTitle: {
      type: String,
      default: ""
    }
  },
  watch: {
    ringSeriesData: {
      handler(newVal, oldVal) {
        this.initData();
      }
    }
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById("ring"));
    this.initData();
  },
  methods: {
    initData() {
      const option = {
        title: {
          text: this.ringTitle,
          subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: this.ringGroupData
        },
        series: [
          {
            name: this.ringSeriesName,
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.ringSeriesData
          }
        ]
      };

      this.myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
.ring {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
