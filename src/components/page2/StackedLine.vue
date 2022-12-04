<script setup>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
// defineProps({
//   option: {},
// });
const dialogVisible = ref(false)
const option = {
  // title: {
  //   text: '专利申请趋势',
  //   textStyle: {
  //     color: '#fff',
  //     fontSize: 10
  //   }
  // },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["新材料产业", "新能源产业", "生物产业", "节能环保产业", "高端装备制造产业"],
    // orient: 'vertical',
    // align: 'right',
    top: "7%",
    right: 0,
    itemWidth: 10,
    itemHeight: 4,
    textStyle: {
      fontSize: 8,
      color: "rgb(15,150,170)",
      // padding: [0]
    },
  },
  backgroundColor: "rgba(125, 125, 125, 0.1)",
  grid: {
    left: "1%",
    right: "2%",
    bottom: "1%",
    top: "20%",
    containLabel: true,
  },
  // toolbox: {
  //   feature: {
  //     saveAsImage: {}
  //   }
  // },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["新材料产业", "新材料产业", "新材料产业", "新材料产业", "新材料产业", "新材料产业", "新材料产业"],
    axisLabel: {
      fontSize: 6,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      // show: true,
      lineStyle: {
        color: "rgb(15,150,170)",
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: "blue",
      },
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      fontSize: 6,
    },
    axisLine: {
      // show: true,
      lineStyle: {
        color: "rgb(15,150,170)",
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: "blue",
      },
    },
  },
  series: [
    {
      name: "新材料产业",
      type: "line",
      smooth: true,
      stack: "Total",
      data: [120, 132, 101, 134, 90, 230, 210],
      symbolSize: 0,
      lineStyle: {
        width: 1,
        color: "rgb(245,50,65)",
      },
    },
    {
      name: "新能源产业",
      type: "line",
      smooth: true,
      stack: "Total",
      data: [220, 182, 191, 234, 290, 330, 310],
      symbolSize: 0,
      lineStyle: {
        width: 1,
        color: "rgb(10,100,145)",
      },
    },
    {
      name: "生物产业",
      type: "line",
      smooth: true,
      stack: "Total",
      data: [150, 232, 201, 154, 190, 330, 410],
      symbolSize: 0,
      lineStyle: {
        width: 1,
        color: "rgb(240,185,15)",
      },
    },
    {
      name: "节能环保产业",
      type: "line",
      smooth: true,
      stack: "Total",
      data: [320, 332, 301, 334, 390, 330, 320],
      symbolSize: 0,
      lineStyle: {
        width: 1,
        color: "rgb(0,230,240)",
      },
    },
    {
      name: "高端装备制造产业",
      type: "line",
      smooth: true,
      stack: "Total",
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      symbolSize: 0,
      lineStyle: {
        width: 1,
        color: "white",
      },
    },
  ],
};

onMounted(() => {
  const myChart = echarts.init(document.getElementById("line"));
  myChart.setOption(option);
});
</script>

<template>
  <div
    class="StackedLine animate__animated animate__fadeInDown animate__delay-0.6s"
  >
    <p @click="dialogVisible = true"><span>产业技术分布</span></p>
    <div id="line"></div>
  </div>
  <el-dialog v-model="dialogVisible" title="产业" width="30%" draggable>
    <span>内容显示</span>
  </el-dialog>
</template>

<style scoped>
.StackedLine {
  position: absolute;
  left: 0.290365rem /* 223/768 */;
  top: 0.700521rem /* 538/768 */;
  z-index: 111;
}
#line {
  width: 2.415365rem /* 1855/768 */;
  height: 1.041667rem /* 800/768 */;
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
