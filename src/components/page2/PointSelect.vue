<script setup>
import { ref } from "vue";

const emits = defineEmits(["drawScatter", "clearScatter"]);

const tab1 = ref(false);
const tab2 = ref(false);
const tab3 = ref(false);
const tab4 = ref(false);
const tab5 = ref(false);
const tab6 = ref(false);
const tab7 = ref(false);
const tab8 = ref(false);
const tab9 = ref(true);

const setFalse = () => {
  tab1.value = false;
  tab2.value = false;
  tab3.value = false;
  tab4.value = false;
  tab5.value = false;
  tab6.value = false;
  tab7.value = false;
  tab8.value = false;
  tab9.value = false;
};

const industrialSelect = (e) => {
  console.log(e.target.className);
  if (e.target.className !== "point-wrapper") {
    setFalse();
    emits("clearScatter");
    emits("drawScatter", e.target.dataset.tab);
    switch (e.target.dataset.tab) {
      case "新材料产业":
        tab1.value = true;
        break;
      case "新能源产业":
        tab2.value = true;
        break;
      case "生物产业":
        tab3.value = true;
        break;
      case "节能环保产业":
        tab4.value = true;
        break;
      case "高端装备制造产业":
        tab5.value = true;
        break;
      case "新能源汽车产业":
        tab6.value = true;
        break;
      case "数字创意产业":
        tab7.value = true;
        break;
      case "新一代信息技术产业":
        tab8.value = true;
        break;
      case "全部":
        tab9.value = true;
        break;
      default:
        break;
    }
  }
};
</script>

<template>
  <div class="point-wrapper" @click="industrialSelect">
    <el-tooltip
      content="新材料产业"
      placement="top-start"
      popper-class="industrial-popper"
    >
      <div data-tab="新材料产业" :class="{ active: tab1 }"></div>
    </el-tooltip>
    <el-tooltip
      content="新能源产业"
      placement="top"
      popper-class="industrial-popper"
    >
      <div data-tab="新能源产业" :class="{ active: tab2 }"></div>
    </el-tooltip>
    <el-tooltip
      content="生物产业"
      placement="top"
      popper-class="industrial-popper"
    >
      <div data-tab="生物产业" :class="{ active: tab3 }"></div>
    </el-tooltip>
    <el-tooltip
      content="节能环保产业"
      placement="top"
      popper-class="industrial-popper"
    >
      <div data-tab="节能环保产业" :class="{ active: tab4 }"></div>
    </el-tooltip>
    <el-tooltip
      content="高端装备制造产业"
      placement="top"
      popper-class="industrial-popper"
    >
      <div data-tab="高端装备制造产业" :class="{ active: tab5 }"></div>
    </el-tooltip>
    <el-tooltip
      content="新能源汽车产业"
      placement="top"
      popper-class="industrial-popper"
    >
      <div data-tab="新能源汽车产业" :class="{ active: tab6 }"></div>
    </el-tooltip>
    <el-tooltip
      content="数字创意产业"
      placement="top"
      popper-class="industrial-popper"
    >
      <div data-tab="数字创意产业" :class="{ active: tab7 }"></div>
    </el-tooltip>
    <el-tooltip
      content="新一代信息技术产业"
      placement="top"
      popper-class="industrial-popper"
    >
      <div data-tab="新一代信息技术产业" :class="{ active: tab8 }"></div>
    </el-tooltip>
    <el-tooltip content="全部" placement="top" popper-class="industrial-popper">
      <div data-tab="全部" :class="{ active: tab9 }"></div>
    </el-tooltip>
  </div>
</template>

<style>
.point-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0.390625rem /* 300/768 */;
  /* margin:auto; */
  padding: 0 1.302083rem /* 1000/768 */;
  display: flex;
  list-style: none;
  justify-content: center;
}
.point-wrapper div {
  width: 0.065104rem /* 50/768 */;
  height: 0.065104rem /* 50/768 */;
  border-radius: 0.065104rem /* 50/768 */;
  margin: 0 0.039063rem /* 30/768 */;
  cursor: pointer;
  background-color: rgba(5, 135, 150);
}
.industrial-popper {
  white-space: nowrap;
}
.point-wrapper div.active {
  background-color: rgba(0, 230, 240);
}

/* .wrapper-scatter div:nth-of-type(1) {
  background-color: rgba(0, 230, 240, 0.5);
}
.wrapper-scatter div:nth-of-type(2) {
  background-color: rgba(0, 230, 240, 0.5);
}
.wrapper-scatter div:nth-of-type(3) {
  background-color: rgba(0, 230, 240, 0.5);
}
.wrapper-scatter div:nth-of-type(4) {
  background-color: rgba(0, 230, 240, 0.5);
}
.wrapper-scatter div:nth-of-type(5) {
  background-color: rgba(0, 230, 240, 0.5);
}
.wrapper-scatter div:nth-of-type(6) {
  background-color: rgba(0, 230, 240, 0.5);
}
.wrapper-scatter div:nth-of-type(7) {
  background-color: rgba(5, 135, 150);
}
.wrapper-scatter div:nth-of-type(8) {
  background-color: rgba(5, 135, 150);
} */
</style>
