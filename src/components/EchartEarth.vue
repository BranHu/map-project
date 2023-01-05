<template>
  <div id="globe" style="width: 100%; height: 100%"></div>
</template>
<script setup>
import * as echarts from "echarts";
import "echarts-gl";
import * as d3 from "d3";
import { onMounted } from "vue";
import WorldJson from "/public/js/countries.geo.json";

// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// });
// const router = useRouter();
// const ROOT_PATH =
//   "https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";
let myChart;

const initChart = () => {
  myChart = echarts.init(document.getElementById("globe"));
};

echarts.registerMap("world", WorldJson);

// 绘制闪电图的相关代码
const config = {
  color: "#c0101a",
  levels: 1,
  intensity: 4,
  threshold: 0.01,
};

const canvas = document.createElement("canvas");
canvas.width = 4096;
canvas.height = 2048;
const context = canvas.getContext("2d");
context.lineWidth = 0.5;
context.strokeStyle = config.color;
context.fillStyle = config.color;
context.shadowColor = config.color;

function image(url) {
  return new Promise(function (resolve) {
    var image = new Image();
    image.src = url;
    image.crossOrigin = "Anonymous";
    image.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = image.width / 8;
      canvas.height = image.height / 8;
      var context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(context.getImageData(0, 0, canvas.width, canvas.height));
    };
  });
}

function renderEarth(opt, size, target, rotate) {
  const baseTexture = echarts.init(document.createElement("canvas"), null, {
    width: 4096,
    height: 2048,
  });
  baseTexture.setOption({
    // backgroundColor: "/img/earth.jpg",
    geo: {
      name: "地图",
      // type: 'map',  //地图种类、
      map: "world", //地图类型。
      zlevel: 0,
      show: true,
      layoutCenter: ["50%", "50%"],
      roam: false,
      layoutSize: "90%",
      zoom: 1,
      label: {
        show: false,
        fontSize: 14,
        // 文字顔色
        color: "#43D0D6",
      },
      itemStyle: {
        // areaColor: "#0A82A5",
        areaColor: "rgb(10, 50, 65)",
        borderWidth: 1, //设置外层边框
        borderColor: "#000c2d",
        //地图区域的多边形 图形样式。
      },
      //高亮状态下的样试
      emphasis: {
        label: {
          show: true,
          fontSize: 30,
          color: "green",
        },
        itemStyle: {
          areaColor: "rgb(20, 80, 130)",
        },
      },
    },
  });
  // 绘制红色闪电
  const contourChart = echarts.init(document.createElement("canvas"), null, {
    width: 4096,
    height: 2048,
  });
  const img = new echarts.graphic.Image({
    style: {
      image: opt.image,
      x: -1,
      y: -1,
      width: opt.image.width + 2,
      height: opt.image.height + 2,
    },
  });
  contourChart.getZr().add(img);
  opt.onupdate = function () {
    img.dirty();
  };

  const option = {
    // backgroundColor: "/img/login.jpg", //设置背景颜色
    globe: {
      top: "15%",
      right: "18%",
      baseTexture: baseTexture,
      // heightTexture:
      //   ROOT_PATH + "/data-gl/asset/bathymetry_bw_composite_4k.jpg",
      displacementScale: 0.1,
      shading: "lambert",
      environment: "none",
      light: {
        ambient: {
          intensity: 4.6,
        },
        main: {
          color: "blue",
          intensity: 14.2,
          shadowQuality: "ultra", //阴影亮度
          shadow: true, // 是否显示阴影
          alpha: 40,
          beta: -30,
        },
      },
      postEffect: {
        //为画面添加高光，景深，环境光遮蔽（SSAO），调色等效果
        enable: true, //是否开启
        SSAO: {
          //环境光遮蔽
          radius: 10, //环境光遮蔽的采样半径。半径越大效果越自然
          intensity: 0.5, //环境光遮蔽的强度
          enable: true,
        },
      },
      // 增加了红色闪电的图层
      // layers: [
      //   {
      //     type: "blend",
      //     blendTo: "emission",
      //     texture: contourChart,
      //     intensity: config.intensity,
      //   },
      // ],
      viewControl: {
        // 用于鼠标的旋转，缩放等视角控制。
        projection: "perspective", // 投影方式，默认为透视投影'perspective'，也支持设置为正交投影'orthographic'。
        autoRotate: rotate, // 是否开启视角绕物体的自动旋转查看。[ default: false ]
        // minBeta: -3600, //每次旋转3600/360=10圈
        // maxBeta: 3600, //每次旋转3600/360=10圈
        // autoRotateDirection: "cw", // 物体自传的方向。默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
        autoRotateSpeed: 10, // 物体自传的速度。单位为角度 / 秒，默认为10 ，也就是36秒转一圈。
        // autoRotateAfterStill: 3, // 在鼠标静止操作后恢复自动旋转的时间间隔。在开启 autoRotate 后有效。[ default: 3 ]
        // damping: 0, // 鼠标进行旋转，缩放等操作时的迟滞因子，在大于等于 1 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。[ default: 0.8 ]
        // rotateSensitivity: 1, // 旋转操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的旋转灵敏度。默认为1, 设置为0后无法旋转。	rotateSensitivity: [1, 0]——只能横向旋转； rotateSensitivity: [0, 1]——只能纵向旋转。
        // zoomSensitivity: 1, // 缩放操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法缩放。
        // panSensitivity: 1, // 平移操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法平移。支持使用数组分别设置横向和纵向的平移灵敏度
        // panMouseButton: "left", // 平移操作使用的鼠标按键，支持：'left' 鼠标左键（默认）;'middle' 鼠标中键 ;'right' 鼠标右键(注意：如果设置为鼠标右键则会阻止默认的右键菜单。)
        // rotateMouseButton: "left", // 旋转操作使用的鼠标按键，支持：'left' 鼠标左键;'middle' 鼠标中键（默认）;'right' 鼠标右键(注意：如果设置为鼠标右键则会阻止默认的右键菜单。)
        distance: size, // [ default: 100 ] 默认视角距离主体的距离，对于 grid3D 和 geo3D 等其它组件来说是距离中心原点的距离,对于 globe 来说是距离地球表面的距离。在 projection 为'perspective'的时候有效。
        // minDistance: 40, // [ default: 40 ] 视角通过鼠标控制能拉近到主体的最小距离。在 projection 为'perspective'的时候有效。
        // maxDistance: 400, // [ default: 400 ] 视角通过鼠标控制能拉远到主体的最大距离。在 projection 为'perspective'的时候有效。
        // alpha: 40, // 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。[ default: 40 ]
        // beta: 15, // 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]
        // minAlpha: -360, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
        // maxAlpha: 360, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
        // minBeta: -360, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
        // maxBeta: 360, // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]
        // center: [0, 0, 0], // 视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。
        // animation: true, // 是否开启动画。[ default: true ]
        animationDurationUpdate: 2000, // 过渡动画的时长。[ default: 1000 ]
        // animationEasingUpdate: "cubicInOut", // 过渡动画的缓动效果。[ default: cubicInOut ]
        targetCoord: target,
      },
    },
    series: [
      {
        type: "lines3D",
        coordinateSystem: "globe",
        // 动画效果
        effect: {
          show: true,
          period: 2,
          trailWidth: 3,
          trailLength: 0.5,
          trailOpacity: 1,
          trailColor: "#0087f4",
          symbolSize: 3, //图标大小

          // show: true,
          // period: 2, //特效动画的时间，单位为 s
          // trailLength: 0.3, //特效尾迹的长度。0~1数值越大尾迹越长
          // color: "#64f2ff",
          // symbol: "arrow", //箭头图标
          // symbolSize: 10, //图标大小
        },
        lineStyle: {
          color: "#0087f4",
          width: 1,
          curveness: 0.3,
          opacity: 0.1
        },
        blendMode: "lighter",
        data: [],
      },
      {
        type: "scatter3D",
        coordinateSystem: "globe",
        symbol: "circle",
        symbolSize: 5,
        itemStyle: {
          color: "#64f2ff",
        },
        label: {
          show: true,
          fontSize: 20,
          // 文字顔色
          color: "#43D0D6",
          formatter: "{b}"
        },
        // emphasis: {
        //   itemStyle: {
        //     borderColor: "yellow",
        //   },
        //   label: {
        //     show: true,
        //     formatter: "{b}",
        //     position: "bottom",
        //   },
        // },
        data: [
          { name: "湖北", value: [50, 20] }, //东经  北纬
        ],
      },
    ],
  };

  // 添加飞线数据
  for (let i = 0; i < 50; i++) {
    option.series[0].data = option.series[0].data.concat(rodamData());
  }

  myChart.setOption(option);
}

// 飞线数据
function rodamData() {
  // let name = "随机点" + Math.random().toFixed(5) * 100000;
  // let longitude = Math.random() * 62 + 73
  let longitude = 50;
  let latitude = 20;
  let longitude2 = Math.random() * 360 - 180;
  let latitude2 = Math.random() * 180 - 90;
  return {
    coords: [
      [longitude2, latitude2],
      [longitude, latitude],
    ],
    value: (Math.random() * 3000).toFixed(2),
  };
}

onMounted(() => {
  initChart();
  image("/img/night.jpg").then(function (image) {
    // 绘制闪电相关图的数据
    var m = image.height,
      n = image.width,
      values = new Array(n * m),
      contours = d3.contours().size([n, m]).smooth(true),
      projection = d3.geoIdentity().scale(canvas.width / n),
      path = d3.geoPath(projection, context);
    //   StackBlur.R(image, 5);
    for (var j = 0, k = 0; j < m; ++j) {
      for (var i = 0; i < n; ++i, ++k) {
        values[k] = image.data[k << 2] / 255;
      }
    }
    const opt = {
      image: canvas,
    };
    let results = [];
    function update(threshold, levels) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const thresholds = [];
      for (var i = 0; i < levels; i++) {
        thresholds.push((threshold + (1 / levels) * i) % 1);
      }
      results = contours.thresholds(thresholds)(values);
      redraw();
    }
    function redraw() {
      results.forEach(function (d, idx) {
        context.beginPath();
        path(d);
        context.globalAlpha = 1;
        context.stroke();
        if (idx > (config.levels / 5) * 3) {
          context.globalAlpha = 0.01;
          context.fill();
        }
      });
      opt.onupdate();
    }
    d3.timer(function (t) {
      var threshold = (t % 10000) / 10000;
      update(threshold, 1);
    });

    renderEarth(opt, 170, [], true);
    update(config.threshold, config.levels);
  });
  // setTimeout(focusChina, 5000);
});

// const focusChina = () => {
//   renderEarth(30, [114.21, 30.3], false);
//   myChart.on("finished", () => {
//     console.log("rendered");
//     // setTimeout(chartClear, 2500);
//     // router.push("home");
//   });
// };

// const chartClear = () => {
//   myChart.clear();
// };
</script>

<style scoped></style>
