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
              <v-col cols="5" class="mx-auto">
                <v-row>
                  <v-col>
                    <v-text-field
                      dense
                      outlined
                      class="rounded-xl"
                      label="아이디(이메일)"
                    ></v-text-field>
                    <v-text-field
                      dense
                      outlined
                      class="rounded-xl"
                      label="비밀번호"
                      type="password"
                      style="font-family: auto;"
                    ></v-text-field>
                    <v-checkbox label="로그인 상태 유지"></v-checkbox>
                    <v-btn
                      style="background-image: linear-gradient(to right, #add5f5, #9ebbef);"
                      block
                      depressed
                      class="white--text h5 nanum rounded-xl"
                      large
                      >로그인</v-btn
                    >
                  </v-col>
                </v-row>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="5" class="mx-auto">
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
export default {
  data() {
    return {};
  },
  props: ["signInDialog"],
  methods: {
    close() {
      this.$emit("sighDialogToggle", false);
    }
  }
};
</script>

<style lang="css" scoped></style>
