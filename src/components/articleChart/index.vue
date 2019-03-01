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
  methods: {
    initData() {
      const colors = ["#5793f3"];
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ["文章"]
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "用户",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} 人"
            }
          },
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
            type: "line",
            yAxisIndex: 1,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          },
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

