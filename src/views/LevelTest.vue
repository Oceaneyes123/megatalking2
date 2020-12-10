<template>
  <v-app style="background-color:#00000000">
    <v-container fluid class="py-0 px-0">
      <v-card tile color="#8bb6f700" flat class="text-center pa-3">
        <div
          class="h3 font-weight-bold white--text mb-5 gmarket"
          style="margin-top:200px"
        >
          레벨테스트
        </div>
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
                <div class="h5 text-left font-weight-black">
                  간편하게 신청해보세요.
                </div>
              </v-row>
              <v-row
                no-gutters
                class="px-10 mt-5 d-flex align-center"
                style="margin-bottom:50px"
              >
                <v-col
                  cols="12"
                  sm="6"
                  class="text-purple font-weight-black text-left"
                  >모든 레벨테스트는 전화로 진행됩니다.</v-col
                >
                <v-spacer></v-spacer>
                <v-col cols="12" sm="6" class="mt-5 mt-sm-0 d-flex">
                  <v-btn
                    color="#5a55a1"
                    large
                    class="white--text rounded-lg ml-auto"
                    :block="isMobile"
                    >결과 확인하기</v-btn
                  >
                </v-col>
              </v-row>
              <v-divider class="mx-10 mb-10"></v-divider>
              <div class="px-10 text-dark-purple h6">
                <span class="font-weight-black">나에게 맞춘 날짜와 시간</span>에
                언제든지 진행 가능합니다.
              </div>
              <v-row class="px-10 my-10 d-flex justify-center">
                <div class="mx-2">
                  <v-img
                    class="mx-auto"
                    src="../assets/icon1.png"
                    width="70"
                  ></v-img>
                  <div class="mt-3 caption-text">신청서 작성</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2"
                    >fas fa-angle-right</v-icon
                  >
                </div>
                <div class="mx-2">
                  <v-img
                    class="mx-auto"
                    src="../assets/icon2.png"
                    width="70"
                  ></v-img>
                  <div class="mt-3 caption-text">예약 완료</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2"
                    >fas fa-angle-right</v-icon
                  >
                </div>
                <div class="mx-2">
                  <v-img
                    class="mx-auto"
                    src="../assets/icon3.png"
                    width="70"
                  ></v-img>
                  <div class="mt-3 caption-text">
                    문자메시지 발송
                    <br />(예약 확인, 테스트 안내 )
                  </div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2"
                    >fas fa-angle-right</v-icon
                  >
                </div>
                <div class="mx-2">
                  <v-img
                    class="mx-auto"
                    src="../assets/icon4.png"
                    width="70"
                  ></v-img>
                  <div class="mt-3 caption-text">
                    강사님과 1:1수업
                    <br />(간단 자기소개 등)
                  </div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2"
                    >fas fa-angle-right</v-icon
                  >
                </div>
                <div class="mx-2">
                  <v-img
                    class="mx-auto"
                    src="../assets/icon5.png"
                    width="70"
                  ></v-img>
                  <div class="mt-3 caption-text">테스트 결과 받기</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2"
                    >fas fa-angle-right</v-icon
                  >
                </div>
                <div class="mx-2">
                  <v-img
                    class="mx-auto"
                    src="../assets/icon6.png"
                    width="70"
                  ></v-img>
                  <div class="mt-3 caption-text">개별 맞춤 상담</div>
                </div>
              </v-row>

              <div class="px-5 px-md-10 h6 font-weight-black text-left mb-5">
                학생 정보
              </div>

              <v-row class="align-center mx-4 mx-sm-10 mx-4 mb-10">
                <v-col cols="12" sm="6" class="pb-0 pb-sm-3">
                  <v-text-field
                    color="primary"
                    label="이름"
                    dense
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="pt-0 pt-sm-3">
                  <v-text-field
                    color="primary"
                    label="연락처"
                    dense
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>

              <div class="mx-10 mb-5 font-weight-black h6 text-left">
                수업 진행속도
              </div>
              <v-row justify="center" class="mx-sm-10 mx-4 mb-10">
                <v-col
                  cols="12"
                  sm="4"
                  v-for="(speed, i) in class_speeds"
                  :key="i"
                >
                  <v-btn
                    @click="selectedSpeed = i"
                    :color="selectedSpeed == i ? 'primary' : 'grey'"
                    :outlined="selectedSpeed == i ? false : true"
                    block
                    class="rounded-xl"
                    >{{ speed }}</v-btn
                  >
                </v-col>
              </v-row>

              <div class="mx-10 mb-5 font-weight-black h6 text-left">
                예약 일시
              </div>

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
                        >{{ day }}</v-btn
                      >
                    </v-row>
                  </v-container>
                </v-col>
              </v-row>

              <v-row class="mx-auto mb-5" v-if="daySelected == 0">
                <v-card
                  flat
                  max-height="230"
                  style="overflowY: scroll"
                  width="100%"
                >
                  <v-container class="px-0 py-0">
                    <v-row
                      no-gutters
                      v-for="(hour, i) in 24 - dateTime.getHours()"
                      :key="i"
                    >
                      <v-col
                        class="py-2"
                        cols="2"
                        v-for="(minute, j) in 6"
                        :key="j"
                      >
                        <span
                          class="regular"
                          style="cursor:pointer"
                          :class="{
                            'blue--text text--darken-3 font-weight-black':
                              dateTime.getHours() + i + ':' + j + '0' ==
                              selectedTime
                          }"
                        >
                          <strike
                            v-if="
                              dateTime.getMinutes() > Number(j + '0') &&
                                dateTime.getHours() + i == dateTime.getHours()
                            "
                            >{{ dateTime.getHours() + i }}:{{ j }}0</strike
                          >
                          <span @click="selectTime($event)" v-else
                            >{{ dateTime.getHours() + i }}:{{ j }}0</span
                          >
                        </span>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-row>

              <v-row class="mx-auto mb-5" v-else>
                <v-card
                  flat
                  max-height="230"
                  style="overflowY: scroll"
                  width="100%"
                >
                  <v-container class="px-0 py-0">
                    <v-row no-gutters v-for="(hour, i) in 18" :key="i">
                      <v-col
                        class="py-2"
                        cols="2"
                        v-for="(minute, j) in 6"
                        :key="j"
                      >
                        <span
                          @click="selectTime($event)"
                          class="regular"
                          style="cursor:pointer"
                          :class="{
                            'blue--text text--darken-3 font-weight-black':
                              hour + 5 + ':' + j + '0' == selectedTime
                          }"
                          >{{ hour + 5 }}:{{ j }}0</span
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-row>

              <v-row class="mx-sm-10 mx-4 mb-10">
                <v-col
                  cols="12"
                  sm="2"
                  class="d-flex align-center py-0 py-sm-3"
                >
                  <v-checkbox
                    color="primary"
                    class="mr-2"
                    label="전체동의"
                    v-model="allCheck"
                  ></v-checkbox>
                </v-col>
                <v-col
                  cols="12"
                  sm="5"
                  class="d-flex align-center py-0 py-sm-3"
                >
                  <v-btn
                    color="grey"
                    @click="$refs.ppDialog.open()"
                    class="rounded-pill mr-5"
                    small
                    depressed
                    >내용보기</v-btn
                  >
                  <v-checkbox
                    color="primary"
                    class="mr-2"
                    label="개인정보 수집 및 이용에 동의합니다."
                    v-model="ppCheck"
                  ></v-checkbox>
                </v-col>
                <v-col
                  cols="12"
                  sm="5"
                  class="d-flex align-center py-0 py-sm-3"
                >
                  <v-btn
                    color="grey"
                    @click="$refs.eaDialog.open()"
                    class="rounded-pill mr-5"
                    small
                    depressed
                    >내용보기</v-btn
                  >
                  <v-checkbox
                    color="primary"
                    class="mr-2"
                    label="상담 및 이벤트 안내 동의(선택)."
                    v-model="eaCheck"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn
                    style="background: linear-gradient(to right, #a0b4ff, #4285ec)"
                    class="rounded-pill white--text h5 nanum"
                    depressed
                    large
                    @click="confirmDialog = true"
                    >무료수업 신청하기</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-container>
      </v-card>
    </v-container>

    <v-dialog v-model="confirmDialog" max-width="500">
      <v-card max-width="500" class=" pb-5 rounded-xl">
        <div class="h4 text-center pa-3 mb-5" style="background-color:#85c9e8">
          요약
        </div>
        <div class="px-5">
          <div class="h5 gmarket" style="color:#85c9e8">과목 선택</div>
          <div class="px-3 mb-5 h6">
            <div>메가토킹 전화영어</div>
            <div>이름</div>
            <div>연락처</div>
          </div>
          <v-divider></v-divider>
          <div class="h5 gmarket mt-5" style="color:#85c9e8">
            수업 진행속도
          </div>
          <div class="px-3 mb-5 h6">보통 속도로 말해주세요.</div>
          <v-divider></v-divider>
          <div class="h5 gmarket mt-5" style="color:#85c9e8">예약 일시</div>
          <div class="px-3 h6 mb-10">
            <div>2020-11-06</div>
            <div>17:00</div>
          </div>
          <div class="d-flex">
            <v-btn class="mx-auto rounded-xl" depressed>
              <span class="pa-3  h6" @click="confirmDialog = false">취소</span>
            </v-btn>
            <v-btn
              color="#2572a8"
              class="mx-auto rounded-xl"
              depressed
              @click="applyLevelTest()"
            >
              <span class="pa-3 white--text h6 ">확인</span>
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>
    <EventAgreementDialog ref="eaDialog"></EventAgreementDialog>
    <PrivacyPolicyDialog ref="ppDialog"></PrivacyPolicyDialog>
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
import { mapState } from "vuex";
import EventAgreementDialog from "@/components/EventAgreementDialog";
import PrivacyPolicyDialog from "@/components/PrivacyPolicyDialog";
import axios from "axios";

export default {
  components: {
    EventAgreementDialog,
    PrivacyPolicyDialog
  },
  data() {
    return {
      dateTimes: [],
      days: [],
      daySelected: 0,
      confirmDialog: false,
      dateTime: new Date(),
      // listOfTimes: [],
      allCheck: false,
      ppCheck: false,
      eaCheck: false,
      checkbox1: false,
      tab: 0,
      selectedDate: "",
      selectedTime: "",
      selectedType: "phone",
      selectedSpeed: "",
      class_speeds: [
        "천천히 발음해주세요.",
        "보통 속도로 말해주세요.",
        "빨리 말하셔도 괜찮아요."
      ]
    };
  },
  computed: {
    ...mapState(["screenWidth", "isMobile"])
  },
  created() {},
  mounted() {
    //날짜 검색 기능
    for (var i = 0; i < 12; i++) {
      var nextDates = new Date();
      nextDates.setDate(nextDates.getDate() + i);
      if (
        nextDates.getDay() != 6 &&
        nextDates.getDay() != 0 &&
        this.days.length < 2
      ) {
        this.days.push(this.formatDate(nextDates));
      }
    }

    axios
      .get("//mega02.cafe24.com/origin/api/leveltest.php", {
        params: {
          action: "getTimes"
        }
      })
      .then(rs => {
        this.dateTimes = rs.data.dates;
      })
      .catch(err => {
        console.log(err.response);
      });
  },
  watch: {
    allCheck() {
      this.ppCheck = this.allCheck;
      this.eaCheck = this.allCheck;
    }
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
    applyLevelTest() {
      axios
        .get("//mega02.cafe24.com/origin/api/leveltest.php", {
          params: {
            action: "getTimes"
          }
        })
        .then(rs => {
          console.log(rs);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  }
};
</script>
