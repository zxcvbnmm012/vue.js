import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataBinding from "../views/DataBinding.vue";

// url과 컴포넌트를 연결시키는 작업 : route
const routes = [
  {
    // 요청이 있든 없든 페이지를 보여줌.
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    // /about이라는 요청이 있는 시점에 인스턴스를 만들어서 페이지를 보여줌.
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/data",
    name: "data",
    component: DataBinding,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
