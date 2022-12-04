<script setup>
import { onMounted, ref, reactive } from "vue";

const props = defineProps({
  oneCompany:{
    type: Boolean,
    default: false
  },
});

const emits = defineEmits(['showCompany']);

const oneComApply = ref([])
const oneComPie = ref({}) 
const oneComField = ref([])


</script>
<template>
  <NationCompare />

  <CreativeIndex />

  <CreativeQuality />
</template>

<style scoped>

</style>
