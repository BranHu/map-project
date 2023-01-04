<template>
  <TitleName />

  <MenuHu @selectTab="selectTab" />

  <div class="back-map">
    <VueAmap ref="amapRef" />
  </div>
  <!------------------------------------------------ 发展规划页面 -------------------------------------------------->
  <PlanPage
    v-if="planPage"
    @playInit="playInit"
    @drawCityBounds="drawCityBounds"
    @drawDistrictBounds="drawDistrictBounds"
    @drawGroup="drawGroup"
    @removeGroup="removeGroup"
    @drawIcon="drawIcon"
    @removeIcon="removeIcon"
    @setZoom="setZoom"
  />

  <!------------------------------------------------ 创新资源页面 -------------------------------------------------->
  <ResourcePage
    v-if="resourcePage"
    :oneCompany="oneCompany"
    @showCompany="showCompany"
  />

  <!------------------------------------------------ 区域布局页面 -------------------------------------------------->
  <DistributionPage v-if="distributionPage" />

  <!------------------------------------------------ 重点产业页面 -------------------------------------------------->
  <LeadingPage v-if="leadingPage" />
</template>
<script setup>
import "animate.css";
import { onMounted, ref, reactive } from "vue";

const amapRef = ref(null);
//创新资源
const oneCompany = ref(false);
const showCompany = () => {
  oneCompany.value = true;
};

const planPage = ref(true);
const leadingPage = ref(false);
const distributionPage = ref(false);
const resourcePage = ref(false);

const selectTab = (tabName) => {
  playInit();
  amapRef.value.clearScatter();
  switch (tabName) {
    case "planTab":
      showPage1();
      break;
    case "leadingTab":
      showPage2();
      break;
    case "distributionTab":
      showPage3();
      break;
    case "resourceTab":
      showPage4();
      break;
    default:
      break;
  }
};

const clearPage = () => {
  planPage.value = false;
  leadingPage.value = false;
  resourcePage.value = false;
  distributionPage.value = false;
};

const showPage1 = () => {
  clearPage();
  planPage.value = true;
  amapRef.value.setZoom(8);
  amapRef.value.setCenter([114.405188, 30.497573]);
};

const showPage2 = () => {
  clearPage();
  leadingPage.value = true;
  amapRef.value.setZoom(8);
  amapRef.value.setCenter([114.405188, 30.497573]);
  amapRef.value.drawCityBounds();
  amapRef.value.drawScatter();
};

const showPage3 = () => {
  clearPage();
  distributionPage.value = true;
  amapRef.value.setZoom(4.5);
  amapRef.value.setCenter([110, 33]);
  amapRef.value.draw4gaoixng();
};

const showPage4 = () => {
  clearPage();
  resourcePage.value = true;
  oneCompany.value = false;
  amapRef.value.setZoom(11.5);
  amapRef.value.setCenter([114.48, 30.42]);
  amapRef.value.drawOnlyDonghu();
  amapRef.value.drawPage4Scatter();
};

const drawCityBounds = () => {
  amapRef.value.drawCityBounds();
};

const drawDistrictBounds = () => {
  amapRef.value.drawDistrictBounds();
};

const drawGroup = () => {
  amapRef.value.drawGroup();
};

const removeGroup = () => {
  amapRef.value.removeGroup();
};

const drawIcon = () => {
  amapRef.value.drawIcon();
};

const removeIcon = () => {
  amapRef.value.removeIcon();
};

const setZoom = (size) => {
  amapRef.value.setZoom(size);
};
const playInit = () => {
  amapRef.value.removeAllOverlay();
  amapRef.value.clearScatter();
};
onMounted(() => {});
</script>
<style scoped>
.back-map {
  position: absolute;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
}
.left {
  position: absolute;
  left: 0;
  width: 30%;
  height: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
}
.left-top {
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
}
.left-top .chart-wrapper {
  width: 49%;
  height: 100%;
  background-color: rgba(125, 125, 125, 0.1);
  margin-bottom: 2%;
  /* margin-right: 1%; */
}
.left-top .line {
  width: 2%;
  height: 100%;
}
.left-bottom {
  width: 100%;
  flex-grow: 1;
  margin-top: 2%;
}
.left-bottom .chart-wrapper {
  height: 100%;
  background-color: rgba(125, 125, 125, 0.1);
  /* margin: 10px 5px; */
}
.middle {
  position: absolute;
  left: 30%;
  width: 20%;
  height: 50%;
}
.right {
  position: absolute;
  right: 0;
  width: 20%;
  height: 50%;
  margin-top: 5%;
}
.right .chart-wrapper {
  height: 100%;
  background-color: rgba(125, 125, 125, 0.8);
  margin: 10px 5px;
}
</style>
