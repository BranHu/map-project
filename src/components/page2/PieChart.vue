<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";
// defineProps({
//   option: {},
// });

const barOption = {
  grid: {
    left: "5%",
    right: "5%",
    bottom: "5%",
    top: "10%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: [
      "新材料产业",
      "新能源",
      "生物产业",
      "节能环保产业",
      "高端装备业",
      "新能源汽车",
      "数字创意产业",
      "新一代信息",
      "新材料产业",
    ],
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
      fontSize: 6,
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
      data: [120, 280, 260, 80, 150, 110, 230, 80, 210],
      type: "bar",
      barWidth: "40%",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(255,255,255, 0.1)",
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "rgb(0,230,240)" },
          { offset: 1, color: "rgb(5,135,150)" },
        ]),
      },
    },
  ],
};

const pieOption = {
  title: {
    text: "新能源产业",
    left: "center",
    bottom: 5,
    textStyle: {
      color: "rgb(15,150,170)",
      fontSize: 8,
    },
  },
  // tooltip: {
  //   trigger: 'item'
  // },
  // legend: {
  //   top: '5%',
  //   left: 'center'
  // },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["50%", "70%"],
      left: 0,
      right: '75%',
      top: 0,
      bottom: 0,
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 2,
        borderColor: "#fff",
        borderWidth: 0,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: false,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 1048,
          name: "Search Engine",
          itemStyle: {
            color: "rgb(10,120,145)",
          },
        },
        {
          value: 735,
          name: "Direct",
          itemStyle: {
            color: "rgb(22,150,180)",
          },
        },
        {
          value: 580,
          name: "Email",
          itemStyle: {
            color: "rgb(60,180,210)",
          },
        },
        {
          value: 484,
          name: "Union Ads",
          itemStyle: {
            color: "rgb(90,190,235)",
          },
        },
        {
          value: 300,
          name: "Video Ads",
          itemStyle: {
            color: "rgb(115,190,220)",
          },
        },
      ],
    },
    {
      name: "Access From",
      type: "pie",
      radius: ["50%", "70%"],
      left: '25%',
      right: '50%',
      top: 0,
      bottom: 0,
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 2,
        borderColor: "#fff",
        borderWidth: 0,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: false,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 1048,
          name: "Search Engine",
          itemStyle: {
            color: "rgb(10,120,145)",
          },
        },
        {
          value: 735,
          name: "Direct",
          itemStyle: {
            color: "rgb(22,150,180)",
          },
        },
        {
          value: 580,
          name: "Email",
          itemStyle: {
            color: "rgb(60,180,210)",
          },
        },
        {
          value: 484,
          name: "Union Ads",
          itemStyle: {
            color: "rgb(90,190,235)",
          },
        },
        {
          value: 300,
          name: "Video Ads",
          itemStyle: {
            color: "rgb(115,190,220)",
          },
        },
      ],
    },
    {
      name: "Access From",
      type: "pie",
      radius: ["50%", "70%"],
      left: '50%',
      right: '25%',
      top: 0,
      bottom: 0,
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 2,
        borderColor: "#fff",
        borderWidth: 0,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: false,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 1048,
          name: "Search Engine",
          itemStyle: {
            color: "rgb(10,120,145)",
          },
        },
        {
          value: 735,
          name: "Direct",
          itemStyle: {
            color: "rgb(22,150,180)",
          },
        },
        {
          value: 580,
          name: "Email",
          itemStyle: {
            color: "rgb(60,180,210)",
          },
        },
        {
          value: 484,
          name: "Union Ads",
          itemStyle: {
            color: "rgb(90,190,235)",
          },
        },
        {
          value: 300,
          name: "Video Ads",
          itemStyle: {
            color: "rgb(115,190,220)",
          },
        },
      ],
    },
    {
      name: "Access From",
      type: "pie",
      radius: ["50%", "70%"],
      left: '75%',
      right: 0,
      top: 0,
      bottom: 0,
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 2,
        borderColor: "#fff",
        borderWidth: 0,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: false,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 1048,
          name: "Search Engine",
          itemStyle: {
            color: "rgb(10,120,145)",
          },
        },
        {
          value: 735,
          name: "Direct",
          itemStyle: {
            color: "rgb(22,150,180)",
          },
        },
        {
          value: 580,
          name: "Email",
          itemStyle: {
            color: "rgb(60,180,210)",
          },
        },
        {
          value: 484,
          name: "Union Ads",
          itemStyle: {
            color: "rgb(90,190,235)",
          },
        },
        {
          value: 300,
          name: "Video Ads",
          itemStyle: {
            color: "rgb(115,190,220)",
          },
        },
      ],
    },
  ],
};

onMounted(() => {
  const barChart = echarts.init(document.getElementById("bar"));
  const pieChart = echarts.init(document.getElementById("pie"));
  barChart.setOption(barOption);
  pieChart.setOption(pieOption);
});
</script>

<template>
  <div
    class="wrapper animate__animated animate__fadeInDown animate__delay-0.6s"
  >
    <p><span>产业技术分布</span></p>
    <div id="bar"></div>
    <div class="pie-chart">
      <div id="pie"></div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  position: absolute;
  right: 0.231771rem /* 178/768 */;
  top: 1.071615rem /* 823/768 */;
  background-color: rgba(125, 125, 125, 0.1);
  z-index: 111;
}
.pie-chart {
  width: 2.21875rem /* 1704/768 */;
  height: 0.78125rem /* 600/768 */;
  display: flex;
  flex-direction: row;
}
#pie {
  width: 100%;
  height: 100%;
}
#bar {
  width: 2.21875rem /* 1704/768 */;
  height: 1.041667rem /* 800/768 */;
}
p {
  width: 2.21875rem /* 1704/768 */;
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
