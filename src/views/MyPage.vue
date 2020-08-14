<template>
  <v-app>
    <v-container fluid class="py-0 px-0">
      <v-card tile color="#faae7d" class="text-center pa-3">
        <div class="h3 font-weight-bold white--text mb-5" style="margin-top:200px">마이 페이지</div>
        <div class="h6 nanum white--text">
          <div class="my-1">재미있는 영어수다! 친구처럼 편한 영어!</div>
          <div class="my-2">매일 매일 영어습관, 메가토킹.</div>
        </div>
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

            <v-container class="px-10">
              <v-row class="mt-5 mx-1 mb-10">
                <v-col cols="6">
                  <div class="h5 font-weight-bold">HAVE A NICE DAY!</div>
                  <div class="h5 font-weight-black">MARK 선생님과 수업중입니다.</div>
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                  <div>
                    <v-btn
                      color="#df7a30"
                      class="rounded-lg font-weight-bold white--text"
                      large
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
              <v-container class="h6">
                <v-row>
                  <v-col cols="4">
                    <v-container>
                      <v-row>
                        <v-col cols="6 font-weight-black">학습유형</v-col>
                        <v-col cols="6 text--secondary">[Curriculum]</v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="6 font-weight-black">수강과정</v-col>
                        <v-col cols="6 text--secondary">[Material]</v-col>
                      </v-row>
                    </v-container>
                  </v-col>
                  <v-col cols="4">
                    <v-container>
                      <v-row>
                        <v-col cols="6 font-weight-black">수강코스</v-col>
                        <v-col cols="6 text--secondary">[Class Type]</v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="6 font-weight-black">수강횟수</v-col>
                        <v-col cols="6 text--secondary">[period / freq / duration]</v-col>
                      </v-row>
                    </v-container>
                  </v-col>
                  <v-col cols="4">
                    <v-container>
                      <v-row>
                        <v-col cols="6 font-weight-black">수강 시작일</v-col>
                        <v-col cols="6 text--secondary">[Start Date]</v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="6 font-weight-black">수업 시간</v-col>
                        <v-col cols="6 text--secondary">[Class Time]</v-col>
                      </v-row>
                    </v-container>
                  </v-col>
                </v-row>
              </v-container>
              <v-row class="mx-1 my-10">
                <div class="h6 font-weight-black">강의 피드백</div>
              </v-row>
              <v-container class="px-5 py-0">
                <v-row class="mx-1">
                  <v-col cols="12" md="5">
                    <div class="h6">문법 및 문장 교정</div>
                    <div class="h5 font-weight-black">더 나은 표현을 알려드릴게요.</div>
                    <div class="mt-10">
                      <div class="mt-5" v-for="(item, i) in tests" :key="i">
                        <div class="h5 font-weight-black nanum">{{i + 1}}. {{item.test}}</div>
                        <div class="font-weight-bold">{{item.detail}}</div>
                      </div>
                    </div>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="12" md="6">
                    <v-card
                      class="d-flex align-center rounded-pill pa-3 mb-3"
                      color="#dfdfdf"
                      max-width="300"
                    >
                      <v-icon color="#5a55a1" x-large>far fa-play-circle</v-icon>
                      <v-progress-linear v-model="progress" value="60" color="#5a55a1" class="mx-5"></v-progress-linear>
                      <div class="text--secondary">0:40</div>
                    </v-card>
                    <v-card flat max-width="300" class="mt-5">
                      <v-alert outlined color="#5a55a1" class="text-purple rounded-xl">
                        <v-row>
                          <div>녹음파일 전체듣기</div>
                          <v-spacer></v-spacer>
                          <div>음성파일 다운로드</div>
                        </v-row>
                      </v-alert>
                    </v-card>

                    <div class="h6 mt-10">발음 교정</div>
                    <div class="h5 font-weight-black">발음은 이렇게 해주세요.</div>

                    <v-row class="d-flex align-end mt-10 mx-1">
                      <div
                        v-for="(item, i) in tests"
                        :key="i"
                        class="mr-10 h5 font-weight-black nanum"
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

    // for (var i = 1; i <= 40; i++) {
    //   for (var j = 1; j <= 3; j++) {
    //     if (i != 14 && i != 18 && i != 11 && i != 24 && i != 26 && i != 27) {
    //       console.log("Unit" + i + "_" + j);
    //     } else {
    //       if (j < 3) {
    //         console.log("Unit" + i + "_" + j);
    //       }
    //     }
    //   }
    // }
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
