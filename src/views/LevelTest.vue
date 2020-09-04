<template>
  <v-app style="background-color:#00000000">
    <v-container fluid class="py-0 px-0">
      <v-card tile color="#8bb6f700" flat class="text-center pa-3">
        <div class="h3 font-weight-bold white--text mb-5" style="margin-top:200px">레벨테스트</div>
        <div class="h6 nanum white--text">
          <div class="my-1">설레는 마음 반, 기대감이 반!</div>
          <div class="my-2">누구나 시작은 레벨테스트</div>
          <div class="my-2">걱정하지 마세요.</div>
          <div class="my-1">메가토킹선생님이 편안하게 친구처럼 도와드려요</div>
        </div>
        <v-container style="max-width:1000px;margin-top:90px">
          <v-card class="rounded-xl shadow" width="100%" color="#fafafa">
            <v-container class="px-md-10 pt-10 px-3">
              <v-row class="px-10">
                <div class="h5 text-left">전화영어 무료 레벨테스트.</div>
              </v-row>
              <v-row class="pl-10">
                <div class="h5 text-left font-weight-black">간편하게 신청해보세요.</div>
              </v-row>
              <v-row no-gutters class="px-10 mt-5 d-flex align-center" style="margin-bottom:50px">
                <v-col
                  cols="12"
                  sm="6"
                  class="text-purple font-weight-black text-left"
                >모든 레벨테스트는 전화로 진행됩니다.</v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" sm="6">
                  <v-btn
                    color="#5a55a1"
                    large
                    class="white--text rounded-lg"
                    :block="isMobile"
                  >결과 확인하기</v-btn>
                </v-col>
              </v-row>
              <v-divider class="mx-10 mb-10"></v-divider>
              <div class="px-10 text-dark-purple h6">
                <span class="font-weight-black">나에게 맞춘 날짜와 시간</span>에
                언제든지 진행 가능합니다.
              </div>
              <v-row class="px-10 my-10 d-flex justify-center">
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon1.png" width="70"></v-img>
                  <div class="mt-3 caption-text">신청서 작성</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-right</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon2.png" width="70"></v-img>
                  <div class="mt-3 caption-text">예약 완료</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-right</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon3.png" width="70"></v-img>
                  <div class="mt-3 caption-text">
                    문자메시지 발송
                    <br />(예약 확인, 테스트 안내 )
                  </div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-right</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon4.png" width="70"></v-img>
                  <div class="mt-3 caption-text">
                    강사님과 1:1수업
                    <br />(간단 자기소개 등)
                  </div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-right</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon5.png" width="70"></v-img>
                  <div class="mt-3 caption-text">테스트 결과 받기</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-right</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon6.png" width="70"></v-img>
                  <div class="mt-3 caption-text">개별 맞춤 상담</div>
                </div>
              </v-row>

              <!-- <v-row class="px-10 my-10 d-flex flex-column justify-center" v-else>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon1.png" width="70"></v-img>
                  <div class="mt-3 caption-text">신청서 작성</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-down</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon2.png" width="70"></v-img>
                  <div class="mt-3 caption-text">예약 완료</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-down</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon3.png" width="70"></v-img>
                  <div class="mt-3 caption-text">
                    문자메시지 발송
                    <br />(예약 확인, 테스트 안내 )
                  </div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-down</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon4.png" width="70"></v-img>
                  <div class="mt-3 caption-text">
                    강사님과 1:1수업
                    <br />(간단 자기소개 등)
                  </div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-down</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon5.png" width="70"></v-img>
                  <div class="mt-3 caption-text">테스트 결과 받기</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-down</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon6.png" width="70"></v-img>
                  <div class="mt-3 caption-text">개별 맞춤 상담</div>
                </div>
              </v-row>-->

              <div class="px-5 px-md-10 h6 font-weight-black text-left mb-5">과목 선택</div>
              <v-row class="mx-sm-10 mx-4">
                <v-col cols="12" sm="6" v-for="(type, i) in types" :key="i">
                  <v-btn
                    @click="selectedType = i"
                    class="rounded-pill"
                    :color="selectedType ==  i ? 'primary' : 'grey'"
                    :outlined="selectedType ==  i ? false : true"
                    block
                  >{{type}}</v-btn>
                </v-col>
              </v-row>

              <v-row class="align-center mx-4 mx-sm-10 mx-4 mb-10">
                <v-col cols="12" sm="6" class="pb-0 pb-sm-3">
                  <v-text-field color="primary" label="이름" dense outlined></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="pt-0 pt-sm-3">
                  <v-text-field color="primary" label="연락처" dense outlined></v-text-field>
                </v-col>
              </v-row>
              <div class="mx-10 mb-5 font-weight-black h6 text-left">예약 일시</div>

              <v-row :justify="isMobile ? 'center' : 'end'" class="mb-5">
                <v-col cols="12" class="pb-0">
                  <v-container class="pb-0" fluid>
                    <v-row justify="center">
                      <v-btn
                        v-for="(day, i) in days"
                        :key="i"
                        class="rounded-lg mr-3"
                        :large="!isMobile"
                        @click="daySelected = i"
                        :color="daySelected == i ? 'primary' : ''"
                        depressed
                      >{{ day }}</v-btn>
                    </v-row>
                  </v-container>
                </v-col>
              </v-row>

              <v-row class="mx-auto mb-5">
                <v-card flat max-height="230" style="overflowY: scroll" width="100%">
                  <v-container class="px-0 py-0">
                    <v-row no-gutters v-for="(hour, i) in 24 - dateTime.getHours()" :key="i">
                      <v-col class="py-2" cols="2" v-for="(minute, j) in 6" :key="j">
                        <span
                          class="regular"
                          style="cursor:pointer"
                          :class="{'blue--text text--darken-3 font-weight-black': (dateTime.getHours() + i) + ':' + j + '0' == selectedTime}"
                        >
                          <strike
                            v-if="dateTime.getMinutes() > Number(j + '0') && dateTime.getHours() + i == dateTime.getHours()"
                          >{{dateTime.getHours() + i}}:{{j}}0</strike>
                          <span
                            @click="selectTime($event)"
                            v-else
                          >{{dateTime.getHours() + i}}:{{j}}0</span>
                        </span>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-row>

              <v-row class="mx-sm-10 mx-4 mb-10">
                <v-col cols="12" sm="4" class="d-flex align-center py-0 py-sm-3">
                  <v-checkbox color="primary" class="mr-2" label="개인정보 수집이용에 동의합니다."></v-checkbox>
                  <v-btn class="rounded-pill" small depressed disabled>내용보기</v-btn>
                </v-col>
                <v-col cols="12" sm="4" class="d-flex align-center py-0 py-sm-3">
                  <v-checkbox color="primary" class="mr-2" label="개인정보 취급위탁에 동의합니다."></v-checkbox>
                  <v-btn class="rounded-pill" small depressed disabled>내용보기</v-btn>
                </v-col>
                <v-col cols="12" sm="4" class="d-flex align-center py-0 py-sm-3">
                  <v-checkbox color="primary" class="mr-2" label="상담 및 이벤트 안내 동의(선택)."></v-checkbox>
                </v-col>
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
      selectedTime: "",
      selectedType: -1,
      screenWidth: "",
      isMobile: false,

      types: ["메가토킹 화상영어", "메가토킹 화상영어"]
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

    for (var i = 0; i < 12; i++) {
      var today = new Date();
      var nextDates = new Date(today);
      nextDates.setDate(nextDates.getDate() + i);
      if (
        nextDates.getDay() != 6 &&
        nextDates.getDay() != 0 &&
        this.days.length < 2
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
      day = day.length == 1 ? "0" + day : day;

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
    },

    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
    }
  }
};
</script>
