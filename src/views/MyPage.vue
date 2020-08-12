<template>
  <v-app>
    <v-container fluid class="py-0 px-0">
      <v-card tile color="#faae7d" class="text-center pa-3">
        <div class="h4 font-weight-bold white--text mb-5" style="margin-top:200px">마이 페이지</div>
        <div class="h4 mb-5 font-weight-bold white--text">“Anytime, Anywhere, Home Learn English.”</div>
        <div class="h5 mb-5" style="color:#c8713a">메가토킹은 새벽부터 밤까지, 회원님만을 위한 맞춤 강의를 제공합니다.</div>
        <v-card
          class="rounded-xl mx-auto"
          elevation="7"
          width="100%"
          style="margin-top:90px;margin-bottom:500px"
          max-width="1000px"
        >
          <v-container class="px-10 pt-10 text-left">
            <v-row>
              <v-col cols="3">
                <v-select v-model="select" :items="selectItems" outlined></v-select>
              </v-col>
            </v-row>
            <div class="text-center font-weight-black h4">{{month}}</div>
            <v-divider style="background-color:#5a55a1"></v-divider>
            <v-row>
              <v-col cols="1" class="d-flex align-center justify-center">
                <v-icon @click="$refs.calendar.prev()" x-large>fas fa-angle-left</v-icon>
              </v-col>
              <v-col cols="10">
                <v-calendar
                  class="calendar"
                  ref="calendar"
                  :now="today"
                  color="#faae7d"
                  type="week"
                ></v-calendar>
              </v-col>
              <v-col cols="1" class="d-flex align-center justify-center">
                <v-icon @click="$refs.calendar.next()" x-large>fas fa-angle-right</v-icon>
              </v-col>
            </v-row>
            <v-row class="mx-1">
              <div class="h6 font-weight-black mt-5">수강 신청내역</div>
            </v-row>
            <v-row>
              <v-col cols="12" md="3">
                <div class="text-purple mt-5">프라임</div>
                <div>6:00 - 10:00</div>
              </v-col>
              <v-col cols="12" md="8">test</v-col>
            </v-row>
            <v-row class="mt-10 mx-1">
              <div class="h6 font-weight-black">수강 종류</div>
            </v-row>
            <v-row class="mt-5 mx-1 mb-10">
              <v-col cols="6">
                <div class="h5 font-weight-bold">HAVE A NICE DAY!</div>
                <div class="h5 font-weight-black">MARK 선생님과 수업중입니다.</div>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <div>
                  <v-btn
                    color="#5a55a1"
                    class="rounded-lg font-weight-bold"
                    large
                    style="color: #f9bb75"
                  >강사평가 바로가기</v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row class="mt-10 mx-1">
              <div class="h6 font-weight-black">20.07.15 6:40+ 10 Annie / 프리토킹 묻고 답하기</div>
            </v-row>
            <v-container class="px-10">
              <v-row>
                <v-col cols="12" md="4">
                  <v-card flat class="rounded-xl">
                    <v-img src="../assets/mypage1.png" width="auto" height="auto"></v-img>
                  </v-card>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" md="8">
                  <v-card flat class="rounded-xl" color="#b9b9b9" width="100%" height="100%"></v-card>
                </v-col>
              </v-row>
            </v-container>
            <v-row class="mx-1 my-10">
              <div class="h6 font-weight-black">강의 피드백</div>
            </v-row>
            <v-container class="px-5 py-0">
              <v-row class="mx-1">
                <v-col cols="12" md="4">
                  <div class="h5">문법 및 문장 교정</div>
                  <div class="h6 font-weight-black">더 나은 표현을 알려드릴게요.</div>
                  <div class="mt-10">
                    <div class="mt-5" v-for="(item, i) in tests" :key="i">
                      <div class="h5 font-weight-black">{{i + 1}}. {{item.test}}</div>
                      <div class="font-weight-bold">{{item.detail}}</div>
                    </div>
                  </div>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" md="7">
                  <v-card
                    class="d-flex align-center rounded-pill pa-3 mb-3"
                    color="#dfdfdf"
                    max-width="300"
                  >
                    <v-icon color="#5a55a1" x-large>far fa-play-circle</v-icon>
                    <v-progress-linear v-model="progress" value="60" color="#5a55a1" class="mx-5"></v-progress-linear>
                    <div class="text--secondary">0:40</div>
                  </v-card>
                  <div class="text--secondary font-weight-black ml-2">8월 21일 오후 10:13</div>
                  <v-row class="d-flex align-end mt-10 mx-1">
                    <div
                      v-for="(item, i) in tests"
                      :key="i"
                      class="mr-10 h5 font-weight-black"
                    >{{ i + 1}}.{{ item.test }}</div>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
            <v-row class="mx-1 mt-10">
              <v-col>
                <div class="h6">오늘의 정리</div>
                <div class="h5 font-weight-bold">선생님이 작성해주신 코멘트입니다.</div>
              </v-col>
            </v-row>
            <v-row class="mx-4 mt-3">
              <div class="text--secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consec
              </div>
            </v-row>
          </v-container>
        </v-card>
      </v-card>
    </v-container>
  </v-app>
</template>

<style>
.v-calendar-daily__pane {
  height: 0px !important;
}
</style>

<script>
export default {
  data() {
    return {
      selectItems: ["수업 회차순"],
      select: "수업 회차순",
      today: "",
      date: new Date(),
      month: "",
      tests: [
        {
          test: "test",
          detail: "더 나은 표현을 알려드릴게요."
        },
        {
          test: "test",
          detail: "더 나은 표현을 알려드릴게요."
        },
        {
          test: "test",
          detail: "더 나은 표현을 알려드릴게요."
        }
      ]
    };
  },

  mounted() {
    this.today = this.formatDate(this.date);
    this.month = this.date.getMonth() + 1;
  },

  methods: {
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      month = month.length == 1 ? "0" + month : month;

      if (day.length < 2) day = +day;

      return [year, month, day].join("-");
    }
  }
};
</script>
