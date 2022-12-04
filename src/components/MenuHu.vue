<script setup>
import { onMounted, ref, reactive } from "vue";
const planTab = ref(true);
const leadingTab = ref(false);
const distributionTab = ref(false);
const resourceTab = ref(false);

const emits = defineEmits(['selectTab']);

const handleSelect = (e) => {
  emits('selectTab', e.target.dataset.tab)
  switch (e.target.dataset.tab) {
    case "planTab":
      planTab.value = true;
      leadingTab.value = false;
      resourceTab.value = false;
      distributionTab.value = false;
      break;
    case "leadingTab":
      planTab.value = false;
      resourceTab.value = false;
      leadingTab.value = true;
      distributionTab.value = false;
      break;
    case "distributionTab":
      planTab.value = false;
      leadingTab.value = false;
      resourceTab.value = false;
      distributionTab.value = true;
      break;
    case "resourceTab":
      planTab.value = false;
      leadingTab.value = false;
      distributionTab.value = false;
      resourceTab.value = true;
      break;
    default:
      break;
  }
};
</script>
<template>
  <div class="menu" @click="handleSelect">
    <span data-tab="planTab" :class="{ active: planTab }">发展规划</span>
    <span data-tab="leadingTab" :class="{ active: leadingTab }"
      >重点产业</span
    >
    <span data-tab="distributionTab" :class="{ active: distributionTab }">区域布局</span>
    <span data-tab="resourceTab" :class="{ active: resourceTab }">创新资源</span>
  </div>
</template>

<style scoped>
div.menu {
  position: fixed;
  right: .260417rem /* 200/768 */;
  text-align: center;
  top: .260417rem /* 200/768 */;
  z-index: 99;
}
div.menu span:hover {
  cursor: pointer;
}

div.menu span {
  display: inline-block;
  width: 0.691406rem /* 531/768 */;
  height: 0.205729rem /* 158/768 */;
  line-height: 0.205729rem /* 158/768 */;
  margin-right: -0.026042rem /* 20/768 */;
  color: white;
  text-decoration: none;
  user-select: none;
  background: url("/img/menu-icon.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  font-size: 0.080729rem /* 62/768 */;
  font-weight: bold;
  letter-spacing: 0.019531rem /* 15/768 */;
  opacity: 0.9;
}
div.menu span.active {
  background: url("/img/menu-active.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  font-size: 0.078125rem /* 60/768 */;
}
</style>
