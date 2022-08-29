import Vue from "vue";
import VueRouter from "vue-router";
const HomeView = import(
  /* webpackChunkName: "home" */ "@/views/home/HomeView.vue"
);
const AboutView = import(
  /* webpackChunkName: "about" */ "@/views/about/AboutView.vue"
);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => AboutView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
