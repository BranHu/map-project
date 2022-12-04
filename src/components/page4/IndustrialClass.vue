<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";
// defineProps({
//   option: {},
// });
let myChart = null;

const option = {
  grid: {
    left: "5%",
    right: "5%",
    bottom: "5%",
    top: "10%",
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: ['生命健康', '光电子科技', '网络通信', '先进装备制造业', '能源及环保', '材料化工', '其他'],
    axisLine: {
      show: false,
      lineStyle: {
        color: "rgb(15,150,170)",
      },
    },
    axisLabel: {
      fontSize: 6,
      // padding: [0, 1]
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
    splitLine: {
      show: false,
      lineStyle: {
        color: "blue",
      },
    },
    axisLabel: {
      fontSize: 8,
      // padding: [0, 1]
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: "rgb(15,150,170)",
      },
    },
  },
  series: [
    {
      data: [423, 368, 303, 298, 199, 67, 733],
      type: 'bar',
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
    }
  ]
};

onMounted(() => {
  myChart = echarts.init(document.getElementById("IndustrialClass"));
  myChart.setOption(option);
});
</script>

<template>
  <div
    class="barChart animate__animated animate__fadeInDown animate__delay-0.6s"
  >
    <p><span>产业分类</span></p>
    <div id="IndustrialClass"></div>
  </div>
</template>

<style scoped>
.barChart {
  position: absolute;
  right: 0.233073rem /* 179/768 */;
  top: 0.700521rem /* 538/768 */;
  z-index: 111;
}
#IndustrialClass {
  width: 2.415365rem /* 1855/768 */;
  height: 1.041667rem /* 800/768 */;
}
p {
  width: 2.415365rem /* 1855/768 */;
  height: 0.126302rem /* 97/768 */;
  line-height: 0.126302rem /* 97/768 */;
  /* background-color: rgba(5, 135, 150, 0.7); */
  background-image:linear-gradient(to right, rgba(5, 135, 150, 0.7), rgba(5, 135, 150, 0));
}
span {
  color: white;
  font-size: 0.048177rem /* 37/768 */;
  margin-left: 0.130208rem /* 100/768 */;
}
</style>
