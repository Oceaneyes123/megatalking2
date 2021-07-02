import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";
import { bus } from "@/main";
import VueCookie from "vue-cookie";
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    // loginToken: localStorage.getItem("access-token"),
    loginToken: VueCookie.get("access-token"),
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
    signupErrMsg: "",
    currentCourseName: "",
    currentCourseLink: "",
    currentClassInfo: {},
    paymentInfo: {}
  },
  mutations: {
    loadBg(state, payload) {
      state.showNav = true;
      if (!payload) {
        state.currentImage = state.images.board;
      } else if (payload == "level-test") {
        state.currentImage = state.images.leveltest;
      } else if (
        payload == "payment-fail" ||
        payload == "payment-summary" ||
        payload == "payment-success"
      ) {
        state.currentImage = state.images.event;
      } else if (payload == "material" || payload == "material2") {
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
      VueCookie.set("access-token", token, 1);
      // localStorage.setItem("access-token", token);
      state.loginToken = token;
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
      state.loginToken = null;
      state.isLogin = false;
      state.userInfo = {};
      VueCookie.delete("access-token");
      // localStorage.removeItem("access-token");
    },
    signupErr(state) {
      state.signupErr = true;
      state.signupErrMsg =
        "회원 가입 실패하였습니다. 이미 회원가입이된 아이디입니다.";
    },
    setCurrentCourseName(state, { courseName }) {
      state.currentCourseName = courseName;
    },
    setCurrentCourseLink(state, { link }) {
      state.currentCourseLink = link;
    },
    setClassInfo(state, payload) {
      state.currentClassInfo = payload;
    },
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
    setPaymentInfo(state, payload) {
      state.paymentInfo = payload;
    }
  },
  actions: {
    async login({ commit, dispatch }, { id, pw, rememberme }) {
      await axios
        .post("//phone.megatalking.com/origin/api/signin.php", {
          id,
          pw,
          rememberme
        })
        .then(rs => {
          if (rs.status === 200) {
            if (rs.data.result === true) {
              commit("loginProcess", { token: rs.data.token });
              dispatch("isLogin"); //로그인후 회원정보 가져오기.
            } else {
              // console.log("check", rs);
            }
          }
        })
        .catch(err => {
          if (err.response) {
            switch (err.response.status) {
              case 404:
                console.log("token?");
                break;
              case 405:
                commit("loginErr", { type: 1 });
                break;
              default:
            }
          }
        });
    },
    async isLogin({ state, commit }) {
      //토큰 가져오기
      let token = VueCookie.get("access-token");
      if (typeof token == undefined) {
        VueCookie.delete("access-token");
        token = null;
      }
      //토큰이 있다면 아래 로스 실행
      if (token) {
        //console.log(token, commit, state);
        state.isLogin = true;
        state.loginErr = false;
        axios.defaults.headers.common["Authorization"] = VueCookie.get(
          "access-token"
        );
        await axios
          .get("//phone.megatalking.com/origin/api/member.php")
          .then(rs => {
            // console.log(rs);
            if (rs.status === 200) {
              commit("setUserInfo", rs.data); //회원이라면 정보 저장
            }
          })
          .catch(err => {
            if (err.response.status) {
              state.loginToken = null;
              state.isLogin = false;
              state.loginErr = false;
              VueCookie.delete("access-token");
            }
          });
      } else {
        state.loginToken = null;
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
    },
    async cancelHold({ state }, payload) {
      state.holdOverlay = true;
      axios
        .post("//phone.megatalking.com/origin/api/mypage.php", payload)
        .then(rs => {
          if (rs.data.result == true) {
            bus.$emit("refreshSchedule");
            bus.$emit("HoldSnackbar", {
              text: "수업 복원이 완료되었습니다.",
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
    },
    async addMakeupClass({ state }, payload) {
      state.holdOverlay = true;
      axios
        .post("//phone.megatalking.com/origin/api/makeup.php", payload)
        .then(rs => {
          if (rs.data.result == true) {
            bus.$emit("refreshSchedule");
            bus.$emit("HoldSnackbar", {
              text: "보강설정이 완료되었습니다.",
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
          bus.$emit("HoldSnackbar", {
            text: "보강설정이 실패하였습니다.",
            state: "error"
          });
          console.log(err);
          state.holdOverlay = false;
        });
    },
    async cancelClass({ state }, payload) {
      state.holdOverlay = true;
      axios
        .post("//phone.megatalking.com/origin/api/mypage.php", payload)
        .then(rs => {
          if (rs.data.result == true) {
            bus.$emit("refreshSchedule");
            bus.$emit("HoldSnackbar", {
              text: "수업 취소가 완료되었습니다.",
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
    },
    async revertClass({ state }, payload) {
      state.holdOverlay = true;
      axios
        .post("//phone.megatalking.com/origin/api/mypage.php", payload)
        .then(rs => {
          if (rs.data.result == true) {
            bus.$emit("refreshSchedule");
            bus.$emit("HoldSnackbar", {
              text: "수업 복원이 완료되었습니다.",
              state: "success"
            });
          } else {
            console.log(rs);
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
