<script setup>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
// defineProps({
//   option: {},
// });
const detail = ref("333333333");
let myChart = null;

const option = {
  grid: {
    left: "5%",
    right: "5%",
    bottom: "5%",
    top: "5%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    splitLine: {
      show: false,
      lineStyle: {
        color: "blue",
      },
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: "rgb(15,150,170)",
      },
    },
    axisLabel: {
      fontSize: 8,
    },
  },
  yAxis: {
    type: "category",
    data: [
      "新材料产业",
      "生物产业",
      "节能环保产业",
      "高端装备业",
      "新能源汽车",
      "数字创意产业",
      "新一代信息",
    ],
    axisLine: {
      show: false,
      lineStyle: {
        color: "rgb(15,150,170)",
      },
    },
    axisLabel: {
      fontSize: 8,
      padding: [0, 6],
    },
    axisTick: {
      show: false,
    },
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
      barWidth: "40%",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(255,255,255, 0.1)",
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          { offset: 0, color: "rgb(0,230,240)" },
          { offset: 1, color: "rgb(5,135,150)" },
        ]),
      },
    },
  ],
};

onMounted(() => {
  myChart = echarts.init(document.getElementById("bar2"));
  myChart.setOption(option);
});
</script>

<template>
  <div
    class="barChart animate__animated animate__fadeInDown animate__delay-0.6s"
  >
    <TitlePover :detail="detail" :left="false" />
    <div id="bar2"></div>
  </div>
</template>

<style scoped>
.barChart {
  position: absolute;
  right: 0.233073rem /* 179/768 */;
  bottom: 0.217448rem /* 167/768 */;
  z-index: 111;
}
#bar2 {
  width: 2.21875rem /* 1704/768 */;
  height: 1.354167rem /* 1040/768 */;
}
</style>
