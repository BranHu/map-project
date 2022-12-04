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
  <div class="manage-wrapper">
    <!-- <vue3-seamless-scroll
      class="scroll"
      :list="tableData"
      :step="0.5"
    >
      <el-table
        :data="tableData"
        style="width: 100%"
        height="500"
        :default-sort = "{prop: 'index', order: 'ascending'}"
        >
        <el-table-column
          prop="index"
          label="序号"
          width="60">
        </el-table-column>
        <el-table-column
          prop="company"
          label="企业"
          width="180">
        </el-table-column>
        <el-table-column
          prop="patent"
          label="有效专利"
          sortable
          width="110">
        </el-table-column>
        <el-table-column
          prop="PCT"
          label="PCT(20-21)"
          sortable
          width="120">
        </el-table-column>
        <el-table-column
          export="export"
          label="出口额"
          sortable
          width="100">
        </el-table-column>
        <el-table-column
          prop="industrial"
          label="所属产业"
          width="120">
        </el-table-column>
        <el-table-column
          prop="grade"
          label="分级"
          width="60">
        </el-table-column>
      </el-table>
    </vue3-seamless-scroll>  -->
    <el-table
      class="manage"
      :data="tableData"
      style="width: 100%"
      height="700"
      :header-cell-style="{ background:'#058796', opacity: '0.7', color:'#fff'}"
      :row-style="{ background:'#062136', opacity: '0.8', color:'#fff'}"
      :default-sort = "{prop: 'index', order: 'ascending'}"
      @row-click = "rowClick"
      >
      <el-table-column
        prop="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        prop="company"
        label="企业"
        width="180">
      </el-table-column>
      <el-table-column
        prop="patent"
        label="有效专利"
        sortable
        width="110">
      </el-table-column>
      <el-table-column
        prop="PCT"
        label="PCT(20-21)"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="industrial"
        label="所属产业"
        width="120">
      </el-table-column>
      <el-table-column
        prop="grade"
        label="分级">
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
div.manage-wrapper {
  position: absolute;
  left: .195313rem /* 150/768 */;
  top: .651042rem /* 500/768 */;
  width: 3.385417rem /* 2600/768 */;
  height: 1.953125rem /* 1500/768 */;
  font-family: "黑体";
  z-index: 111;
}

/* .manage-wrapper .el-table {
  background-color: transparent !important;
  border: 0;
  color: '#fff'
}
.manage-wrapper .el-table tr, .el-table td {
  background-color: transparent !important;
  border: 0;
  color: '#fff'
} */

/* div.manage-wrapper .el-table--enable-row-hover .el-table__body tr:hover {
  background: rgb(184, 224, 250);
  border: 1px solid #313463;
} */
/*表格鼠标悬停的样式（背景颜色）*/
div.manage-wrapper .el-table tbody tr:hover > td {
  background-color: #058796 !important;
}
</style>
