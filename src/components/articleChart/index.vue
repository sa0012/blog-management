<template>
  <div class="article">
    <div id="article" class style="width: 90%;height:450px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  props: {
    articleGroupData: {
      type: Array,
      dafault: []
    },
    articleSeriesData: {
      type: Array,
      dafault: []
    },
    articleSeriesName: {
      type: String,
      default: ""
    },
    articleTitle: {
      type: String,
      default: ""
    }
  },
  watch: {
    articleSeriesData: {
      handler(newVal, oldVal) {
        this.initData();
      }
    }
  },
  methods: {
    initData() {
      const option = {
        title: {
          text: "文章发布月度统计"
          // x: "center",
          // subtext: "纯属虚构"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["文章"]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: this.articleGroupData
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "数量",
            min: 0,
            max: 50,
            interval: 10,
            axisLabel: {
              formatter: "{value} 篇"
            }
          }
        ],
        series: [
          {
            name: "文章",
            type: "bar",
            data: this.articleSeriesData,
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      };

      this.myChart.setOption(option);
    }
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById("article"));
    this.initData();
  }
};
</script>

