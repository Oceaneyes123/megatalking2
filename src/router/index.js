import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
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
    component: require("../views/MyPage.vue").default
  },
  {
    path: "/curriculum",
    name: "Curriculum",
    component: require("../views/Curriculum.vue").default
  },
  {
    path: "/account",
    name: "Account",
    component: require("../views/Account.vue").default
  }
];

const router = new VueRouter({
  routes
});

export default router;