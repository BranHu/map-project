<script setup>
import { onMounted, ref } from "vue";
// defineProps({
//   option: {},
// });
const tab1 = ref(true);
const tab2 = ref(false);
const tab3 = ref(false);
const tab4 = ref(false);

const handleSelect = (e) => {
  switch (e.target.dataset.tab) {
    case "tab1":
      tab1.value = true;
      tab2.value = false;
      tab3.value = false;
      tab4.value = false;
      // init();
      break;
    case "tab2":
      tab1.value = false;
      tab2.value = true;
      tab3.value = false;
      tab4.value = false;
      break;
    case "tab3":
      tab1.value = false;
      tab2.value = false;
      tab3.value = true;
      tab4.value = false;
      break;
    case "tab4":
      tab1.value = false;
      tab2.value = false;
      tab3.value = false;
      tab4.value = true;
      break;
    default:
      break;
  }
};
</script>

<template>
  <div
    class="creative-quality animate__animated animate__fadeInDown animate__delay-0.6s"
  >
    <h1>区域创新质量评价</h1>
    <div class="tab" @click="handleSelect">
      <span data-tab="tab1" :class="{ active: tab1 }">创新匹配度指数</span>
      <span data-tab="tab2" :class="{ active: tab2 }"
        >专利与科技匹配度</span
      >
      <span data-tab="tab3" :class="{ active: tab3 }">专利与企业匹配度</span>
      <span data-tab="tab4" :class="{ active: tab4 }">专利与产业匹配度</span>
    </div>
    <div class="content">
      <ul class="tab1" v-if="tab1">
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">区域创新匹配度指数</span>
          </p>
          <div class="data">
            <div class="img1"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">科技匹配度指数</span>
          </p>
          <div class="data">
            <div class="img2"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">企业匹配度指数</span>
          </p>
          <div class="data">
            <div class="img3"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">产业匹配度指数</span>
          </p>
          <div class="data">
            <div class="img4"></div>
          </div>
        </li>
      </ul>
      <ul class="tab2" v-if="tab2">
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">科技匹配度指数</span>
          </p>
          <div class="data" style="height: .78125rem">
            <div class="img1"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">每亿元研发投入专利授权量</span>
          </p>
          <div class="data">
            <div class="img2"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">每万人研发人员专利授权量</span>
          </p>
          <div class="data">
            <div class="img3"></div>
          </div>
        </li>
      </ul>
      <ul class="tab3" v-if="tab3">
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">企业匹配度指数</span>
          </p>
          <div class="data">
            <div class="img1"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">企业有效发明专利占比</span>
          </p>
          <div class="data">
            <div class="img2"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">有专利活动企业占比</span>
          </p>
          <div class="data">
            <div class="img3"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">企业发明专利占三种专利类型比重</span>
          </p>
          <div class="data">
            <div class="img4"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">上市公司发明专利平均拥有量</span>
            <span class="icon"></span>
            <span class="text">规模以上工业企业发明专利平均拥有量</span>
          </p>
          <div class="data">
            <div class="img5"></div>
          </div>
        </li>
      </ul>
      <ul class="tab4" v-if="tab4">
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">区域创新匹配度指数</span>
          </p>
          <div class="data">
            <div class="img1"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">战略性新兴产业有效发明专利数量占比</span>
          </p>
          <div class="data">
            <div class="img2"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">专利密集型产业有效发明专利数量占比</span>
          </p>
          <div class="data">
            <div class="img3"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">主导产业产值与专利产出匹配程度</span>
          </p>
          <div class="data">
            <div class="img4"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.creative-quality {
  position: absolute;
  width: 2.604167rem /* 2000/768 */;
  right: .195313rem /* 150/768 */;
  top: .520833rem /* 400/768 */;
  z-index: 111;
}

.creative-quality h1 {
  text-align: center;
  color: #00e6f0;
  font-size: .104167rem /* 80/768 */;
  margin-bottom: .065104rem /* 50/768 */;
  font-weight: bold;
  letter-spacing:3px
}
.creative-quality  .tab span.active {
  background-color: rgba(0, 135, 150, 0.7);
}

.creative-quality  div.tab {
  display: flex;
  /* background-color: red; */
  justify-content: space-around;
}

.creative-quality  .tab span.active::after {
  content: "";
  position: absolute;
  top: .195313rem /* 150/768 */;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: rgba(0, 135, 150, 0.7);
}

.creative-quality  .tab span {
  display: inline-block;
  background-color: rgba(83, 83, 83, 0.7);
  color: #fff;
  padding: .039063rem /* 30/768 */ .065104rem /* 50/768 */;
  cursor: pointer;
}

.creative-quality .content {
  display: flex;
  margin: .104167rem /* 80/768 */ .026042rem /* 20/768 */;
}

.creative-quality .content ul {
  width: 100%;
}

.creative-quality .content li {
  width: 100%;
}
.creative-quality .content p.title {
  display: flex;
  align-items: center;
  width: 100%;
  height: .130208rem /* 100/768 */;
  line-height: .130208rem /* 100/768 */;
  background-image:linear-gradient(to right, rgba(79, 79, 79, 0.2), rgba(220, 220, 220, 0.2));
}

.creative-quality .content div.data {
  display: flex;
  align-items: center;
  width: 100%;
  height: .78125rem /* 600/768 */;
  background-color: rgba(125, 125, 125, 0.1);
}

.creative-quality .content .tab3 div.data {
  height: .585938rem /* 450/768 */;
}

.creative-quality .content .tab2 div.data {
  height: 1.106771rem /* 850/768 */;
}

.creative-quality .content div.data div {
  width: 100%;
  height: 100%;
  margin-top: .169271rem /* 130/768 */;
  margin-left: .130208rem /* 100/768 */;
  margin-right: .130208rem /* 100/768 */;
  background-size: contain;
  background-repeat: no-repeat;
}
.content p.title span.icon {
  margin-left: .052083rem /* 40/768 */;
  margin-right: .078125rem /* 60/768 */;
  width: .078125rem /* 60/768 */;
  height: .078125rem /* 60/768 */;
  background-color: rgba(0, 135, 150, 1);
}
.content p.title span.text {
  color: white;
  font-size: 0.048177rem /* 37/768 */;
}

.creative-quality .content .tab1 .img1 {
  background-image: url("/img/page3tab1-01.png");
}
.creative-quality .content .tab1 .img2 {
  background-image: url("/img/page3tab1-02.png");
}
.creative-quality .content .tab1 .img3 {
  background-image: url("/img/page3tab1-03.png");
}
.creative-quality .content .tab1 .img4 {
  background-image: url("/img/page3tab1-04.png");
}

.creative-quality .content .tab2 .img1 {
  background-image: url("/img/page3tab2-01.png");
}
.creative-quality .content .tab2 .img2 {
  background-image: url("/img/page3tab2-02.png");
}
.creative-quality .content .tab2 .img3 {
  background-image: url("/img/page3tab2-03.png");
}

.creative-quality .content .tab3 .img1 {
  background-image: url("/img/page3tab3-01.png");
}
.creative-quality .content .tab3 .img2 {
  background-image: url("/img/page3tab3-02.png");
}
.creative-quality .content .tab3 .img3 {
  background-image: url("/img/page3tab3-03.png");
}
.creative-quality .content .tab3 .img4 {
  background-image: url("/img/page3tab3-04.png");
}
.creative-quality .content .tab3 .img5 {
  background-image: url("/img/page3tab3-05.png");
}

.creative-quality .content .tab4 .img1 {
  background-image: url("/img/page3tab4-01.png");
}
.creative-quality .content .tab4 .img2 {
  background-image: url("/img/page3tab4-02.png");
}
.creative-quality .content .tab4 .img3 {
  background-image: url("/img/page3tab4-03.png");
}
.creative-quality .content .tab4 .img4 {
  background-image: url("/img/page3tab4-04.png");
}

</style>
