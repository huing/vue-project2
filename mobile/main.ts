import "vite/modulepreload-polyfill";
import Vue from "vue";
import { routerM } from "../src/router";
import App from "./App.vue";

new Vue({
  router: routerM,
  render: (h) => h(App),
}).$mount("#app");
