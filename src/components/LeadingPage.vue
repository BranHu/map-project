<script setup>
import { ref } from "vue";

const emits = defineEmits(["drawScatter", "clearScatter"]);

const drawScatter = (type) => {
  emits("drawScatter", type);
};
const clearScatter = () => {
  emits("clearScatter");
};
</script>
<template>
  <StackedLine />

  <RadarChart />

  <ScatterChart />

  <PieChart />

  <BarChart />

  <PointSelect @drawScatter="drawScatter" @clearScatter="clearScatter" />
</template>

<style scoped></style>
