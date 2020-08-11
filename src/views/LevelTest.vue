<template>
  <v-app>
    <v-container fluid class="py-0 px-0">
      <v-card tile color="#8bb6f7" class="text-center pa-3">
        <div class="h4 font-weight-bold white--text mb-5" style="margin-top:200px">레벨테스트</div>
        <div
          class="h4 mb-5 font-weight-bold"
          style="color:#2564cb"
        >“Anytime, Anywhere, Home Learn English.”</div>
        <div class="h5 mb-5" style="color:#5f8dd3">레벨테스트를 통해 나의 영어 실력을 알고, 무료수업을 신청해보세요 .</div>
        <v-container style="max-width:1000px;margin-top:90px">
          <v-card
            class="rounded-xl shadow"
            width="100%"
            style="margin-bottom:500px"
            color="#fafafa"
          >
            <v-container class="px-10 pt-10">
              <v-row class="px-10">
                <div class="h5">전화영어 무료 레벨테스트.</div>
              </v-row>
              <v-row class="pl-10">
                <div class="h5 font-weight-black">간편하게 신청해보세요.</div>
              </v-row>
              <v-row class="px-10 mt-5 d-flex align-center" style="margin-bottom:50px">
                <div class="text-purple font-weight-black">모든 레벨테스트는 전화로 진행됩니다.</div>
                <v-spacer></v-spacer>
                <div>
                  <v-btn color="#5a55a1" large class="white--text rounded-lg">결과 확인하기</v-btn>
                </div>
              </v-row>
              <v-divider class="mx-10 mb-10"></v-divider>
              <div class="text-dark-purple h6">
                <span class="font-weight-black">나에게 맞춘 날짜와 시간</span>에
                언제든지 진행 가능합니다.
              </div>
              <v-row class="px-10 my-10 d-flex justify-center">
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon1.png" width="70"></v-img>
                  <div class="mt-3 caption">신청서 작성</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-right</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon2.png" width="70"></v-img>
                  <div class="mt-3 caption">예약 완료</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-right</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon3.png" width="70"></v-img>
                  <div class="mt-3 caption">
                    문자메시지 발송
                    <br />(예약 확인, 테스트 안내 )
                  </div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-right</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon4.png" width="70"></v-img>
                  <div class="mt-3 caption">
                    강사님과 1:1수업
                    <br />(간단 자기소개 등)
                  </div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-right</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon5.png" width="70"></v-img>
                  <div class="mt-3 caption">테스트 결과 받기</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-right</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon6.png" width="70"></v-img>
                  <div class="mt-3 caption">개별 맞춤 상담</div>
                </div>
              </v-row>
              <div class="h6 font-weight-black text-left px-10">과목 선택</div>
              <v-row class="mx-10 mb-10">
                <v-checkbox v-model="checkbox1" color="primary" class="mr-10" label="메가토킹 전화영어"></v-checkbox>
                <v-checkbox v-model="checkbox1" color="primary" label="메가토킹 화상영어"></v-checkbox>
              </v-row>
              <v-row class="d-flex align-center mx-10 mb-10">
                <div class="pb-7 font-weight-black">이름</div>
                <v-col cols="4" class="mr-5">
                  <v-text-field color="primary" dense outlined></v-text-field>
                </v-col>

                <div class="pb-7 font-weight-black">연락처</div>
                <v-col cols="4">
                  <v-text-field color="primary" dense outlined></v-text-field>
                </v-col>
              </v-row>
              <div class="mx-10 mb-5 font-weight-black h6 text-left">예약 일시</div>

              <v-row justify="end" class="mb-5">
                <v-col cols="10" class="pb-0">
                  <v-container class="pb-0">
                    <v-row justify="center">
                      <v-btn
                        v-for="(day, i) in days"
                        :key="i"
                        class="rounded-lg mr-3"
                        large
                        @click="daySelected = i"
                        :color="daySelected == i ? 'primary' : ''"
                        depressed
                      >{{ day }}</v-btn>
                    </v-row>
                  </v-container>
                </v-col>
              </v-row>

              <v-row class="mx-10">
                <v-col cols="2">
                  <v-tabs
                    class="rounded-xl"
                    vertical
                    v-model="tab"
                    icons-and-text
                    background-color="#dcdcdc"
                    slider-color="#00000000"
                  >
                    <v-tab active-class="active white--text" style="border-radius:30px 0 0 30px">
                      <v-icon style="font-size:50px;" class="mt-3">fas fa-sun</v-icon>오전 AM
                    </v-tab>

                    <v-tab active-class="active white--text" style="border-radius:30px 0 0 30px">
                      <v-icon style="font-size:50px;" class="mt-3">fas fa-moon</v-icon>오후 PM
                    </v-tab>
                  </v-tabs>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="10">
                  <v-card max-height="230" color="#fafafa" width="100%" flat>
                    <v-card flat v-if="tab==0">
                      <v-container class="px-0 py-0">
                        <v-row no-gutters v-for="(hour, i) in 6" :key="i">
                          <v-col class="py-2" cols="2" v-for="(minute, j) in 6" :key="j">
                            <span
                              style="cursor:pointer"
                              @click="selectTime($event)"
                              :class="{'blue--text text--darken-3 font-weight-black': (hour + 5) + ':' + j + '0' == selectedTime}"
                            >{{hour + 5}}:{{j}}0</span>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                    <v-card flat max-height="230" style="overflowY: scroll" v-else>
                      <v-container class="px-0 py-0">
                        <v-row no-gutters v-for="(hour, i) in 12" :key="i">
                          <v-col class="py-2" cols="2" v-for="(minute, j) in 6" :key="j">
                            <span
                              style="cursor:pointer"
                              @click="selectTime($event)"
                              :class="{'blue--text text--darken-3 font-weight-black': (hour + 11) + ':' + j + '0' == selectedTime}"
                            >{{hour + 11}}:{{j}}0</span>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-card>
                </v-col>
              </v-row>
              <v-row class="mx-10 mb-10 d-flex align-center">
                <v-checkbox
                  v-model="checkbox1"
                  color="primary"
                  class="mr-2"
                  label="개인정보 수집이용에 동의합니다."
                ></v-checkbox>
                <v-btn class="rounded-pill" small depressed disabled>내용보기</v-btn>
                <v-spacer></v-spacer>
                <v-checkbox
                  v-model="checkbox1"
                  color="primary"
                  class="mr-2"
                  label="개인정보 취급위탁에 동의합니다."
                ></v-checkbox>
                <v-btn class="rounded-pill" small depressed disabled>내용보기</v-btn>
              </v-row>
            </v-container>
          </v-card>
        </v-container>
      </v-card>
    </v-container>
  </v-app>
</template>

<style scoped>
.active {
  background-color: #2564cb;
}

.v-tabs--vertical.v-tabs--icons-and-text > .v-tabs-bar .v-tab {
  height: 115px;
  border-radius: 30px 0 0 30px;
}
</style>

<script>
export default {
  data() {
    return {
      days: [],
      daySelected: -1,

      dateTime: new Date(),
      // listOfTimes: [],

      checkbox1: false,
      tab: 0,
      selectedTime: ""
    };
  },
  mounted() {
    for (var i = 1; i < 12; i++) {
      var today = new Date();
      var nextDates = new Date(today);
      nextDates.setDate(nextDates.getDate() + i);
      if (
        nextDates.getDay() != 6 &&
        nextDates.getDay() != 0 &&
        this.days.length < 3
      ) {
        this.days.push(this.formatDate(nextDates));
      }
    }

    // this.setListofTime();
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
    },

    // setListofTime() {
    //   var listOfTimes = [...Array(6)].map(() => new Array(6));

    //   for (var i = 0; i < 6; i++) {
    //     for (var j = 0; j < 6; j++) {
    //       listOfTimes[i][j] = i + 6 + ":" + j + "0";
    //     }
    //   }

    //   this.listOfTimes = listOfTimes;

    // },

    selectTime(event) {
      this.selectedTime = event.target.innerText;
    }
  }
};
</script>
