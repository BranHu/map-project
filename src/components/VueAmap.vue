<template>
  <div id="amap">
    <div class="mask" v-if="mask"></div>
  </div>
</template>
<script setup>
import { onMounted, shallowRef, ref } from "vue";
// 仅仅是一条线段，需要合并江夏和洪山的部分线段
// import donghugaoxingSeg from "/public/js/donghugaoxing1.js" 
// 自己重新整理了线段了，是一个封闭的数组
import donghugaoxing from "/public/js/donghugaoxing.js"
import maskBorder from "/public/js/mask.js" 
import groups from "/public/js/group.js"

let amap = shallowRef(null);
let loca = null;
let districtAmap = null;
let cityAmap = null;
let activePolygon = null;
let mask = ref(false);
// let jiangxiaSeg = null 东湖高新用第一个js的时候要用
// let hongshanSeg = null
const cityConf = [
  {
    name: "武汉市",
    border: "#00E6F0",
    fill: "#00B4F0",
  },
  {
    name: "鄂州市",
    border: "#00E6F0",
    fill: "#00B4F0",
  },
  {
    name: "黄石市",
    border: "#00E6F0",
    fill: "#00B4F0",
  },
  {
    name: "咸宁市",
    border: "#00E6F0",
    fill: "#00B4F0",
  },
  {
    name: "黄冈市",
    border: "#00E6F0",
    fill: "#00B4F0",
  },
];
const districtConf = [
  {
    name: "江夏区",
    border: "#00E6F0",
    fill: "#00B4F0",
    opacity: 0.7
  },
  {
    name: "武昌区",
    border: "#00E6F0",
    fill: "#00E6F0",
    opacity: 0.9
  },
  {
    name: "洪山区",
    border: "#00E6F0",
    fill: "#55C8E6",
    opacity: 0.8
  }
]
const belts = [];
const axis = [];
const initMap = () => {
  amap = new AMap.Map("amap", {
    center: [114.405188,30.497573],
    zoom: 8,
    // viewMode: '2D',
    mapStyle: "amap://styles/4999bd600a6f762ff0adcb45c7b5dd26",
  });
  loca = new Loca.Container({
    map: amap
  });
  amap.on("click", (e) => {
    console.log(e.lnglat.lng,e.lnglat.lat)
  })
  amap.on('complete', (e) => {
    setTimeout(() => {
      mask.value = true
    }, 500)
  })
};

const drawCityBounds = () => {
  if (!cityAmap) {
    //实例化DistrictSearch
    let opts = {
      subdistrict: 0, //获取边界不需要返回下级行政区
      extensions: "all", //返回行政区边界坐标组等具体信息
      level: "city", //查询行政级别为 市
    };
    cityAmap = new AMap.DistrictSearch(opts);
    //行政区查询
    cityAmap.setLevel("city");
  }
  Promise.all(cityConf.map(el => getCityBounds(el))).then(
    (polygons) => {
      polygons.map((polygon) => {
        amap.add(polygon);
      });
      // addMask(maskBorder)
    }
  );
}

// 画三个区+东湖高新区的边界
const drawDistrictBounds = () => {
  if (!districtAmap) {
    //实例化DistrictSearch
    let opts = {
      subdistrict: 0, //获取边界不需要返回下级行政区
      extensions: "all", //返回行政区边界坐标组等具体信息
      level: "district", //查询行政级别为 区
    };
    districtAmap = new AMap.DistrictSearch(opts);
    districtAmap.setLevel("district");
  }
  Promise.all(districtConf.map(el => getDistrictBounds(el))).then(
    (polygons) => {
      // 画三个区的polygon
      polygons.map((el) => {
        amap.add(el);
      });
      // 画东湖高新区的polygon
      // const donghugaoxing = hongshanSeg.concat(jiangxiaSeg).concat(donghugaoxingSeg.reverse())  东湖高新用第一个js的时候要用
      const polygon = new AMap.Polygon({
        strokeWeight: 1,
        strokeStyle: 'dashed',
        path: donghugaoxing,
        fillOpacity: 1,
        fillColor: '#82C8C8',
        strokeColor: '#00E6F0',
        extData: { id: '东湖高新区' },
      });
      amap.add(polygon);
    }
  );
}

// 只画东湖高新区的边界
const drawOnlyDonghu = () => {
  const polygon = new AMap.Polygon({
    strokeWeight: 1,
    strokeStyle: 'dashed',
    path: donghugaoxing,
    fillOpacity: 0.1,
    fillColor: '#00B4F0',
    strokeColor: '#00E6F0',
    extData: { id: '东湖高新区' },
  });
  amap.add(polygon);
}

const drawIcon = ()=> {
  // 鄂州机场
  // const icon1 = new AMap.Icon({
  //   size: new AMap.Size(300, 300),
  //   image: '/img/jichang.png',
  //   imageSize: new AMap.Size(300, 300),   // 根据所设置的大小拉伸或压缩图片
  //   // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
  // });
  // const marker1 = new AMap.Marker({
  //   position: new AMap.LngLat(114.928181,30.309558),
  //   offset: new AMap.Pixel(-150, -150),
  //   icon: icon1, // 添加 Icon 实例
  //   title: '鄂州机场'
  // });
  // // 红莲湖
  // const icon2 = new AMap.Icon({
  //   size: new AMap.Size(300, 300),
  //   image: '/img/honglianhu.png',
  //   imageSize: new AMap.Size(300, 300),   // 根据所设置的大小拉伸或压缩图片
  //   // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
  // });
  // const marker2 = new AMap.Marker({
  //   position: new AMap.LngLat(114.639882,30.40365),
  //   offset: new AMap.Pixel(-150, -150),
  //   icon: icon2, // 添加 Icon 实例
  //   title: '红莲湖'
  // });
  // // 大冶
  // const icon3 = new AMap.Icon({
  //   size: new AMap.Size(300, 300),
  //   image: '/img/daye.png',
  //   imageSize: new AMap.Size(300, 300),   // 根据所设置的大小拉伸或压缩图片
  //   // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
  // });
  // const marker3 = new AMap.Marker({
  //   position: new AMap.LngLat(115.331729,29.819813),
  //   offset: new AMap.Pixel(-150, -150),
  //   icon: icon3, // 添加 Icon 实例
  //   title: '大冶'
  // });
  // // 咸宁
  // const icon4 = new AMap.Icon({
  //   size: new AMap.Size(300, 300),
  //   image: '/img/xianning.png',
  //   imageSize: new AMap.Size(300, 300),   // 根据所设置的大小拉伸或压缩图片
  //   // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
  // });
  // const marker4 = new AMap.Marker({
  //   position: new AMap.LngLat(114.474795,29.86746),
  //   offset: new AMap.Pixel(-150, -150),
  //   icon: icon4, // 添加 Icon 实例
  //   title: '咸宁'
  // });
  // // 黄冈
  // const icon5 = new AMap.Icon({
  //   size: new AMap.Size(300, 300),
  //   image: '/img/huanggang.png',
  //   imageSize: new AMap.Size(300, 300),   // 根据所设置的大小拉伸或压缩图片
  //   // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
  // });
  // const marker5 = new AMap.Marker({
  //   position: new AMap.LngLat(115.101016,30.579424),
  //   offset: new AMap.Pixel(-150, -150),
  //   icon: icon5, // 添加 Icon 实例
  //   title: '黄冈'
  // });
  // 东湖高新
  const icon6 = new AMap.Icon({
    size: new AMap.Size(200, 200),
    image: '/img/core.png',
    imageSize: new AMap.Size(200, 200),   // 根据所设置的大小拉伸或压缩图片
    // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
  });
  const marker6 = new AMap.Marker({
    position: new AMap.LngLat(114.410838,30.453863),
    offset: new AMap.Pixel(-65, -200),
    icon: icon6, // 添加 Icon 实例
    title: '东湖高新'
  });
  amap.add(marker6)
  // amap.add(marker1)
  // amap.add(marker2)
  // amap.add(marker3)
  // amap.add(marker4)
  // amap.add(marker5)
}

const draw4gaoixng = () => {
  const icon1 = new AMap.Icon({
    size: new AMap.Size(200, 200),
    image: '/img/hangzhou.png',
    imageSize: new AMap.Size(200, 200),   // 根据所设置的大小拉伸或压缩图片
    // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
  });
  const marker1 = new AMap.Marker({
    position: new AMap.LngLat(120.2,30.3),
    offset: new AMap.Pixel(-55, -170),
    icon: icon1, // 添加 Icon 实例
    title: '杭州高新区'
  });

  const icon2 = new AMap.Icon({
    size: new AMap.Size(200, 200),
    image: '/img/wuhan.png',
    imageSize: new AMap.Size(200, 200),   // 根据所设置的大小拉伸或压缩图片
    // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
  });
  const marker2 = new AMap.Marker({
    position: new AMap.LngLat(114.410838,30.453863),
    offset: new AMap.Pixel(-85, -200),
    icon: icon2, // 添加 Icon 实例
    title: '武汉东湖高新区'
  });

  const icon3 = new AMap.Icon({
    size: new AMap.Size(200, 200),
    image: '/img/chengdu.png',
    imageSize: new AMap.Size(200, 200),   // 根据所设置的大小拉伸或压缩图片
    // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
  });
  const marker3 = new AMap.Marker({
    position: new AMap.LngLat(104.06,30.66),
    offset: new AMap.Pixel(-65, -200),
    icon: icon3, // 添加 Icon 实例
    title: '成都高新区'
  });

  const icon4 = new AMap.Icon({
    size: new AMap.Size(200, 200),
    image: '/img/hefei.png',
    imageSize: new AMap.Size(200, 200),   // 根据所设置的大小拉伸或压缩图片
    // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
  });
  const marker4 = new AMap.Marker({
    position: new AMap.LngLat(117.17,31.52),
    offset: new AMap.Pixel(-65, -220),
    icon: icon4, // 添加 Icon 实例
    title: '合肥高新区'
  });
  amap.add(marker1)
  amap.add(marker2)
  amap.add(marker3)
  amap.add(marker4)
}

const addMask = (inner) => {
  let outer = [
    new AMap.LngLat(-360, 90, true),
    new AMap.LngLat(-360, -90, true),
    new AMap.LngLat(360, -90, true),
    new AMap.LngLat(360, 90, true),
  ];

  let pathArray = [
    outer, //外边界
    inner, //内边界需要遮罩区域
  ];

  const mask = new AMap.Polygon({
    pathL: pathArray,
    strokeColor: "rgb(0,0,0)",
    strokeWeight: 0,
    fillColor: "rgb(0,0,0)",
  });
  mask.setPath(pathArray);
  amap.add(mask);
}

const drawGroup = () => {
  groups.map(el => {
    if (el.name == 'guanggu') {
      const polygon = new AMap.Polygon({
        strokeWeight: 1,
        strokeStyle: 'dashed',
        path: el.path,
        fillOpacity: 0.33,
        fillColor: 'rgb(225,185,110)',
        strokeColor: 'rgb(225,185,110)',
        extData: { id: el.name },
      });
      amap.add(polygon);
    } else {
      const polygon = new AMap.Polygon({
        strokeWeight: 1,
        strokeStyle: 'dashed',
        path: el.path,
        fillOpacity: 0.25,
        fillColor: 'rgb(0,230,240)',
        strokeColor: 'rgb(0,230,240)',
        extData: { id: el.name },
      });
      amap.add(polygon);
    }
  })
}

// 获取各个市的地理数据
const getCityBounds = (city) => {
  return new Promise((resolve, reject) => {
    cityAmap.search(city.name, function (status, result) {
      // amap.remove(polygons); //清除上次结果
      const polygons = [];
      let bounds = result.districtList[0].boundaries;
      if (bounds) {
        for (let i = 0; i < bounds.length; i++) {
          //生成行政区划polygon
          let polygon = new AMap.Polygon({
            strokeWeight: 1,
            strokeStyle: 'dashed',
            path: bounds[i],
            fillOpacity: 0.1,
            fillColor: city.fill,
            strokeColor: city.border,
            extData: { id: city.name },
          });
          // polygon.on("click", (e) => {
          //   // console.log(e.target.getExtData());
          //   if (activePolygon) {
          //     activePolygon.setOptions({
          //       fillOpacity: 0.4,
          //       fillColor: "#80d8ff",
          //     });
          //   }
          //   polygon.setOptions({
          //     fillOpacity: 0.7,
          //     fillColor: "#7bccc4",
          //   });
          //   activePolygon = e.target
          //   // amap.getAllOverlays('polygon').map((po) => {
          //   //   po.setOptions({
          //   //     fillOpacity: 0.4,
          //   //     fillColor: "#80d8ff",
          //   //   });
          //   // })
          // });
          polygons.push(polygon);
        }
        resolve(polygons);
      } else {
        reject("没有地理数据");
      }
      // map.setFitView(polygons); //视口自适应
    });
  });
};

// 获取武汉三个区的地理数据，江夏区和武昌区有分离的两个区域，比较特别
const getDistrictBounds = (district) => {
    return new Promise((resolve, reject) => {
    districtAmap.search(district.name, function (status, result) {
      let bounds = result.districtList[0].boundaries;
      // const polygons = [];
      let polygon = null
      if (bounds) {
        // const hongshanPoint = {
        //   lat: 30.575308,
        //   lng: 114.588975
        // }
        // const pointIntersect = {
        //   lat: 30.457408,
        //   lng: 114.590551
        // }
        // const jiangxiaPoint = {
        //   lat: 30.288353,
        //   lng: 114.593231
        // }
        if (district.name === '江夏区') {
          // 江夏区内部有一部分是武昌区的，需要把这一部分扣除
          const indexLong = []
          const indexShort = []
          bounds[0].map((el, num) => {
            const result = bounds[1].findIndex(ele => (el.lat === ele.lat) && (el.lng === ele.lng))
            if (result !== -1) {
              indexLong.push(result)
              indexShort.push(num)
            }
          })
          indexLong.pop()
          indexShort.pop()
          const jiangxia = bounds[1].slice(indexLong[3],indexLong[2])
                            .concat(bounds[0].slice(indexShort[2],indexShort[3]))
          // 画东湖高新区的时候东面临接鄂州截取的江夏区的线段
          // const jiangxiaPointIndex = bounds[1].findIndex(el => (el.lat === jiangxiaPoint.lat) && (el.lng === jiangxiaPoint.lng))
          // const pointIntersectIndex = bounds[1].findIndex(el => (el.lat === pointIntersect.lat) && (el.lng === pointIntersect.lng))
          // jiangxiaSeg = bounds[1].slice(pointIntersectIndex, jiangxiaPointIndex).map(el => {
          //   return [el.lng, el.lat]
          // })
          polygon = new AMap.Polygon({
            strokeWeight: 1,
            strokeStyle: 'dashed',
            path: jiangxia,
            fillOpacity: district.opacity,
            fillColor: district.fill,
            strokeColor: district.border,
            extData: { id: district.name },
          });
        } else if (district.name === '武昌区') {
          polygon = new AMap.Polygon({
            strokeWeight: 1,
            strokeStyle: 'dashed',
            path: bounds[1],
            fillOpacity: district.opacity,
            fillColor: district.fill,
            strokeColor: district.border,
            extData: { id: district.name },
          });
        } else { //洪山
          polygon = new AMap.Polygon({
            strokeWeight: 1,
            strokeStyle: 'dashed',
            path: bounds[0],
            fillOpacity: district.opacity,
            fillColor: district.fill,
            strokeColor: district.border,
            extData: { id: district.name },
          });
          // 画东湖高新区的时候东面临接鄂州截取的洪山区的线段
          // const hongshanPointIndex = bounds[0].findIndex(el => (el.lat === hongshanPoint.lat) && (el.lng === hongshanPoint.lng))
          // const pointIntersectIndex = bounds[0].findIndex(el => (el.lat === pointIntersect.lat) && (el.lng === pointIntersect.lng))
          // hongshanSeg = bounds[0].slice(hongshanPointIndex, pointIntersectIndex).map(el => {
          //   return [el.lng, el.lat]
          // })
        }
        
        // 测试用
        // bounds[1].map(el => {
        //   var marker = new AMap.Marker({
        //     position: new AMap.LngLat(el.lng, el.lat), 
        //     title: '点'
        //   });
        //   marker.on('click', e => {
        //     console.log(e.target._position)
        //   })
        //   amap.add(marker)
        // })
        // var marker = new AMap.Marker({
        //   position: new AMap.LngLat(114.588975, 30.575308), 
        //   title: '点'
        // });
        // amap.add(marker)


        resolve(polygon);
      } else {
        reject("没有地理数据");
      }
      // map.setFitView(polygons); //视口自适应
    });
  });
};

const drawScatter = (type) => {
  let dataSource = 'all'
  const pointLayer = new Loca.PointLayer({
    zIndex: 10,
    opacity: 0.5,
    visible: true,
    blend: 'lighter',
  });

  // 创建数据源
  switch (type) {
    case '新材料产业':
      dataSource = new Loca.GeoJSONSource({
        url: '/public/js/industry1.json'
      });
      break;
    case '新能源产业':
      dataSource = new Loca.GeoJSONSource({
        url: '/public/js/industry2.json'
      });
      break;
    case '生物产业':
      dataSource = new Loca.GeoJSONSource({
        url: '/public/js/industry3.json'
      });
      break;
    case '节能环保产业':
      dataSource = new Loca.GeoJSONSource({
        url: '/public/js/industry4.json'
      });
      break;
    case '高端装备制造产业':
      dataSource = new Loca.GeoJSONSource({
        url: '/public/js/industry5.json'
      });
      break;
    case '新能源汽车产业':
      dataSource = new Loca.GeoJSONSource({
        url: '/public/js/industry6.json'
      });
      break;
    case '数字创意产业':
      dataSource = new Loca.GeoJSONSource({
        url: '/public/js/industry7.json'
      });
      break;
    case '新一代信息技术产业':
      dataSource = new Loca.GeoJSONSource({
        url: '/public/js/industry8.json'
      });
      break;
    default:
      dataSource = new Loca.GeoJSONSource({
        // url: 'http://10.66.111.29:80/js/industry.json'
        url: '/public/js/industry.json'
        // data: industry
      });
      break;
  }
  

  // 图层添加数据
  pointLayer.setSource(dataSource);

  const style = {
    radius: (index, f) => {
      return setRadius(f.properties['value']);
    },
    color: (index, f) => {
      const n = setColor(f.properties['name'])
      return n;
    },
    borderWidth: 0,
    blurRadius: -1,
    blurWidth: 3.5,
    // borderColor: 'rgba(0,230,240,0)',
    unit: 'px'
  }

  // 设置样式
  pointLayer.setStyle(style);

  // pointLayer.addAnimate({
  //   key: 'radius',
  //   value: [0, 1],
  //   duration: 500,
  //   easing: 'Linear',
  //   transform: 2000,
  //   random: true,
  //   delay: 8000,
  //   yoyo:true,
  //   repeat: 100000
  // });
  // 添加到地图上
  loca.add(pointLayer);
}

const drawPage4Scatter = (type) => {
  let dataSource = 'all'
  const pointLayer = new Loca.PointLayer({
    zIndex: 10,
    opacity: 0.5,
    visible: true,
    blend: 'lighter',
  });

  // 创建数据源
  dataSource = new Loca.GeoJSONSource({
    // url: 'http://10.66.111.29:80/js/page4Scatter.json'
    url: '/public/js/page4Scatter.json'
    // data: page4Scatter
  });
  

  // 图层添加数据
  pointLayer.setSource(dataSource);

  const style = {
    radius: (index, f) => {
      return setRadius(f.properties['value']);
    },
    color: '#00e6f0',
    borderWidth: 0,
    blurRadius: -1,
    blurWidth: 3.5,
    borderColor: 'rgba(0,230,240,0)',
    unit: 'px'
  }

  // 设置样式
  pointLayer.setStyle(style);

  // pointLayer.addAnimate({
  //   key: 'radius',
  //   value: [0, 1],
  //   duration: 500,
  //   easing: 'Linear',
  //   transform: 2000,
  //   random: true,
  //   delay: 8000,
  //   yoyo:true,
  //   repeat: 100000
  // });
  // 添加到地图上
  loca.add(pointLayer);
}

const setRadius = (value) => {
  if (value < 100) {
    return 2;
  } else if (100 <= value && value <= 500) {
    return 5;
  } else if (500 <= value && value <= 1500) {
    return 10;
  } else if (1500 <= value && value <= 5000) {
    return 15;
  } else if (5000 <= value && value < 10000) {
    return 20;
  } else if (10000 <= value) {
    return 25;
  } else {
    return 2;
  }
}
const colors = [
  '#00e6f0',
  '#00e6f0',
  '#00e6f0',
  '#00e6f0',
  '#00e6f0',
  '#00e6f0',
  '#00e6f0',
  '#00e6f0'
];

// const colors = [
//   'rgba(80,255,175,1)',
//   'rgba(0,239,240,1)',
//   'rgba(0,150,230,1)',
//   'rgba(170,120,205,1)',
//   'rgba(210,90,125,1)',
//   'rgba(250,140,100,1)',
//   'rgba(210,90,125,1)',
//   'rgba(255,255,50,1)'
// ];

const setColor = (name) => {
  if (name == '新材料产业') {
    return colors[0];
  } else if (name == '新能源产业') {
    return colors[1];
  } else if (name == '生物产业') {
    return colors[2];
  } else if (name == '节能环保产业') {
    return colors[3];
  } else if (name == '高端装备制造产业') {
    return colors[4];
  } else if (name == '新能源汽车产业') {
    return colors[5];
  } else if (name == '数字创意产业') {
    return colors[6];
  } else if (name == '新一代信息技术产业') {
    return colors[7];
  } else {
    return colors[0];
  }
}

const scatterSelect = (industrial) => {

}

const clearScatter = () => {
  if (loca) {
    loca.clear()
  }
}

const removeAllOverlay = () => {
  if (amap) {
    amap.clearMap();
  }
}

const setZoom = (zoom) => {
  amap.setZoom(zoom, false, 1000);
}

const setCenter = (locat) => {
  amap.setCenter(locat);
}

defineExpose({
  drawCityBounds,
  drawDistrictBounds,
  drawIcon,
  draw4gaoixng,
  drawGroup,
  drawScatter,
  drawPage4Scatter,
  clearScatter,
  removeAllOverlay,
  setZoom,
  setCenter,
  scatterSelect,
  drawOnlyDonghu
});

// 下面的都用图片替代了
const draw3BeltsImage = () => {
  // 健康带
  const imageLayer1 = new AMap.ImageLayer({
    bounds: new AMap.Bounds([113.840334, 30.220526],[115.158694,29.490431]),
    url: '/img/health.png', // 图片 Url
    zIndex:2,
    opacity: 1,
    zooms: [3, 18] // 设置可见级别，[最小级别，最大级别]
  });
  
  // 电子信息带
  const imageLayer2 = new AMap.ImageLayer({
    bounds: new AMap.Bounds([113.612368, 30.2229],[114.980166,31.032361]),
    url: '/img/electronic.png',
    zIndex:2,
    opacity: 1,
    zooms: [3, 18]
  });

  // 智能制造带
  const imageLayer3 = new AMap.ImageLayer({
    bounds: new AMap.Bounds([114.938967,30.886333],[115.963442,29.803132]),
    url: '/img/intellect.png',
    zIndex:2,
    opacity: 1,
    zooms: [3, 18]
  });
  // 将图层添加至地图实例
  amap.add(imageLayer1);
  belts.push(imageLayer1)
  amap.add(imageLayer2);
  belts.push(imageLayer2)
  amap.add(imageLayer3);
  belts.push(imageLayer3)
}

const remove3Belts = () => {
  amap.remove(belts);
}

const drawAxisImage = () => {
  // 一轴,改成图片呈现
  // const imageLayer = new AMap.ImageLayer({
  //   bounds: new AMap.Bounds([113.425601,29.726837],[116.309512,30.631431]),
  //   url: '/img/arrow.png',
  //   zIndex:2,
  //   opacity: 1,
  //   zooms: [3, 18]
  // });
  // amap.add(imageLayer);
  // axis.push(imageLayer);

  // 一核
  const icon = new AMap.Icon({
    size: new AMap.Size(300, 300),
    image: '/img/core.png',
    imageSize: new AMap.Size(300, 300),
  });
  const marker = new AMap.Marker({
    position: new AMap.LngLat(114.498055,30.495861),
    offset: new AMap.Pixel(-150, -150),
    icon: icon,
    title: '东湖高新'
  });
  amap.add(marker)
}

const removeAxis = () => {
  amap.remove(axis);
}

onMounted(() => {
  initMap();
});
</script>
<style scoped>
#amap {
  position: absolute;
  width: 100%;
  height: 100%;
}
.mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  /* background-image: linear-gradient(180deg, #0A204E 0%, rgba(37, 54, 76, 0.04) 30%, rgba(38, 55, 77, 0) 49%, rgba(36, 52, 74, 0.13) 68%, #0A204E 100%), 
    linear-gradient(270deg, #0A204E 0%, rgba(37, 54, 76, 0.06) 21%, rgba(38, 55, 77, 0) 48%, rgba(37, 54, 76, 0.05) 74%, #0A204E 100%); */
  background-image: radial-gradient(40% 70%,rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0.5) 85%, rgba(0, 0, 0, 0.8))
}
</style>
