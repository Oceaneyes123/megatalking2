import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  beforeCreate() {
    this.$store.dispatch("isLogin");
  },
  render: h => h(App)
}).$mount("#app");
