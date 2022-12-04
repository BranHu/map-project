<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";
// defineProps({
//   option: {},
// });

const option = {
  // title: {
  //   text: 'Basic Radar Chart'
  // },
  // legend: {
  //   data: ['技术A', '技术B']
  // },
  splitArea: {
    areaStyle: {
      opacity: 0.5,
    },
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: "新材料产业", max: 6500 },
      { name: "新能源产业", max: 16000 },
      { name: "生物产业", max: 30000 },
      { name: "节能环保产业", max: 38000 },
      { name: "高端装备制造产业", max: 52000 },
      { name: "新能源汽车产业", max: 25000 },
    ],
    axisName: {
      fontSize: 8,
      color: "rgb(15,150,170)",
      padding: [-10, -10],
    },
    axisLine: {
      // show: true,
      lineStyle: {
        opacity: 0.3,
      },
    },
    splitLine: {
      // show: true,
      lineStyle: {
        opacity: 0.3,
      },
    },
  },
  series: [
    {
      name: "Budget vs spending",
      type: "radar",
      symbol: "none",
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: "新材料产业",
          lineStyle: {
            color: "rgb(60,160,210)",
          },
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: "新能源产业",
          lineStyle: {
            color: "rgb(0,230,240)",
          },
        },
      ],
    },
  ],
};

onMounted(() => {
  const myChart1 = echarts.init(document.getElementById("radar1"));
  const myChart2 = echarts.init(document.getElementById("radar2"));
  myChart1.setOption(option);
  myChart2.setOption(option);
});
</script>

<template>
  <div
    class="wrapper animate__animated animate__fadeInDown animate__delay-0.6s"
  >
    <p><span>产业技术分布</span></p>
    <div class="radar-chart">
      <div id="radar1"></div>
      <div id="radar2"></div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  position: absolute;
  left: 0.290365rem /* 223/768 */;
  top: 1.953125rem /* 1500/768 */;
  background-color: rgba(125, 125, 125, 0.1);
  z-index: 111;
}
.radar-chart {
  width: 2.415365rem /* 1855/768 */;
  height: 1.041667rem /* 800/768 */;
  display: flex;
  flex-direction: row;
  z-index: 111;
}
#radar1,
#radar2 {
  width: 50%;
  height: 100%;
}
p {
  width: 2.415365rem /* 1855/768 */;
  height: 0.126302rem /* 97/768 */;
  line-height: 0.126302rem /* 97/768 */;
  background-image:linear-gradient(to right, rgba(5, 135, 150, 0.7), rgba(5, 135, 150, 0));
}
span {
  color: white;
  font-size: 0.048177rem /* 37/768 */;
  margin-left: 0.130208rem /* 100/768 */;
}
</style>
