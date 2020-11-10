import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Divider from "./components/Divider";
import VueSimpleAccordion from "vue-simple-accordion";
import "vue-simple-accordion/dist/vue-simple-accordion.css";

Vue.component("VueSimpleAccordion", VueSimpleAccordion);
Vue.config.productionTip = false;
Vue.component("Divider", Divider);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
