import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;

const routerM = new VueRouter({
  mode: "hash",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("../../mobile/home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../../mobile/about.vue"),
    },
  ],
});

export { routerM };

router.beforeEach((to, from, next) => {
  window.postMessage({ path: to.path }, "*");
  document
    .querySelector("iframe")
    ?.contentWindow?.postMessage({ path: to.path }, "*");

  next();
  // ...
});
