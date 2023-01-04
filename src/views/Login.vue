<template>
  <div class="wrapper">
    <TitleName />
    <EchartEarth />

    <div class="title">
      <h1>光谷科技创新大走廊</h1>
      <h1>知识产权大数据平台</h1>
    </div>

    <div class="login-wrapper">
      <div class="input-wrapper">
        <img class="icon" src="/public/img/username.png" />
        <input
          type="text"
          v-model="username"
          class="input"
          placeholder="请输入账号"
        />
      </div>
      <div class="input-wrapper">
        <img class="icon" src="/public/img/password.png" />
        <input
          type="password"
          v-model="password"
          class="input"
          placeholder="请输入密码"
        />
      </div>
      <!-- <div class="button" @click="login">登录</div> -->
      <el-button class="button" :loading="loading" @click="login"
        >登录</el-button
      >
    </div>
  </div>
</template>
<script setup>
import "animate.css";
import { onMounted, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import EchartEarth from "../components/EchartEarth.vue";
import AMapLoader from "@amap/amap-jsapi-loader";
// import { useStore } from '../stores/map'
// const oneComApply = reactive({
//   apply: [],
//   test: ''
// })
const router = useRouter();
// const store = useStore();
const username = ref("");
const password = ref("");
const loading = ref(false);

const login = () => {
  // console.log(username.value, password.value);
  loading.value = true;
  AMapLoader.load({
    key: "d4952430453386b3ad5e846e57338267", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.DistrictSearch"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    Loca: {
      // 是否加载 Loca， 缺省不加载
      version: "2.0.0", // Loca 版本，缺省 1.3.2
    },
  })
    .then(() => {
      router.push("home");
      loading.value = false;
    })
    .catch((e) => {
      console.log(e);
    });
};

onMounted(() => {});
</script>
<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background-image: url("/img/login.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.title {
  position: fixed;
  top: 1.302083rem /* 1000/768 */;
  right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 2.604167rem /* 2000/768 */;
}

h1 {
  text-align: center;
  font-size: 0.286458rem /* 220/768 */;
  color: #00e6f0;
  font-weight: bold;
  font-family: "黑体";
  font-style: italic;
}

.login-wrapper {
  position: fixed;
  top: 2.34375rem /* 1800/768 */;
  right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 2.604167rem /* 2000/768 */;
  background-color: rgba(255, 255, 255, 0.15);
  padding: 0.15625rem /* 120/768 */;
}

.input-wrapper {
  display: flex;
  border: 1px solid rgba(200, 200, 200, 1);
  margin-bottom: 0.143229rem /* 110/768 */;
}

.input {
  flex-grow: 1;
  height: 0.104167rem /* 80/768 */;
  line-height: 0.104167rem /* 80/768 */;
  margin: 0.065104rem /* 50/768 */;
  padding: 0;
  outline: none;
  border: none;
  background: none;
  box-sizing: border-box;
  /* background-color: "white"; */
  font-size: 0.091146rem /* 70/768 */;
  opacity: 1;
  color: white;
}

input::-webkit-input-placeholder {
  color: rgba(160, 160, 160, 1);
}

.icon {
  width: 0.104167rem /* 80/768 */;
  height: 0.104167rem /* 80/768 */;
  margin: 0.065104rem /* 50/768 */;
}

.button {
  height: 0.234375rem /* 180/768 */;
  line-height: 0.234375rem /* 180/768 */;
  font-size: 0.091146rem /* 70/768 */;
  border-radius: 0.026042rem /* 20/768 */;
  background-image: linear-gradient(
    to left,
    rgb(0, 230, 240),
    rgb(5, 135, 150)
  );
  color: white;
  border-width: 0;
}
</style>
