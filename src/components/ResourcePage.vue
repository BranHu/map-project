<script setup>
import { ref } from "vue";
import oneComApply1 from "../../public/js/oneComApply1.json";
import oneComApply2 from "../../public/js/oneComApply2.json";
import oneComField1 from "../../public/js/oneComField1.json";
import oneComField2 from "../../public/js/oneComField2.json";

const props = defineProps({
  oneCompany: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["showCompany"]);

const oneComApply = ref([]);
const oneComPie = ref({});
const oneComField = ref([]);

const getManageRow = (row) => {
  emits("showCompany");
  if (row.index === 1) {
    oneComApply.value = oneComApply1;
    oneComPie.value = {
      status: [
        {
          value: 2480,
          name: "有效",
          itemStyle: {
            color: "rgb(10,120,145)",
          },
        },
        {
          value: 1728,
          name: "失效",
          itemStyle: {
            color: "rgb(22,150,180)",
          },
        },
        {
          value: 860,
          name: "审中",
          itemStyle: {
            color: "rgb(60,180,210)",
          },
        },
      ],
      type: [
        {
          value: 4859,
          name: "发明",
          itemStyle: {
            color: "rgb(90,190,235)",
          },
        },
        {
          value: 206,
          name: "实用新型",
          itemStyle: {
            color: "rgb(115,190,220)",
          },
        },
        {
          value: 3,
          name: "外观设计",
          itemStyle: {
            color: "rgb(20,180,210)",
          },
        },
      ],
    };
    oneComField.value = oneComField1;
  } else {
    oneComApply.value = oneComApply2;
    oneComPie.value = {
      status: [
        {
          value: 2916,
          name: "有效",
          itemStyle: {
            color: "rgb(10,120,145)",
          },
        },
        {
          value: 770,
          name: "失效",
          itemStyle: {
            color: "rgb(22,150,180)",
          },
        },
        {
          value: 614,
          name: "审中",
          itemStyle: {
            color: "rgb(60,180,210)",
          },
        },
      ],
      type: [
        {
          value: 3395,
          name: "发明",
          itemStyle: {
            color: "rgb(90,190,235)",
          },
        },
        {
          value: 544,
          name: "实用新型",
          itemStyle: {
            color: "rgb(115,190,220)",
          },
        },
        {
          value: 334,
          name: "外观设计",
          itemStyle: {
            color: "rgb(20,180,210)",
          },
        },
      ],
    };
    oneComField.value = oneComField2;
  }
};
</script>
<template>
  <ServeManage @getRow="getManageRow" />

  <IndustrialClass v-if="!oneCompany" />

  <CompanyClass v-if="!oneCompany" />

  <PatentDistri v-if="!oneCompany" />

  <OneComApply v-if="oneCompany" :apply="oneComApply" />

  <OneComPie v-if="oneCompany" :pie="oneComPie" />

  <OneComField v-if="oneCompany" :field="oneComField" />
</template>
