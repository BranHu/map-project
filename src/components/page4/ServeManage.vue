<script setup>
import { ref } from "vue";
import serverData from "../../../public/js/server.json";
import { Search } from "@element-plus/icons-vue";
// import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
// defineProps({
//   option: {},
// });
const emits = defineEmits(["getRow"]);
const tableData = ref(serverData);
const tab1 = ref(true);
const tab2 = ref(false);
const tab3 = ref(false);
const tab4 = ref(false);
const tab5 = ref(false);
const input = ref("");

const rowClick = (row) => {
  emits("getRow", row);
};

const inputSearch = () => {
  const result = serverData.filter(el => el.company === input.value)
  tableData.value = result
}

const handleSelect = (e) => {
  switch (e.target.dataset.tab) {
    case "tab1":
      tab1.value = true;
      tab2.value = false;
      tab3.value = false;
      tab4.value = false;
      tab5.value = false;
      break;
    case "tab2":
      tab1.value = false;
      tab2.value = true;
      tab3.value = false;
      tab4.value = false;
      tab5.value = false;
      break;
    case "tab3":
      tab1.value = false;
      tab2.value = false;
      tab3.value = true;
      tab4.value = false;
      tab5.value = false;
      break;
    case "tab4":
      tab1.value = false;
      tab2.value = false;
      tab3.value = false;
      tab4.value = true;
      tab5.value = false;
      break;
    case "tab5":
      tab1.value = false;
      tab2.value = false;
      tab3.value = false;
      tab4.value = false;
      tab5.value = true;
      break;
    default:
      break;
  }
};


</script>

<template>
  <div class="magage-wrapper">
    <div class="manage-tab" @click="handleSelect">
      <span data-tab="tab1" :class="{ active: tab1 }">企业</span>
      <span data-tab="tab2" :class="{ active: tab2 }">人才</span>
      <span data-tab="tab3" :class="{ active: tab3 }">创新平台</span>
      <span data-tab="tab4" :class="{ active: tab4 }">高校</span>
      <span data-tab="tab5" :class="{ active: tab5 }">知识产权</span>
    </div>

    <div class="table-wrapper">
      <el-table
        class="manage"
        :data="tableData"
        style="width: 100%"
        height="650"
        :header-cell-style="{
          background: '#058796',
          color: '#fff',
        }"
        :row-style="{ color: '#fff' }"
        :default-sort="{ prop: 'index', order: 'ascending' }"
        @row-click="rowClick"
      >
        <el-table-column prop="index" label="序号" width="60">
        </el-table-column>
        <el-table-column prop="company" label="企业" width="180">
        </el-table-column>
        <el-table-column prop="patent" label="有效专利" sortable width="110">
        </el-table-column>
        <el-table-column prop="PCT" label="PCT(20-21)" sortable width="120">
        </el-table-column>
        <el-table-column prop="industrial" label="所属产业" width="120">
        </el-table-column>
        <el-table-column prop="grade" label="分级"> </el-table-column>
      </el-table>
    </div>

    <div class="search-wrapper">
      <el-input v-model="input" :prefix-icon="Search" @change="inputSearch"/>
    </div>
  </div>
</template>

<style>
.magage-wrapper {
  position: absolute;
  left: 0.195313rem /* 150/768 */;
  top: 0.651042rem /* 500/768 */;
  width: 3.385417rem /* 2600/768 */;
  height: 1.953125rem /* 1500/768 */;
  z-index: 111;
}

.manage-tab span.active {
  background-color: rgba(0, 135, 150, 0.7);
}

div.manage-tab {
  display: flex;
  /* background-color: red; */
  justify-content: space-around;
}

.manage-tab span.active::after {
  content: "";
  position: absolute;
  top: 0.195313rem /* 150/768 */;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: rgba(0, 135, 150, 1);
}

.manage-tab span {
  display: inline-block;
  background-color: rgba(83, 83, 83, 1);
  color: #fff;
  padding: 0.026042rem /* 20/768 */ 0.221354rem /* 170/768 */;
  cursor: pointer;
}

div.table-wrapper {
  font-family: "黑体";
  z-index: 111;
  margin-top: 0.104167rem /* 80/768 */;
  background-color: rgba(125, 125, 125, 0.1);
}

div.table-wrapper .el-table th,
.el-table tr,
.el-table td {
  background-color: transparent;
}
div.table-wrapper .el-table {
  background-color: transparent;
}

/*表格鼠标悬停的样式（背景颜色）*/
div.table-wrapper .el-table tbody tr:hover > td {
  background-color: #058796 !important;
  /* background-color: rgba(125, 125, 125, 0.1) !important; */
}

div.table-wrapper .el-table th.el-table__cell.is-leaf {
  border-bottom: 0px;
}

div.table-wrapper .el-table td {
  border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
}

div.table-wrapper .el-table__inner-wrapper::before {
  height: 0px;
}

div.search-wrapper {
  padding: 0.065104rem /* 50/768 */;
  background-color: rgba(125, 125, 125, 0.1);
}

div.search-wrapper .el-input__wrapper {
  background-color: rgba(125, 125, 125, 0.2);
  /* border: 1px solid rgba(255, 255, 255, 0.5); */
  /* border-radius: opx; */
}
</style>
