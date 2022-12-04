import { createRouter, createWebHistory } from "vue-router";
// import EchartEarth from "../views/EchartEarth.vue";
// import HomePage from "../views/HomePage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      // name: "earth",
      // component: EchartEarth,
      alias: "/login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/home",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HomePage.vue"),
    },
  ],
});

export default router;
