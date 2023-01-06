<script setup>
import { ref } from "vue";

const emits = defineEmits(["drawScatter"]);

const drawScatter = (type) => {
  console.log(type, 1);
  emits("drawScatter", type);
};
</script>
<template>
  <StackedLine />

  <RadarChart />

  <ScatterChart />

  <PieChart />

  <BarChart />

  <PointSelect @drawScatter="drawScatter" />
</template>

<style scoped></style>
