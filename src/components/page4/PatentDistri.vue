<script setup>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
import patentDistri from "../../../public/js/patentDistri.json";
// defineProps({
//   option: {},
// });
let myChart = null;
const data = patentDistri.map((el) => [el.amount, el.patent]);
const option = {
  tooltip: {
    trigger: "axis",
    formatter: function (params, ticket, callback) {
      return `企业数量${params[0].data[1]}<br >有效专利数${params[0].data[0]}`;
    },
  },
  backgroundColor: "rgba(125, 125, 125, 0.1)",
  grid: {
    left: "5%",
    right: "2%",
    bottom: "8%",
    top: "20%",
    containLabel: true,
  },
  xAxis: {
    name: "有效专利数",
    nameGap: 20,
    nameLocation: "center",
    axisLabel: {
      fontSize: 8,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      // show: true,
      lineStyle: {
        // color: "rgb(15,150,170)",
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        // color: "red",
      },
    },
  },
  yAxis: {
    name: "企业数量",
    nameGap: 30,
    nameLocation: "center",
    axisLabel: {
      fontSize: 8,
    },
    axisLine: {
      // show: true,
      lineStyle: {
        // color: "rgb(15,150,170)",
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        // color: "red",
      },
    },
  },
  series: [
    {
      data: data,
      type: "line",
      smooth: true,
      symbolSize: 3,
      itemStyle: {
        color: "rgb(245,50,65)",
      },
      lineStyle: {
        width: 1,
        color: "rgb(245,50,65)",
      },
      markPoint: {
        itemStyle: {
          color: "rgb(245,50,65)",
        },
        data: [
          { type: "max", name: "Max" },
          { type: "min", name: "Min" },
        ],
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
