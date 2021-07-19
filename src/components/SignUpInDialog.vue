<template lang="html">
  <v-dialog
    v-model="signInDialog"
    max-width="1000"
    style="
      overflow-x: hidden;
      border-radius: 25px 25px 25px 25px !important;
    "
    @click:outside="close()"
  >
    <v-card flat class="rounded-xl" max-width="1000">
      <v-card flat color="#8aace9" class="rounded-xl">
        <v-container>
          <v-row>
            <v-col cols="6" class="white--text">
              <span class="ml-5 h5 nanum">{{
                isMobile ? "메가토킹" : "로그인"
              }}</span>
            </v-col>
            <v-col cols="6" class="d-flex align-center white--text">
              <span class="ml-5 h5 nanum">{{
                isMobile ? "" : "회원가입"
              }}</span>
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
                <h2 v-show="isMobile">로그인</h2>
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
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-checkbox
                            label="로그인 상태 유지"
                            class="mt-0 pt-0"
                            v-model="rememberMe"
                          ></v-checkbox>
                        </v-col>
                        <v-col cols="12" md="6" class="d-none d-sm-flex">
                          <a
                            href="http://pf.kakao.com/_xdKxhul/chat"
                            target="_blank"
                            class="body-1 nanum text-decoration-none"
                            style="color:rgba(0, 0, 0, 0.6)"
                            >아이디/비밀번호 찾기</a
                          >
                        </v-col>
                      </v-row>
                      <v-btn
                        style="background-image: linear-gradient(to right, #72bffc, #6ec5ff);"
                        block
                        depressed
                        class="white--text h5 nanum rounded-xl"
                        large
                        :loading="btnLoading"
                        @click="login()"
                        >로그인</v-btn
                      >
                      <v-row class="pt-3 d-none d-flex d-sm-flex d-md-none">
                        <v-col class="pb-0 text-center">
                          <a
                            href="http://pf.kakao.com/_xdKxhul/chat"
                            target="_blank"
                            class="body-1 nanum text-decoration-none"
                            style="color:rgba(0, 0, 0, 0.6)"
                            >아이디/비밀번호 찾기</a
                          >
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-form>
              </v-col>
              <v-col class="text-center" cols="12" md="1">
                <v-divider :vertical="!isMobile"></v-divider>
              </v-col>
              <v-col cols="12" md="5" class="mx-auto">
                <h2 class="mb-2" v-show="isMobile">회원가입</h2>
                <v-alert dense border="left" type="warning" v-if="signupErr">
                  {{ signupErrMsg }}
                </v-alert>
                <v-form ref="signupform" v-model="signupValid">
                  <v-row>
                    <v-col cols="12" md="6" class="py-0">
                      <v-text-field
                        dense
                        outlined
                        class="rounded-xl"
                        label="이름 "
                        v-model="signupName"
                        :rules="signupNameRules"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                      <v-text-field
                        dense
                        outlined
                        class="rounded-xl"
                        label="연락처"
                        counter="13"
                        maxlength="13"
                        v-model="signupNumber"
                        :rules="signupNumberRules"
                        required
                        type="tel"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" class="py-0">
                      <v-text-field
                        dense
                        outlined
                        class="rounded-xl"
                        label="이메일"
                        v-model="signupId"
                        :rules="signupIdRules"
                        required
                        ref="signupIdTest"
                      >
                        <template
                          slot="append"
                          v-if="verify_email_status === false"
                        >
                          <v-icon color="#aab7c9">
                            email
                          </v-icon>
                        </template>
                        <template
                          slot="append"
                          v-if="verify_email_status === 'loading'"
                        >
                          <v-progress-circular
                            class="mb-1"
                            indeterminate
                            color="grey"
                            :size="25"
                          ></v-progress-circular>
                        </template>
                        <template
                          slot="append"
                          v-if="verify_email_status === 'close'"
                        >
                          <v-btn
                            depressed
                            color="red"
                            class="mb-1 ml-1 white--text"
                            x-small
                            fab
                            style="pointer-events: none"
                          >
                            <v-icon dark>close</v-icon>
                          </v-btn>
                        </template>
                        <template
                          slot="append"
                          v-if="verify_email_status === 'check'"
                        >
                          <v-btn
                            depressed
                            color="green"
                            class="mb-1 ml-1 white--text"
                            x-small
                            fab
                            style="pointer-events: none"
                          >
                            <v-icon dark>check</v-icon>
                          </v-btn>
                        </template>
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                      <v-text-field
                        dense
                        outlined
                        type="password"
                        class="rounded-xl"
                        label="비밀번호 "
                        style="font-family: auto;"
                        v-model="signupPw"
                        :rules="signupPwRules"
                        required
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
                        v-model="signupPwCheck"
                        :rules="signupPwCheckRules"
                      ></v-text-field>
                    </v-col>
                    <v-checkbox
                      label="아래 약관에 모두 동의합니다."
                      v-model="signupAp"
                    ></v-checkbox>
                    <v-checkbox
                      label="만 14세 이상이며, 전화영어 이용약관, 개인정보 수집 및 이용에 동의"
                      v-model="signupPp"
                      :rules="signupPpRules"
                      required
                    ></v-checkbox>
                    <v-checkbox
                      class="mt-0"
                      label="할인/이벤트 안내 동의(선택)"
                      v-model="signupEa"
                    ></v-checkbox>
                    <v-btn
                      style="background-image: linear-gradient(to right, #fc686f, #ff934d);"
                      block
                      depressed
                      class="white--text h5 nanum rounded-xl"
                      large
                      @click="signup()"
                      >신규 회원가입</v-btn
                    >
                  </v-row>
                </v-form>
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
import axios from "axios";
export default {
  data() {
    return {
      loginValid: false,
      signupValid: false,
      loginEmailRules: [v => !!v || "아이디를 입력해주세요"],
      loginPwRules: [v => !!v || "비밀번호를 입력해주세요"],
      signupNameRules: [v => !!v || "이름을 입력해주세요"],
      signupNumberRules: [
        v => !!v || "번호를 입력해주세요",
        v => /^[0-9-]*$/.test(v) || "전화번호는 번호만 가능합니다."
      ],
      signupIdRules: [v => !!v || "이메일을 입력해주세요"],
      signupIdRulesTemp: [
        v => !!v || "이메일을 입력해주세요",
        v => /[a-zA-Z0-9]+@[a-zA-Z0-9]+/.test(v) || "이메일 형식이 아닙니다."
      ],
      signupPwRules: [v => !!v || "비밀번호를 입력해주세요"],
      signupPwCheckRules: [
        v => !!v || "비밀번호를 체크해주세요",
        v => v == this.signupPw || "비밀번호가 일치하지 않습니다"
      ],
      signupPpRules: [v => !!v || "비밀번호를 입력해주세요"],
      loginId: "",
      loginPw: "",
      signupId: "",
      signupNumber: "",
      signupName: "",
      signupPw: "",
      signupPwCheck: "",
      signupAp: false,
      signupPp: false,
      signupEa: false,
      btnLoading: false,
      verify_email_status: false,
      timeoutId: "",
      rememberMe: true
    };
  },
  computed: {
    ...mapState([
      "isLogin",
      "loginErr",
      "loginErrMsg",
      "signupErr",
      "signupErrMsg",
      "isMobile"
    ])
  },
  props: ["signInDialog"],
  watch: {
    signupAp() {
      this.signupPp = this.signupAp;
      this.signupEa = this.signupAp;
    },
    async signupId() {
      //이메일 유무 검증
      var mailRules = this.signupIdRulesTemp.slice();
      mailRules.push(false || "검증 중 입니다.");
      this.$set(this.$data, "signupIdRules", mailRules);
      if (this.signupId.length != 0) {
        this.verify_email_status = "loading";
        await this.timeout(2000);
        await axios
          .get("//phone.megatalking.com/origin/api/signup.php", {
            params: {
              action: "validateEmail",
              id: this.signupId
            }
          })
          .then(rs => {
            if (rs.data.result) {
              mailRules = this.signupIdRulesTemp.slice();
              this.$set(this.$data, "signupIdRules", mailRules);
              this.verify_email_status = "check";
            } else {
              mailRules = this.signupIdRulesTemp.slice();
              mailRules.push(false || "이미 존재하는 아이디 입니다.");
              this.$set(this.$data, "signupIdRules", mailRules);
              this.verify_email_status = "close";
            }
          })
          .catch(err => {
            console.log(err);
            mailRules = this.signupIdRulesTemp.slice();
            mailRules.push(
              false || "검증을 할수없습니다. 고객센터에 문의하세요."
            );
            this.$set(this.$data, "signupIdRules", mailRules);
            this.verify_email_status = "close";
          })
          .then(() => {
            if (!this.$refs.signupIdTest.valid)
              this.verify_email_status = "close";
          });
      } else {
        this.verify_email_status = "close";
      }
    },
    signupNumber(val) {
      this.signupNumber = val
        .replace(/[^0-9]/g, "")
        .replace(
          /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
          "$1-$2-$3"
        )
        .replace("--", "-");
    }
  },
  created() {},
  methods: {
    timeout(ms) {
      return new Promise(res => {
        if (!this.timeoutId) {
          this.timeoutId = setTimeout(res, ms);
        } else {
          clearTimeout(this.id);
          this.id = setTimeout(res, ms);
        }
      });
    },
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
            pw: this.loginPw,
            rememberme: this.rememberMe
          })
          .then(() => {
            if (this.isLogin) {
              this.$refs.loginform.reset();
              if (this.$route.name != "Enrollment") {
                this.$router.push("/");
              }
              this.$router.push("/mypage");
              this.close();
            }
            this.btnLoading = false;
          });
      }
    },
    signup() {
      if (this.$refs.signupform.validate()) {
        let params = {
          id: this.signupId,
          number: this.signupNumber,
          name: this.signupName,
          password: this.signupPw,
          privacyPolicy: this.signupPp,
          eventAgreement: this.signupEa
        };
        this.$store.dispatch("signup", params);
        this.verify_email_status = false;
        this.$refs.signupform.reset();
      }
    }
  }
};
</script>

<style lang="css" scoped></style>
