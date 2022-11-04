import { createPinia, PiniaVuePlugin } from "pinia";
import Vue from "vue";
// import Vue from "vue/dist/vue.js";
import App from "./App2.vue";
import router from "./router";

// import "./assets/main.css";

// Vue.config.productionTip = false;

Vue.use(PiniaVuePlugin);

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount("#app");
