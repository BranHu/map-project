<script setup>
import { ref } from "vue";
const props = defineProps({
  left: {
    type: Boolean,
    default: true,
  },
  detail: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <p v-if="left">
    <span class="title">产业技术分布</span>
    <el-popover placement="right" :width="400" trigger="click">
      <template #reference>
        <span class="detail">详细</span>
      </template>
      <div>{{ detail }}</div>
    </el-popover>
  </p>
  <p v-else>
    <el-popover placement="left" :width="400" trigger="click">
      <template #reference>
        <span class="detail-right">详细</span>
      </template>
      <div>{{ detail }}</div>
    </el-popover>
    <span class="title-right">产业技术分布</span>
  </p>
</template>

<style scoped>
p {
  display: flex;
  justify-content: space-between;
  width: 2.415365rem /* 1855/768 */;
  height: 0.126302rem /* 97/768 */;
  line-height: 0.126302rem /* 97/768 */;
  background-image: linear-gradient(
    to right,
    rgba(5, 135, 150, 0.7),
    rgba(5, 135, 150, 0)
  );
}
span.title {
  color: white;
  font-size: 0.048177rem /* 37/768 */;
  margin-left: 0.130208rem /* 100/768 */;
}

span.detail {
  color: #409eff;
  font-size: 0.048177rem /* 37/768 */;
  margin-right: 0.091146rem /* 70/768 */;
  cursor: pointer;
}
span.title-right {
  color: white;
  font-size: 0.048177rem /* 37/768 */;
  margin-right: 0.130208rem /* 100/768 */;
}

span.detail-right {
  color: #409eff;
  font-size: 0.048177rem /* 37/768 */;
  margin-left: 0.091146rem /* 70/768 */;
  cursor: pointer;
}
</style>
