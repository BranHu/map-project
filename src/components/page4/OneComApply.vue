<script setup>
import * as echarts from "echarts";
import { onMounted, watch } from "vue";

const props = defineProps({
  apply: {
    type: Array,
    default: [],
  },
});

const renderChart = (data) => {
  const axisData = data.map((el) => el.year);
  const rejectData = data.map((el) => el.apply - el.grant);
  const grantData = data.map((el) => el.grant);
  const option = {
    grid: {
      left: "5%",
      right: "5%",
      bottom: "5%",
      // top: "10%",
      containLabel: true,
    },
    legend: {
      textStyle: {
        color: "#fff",
      },
      data: ["授权量", "申请量"],
    },
    xAxis: {
      type: "category",
      data: axisData,
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
        name: "授权量",
        data: grantData,
        type: "bar",
        stack: "apply",
        // barWidth: "40%",
        // showBackground: true,
        // backgroundStyle: {
        //   color: "rgba(255,255,255, 0.1)",
        // },
        // itemStyle: {
        //   color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
        //     { offset: 0, color: "rgb(0,230,240)" },
        //     { offset: 1, color: "rgb(5,135,150)" },
        //   ]),
        // },
        itemStyle: {
          color: "rgb(5,135,150)",
        },
      },
      {
        name: "申请量",
        data: rejectData,
        type: "bar",
        stack: "apply",
        itemStyle: {
          color: "rgb(0,230,240)",
        },
      },
    ],
  };
  myChart.setOption(option);
};

watch(
  () => props.apply,
  (newVal, oldVal) => {
    renderChart(newVal);
  }
);

let myChart = null;

onMounted(() => {
  myChart = echarts.init(document.getElementById("OneComApply"));
  renderChart(props.apply);
});
</script>

<template>
  <div
    class="barChart animate__animated animate__fadeInDown animate__delay-0.6s"
  >
    <p><span>申请量&授权量</span></p>
    <div id="OneComApply"></div>
  </div>
</template>

<style scoped>
.barChart {
  position: absolute;
  right: 0.233073rem /* 179/768 */;
  top: 0.700521rem /* 538/768 */;
  background-color: rgba(125, 125, 125, 0.1);
  z-index: 111;
}
#OneComApply {
  width: 2.415365rem /* 1855/768 */;
  height: 1.041667rem /* 800/768 */;
}
p {
  width: 2.415365rem /* 1855/768 */;
  height: 0.126302rem /* 97/768 */;
  line-height: 0.126302rem /* 97/768 */;
  /* background-color: rgba(5, 135, 150, 0.7); */
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
