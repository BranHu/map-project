<script setup>
import { RouterLink, RouterView } from "vue-router";
// import EchartEarth from "@/components/EchartEarth.vue";
// import VueBmap from "@/components/VueBmap.vue";
// import { ref } from "vue";
</script>

<template>
  <div class="view-wrapper">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";

/* 删除百度地图的图标 */
.BMap_cpyCtrl {
  display: none;
}
.anchorBL {
  display: none;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    position: relative;
    width: 100%;
    height: 100%;
    /* min-height: 100vh; */
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }

  .view-wrapper {
    position: absolute;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    /* place-items: flex-start;
    flex-wrap: wrap; */
  }
}
</style>
