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
      "有效专利数1-5",
      "有效专利数6-10",
      "有效专利数11-50",
      "有效专利数>50",
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
      data: [1949, 204, 199, 39],
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
  myChart = echarts.init(document.getElementById("PatentDistri"));
  myChart.setOption(option);
});
</script>

<template>
  <div
    class="StackedLine animate__animated animate__fadeInDown animate__delay-0.6s"
  >
    <p><span>有效专利布局</span></p>
    <div id="PatentDistri"></div>
  </div>
</template>

<style scoped>
.StackedLine {
  position: absolute;
  right: 0.231771rem /* 178/768 */;
  bottom: 0.213542rem /* 164/768 */;
  z-index: 111;
}
#PatentDistri {
  width: 2.415365rem /* 1855/768 */;
  height: 1.041667rem /* 800/768 */;
}
p {
  width: 2.415365rem /* 1855/768 */;
  height: 0.126302rem /* 97/768 */;
  line-height: 0.126302rem /* 97/768 */;
  background-image: linear-gradient(
    to right,
    rgba(5, 135, 150, 0.7),
    rgba(5, 135, 150, 0)
  );
}
span {
  color: white;
  font-size: 0.048177rem /* 37/768 */;
  margin-left: 0.130208rem /* 100/768 */;
}
</style>
