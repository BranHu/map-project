<script setup>
import { onMounted,ref } from "vue";
import serverData from "../../../public/js/server.json";
// import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
// defineProps({
//   option: {},
// });
const emits = defineEmits(['getRow']);
const tableData = ref(serverData)

const rowClick = (row) => {
  emits('getRow', row)
}
</script>

<template>
  <div class="gaoxin-wrapper">
    <h1>区域创新质量评级</h1>
    <table border="0" cellspacing="0">
      <thead><tr>
        <th class="index">排名</th>
        <th>产业技术分布</th>
        <th>质量评价指数</th>
        <th>竞争力指数</th>
        <th>匹配度指数</th>
      </tr></thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>杭州高新区</td>
          <td>
            <el-progress :percentage="73">
              <div class="info">73.33</div>
            </el-progress>
          </td>
          <td>
            <el-progress :percentage="66">
              <div class="info">66.73</div>
            </el-progress>
          </td>
          <td>
            <el-progress :percentage="77">
              <div class="info">77.73</div>
            </el-progress>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>武汉东湖高新区</td>
          <td>
            <el-progress :percentage="72">
              <div class="info">72.01</div>
            </el-progress>
          </td>
          <td>
            <el-progress :percentage="70">
              <div class="info">70.08</div>
            </el-progress>
          </td>
          <td>
            <el-progress :percentage="73">
              <div class="info">73.3</div>
            </el-progress>
          </td>
        </tr> 
        <tr>
          <td>3</td>
          <td>成都高新区</td>
          <td>
            <el-progress :percentage="64">
              <div class="info">64.84</div>
            </el-progress>
          </td>
          <td>
            <el-progress :percentage="65">
              <div class="info">65.27</div>
            </el-progress>
          </td>
          <td>
            <el-progress :percentage="64">
              <div class="info">64.56</div>
            </el-progress>
          </td>
        </tr> 
        <tr>
          <td>4</td>
          <td>合肥高新区</td>
          <td>
            <el-progress :percentage="51">
              <div class="info">51.81</div>
            </el-progress>
          </td>
          <td>
            <el-progress :percentage="37">
              <div class="info">37.93</div>
            </el-progress>
          </td>
          <td>
            <el-progress :percentage="61">
              <div class="info">61.07</div>
            </el-progress>
          </td>
        </tr> 
      </tbody>
    </table>
  </div>
</template>

<style>
div.gaoxin-wrapper {
  position: absolute;
  left: 50%;
  margin-left: -1.953125rem /* 1500/768 */;
  bottom: .195313rem /* 150/768 */;
  z-index: 111;
  color: white;
  width: 3.90625rem /* 3000/768 */;
}

div.gaoxin-wrapper th {
  width: .911458rem /* 700/768 */;
  height: 0.126302rem /* 97/768 */;
  line-height: 0.126302rem /* 97/768 */;
  background-color: rgba(5, 135, 150, 0.7);
}

div.gaoxin-wrapper th.index {
  width: .390625rem /* 300/768 */;
}

div.gaoxin-wrapper td {
  text-align: center;
  line-height: .130208rem /* 100/768 */;
  background-color: rgba(125, 125, 125, 0.1);
}

div.gaoxin-wrapper td .el-progress-bar__outer {
  background-color: rgba(255,255,255, 0.1);
}

div.gaoxin-wrapper td .el-progress-bar__inner {
  background-image:linear-gradient(to left, rgb(0,230,240), rgb(5,135,150));
}

div.gaoxin-wrapper td .info {
  color: rgb(15,150,170);
  font-size: .013021rem /* 10/768 */;
}

div.gaoxin-wrapper h1 {
  text-align: center;
  color: #00e6f0;
  font-size: .104167rem /* 80/768 */;
  margin-bottom: .065104rem /* 50/768 */;
  font-weight: bold;
  letter-spacing:3px
}
</style>
