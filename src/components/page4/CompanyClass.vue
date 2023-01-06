<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";
import companyClassData from "../../../public/js/companyClass.json";
// defineProps({
//   option: {},
// });
let pieChart = null;

const pieOption = {
  // title: {
  //   text: "新能源产业",
  //   left: "center",
  //   bottom: 5,
  //   textStyle: {
  //     color: "rgb(15,150,170)",
  //     fontSize: 8,
  //   },
  // },
  series: {
    type: "pie",
    radius: ["50%", "70%"],
    // top: 'center',
    // height: '100%',
    left: "center",
    // width: 400,
    itemStyle: {
      borderRadius: 5,
      borderColor: "#fff",
      borderWidth: 0,
    },
    label: {
      alignTo: "edge",
      formatter: "{b}\n企业数量{c}",
      minMargin: 5,
      edgeDistance: 10,
      lineHeight: 15,
      fontSize: 9,
      color: "#00e6f0",
      // rich: {
      //   time: {
      //     fontSize: 6,
      //     color: '#999'
      //   }
      // }
    },
    labelLine: {
      length: 15,
      length2: 0,
      maxSurfaceAngle: 80,
    },
    labelLayout: function (params) {
      const isLeft = params.labelRect.x < pieChart.getWidth() / 2;
      const points = params.labelLinePoints;
      // Update the end point.
      points[2][0] = isLeft
        ? params.labelRect.x
        : params.labelRect.x + params.labelRect.width;
      return {
        labelLinePoints: points,
      };
    },
    data: companyClassData,
  },
};

onMounted(() => {
  pieChart = echarts.init(document.getElementById("CompanyClass"));
  pieChart.setOption(pieOption);
});
</script>

<template>
  <div
    class="wrapper animate__animated animate__fadeInDown animate__delay-0.6s"
  >
    <p><span>企业分级</span></p>
    <div class="pie-chart">
      <div id="CompanyClass"></div>
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
#CompanyClass {
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
