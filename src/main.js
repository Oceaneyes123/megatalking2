import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@fortawesome/fontawesome-free/css/all.css";
import VueCookie from "vue-cookie";
import VueCookieReactive from "vue-cookies-reactive";

export const bus = new Vue();

Vue.use(VueCookie);
Vue.use(VueCookieReactive);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  beforeCreate() {
    this.$store.dispatch("isLogin");
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "Megatalking";
      }
    }
  },
  render: h => h(App)
}).$mount("#app");
