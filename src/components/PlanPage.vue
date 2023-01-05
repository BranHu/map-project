<script setup>
import { onMounted, ref, reactive } from "vue";

const emits = defineEmits([
  "playInit",
  "drawCityBounds",
  "drawDistrictBounds",
  "removeDistrictBounds",
  "drawGroup",
  "removeGroup",
  "drawIcon",
  "removeIcon",
  "setZoom",
]);

let page = ref(0);

let plan = ref(false);
let space = ref(false);
let strategy = ref(false);
let axis = ref(false);
let plan2025 = ref(false);
let plan2035 = ref(false);
let beltElectronic = ref(false);
let beltHealth = ref(false);
let beltIntellect = ref(false);
let time = ref(1000);
let playStatus = ref(false);
let stepOne = null;
let stepTwo = null;
let stepThree = null;
let stepFour = null;
let stepFive = null;

const initFrame = () => {
  plan.value = false;
  space.value = false;
  strategy.value = false;
  plan2025.value = false;
  plan2035.value = false;
  beltElectronic.value = false;
  beltHealth.value = false;
  beltIntellect.value = false;
  axis.value = false;
};

const backward = () => {
  clearTimeout(stepOne);
  clearTimeout(stepTwo);
  clearTimeout(stepThree);
  clearTimeout(stepFour);
  playStatus.value = false;
  switch (page.value) {
    case 0:
      page.value = 1;
      ElMessage({
        message: "已经是最前一页",
        type: "warning",
      });
      clearAll();
      break;
    case 1:
      clearAll();
      break;
    case 2:
      backwardOne();
      break;
    case 3:
      backwardTwo();
      break;
    case 4:
      backwardThree();
      break;
    case 5:
      backwardFour();
      break;
    default:
      break;
  }
  page.value--;
};

const forward = () => {
  clearTimeout(stepOne);
  clearTimeout(stepTwo);
  clearTimeout(stepThree);
  clearTimeout(stepFour);
  playStatus.value = false;
  page.value++;
  switch (page.value) {
    case 1:
      forwardOne();
      break;
    case 2:
      forwardTwo();
      break;
    case 3:
      forwardThree();
      break;
    case 4:
      forwardFour();
      break;
    case 5:
      forwardFive();
      break;
    case 6:
      page.value = 5;
      ElMessage({
        message: "已经是最后一页",
        type: "error",
      });
      break;
    default:
      console.log("禁止");
      break;
  }
};

const clearAll = () => {
  emits("playInit");
  initFrame();
};

// 第一页
const forwardOne = () => {
  emits("playInit");
  initFrame();
  plan.value = true;
  emits("drawCityBounds");
  emits("setZoom", 8);
};

const backwardOne = () => {
  emits("removeDistrictBounds");
  emits("setZoom", 8);
};

const forwardTwo = () => {
  emits("drawDistrictBounds");
  emits("setZoom", 9);
};

const backwardTwo = () => {
  plan.value = true;
  space.value = false;
  axis.value = false;
};

const forwardThree = () => {
  plan.value = false;
  space.value = true;
  axis.value = true;
};

const backwardThree = () => {
  emits("removeIcon");
  emits("removeGroup");
  axis.value = true;
  beltElectronic.value = false;
  beltHealth.value = false;
  beltIntellect.value = false;
  strategy.value = false;
};

const forwardFour = () => {
  axis.value = false;
  beltElectronic.value = true;
  beltHealth.value = true;
  beltIntellect.value = true;
  strategy.value = true;
  emits("drawGroup");
  emits("drawIcon");
};

const backwardFour = () => {
  space.value = true;
  strategy.value = true;
  beltElectronic.value = true;
  beltHealth.value = true;
  beltIntellect.value = true;
  plan2025.value = false;
  plan2035.value = false;
};

const forwardFive = () => {
  space.value = false;
  strategy.value = false;
  beltElectronic.value = false;
  beltHealth.value = false;
  beltIntellect.value = false;
  plan2025.value = true;
  plan2035.value = true;
};

const play = () => {
  emits("playInit");
  initFrame();
  playStatus.value = true;
  forwardOne();
  stepOne = setTimeout(() => {
    forwardTwo();
    console.log(1);
    stepTwo = setTimeout(() => {
      forwardThree();
      console.log(2);
      stepThree = setTimeout(() => {
        forwardFour();
        console.log(3);
        stepFour = setTimeout(() => {
          forwardFive();
          console.log(4);
        }, 3000);
      }, 3000);
    }, 3000);
  }, 3000);
};
</script>
<template>
  <el-row class="time-input" justify="end">
    <el-col :span="6">
      <div @click="backward" class="backwardBtn">
        <i class="fa fa-backward"></i>
      </div>
      <div @click="play" class="playBtn">
        <i class="fa fa-pause" v-if="playStatus"></i>
        <i class="fa fa-play" v-else></i>
      </div>
      <div @click="forward" class="forwardBtn">
        <i class="fa fa-forward"></i>
      </div>
    </el-col>
  </el-row>

  <!-- 规划范围 -->
  <div
    v-if="plan"
    class="limit animate__animated animate__fadeInDown animate__delay-0.6s"
  >
    <p class="title">【规划范围】</p>
    <div class="line"></div>
    <p class="dis">
      光谷科技创新大走廊是以东湖高新区为核心承载区，联动武汉市武昌区、洪山区、江夏区，辐射带动鄂州市、黄石市、黄冈市、咸宁市。
    </p>
  </div>

  <!-- 战略定位 -->
  <div
    v-if="strategy"
    class="strategy animate__animated animate__fadeInDown animate__delay-0.8s"
  >
    <p class="title">【战略定位】</p>
    <div class="line"></div>
    <div>
      <span class="info">世界级科技产业创新</span>
      <span class="short">策源地</span>
    </div>
    <div>
      <span class="info">长江中游城市群协同发展</span>
      <span class="short">先行区</span>
    </div>
    <div>
      <span class="info">武汉“两个中心”建设</span>
      <span class="short">核心承载区</span>
    </div>
    <div>
      <span class="info">湖北省高质量发展</span>
      <span class="short">引领区</span>
    </div>
  </div>

  <!-- 轴 -->
  <div
    v-if="axis"
    class="axis animate__animated animate__fadeIn animate__delay-0.8s"
  >
    <p class="axis-left">创新发展</p>
    <p class="axis-right">联动轴</p>
  </div>

  <!-- 三带 -->
  <div
    v-if="beltElectronic"
    class="belt-electronic animate__animated animate__fadeIn animate__delay-0.8s"
  >
    光电子信息产业带
  </div>
  <div
    v-if="beltHealth"
    class="belt-health animate__animated animate__fadeIn animate__delay-0.8s"
  >
    大健康产业带
  </div>
  <div
    v-if="beltIntellect"
    class="belt-intellect animate__animated animate__fadeIn animate__delay-0.8s"
  >
    智能产业带
  </div>

  <!-- 空间布局 -->
  <div
    v-if="space"
    class="space animate__animated animate__fadeIn animate__delay-0.8s"
  >
    <p class="title">【空间布局】</p>
    <div class="line"></div>
    <p class="dis">
      按照“整体统筹、区域聚焦、错位布局、协作联动“思路，形成“一核一轴三带多组团”科技产业空间布局。
    </p>
    <div class="first-row">
      <p>
        <span class="short">“一核”</span>
        <span class="info">东湖科学城</span>
      </p>
      <div></div>
      <p>
        <span class="short">“一轴”</span>
        <span class="info">创新发展联动轴</span>
      </p>
    </div>
    <div class="second-row">
      <span class="short">“三带”</span>
      <span class="info">光电子信息产业带、大健康产业带和智能产业带</span>
    </div>
    <div class="third-row">
      <span class="short">“多组团”</span>
      <span class="info"
        >大光谷创新组团、红莲湖-葛店科创组团、鄂州机场临空组团、环大冶湖智造组团、黄冈特色产业组团、咸宁绿色产业组团。</span
      >
    </div>
  </div>

  <!-- 2025规划 -->
  <div
    v-if="plan2025"
    class="plan2025 animate__animated animate__fadeInDown animate__delay-0.6s"
  >
    <p class="title">【发展目标】——到2025年</p>
    <div class="line"></div>
    <p class="dis">光谷科技创新大走廊区域创新能力明显增强</p>
    <p class="dis">东湖科学城科技创新达到世界先进水平</p>
    <p class="dis" style="padding-top: 0.026042rem">
      大走廊区域内R&D经费内部支出占地区生产总值的比重超过<span class="bold"
        >3%</span
      >
    </p>
    <p class="dis" style="padding-top: 0.026042rem">
      高新技术企业突破<span class="bold">12000家</span>
    </p>
    <p class="dis" style="padding-top: 0.026042rem">
      高新技术产业增加值占地区生产总值的比重超过<span class="bold">30%</span>
    </p>
  </div>

  <!-- 2035规划 -->
  <div
    v-if="plan2035"
    class="plan2035 animate__animated animate__fadeInDown animate__delay-0.6s"
  >
    <p class="title">【发展目标】——到2035年</p>
    <div class="line"></div>
    <p class="dis">
      光谷科技创新大走廊成为全球创新网络的<span class="bold">重要枢纽</span>
    </p>
    <p class="dis">东湖科学城成为全球<span class="bold">创新高地</span></p>
    <p class="dis">建成一批世界一流的重大<span class="bold">创新平台</span></p>
    <p class="dis">
      研发出一批世界领先的原创性<span class="bold">科技成果</span>
    </p>
    <p class="dis">培育出一批世界级<span class="bold">科技企业</span></p>
    <p class="dis">打造若干世界级<span class="bold">产业集群</span></p>
  </div>
</template>

<style scoped>
.time-input {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 50%;
  z-index: 111;
}
.backwardBtn,
.forwardBtn,
.playBtn {
  display: inline-flex;
  margin: 0 5px;
  padding: 8px 15px;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 32px;
  white-space: nowrap;
  cursor: pointer;
  color: #ffffff;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  transition: 0.1s;
  /* background-color: #00e6f0; */
  opacity: 0.5;
  vertical-align: middle;
  border-radius: 4px;
  /* cursor: not-allowed; */
}
.limit {
  position: absolute;
  left: 0.692708rem /* 532/768 */;
  top: 1.518229rem /* 1166/768 */;
  width: 2.826823rem /* 2171/768 */;
  height: 1.247396rem /* 958/768 */;
  display: flex;
  flex-direction: column;
  background: url("/img/limit-border.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: white;
  padding-top: 0.273438rem /* 210/768 */;
  padding-left: 0.260417rem /* 200/768 */;
  padding-right: 0.208333rem /* 160/768 */;
  font-family: "黑体";
  z-index: 111;
}
.limit p.title {
  font-size: 0.128906rem /* 99/768 */;
  padding-bottom: 0.078125rem /* 60/768 */;
  border-bottom: 0.001302rem /* 1/768 */ solid #00e6f0;
  font-weight: bold;
}
.limit p.dis {
  padding-top: 0.104167rem /* 80/768 */;
  font-size: 0.065104rem /* 50/768 */;
}
.strategy {
  position: absolute;
  right: 0.427083rem /* 328/768 */;
  top: 1.141927rem /* 877/768 */;
  width: 1.966146rem /* 1510/768 */;
  height: 1.825521rem /* 1402/768 */;
  display: flex;
  flex-direction: column;
  background: url("/img/strategy.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: white;
  padding-top: 0.260417rem /* 200/768 */;
  padding-left: 0.195313rem /* 150/768 */;
  padding-right: 0.195313rem /* 150/768 */;
  font-family: "黑体";
  z-index: 111;
}

.strategy p.title {
  font-size: 0.128906rem /* 99/768 */;
  padding-bottom: 0.078125rem /* 60/768 */;
  border-bottom: 0.001302rem /* 1/768 */ solid #00e6f0;
  font-weight: bold;
}
.strategy .line {
  padding-bottom: 0.078125rem /* 60/768 */;
}
.strategy div {
  margin-bottom: 0.052083rem /* 40/768 */;
}
.strategy span {
  display: inline-block;
  letter-spacing: 0.00651rem /* 5/768 */;
}
.strategy .short {
  font-size: 0.104167rem /* 80/768 */;
  color: #00e6f0;
  text-align: left;
  font-weight: bold;
}
.strategy .info {
  width: 1.002604rem /* 770/768 */;
  padding-right: 0.026042rem /* 20/768 */;
  font-size: 0.065104rem /* 50/768 */;
  text-align: right;
}
.plan2025 {
  position: absolute;
  left: 0.514323rem /* 395/768 */;
  top: 1.170573rem /* 899/768 */;
  width: 2.856771rem /* 2194/768 */;
  height: 1.714844rem /* 1317/768 */;
  display: flex;
  flex-direction: column;
  background: url("/img/2025.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: white;
  padding-top: 0.260417rem /* 200/768 */;
  padding-left: 0.201823rem /* 155/768 */;
  padding-right: 0.201823rem /* 155/768 */;
  font-family: "黑体";
  z-index: 111;
}
.plan2025 p.title {
  font-size: 0.128906rem /* 99/768 */;
  padding-bottom: 0.052083rem /* 40/768 */;
  margin-bottom: 0.065104rem /* 50/768 */;
  border-bottom: 0.001302rem /* 1/768 */ solid #00e6f0;
  font-weight: bold;
  letter-spacing: 0.013021rem /* 10/768 */;
}
.plan2025 p.dis {
  margin-left: 0.104167rem /* 80/768 */;
  padding-top: 0.045573rem /* 35/768 */;
  font-size: 0.065104rem /* 50/768 */;
  letter-spacing: 0.003906rem /* 3/768 */;
}
.plan2025 p.dis span.bold {
  font-size: 0.104167rem /* 80/768 */;
  color: #00e6f0;
  font-weight: bold;
  letter-spacing: 0.013021rem /* 10/768 */;
  padding-left: 0.026042rem /* 20/768 */;
}
.plan2035 {
  position: absolute;
  right: 0.217448rem /* 167/768 */;
  top: 1.15625rem /* 888/768 */;
  width: 2.316406rem /* 1779/768 */;
  height: 1.915365rem /* 1471/768 */;
  display: flex;
  flex-direction: column;
  background: url("/img/2035.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: white;
  padding-top: 0.240885rem /* 185/768 */;
  padding-left: 0.195313rem /* 150/768 */;
  padding-right: 0.195313rem /* 150/768 */;
  font-family: "黑体";
  z-index: 111;
}
.plan2035 p.title {
  font-size: 0.128906rem /* 99/768 */;
  padding-bottom: 0.052083rem /* 40/768 */;
  border-bottom: 0.001302rem /* 1/768 */ solid #00e6f0;
  font-weight: bold;
  letter-spacing: 0.013021rem /* 10/768 */;
  margin-bottom: 0.052083rem /* 40/768 */;
}
.plan2035 p.dis {
  padding-top: 0.026042rem /* 20/768 */;
  font-size: 0.065104rem /* 50/768 */;
}
.plan2035 p.dis span.bold {
  font-size: 0.104167rem /* 80/768 */;
  color: #00e6f0;
  font-weight: bold;
  letter-spacing: 0.013021rem /* 10/768 */;
  padding-left: 0.026042rem /* 20/768 */;
}
.axis {
  position: absolute;
  left: 2.734375rem /* 2100/768 */;
  top: 1.822917rem /* 1400/768 */;
  width: 5.957031rem /* 4575/768 */;
  height: 2.572917rem /* 1976/768 */;
  background: url("/img/arrow.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.axis p {
  position: absolute;
  color: rgba(225, 200, 130, 0.9);
  font-size: 0.195313rem /* 150/768 */;
  letter-spacing: 0.104167rem /* 80/768 */;
  font-weight: bold;
}
.axis p.axis-left {
  left: 0.286458rem /* 220/768 */;
  bottom: 0.559896rem /* 430/768 */;
  transform: rotate(-37deg);
}
.axis p.axis-right {
  right: 0.390625rem /* 300/768 */;
  bottom: 0.325521rem /* 250/768 */;
  transform: rotate(23deg);
}
.belt-electronic {
  position: absolute;
  left: 2.864583rem /* 2200/768 */;
  top: 1.302083rem /* 1000/768 */;
  width: 3.385417rem /* 2600/768 */;
  height: 0.911458rem /* 700/768 */;
  line-height: 0.911458rem /* 700/768 */;
  transform: rotate(-30deg);
  background: url("/img/electronic.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: white;
  font-size: 0.14974rem /* 115/768 */;
  letter-spacing: 0.104167rem /* 80/768 */;
  text-align: center;
}
.belt-health {
  position: absolute;
  left: 3.255208rem /* 2500/768 */;
  top: 3.255208rem /* 2500/768 */;
  width: 3.385417rem /* 2600/768 */;
  height: 0.911458rem /* 700/768 */;
  line-height: 0.911458rem /* 700/768 */;
  transform: rotate(20deg);
  background: url("/img/health.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: white;
  font-size: 0.14974rem /* 115/768 */;
  letter-spacing: 0.104167rem /* 80/768 */;
  text-align: center;
}
.belt-intellect {
  position: absolute;
  left: 5.598958rem /* 4300/768 */;
  top: 2.083333rem /* 1600/768 */;
  width: 3.90625rem /* 3000/768 */;
  height: 1.041667rem /* 800/768 */;
  line-height: 0.911458rem /* 700/768 */;
  transform: rotate(60deg);
  background: url("/img/intellect.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: white;
  font-size: 0.14974rem /* 115/768 */;
  letter-spacing: 0.104167rem /* 80/768 */;
  text-align: center;
}
.space {
  position: absolute;
  left: 0.423177rem /* 325/768 */;
  top: 0.920573rem /* 707/768 */;
  width: 2.856771rem /* 2194/768 */;
  height: 2.091146rem /* 1606/768 */;
  display: flex;
  flex-direction: column;
  background: url("/img/space.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: white;
  padding-top: 0.260417rem /* 200/768 */;
  padding-left: 0.196615rem /* 151/768 */;
  padding-right: 0.196615rem /* 151/768 */;
  font-family: "黑体";
  z-index: 111;
}
.space p.title {
  font-size: 0.128906rem /* 99/768 */;
  padding-bottom: 0.052083rem /* 40/768 */;
  border-bottom: 0.001302rem /* 1/768 */ solid #00e6f0;
  font-weight: bold;
}
.space p.dis {
  padding-top: 0.117188rem /* 90/768 */;
  font-size: 0.065104rem /* 50/768 */;
}
.space .first-row {
  display: flex;
  flex-direction: row;
  margin-top: 0.104167rem /* 80/768 */;
}
.space .first-row p {
  width: 49%;
  border: 0.001302rem /* 1/768 */ dashed #00e6f0;
}
.space .first-row div {
  width: 2%;
}
.space .second-row {
  display: flex;
  flex-direction: row;
  margin-top: 0.065104rem /* 50/768 */;
  border: 0.001302rem /* 1/768 */ dashed #00e6f0;
}
.space .third-row {
  display: flex;
  flex-direction: row;
  margin-top: 0.065104rem /* 50/768 */;
  border: 0.001302rem /* 1/768 */ dashed #00e6f0;
}
.space .third-row .info {
  width: 1.692708rem /* 1300/768 */;
}
.space .third-row .short {
  vertical-align: middle;
}
.space .short {
  display: inline-block;
  width: 0.585938rem /* 450/768 */;
  font-size: 0.104167rem /* 80/768 */;
  color: #00e6f0;
  font-weight: bold;
}
.space .info {
  display: inline-block;
  font-size: 0.065104rem /* 50/768 */;
}
</style>
