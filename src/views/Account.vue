<template>
  <v-app style="background-color:#00000000">
    <v-container fluid class="py-0 px-0">
      <v-tabs
        class="h5 nanum"
        background-color="#6a9af2"
        style="margin-top:70px"
        slider-color="#FFF"
      >
        <v-tab class="white--text" v-for="(tab, i) in tabs" :key="i">{{tab}}</v-tab>
        <v-tab-item>
          <v-container style="max-width:1000px;margin-top:90px">
            <v-card depressed class="mx-auto rounded-xl" style="border: solid 1px #6a9af2">test</v-card>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container style="max-width:1000px;margin-top:90px">
            <v-card depressed class="mx-auto rounded-xl" style="border: solid 1px #6a9af2">test</v-card>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container style="max-width:1000px;margin-top:90px">
            <v-card depressed class="mx-auto rounded-xl" style="border: solid 1px #6a9af2">test</v-card>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container style="max-width:1000px;margin-top:90px">
            <v-card depressed class="mx-auto rounded-xl" style="border: solid 1px #6a9af2">
              <div class="my-3" style="border-bottom: solid 1px #6a9af2">회원정보수정</div>
              <v-container class="text-left subtitle-text-1 mx-md-10">
                <v-row>
                  <v-col cols="6" sm="2">아이디</v-col>
                  <v-col cols="6" sm="4">imeau1212@gmail.com</v-col>
                </v-row>
                <v-row>
                  <v-col cols="6" sm="2">비밀번호</v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field outlined class="rounded-lg" dense></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="2">비밀번호 확인</v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field outlined class="rounded-lg" dense></v-text-field>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                  <v-col cols="6" sm="2">이름</v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field outlined class="rounded-lg" dense></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="2">영어이름</v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field outlined class="rounded-lg" dense></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6" sm="2">연락처</v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field outlined class="rounded-lg" dense></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="2">휴대전화</v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field outlined class="rounded-lg" dense></v-text-field>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                  <v-col cols="6" sm="2">Email</v-col>
                  <v-col cols="6" sm="4">
                    <v-text-field outlined class="rounded-lg" dense></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="3" class="pt-sm-0">
                    <v-checkbox label="수신동의"></v-checkbox>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6" sm="2">현금영수증</v-col>
                  <v-col cols="6" sm="4">
                    <v-text-field outlined class="rounded-lg" dense></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="2" class="pt-sm-0">
                    <v-checkbox label="신청"></v-checkbox>
                  </v-col>
                  <v-col cols="6" sm="2" class="pt-sm-0">
                    <v-checkbox label="미신청"></v-checkbox>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
            <v-row class="mt-5" justify="center">
              <v-btn class="mr-3 rounded-pill" color="#6a9af2" large>확인</v-btn>
              <v-btn color="grey" class="rounded-xl" large>새로입력하기</v-btn>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      rating: 4.8,
      screenWidth: "",
      isMobile: false,
      tabs: ["수강내역", "적립금", "할인쿠폰", "회원정보수정"]
    };
  },

  created() {
    window.addEventListener("resize", this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },

  mounted() {
    this.screenWidth = screen.width;
    this.isMobile = this.screenWidth <= 960 ? true : false;
  },

  methods: {
    onWindowResize() {
      this.screenWidth = screen.width;
    }
  }
};
</script>
