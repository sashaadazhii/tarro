import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Divider from "./components/Divider";

Vue.config.productionTip = false;
Vue.component("Divider", Divider);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
