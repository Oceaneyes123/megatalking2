import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginToken: {},
    currentRoute: "main",
    currentImage: "",
    images: {
      main: require("@/assets/main.jpg"),
      curriculum: require("@/assets/curriculum.jpg"),
      leveltest: require("@/assets/leveltest.jpg"),
      enrollment: require("@/assets/enrollment.jpg"),
      mypage: require("@/assets/bg_mega_review.png"),
      board: require("@/assets/bg_mega_review.png"),
      event: require("@/assets/bg_mega_event.png")
    },
    showNav: true,
    screenWidth: "",
    isMobile: false
  },
  mutations: {
    loadBg(state, payload) {
      state.showNav = true;
      if (!payload) {
        state.currentImage = state.images.main;
      } else if (payload == "level-test") {
        state.currentImage = state.images.leveltest;
      } else if (payload == "material") {
        state.showNav = false;
      } else {
        state.currentImage = state.images[payload];
      }
    },
    onWindowResize(state, width) {
      state.screenWidth = width;
      state.isMobile = width <= 960 ? true : false;
    }
  },
  actions: {},
  modules: {}
});
