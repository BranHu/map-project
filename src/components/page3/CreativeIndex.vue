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
    class="creative-index animate__animated animate__fadeInDown animate__delay-0.6s"
  >
    <h1>区域创新指数</h1>
    <div class="tab" @click="handleSelect">
      <span data-tab="tab1" :class="{ active: tab1 }">创新竞争力指数</span>
      <span data-tab="tab2" :class="{ active: tab2 }">创新要素聚集指数</span>
      <span data-tab="tab3" :class="{ active: tab3 }">创新产出指数</span>
      <span data-tab="tab4" :class="{ active: tab4 }">创新效益指数</span>
    </div>
    <div class="content">
      <ul class="tab1" v-if="tab1">
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">区域创新竞争力指数</span>
          </p>
          <div class="data">
            <div class="img1"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">创新要素聚集指数</span>
          </p>
          <div class="data">
            <div class="img2"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">创新产出指数</span>
          </p>
          <div class="data">
            <div class="img3"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">创新效益指数</span>
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
            <span class="text">创新要素聚集指数</span>
          </p>
          <div class="data">
            <div class="img1"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">研发人员参与发明创造平均次数</span>
          </p>
          <div class="data">
            <div class="img2"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">具有较高创新水平的专利发明人数量</span>
          </p>
          <div class="data">
            <div class="img3"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">重点创新主体数量</span>
          </p>
          <div class="data">
            <div class="img4"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">近五年初次申请专利的企业数量</span>
          </p>
          <div class="data">
            <div class="img5"></div>
          </div>
        </li>
      </ul>
      <ul class="tab3" v-if="tab3">
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">创新产出指数</span>
          </p>
          <div class="data">
            <div class="img1"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">每万人口发明专利拥有量</span>
          </p>
          <div class="data">
            <div class="img2"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">维持十年以上的有效发明专利拥有量</span>
          </p>
          <div class="data">
            <div class="img3"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">高被引专利数量</span>
          </p>
          <div class="data">
            <div class="img4"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">PCT专利申请量</span>
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
            <span class="text">区域创新竞争力指数</span>
          </p>
          <div class="data" style="height: 0.78125rem">
            <div class="img1"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">专利转让、许可备案平均金额（万元）</span>
          </p>
          <div class="data">
            <div class="img2"></div>
          </div>
        </li>
        <li>
          <p class="title">
            <span class="icon"></span>
            <span class="text">专利质押融资平均金额（万元）</span>
          </p>
          <div class="data">
            <div class="img3"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.creative-index {
  position: absolute;
  width: 2.604167rem /* 2000/768 */;
  left: 0.195313rem /* 150/768 */;
  top: 0.520833rem /* 400/768 */;
  z-index: 111;
}

.creative-index h1 {
  text-align: center;
  color: #00e6f0;
  font-size: 0.104167rem /* 80/768 */;
  margin-bottom: 0.065104rem /* 50/768 */;
  font-weight: bold;
  letter-spacing: 3px;
}
.creative-index .tab span.active {
  background-color: rgba(0, 135, 150, 0.7);
}

.creative-index div.tab {
  display: flex;
  /* background-color: red; */
  justify-content: space-around;
}

.creative-index .tab span.active::after {
  content: "";
  position: absolute;
  top: 0.195313rem /* 150/768 */;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: rgba(0, 135, 150, 0.7);
}

.creative-index .tab span {
  display: inline-block;
  background-color: rgba(83, 83, 83, 0.7);
  color: #fff;
  padding: 0.039063rem /* 30/768 */ 0.065104rem /* 50/768 */;
  cursor: pointer;
}

.creative-index .content {
  display: flex;
  margin: 0.104167rem /* 80/768 */ 0.026042rem /* 20/768 */;
}

.creative-index .content ul {
  width: 100%;
}

.creative-index .content li {
  width: 100%;
}
.creative-index .content p.title {
  display: flex;
  align-items: center;
  width: 100%;
  height: 0.130208rem /* 100/768 */;
  line-height: 0.130208rem /* 100/768 */;
  background-image: linear-gradient(
    to right,
    rgba(79, 79, 79, 0.2),
    rgba(220, 220, 220, 0.2)
  );
}

.creative-index .content div.data {
  display: flex;
  align-items: center;
  width: 100%;
  height: 0.78125rem /* 600/768 */;
  background-color: rgba(125, 125, 125, 0.1);
}

.creative-index .content .tab2 div.data,
.creative-index .content .tab3 div.data {
  height: 0.585938rem /* 450/768 */;
}

.creative-index .content .tab4 div.data {
  height: 1.106771rem /* 850/768 */;
}

.creative-index .content div.data div {
  width: 100%;
  height: 100%;
  margin-top: 0.169271rem /* 130/768 */;
  margin-left: 0.130208rem /* 100/768 */;
  margin-right: 0.130208rem /* 100/768 */;
  background-size: contain;
  background-repeat: no-repeat;
}
.content p.title span.icon {
  margin-left: 0.052083rem /* 40/768 */;
  margin-right: 0.078125rem /* 60/768 */;
  width: 0.078125rem /* 60/768 */;
  height: 0.078125rem /* 60/768 */;
  background-color: rgba(0, 135, 150, 1);
}
.content p.title span.text {
  color: white;
  font-size: 0.048177rem /* 37/768 */;
}

.creative-index .content .tab1 .img1 {
  background-image: url("/img/page3tab1-1.png");
}
.creative-index .content .tab1 .img2 {
  background-image: url("/img/page3tab1-2.png");
}
.creative-index .content .tab1 .img3 {
  background-image: url("/img/page3tab1-3.png");
}
.creative-index .content .tab1 .img4 {
  background-image: url("/img/page3tab1-4.png");
}

.creative-index .content .tab2 .img1 {
  background-image: url("/img/page3tab2-1.png");
}
.creative-index .content .tab2 .img2 {
  background-image: url("/img/page3tab2-2.png");
}
.creative-index .content .tab2 .img3 {
  background-image: url("/img/page3tab2-3.png");
}
.creative-index .content .tab2 .img4 {
  background-image: url("/img/page3tab2-4.png");
}
.creative-index .content .tab2 .img5 {
  background-image: url("/img/page3tab2-5.png");
}

.creative-index .content .tab3 .img1 {
  background-image: url("/img/page3tab3-1.png");
}
.creative-index .content .tab3 .img2 {
  background-image: url("/img/page3tab3-2.png");
}
.creative-index .content .tab3 .img3 {
  background-image: url("/img/page3tab3-3.png");
}
.creative-index .content .tab3 .img4 {
  background-image: url("/img/page3tab3-4.png");
}
.creative-index .content .tab3 .img5 {
  background-image: url("/img/page3tab3-5.png");
}

.creative-index .content .tab4 .img1 {
  background-image: url("/img/page3tab4-1.png");
}
.creative-index .content .tab4 .img2 {
  background-image: url("/img/page3tab4-2.png");
}
.creative-index .content .tab4 .img3 {
  background-image: url("/img/page3tab4-3.png");
}
</style>
