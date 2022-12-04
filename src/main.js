import { createApp } from "vue";
import { createPinia } from "pinia";
// import vue3SeamlessScroll from 'vue3-seamless-scroll';

import App from "./App.vue";
import router from "./router";
import 'font-awesome/css/font-awesome.min.css'

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(vue3SeamlessScroll);

app.mount("#app");
