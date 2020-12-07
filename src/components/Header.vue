<template lang="html">
  <div class="">
    <v-card
      tile
      height="75"
      width="100%"
      style="position: fixed; top: 0; z-index: 100"
      v-if="showNav"
    >
      <v-container class="d-flex flex-row">
        <v-card flat tile color="#00000000">
          <v-img
            @click="$router.push('/')"
            contain
            src="@/assets/logo.jpg"
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
            @click="$router.push(`/${route.link}`)"
          >
            {{ route.text }}
          </div>
        </v-card>
        <v-card
          v-if="screenWidth > 960"
          flat
          class="d-flex align-center mr-5"
          color="#00000000"
          style="color: #a3a3a3"
        >
          <div class="mr-8 subheading" @click="$router.push('/account')">
            회원정보
          </div>
          <div class="mr-6 subheading" @click="signInDialog = true">
            <a>로그인</a>
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
          <template v-slot:activator="{ on: menu }">
            <v-icon v-on="menu" x-large>menu</v-icon>
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
                v-for="(route, i) in routes"
                :key="i"
                @click="$router.push(`/${route.link}`)"
                >{{ route.text }}</v-list-item
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
  </div>
</template>

<script>
import { mapState } from "vuex";
import SignUpInDialog from "@/components/SignUpInDialog.vue";
export default {
  name: "Header",
  components: {
    SignUpInDialog
  },
  data() {
    return {
      signInDialog: false,
      routes: [
        {
          text: "커리큘럼",
          link: "curriculum"
        },
        {
          text: "레벨테스트",
          link: "level-test"
        },
        {
          text: "수강신청",
          link: "enrollment"
        },
        {
          text: "마이페이지",
          link: "mypage"
        },
        {
          text: "수강후기",
          link: "board"
        },
        {
          text: "이벤트",
          link: "event"
        }
      ]
    };
  },
  computed: {
    ...mapState(["showNav", "screenWidth", "isMobile"])
  },
  mounted() {},
  methods: {
    sighDialogToggle() {
      this.signInDialog = false;
    }
  }
};
</script>

<style lang="css" scoped>
.subheading {
  cursor: pointer;
}
</style>
