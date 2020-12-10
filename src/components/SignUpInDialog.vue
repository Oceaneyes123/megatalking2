<template lang="html">
  <v-dialog
    v-model="signInDialog"
    max-width="1000"
    style="
      overflow-x: hidden;
      lborder-radius: 25px 25px 25px 25px !important;
    "
    @click:outside="close()"
  >
    <v-card flat class="rounded-xl" max-width="1000">
      <v-card flat color="#8aace9" class="rounded-xl">
        <v-container class="py-0">
          <v-row>
            <v-col cols="6" class="white--text">
              <span class="ml-5 h5 nanum">회원 로그인</span>
            </v-col>
            <v-col cols="6" class="d-flex align-center white--text">
              <span class="ml-5 h5 nanum">회원가입</span>
              <v-spacer></v-spacer>
              <span class="mr-5">
                <v-icon color="white" @click="close()">
                  close
                </v-icon>
              </span>
            </v-col>
          </v-row>
        </v-container>
        <v-card flat class="pa-5">
          <v-container>
            <v-row>
              <v-col cols="12" md="5" class="mx-auto">
                <v-alert dense border="left" type="warning" v-if="loginErr">
                  {{ loginErrMsg }}
                </v-alert>
                <v-form ref="loginform" v-model="loginValid">
                  <v-row>
                    <v-col>
                      <v-text-field
                        dense
                        outlined
                        class="rounded-xl"
                        label="아이디(이메일)"
                        :rules="loginEmailRules"
                        v-model="loginId"
                      ></v-text-field>
                      <v-text-field
                        dense
                        outlined
                        class="rounded-xl"
                        label="비밀번호"
                        type="password"
                        style="font-family: auto;"
                        :rules="loginPwRules"
                        v-model="loginPw"
                      ></v-text-field>
                      <v-checkbox label="로그인 상태 유지"></v-checkbox>
                      <v-btn
                        style="background-image: linear-gradient(to right, #add5f5, #9ebbef);"
                        block
                        depressed
                        class="white--text h5 nanum rounded-xl"
                        large
                        :loading="btnLoading"
                        @click="login()"
                        >로그인</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-form>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="12" md="5" class="mx-auto">
                <v-row>
                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      dense
                      outlined
                      class="rounded-xl"
                      label="이름 "
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      dense
                      outlined
                      class="rounded-xl"
                      label="연락처"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-text-field
                      dense
                      outlined
                      class="rounded-xl"
                      label="이메일"
                      append-icon="email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      dense
                      outlined
                      type="password"
                      class="rounded-xl"
                      label="비밀번호 "
                      style="font-family: auto;"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      dense
                      outlined
                      type="password"
                      class="rounded-xl"
                      label="비밀번호 확인"
                      style="font-family: auto;"
                    ></v-text-field>
                  </v-col>
                  <v-checkbox label="아래 약관에 모두 동의합니다."></v-checkbox>
                  <v-checkbox
                    label="만 14세 이상이며, 전화영어 이용약관, 개인정보 수집 및 이용에 동의"
                  ></v-checkbox>
                  <v-checkbox
                    class="mt-0"
                    label="할인/이벤트 안내 동의(선택)"
                  ></v-checkbox>
                  <v-btn
                    style="background-image: linear-gradient(to right, #fc686f, #ff934d);"
                    block
                    depressed
                    class="white--text h5 nanum rounded-xl"
                    large
                    >신규 회원가입</v-btn
                  >
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      loginValid: false,
      loginEmailRules: [v => !!v || "아이디를 입력해주세요"],
      loginPwRules: [v => !!v || "비밀번호를 입력해주세요"],
      loginId: "",
      loginPw: "",
      btnLoading: false
    };
  },
  computed: {
    ...mapState(["isLogin", "loginErr", "loginErrMsg"])
  },
  props: ["signInDialog"],
  methods: {
    close() {
      this.$emit("sighDialogToggle", false);
    },
    login() {
      if (this.$refs.loginform.validate()) {
        //로그인 필드를 다 입력했다면

        this.btnLoading = true;
        this.$store
          .dispatch("login", {
            id: this.loginId,
            pw: this.loginPw
          })
          .then(() => {
            if (this.isLogin) {
              this.$refs.loginform.reset();
              this.close();
            }
            this.btnLoading = false;
          });
      }
    }
  }
};
</script>

<style lang="css" scoped></style>
