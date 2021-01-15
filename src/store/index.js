import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";
import { bus } from "@/main";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginToken: localStorage.getItem("access-token"),
    loginErr: false,
    loginErrMsg: "",
    isLogin: false,
    userInfo: {},
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
    isMobile: false,
    holdOverlay: false,
    signupErr: false,
    signupErrMsg: ""
  },
  mutations: {
    loadBg(state, payload) {
      state.showNav = true;
      if (!payload) {
        state.currentImage = state.images.main;
      } else if (payload == "level-test" || payload == "payment-success") {
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
    },
    loginProcess(state, { token }) {
      localStorage.setItem("access-token", token);
      state.isLogin = true;
      state.loginErr = false;
    },
    loginErr(state, { type }) {
      switch (type) {
        case 1: //비밀번호 아이디 틀릭때 오류 코드
          state.loginErr = true;
          state.isLogin = false;
          state.loginErrMsg = "아이디와 비밀번호를 확인해주세요.";
          break;
        default:
      }
    },
    logoutProcess(state) {
      state.isLogin = false;
      state.userInfo = {};
      localStorage.removeItem("access-token");
    },
    signupErr(state) {
      state.signupErr = true;
      state.signupErrMsg =
        "회원 가입 실패하였습니다. 이미 회원가입이된 아이디입니다.";
    }
  },
  actions: {
    async login({ commit }, { id, pw }) {
      await axios
        .post("//phone.megatalking.com/origin/api/signin.php", { id, pw })
        .then(rs => {
          console.log(rs);
          if (rs.status === 200) {
            if (rs.data.result === true) {
              commit("loginProcess", { token: rs.data.token });
            } else {
              console.log("check", rs);
            }
          }
        })
        .catch(err => {
          if (err.response) {
            switch (err.response.status) {
              case 405:
                commit("loginErr", { type: 1 });
                break;
              default:
            }
          }
        });
    },
    async isLogin({ state }) {
      //토큰 가져오기
      let token = localStorage.getItem("access-token");
      //토큰이 있다면 아래 로스 실행
      if (token) {
        //console.log(token, commit, state);
        state.isLogin = true;
        state.loginErr = false;
      } else {
        state.isLogin = false;
        state.loginErr = false;
      }
    },
    logout({ commit }) {
      commit("logoutProcess");
      router.push("/");
    },
    async signup({ commit }, payload) {
      //console.log(commit, payload);
      axios
        .post("//phone.megatalking.com/origin/api/signup.php", {
          ...payload
        })
        .then(rs => {
          console.log(rs);
          if (rs.data.result) {
            //로그인 성공시
            commit("loginProcess", { token: rs.data.token });
            bus.$emit("openAuth", false);
          } else {
            //로그인 실패시
            commit("signupErr");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    async hold({ state }, payload) {
      state.holdOverlay = true;
      axios
        .post("//phone.megatalking.com/origin/api/mypage.php", payload)
        .then(rs => {
          if (rs.data.result == true) {
            bus.$emit("refreshSchedule");
            bus.$emit("HoldSnackbar", {
              text: "홀드가 완료되었습니다.",
              state: "success"
            });
          } else {
            bus.$emit("HoldSnackbar", {
              text: rs.data.msg,
              state: "error"
            });
            // bus.$emit('HoldSnackbar',{
            //   text:'처리할 수 없습니다. 관리자에게 문의하세요.',
            //   state:'error'
            // });
          }
          state.holdOverlay = false;
        })
        .catch(err => {
          console.log(err);
          state.holdOverlay = false;
        });
    }
  },
  modules: {}
});
