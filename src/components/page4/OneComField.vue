<script setup>
import * as echarts from "echarts";
import { onMounted, toRefs, watch } from "vue";

const props = defineProps({
  field:{
    type: Array,
    default: []
  },
});

const renderChart =  (data) => {
  const axisData = data.map(el => el.name)
  const valueData = data.map(el => el.value)
  const option = {
    grid: {
      left: "5%",
      right: "5%",
      bottom: "5%",
      // top: "10%",
      containLabel: true,
    },
    // legend: {
    //   data: ['授权量', '申请量']
    // },
    xAxis: {
      type: 'value',
      axisLine: {
        show: false,
        lineStyle: {
          color: "rgb(15,150,170)",
        },
      },
      axisLabel: {
        fontSize: 8,
        // padding: [0, 1]
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "category",
      data: axisData,
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
        // name: '',
        data: valueData,
        type: 'bar',
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
      }
    ]
  };
  myChart.setOption(option);
}

watch(() => props.field, (newVal,oldVal) => {
  renderChart(newVal)
})

let myChart = null;

onMounted(() => {
  myChart = echarts.init(document.getElementById("OneComField"));
  renderChart(props.field)
});
</script>

<template>
  <div
    class="barChart animate__animated animate__fadeInDown animate__delay-0.6s"
  >
    <p><span>相关领域</span></p>
    <div id="OneComField"></div>
  </div>
</template>

<style scoped>
.barChart {
  position: absolute;
  right: 0.233073rem /* 179/768 */;
  bottom: .195313rem /* 150/768 */;
  background-color: rgba(125, 125, 125, 0.1);
  z-index: 111;
}
#OneComField {
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
