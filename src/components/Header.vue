<template lang="html">
  <div class="">
    <v-card
      tile
      height="75"
      width="100%"
      style="position: fixed; top: 0; z-index: 100"
      v-if="showNav"
      color="#fafafa"
    >
      <v-container class="d-flex flex-row">
        <v-card flat tile color="#00000000">
          <v-img
            @click="$router.push('/'), (activeMenu = -1)"
            contain
            src="@/assets/mega_blue.png"
            width="100"
            class="subheading"
          ></v-img>
        </v-card>

        <v-card
          v-if="screenWidth >= 960"
          flat
          class="d-flex align-center mx-auto"
          color="#00000000"
          style="color: #a3a3a3"
        >
          <div
            class="mr-6 subheading"
            v-for="(route, i) in routes"
            :key="i"
            @click="attachedLink(route.link), (activeMenu = i)"
            v-show="route.show"
          >
            <span :style="activeMenu == i ? 'color:#1976d2' : ''">
              {{ route.text }}
            </span>
          </div>
        </v-card>
        <v-card
          v-if="screenWidth > 960"
          flat
          class="d-flex align-center mr-5"
          color="#00000000"
          style="color: #a3a3a3"
        >
          <div class="mr-8 subheading">
            {{ isLogin ? "Hi friend!" : "" }}
          </div>
          <div class="mr-8 subheading" @click="attachedLink('account')">
            회원정보
          </div>
          <div
            class="mr-6 subheading"
            @click="isLogin ? logoutDialogToggle() : sighDialogToggle()"
          >
            <a>{{ isLogin ? "로그아웃" : "로그인" }}</a>
          </div>
        </v-card>

        <v-spacer v-if="screenWidth <= 960"></v-spacer>

        <v-menu
          v-if="screenWidth <= 960"
          close-on-click
          min-width="100%"
          nudge-bottom="12"
          offset-y
          bottom
          class="mt-10 ml-auto"
          transition="slide-y-transition"
          tile
        >
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-on="on" v-bind="attrs" x-large>menu</v-icon>
          </template>
          <v-card
            style="color: #a3a3a3"
            minz-width="100%"
            color="#fafafa"
            tile
            flat
          >
            <v-list>
              <v-list-item
                class="font-weight-bold text-center"
                @click="attachedLink('enrollment')"
              >
                수강 신청
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item
                v-for="(route, i) in routes"
                :key="i"
                @click="attachedLink(route.link)"
                v-show="route.show && route.text != '수강신청'"
                >{{ route.text }}</v-list-item
              >
              <v-divider></v-divider>
              <v-list-item
                @click="isLogin ? logoutDialogToggle() : sighDialogToggle()"
                >{{ isLogin ? "로그아웃" : "로그인" }}</v-list-item
              >
            </v-list>
          </v-card>
        </v-menu>
      </v-container>
    </v-card>
    <SignUpInDialog
      :signInDialog="signInDialog"
      @sighDialogToggle="sighDialogToggle"
    ></SignUpInDialog>
    <LogoutDialog
      :logoutDialog="logoutDialog"
      @logoutDialogToggle="logoutDialogToggle"
    ></LogoutDialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SignUpInDialog from "@/components/SignUpInDialog.vue";
import LogoutDialog from "@/components/LogoutDialog.vue";
import { bus } from "@/main";
export default {
  name: "Header",
  components: {
    SignUpInDialog,
    LogoutDialog
  },
  data() {
    return {
      signInDialog: false,
      logoutDialog: false,
      activeMenu: -1,
      routes: [
        {
          text: "커리큘럼",
          link: "curriculum",
          show: true
        },
        {
          text: "레벨테스트",
          link: "level-test",
          show: true
        },
        {
          text: "수강신청",
          link: "enrollment",
          show: true
        },
        {
          text: "마이페이지",
          link: "mypage",
          show: true
        },
        {
          text: "수강후기",
          link: "board",
          show: true
        },
        {
          text: "이벤트",
          link: "event",
          show: true
        },
        {
          text: "회원정보",
          link: "account",
          show: true
        }
      ]
    };
  },
  watch: {},

  computed: {
    ...mapState(["showNav", "screenWidth", "isMobile", "isLogin"])
  },
  mounted() {
    bus.$on("openAuth", data => {
      this.signInDialog = data;
    });
    for (var i = 0; i < this.routes.length; i++) {
      if (this.$route.path == "/" + this.routes[i].link) {
        this.activeMenu = i;
      }
    }
  },
  methods: {
    sighDialogToggle() {
      this.signInDialog = !this.signInDialog;
    },
    logoutDialogToggle() {
      this.logoutDialog = !this.logoutDialog;
    },
    attachedLink(link) {
      if (link == "mypage" || link == "account") {
        //로그인
        if (this.$store.state.isLogin) {
          this.$router.push(`/${link}`);
        } else {
          this.sighDialogToggle();
        }
      } else {
        this.$router.push(`/${link}`);
      }
    }
  }
};
</script>

<style lang="css" scoped>
.subheading {
  cursor: pointer;
}
</style>
