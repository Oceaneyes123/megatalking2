"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: "/index",
  name: "Index",
  component: require("../views/Index.vue")["default"]
}, {
  path: "/",
  name: "Main",
  component: require("../views/Main.vue")["default"]
}, {
  path: "/enrollment",
  name: "Enrollment",
  component: require("../views/Enrollment.vue")["default"]
}, {
  path: "/level-test",
  name: "LevelTest",
  component: require("../views/LevelTest.vue")["default"]
}, {
  path: "/mypage",
  name: "MyPage",
  component: require("../views/MyPage.vue")["default"]
}, {
  path: "/curriculum",
  name: "Curriculum",
  component: require("../views/Curriculum.vue")["default"]
}, {
  path: "/account",
  name: "Account",
  component: require("../views/Account.vue")["default"]
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;