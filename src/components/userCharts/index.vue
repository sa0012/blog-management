<template>
  <div class="user">
    <div id="user" class style="width: 90%;height:450px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  props: {
    xAxisData: {
      type: Array,
      default: []
    },
    countData: {
      type: Object,
      default: {}
    }
  },
  watch: {
    xAxisData: {
      handler(newVal, oldVal) {
        console.log(newVal, 'newVal')
        this.initData();
      },
      deep: true
    }
  },
  methods: {
    initData() {
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
          data: ["用户", "留言", "反馈", "文章"]
        },
        xAxis: [
          {
            type: "category",
            data: this.xAxisData,
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
            max: 100,
            interval: 10,
            axisLabel: {
              formatter: "{value} 人"
            }
          },
          {
            type: "value",
            name: "数量",
            min: 0,
            max: 50,
            interval: 5,
            axisLabel: {
              formatter: "{value} 篇"
            }
          }
        ],
        series: [
          {
            name: "用户",
            type: "bar",
            data: this.countData.user,
          },
          {
            name: "留言",
            type: "bar",
            data: this.countData.leave
          },
          {
            name: "反馈",
            type: "bar",
            data: this.countData.feedback
          },
          {
            name: "文章",
            type: "line",
            yAxisIndex: 1,
            data: this.countData.article
          }
        ]
      };
      this.myChart.setOption(option);
    }
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById("user"));
    this.initData();
  }
};
</script>

