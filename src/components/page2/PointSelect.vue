<script setup>
import { onMounted } from "vue";

const industrialSelect = (e) => {
  switch (e.target.dataset.tab) {
    case "新材料产业":
      break;
    case "新能源产业":
      break;
    case "生物产业":
      break;
    case "节能环保产业":
      break;
    case "高端装备制造产业":
      break;
    case "新能源汽车产业":
      break;
    case "数字创意产业":
      break;
    case "新一代信息技术产业":
      break;
    default:
      break;
  }
}

onMounted(() => {
});
</script>

<template>
  <div class="wrapper-scatter" @click="industrialSelect">
    <el-tooltip content="新材料产业" placement="top-start" popper-class="industrial-popper">
      <div data-tab="新材料产业"></div>
    </el-tooltip>
    <el-tooltip content="新能源产业" placement="top" popper-class="industrial-popper">
      <div data-tab="新能源产业"></div>
    </el-tooltip>
    <el-tooltip content="生物产业" placement="top" popper-class="industrial-popper">
      <div data-tab="新能源产业"></div>
    </el-tooltip>
    <el-tooltip content="节能环保产业" placement="top" popper-class="industrial-popper">
      <div data-tab="新能源产业"></div>
    </el-tooltip>
    <el-tooltip content="高端装备制造产业" placement="top" popper-class="industrial-popper">
      <div data-tab="新能源产业"></div>
    </el-tooltip>
    <el-tooltip content="新能源汽车产业" placement="top" popper-class="industrial-popper">
      <div data-tab="新能源产业"></div>
    </el-tooltip>
    <el-tooltip content="数字创意产业" placement="top" popper-class="industrial-popper">
      <div data-tab="新能源产业"></div>
    </el-tooltip>
    <el-tooltip content="新一代信息技术产业" placement="top" popper-class="industrial-popper">
      <div data-tab="新能源产业"></div>
    </el-tooltip>
  </div>
</template>

<style>
  .wrapper-scatter {
    position: fixed;
    left: 0;
    right: 0;
    bottom: .390625rem /* 300/768 */;
    /* margin:auto; */
    padding: 0 1.302083rem /* 1000/768 */;
    display: flex;
    list-style:none; 
    justify-content: center;
  }
  .wrapper-scatter div {
    width: .032552rem /* 25/768 */;
    height: .032552rem /* 25/768 */;
    border-radius: .032552rem /* 25/768 */;
    margin: 0 .013021rem /* 10/768 */;
    cursor:pointer;
  }
  
  .wrapper-scatter div:nth-of-type(1) {
    background-color: rgba(80,255,175,1);
  }
  .wrapper-scatter div:nth-of-type(2) {
    background-color: rgba(0,239,240,0.5);
  }
  .wrapper-scatter div:nth-of-type(3) {
    background-color: rgba(0,150,230,0.5);
  }
  .wrapper-scatter div:nth-of-type(4) {
    background-color: rgba(170,120,205,0.5);
  }
  .wrapper-scatter div:nth-of-type(5) {
    background-color: rgba(210,90,125,0.5);
  }
  .wrapper-scatter div:nth-of-type(6) {
    background-color: rgba(250,140,100,0.5);
  }
  .wrapper-scatter div:nth-of-type(7) {
    background-color: rgba(210,90,125,0.5);
  }
  .wrapper-scatter div:nth-of-type(8) {
    background-color: rgba(255,255,50,0.5);
  }
  .industrial-popper {
    white-space: nowrap;
  }
</style>
