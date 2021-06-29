import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    //로그인이 안되어있는 친구
    return next();
  }
  //로그인이 되어있는 친구
  next("/");
};

const routes = [
  // {
  //   path: "/index",
  //   name: "Index",
  //   component: require("../views/Index.vue").default
  // },
  {
    path: "/main",
    name: "Main",
    component: require("../views/Main.vue").default,
    meta: { title: "메가토킹 영어" }
  },
  {
    path: "/enrollment",
    name: "Enrollment",
    component: require("../views/Enrollment.vue").default,
    meta: { title: "수업신청" }
  },
  {
    path: "/level-test",
    name: "LevelTest",
    component: require("../views/LevelTest.vue").default,
    meta: { title: "레벨테스트" }
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: require("../views/MyPage.vue").default,
    beforeEnter: onlyAuthUser,
    meta: { title: "마이페이지" }
  },
  {
    path: "/curriculum",
    name: "Curriculum",
    component: require("../views/Curriculum.vue").default,
    meta: { title: "커리큘럼" }
  },
  {
    path: "/account",
    name: "Account",
    component: require("../views/Account.vue").default,
    beforeEnter: onlyAuthUser,
    meta: { title: "회원정보" }
  },
  {
    path: "/material",
    name: "Material",
    component: require("../views/Material.vue").default,
    meta: { title: "수업교재" }
  },
  {
    path: "/board",
    name: "Board",
    component: require("../views/Board.vue").default,
    meta: { title: "게시판" }
  },
  {
    path: "/event",
    name: "Event",
    component: require("../views/Event.vue").default,
    meta: { title: "이벤트" }
  },
  {
    path: "/payment-success",
    name: "PaymentSuccess",
    component: require("../views/PaymentSuccess.vue").default,
    meta: { title: "결제성공!" }
  },
  {
    path: "/payment-fail",
    name: "PaymentFail",
    component: require("../views/PaymentFail.vue").default,
    meta: { title: "결제실패" }
  },
  {
    path: "/payment-summary",
    name: "PaymentSummary",
    component: require("../views/PaymentSummary.vue").default,
    meta: { title: "결제실패" }
  },
  {
    path: "*",
    name: "Not Found",
    component: require("../views/NotFound.vue").default,
    meta: { title: "페이지를 찾을수 없습니다." }
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    // 원하는 위치로 돌아가기
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  store.dispatch("isLogin");
  let pageName = to.path.slice(1, to.path.length);
  if (pageName == "mypage" || pageName == "account") {
    if (store.state.isLogin === false) {
      return next({ name: "Main" });
    }
  }

  store.commit("loadBg", pageName);
  next();
});

export default router;
