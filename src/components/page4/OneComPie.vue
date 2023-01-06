<script setup>
import * as echarts from "echarts";
import { onMounted, watch } from "vue";
import companyClassData from "../../../public/js/companyClass.json";

const props = defineProps({
  pie: {
    type: Object,
    default: {},
  },
});

let myChart = null;

const renderChart = (data) => {
  const option = {
    title: [
      // {
      //   text: "新能源产业",
      //   left: "center",
      //   bottom: 5,
      //   textStyle: {
      //     color: "rgb(15,150,170)",
      //     fontSize: 8,
      //   },
      // },
      // {
      //   subtext: 'alignTo: "none" (default)',
      //   left: '16.67%',
      //   top: '75%',
      //   textAlign: 'center'
      // },
      // {
      //   subtext: 'alignTo: "none" (default)',
      //   left: '16.67%',
      //   top: '75%',
      //   textAlign: 'center'
      // },
    ],
    legend: {
      top: "2%",
      left: "center",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        type: "pie",
        radius: ["50%", "70%"],
        left: 0,
        right: "50%",
        top: 0,
        bottom: 0,
        // width: 400,
        itemStyle: {
          borderRadius: 2,
          borderColor: "#fff",
          borderWidth: 0,
        },
        label: {
          show: false,
        },
        labelLine: {
          length: 15,
          length2: 0,
          maxSurfaceAngle: 80,
        },
        data: data.status,
      },
      {
        type: "pie",
        radius: ["50%", "70%"],
        left: "50%",
        right: 0,
        top: 0,
        bottom: 0,
        itemStyle: {
          borderRadius: 2,
          borderColor: "#fff",
          borderWidth: 0,
        },
        label: {
          show: false,
        },
        labelLine: {
          length: 15,
          length2: 0,
          maxSurfaceAngle: 80,
        },
        data: data.type,
      },
    ],
  };
  myChart.setOption(option);
};

watch(
  () => props.pie,
  (newVal, oldVal) => {
    renderChart(newVal);
  }
);

onMounted(() => {
  myChart = echarts.init(document.getElementById("OneComPie"));
  renderChart(props.pie);
});
</script>

<template>
  <div
    class="wrapper animate__animated animate__fadeInDown animate__delay-0.6s"
  >
    <p><span>专利情况</span></p>
    <div class="pie-chart">
      <div id="OneComPie"></div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  position: absolute;
  right: 0.231771rem /* 178/768 */;
  top: 1.953125rem /* 1500/768 */;
  background-color: rgba(125, 125, 125, 0.1);
  z-index: 111;
}
.pie-chart {
  width: 2.415365rem /* 1855/768 */;
  height: 1.302083rem /* 1000/768 */;
  display: flex;
  flex-direction: row;
}
#OneComPie {
  width: 100%;
  height: 100%;
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
