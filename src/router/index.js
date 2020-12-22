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
  {
    path: "/index",
    name: "Index",
    component: require("../views/Index.vue").default
  },
  {
    path: "/",
    name: "Main",
    component: require("../views/Main.vue").default
  },
  {
    path: "/enrollment",
    name: "Enrollment",
    component: require("../views/Enrollment.vue").default
  },
  {
    path: "/level-test",
    name: "LevelTest",
    component: require("../views/LevelTest.vue").default
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: require("../views/MyPage.vue").default,
    beforeEnter: onlyAuthUser
  },
  {
    path: "/curriculum",
    name: "Curriculum",
    component: require("../views/Curriculum.vue").default
  },
  {
    path: "/account",
    name: "Account",
    component: require("../views/Account.vue").default,
    beforeEnter: onlyAuthUser
  },
  {
    path: "/material",
    name: "Material",
    component: require("../views/Material.vue").default
  },
  {
    path: "/board",
    name: "Board",
    component: require("../views/Board.vue").default
  },
  {
    path: "/event",
    name: "Event",
    component: require("../views/Event.vue").default
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
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
