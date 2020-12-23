<template>
  <v-app style="background-color:#00000000">
    <v-container fluid class="py-0 px-0">
      <v-card tile color="#8bb6f700" flat class="text-center pa-1">
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
          <div class="my-1">
            메가토킹선생님이 편안하게<br v-if="isMobile" />친구처럼 도와드려요
          </div>
        </div>
        <v-container
          style="max-width:1000px;margin-top:90px"
          class="mx-auto px-0"
        >
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
                    @click="searchEvaluationDialog = true"
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
                    ref="name"
                    v-model="name"
                    :rules="[() => !!name || '필수 입력값입니다.']"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="pt-0 pt-sm-3">
                  <v-text-field
                    color="primary"
                    label="연락처"
                    dense
                    outlined
                    counter="13"
                    maxlength="13"
                    v-model="number"
                    ref="number"
                    :rules="[
                      () => !!number || '필수 입력값입니다.',
                      v => v.length <= 13 || '연락처는 13자리 입니다.'
                    ]"
                    required
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
                        :loading="day == '0' || day == '1'"
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
                      v-for="(time, i) in dateTimes[days[0]]"
                      :key="i"
                    >
                      <v-col
                        class="py-2"
                        cols="2"
                        v-for="(unit, j) in time"
                        :key="j"
                      >
                        <span
                          class="regular"
                          style="cursor:pointer"
                          :class="{
                            'blue--text text--darken-3 font-weight-black':
                              unit.time == selectedTime[0]
                          }"
                        >
                          <strike v-if="!unit.status">
                            {{ unit.time }}
                          </strike>
                          <span @click="selectTime($event, 0)" v-else>
                            {{ unit.time }}
                          </span>
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
                    <v-row
                      no-gutters
                      v-for="(time, i) in dateTimes[days[1]]"
                      :key="i"
                    >
                      <v-col
                        class="py-2"
                        cols="2"
                        v-for="(unit, j) in time"
                        :key="j"
                      >
                        <span
                          class="regular"
                          style="cursor:pointer"
                          :class="{
                            'blue--text text--darken-3 font-weight-black':
                              unit.time == selectedTime[1]
                          }"
                        >
                          <strike v-if="!unit.status">
                            {{ unit.time }}
                          </strike>
                          <span @click="selectTime($event, 1)" v-else>
                            {{ unit.time }}
                          </span>
                        </span>
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
                    ref="ppCheck"
                    :rules="[v => !!v || '필수 입력값입니다.']"
                    required
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
                    @click="submit()"
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
            <div>이름: {{ this.name }}</div>
            <div>연락처: {{ this.number }}</div>
          </div>
          <v-divider></v-divider>
          <div class="h5 gmarket mt-5" style="color:#85c9e8">
            수업 진행속도
          </div>
          <div class="px-3 mb-5 h6">
            {{ this.class_speeds[this.selectedSpeed] }}
          </div>
          <v-divider></v-divider>
          <div class="h5 gmarket mt-5" style="color:#85c9e8">예약 일시</div>
          <div class="px-3 h6 mb-10">
            <div>{{ this.days[this.daySelected] }}</div>
            <div>
              {{
                this.selectedTime[this.daySelected].length > 0
                  ? this.selectedTime[this.daySelected]
                  : "시간을 선택해 주세요."
              }}
            </div>
          </div>
          <div class="d-flex">
            <v-btn class="mx-auto rounded-xl" depressed>
              <span class="pa-3  h6" @click="confirmDialog = false">취소</span>
            </v-btn>
            <v-btn
              color="#2572a8"
              class="mx-auto rounded-xl"
              depressed
              @click="confirm()"
            >
              <span class="pa-3 white--text h6 ">확인</span>
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="searchEvaluationDialog"
      max-width="750"
      style="border-radius: 25px 25px 25px 25px !important;overflow-x:hidden"
      height="700"
      class="border-xl"
    >
      <v-card flat class="tile">
        <v-card flat color="#A9A7F3" class="tile">
          <v-container class="py-0">
            <v-row>
              <v-col cols="6" class="white--text">
                <span class="ml-5 h5 nanum">Evaluation Search</span>
              </v-col>
              <v-col cols="6" class="d-flex justify-end">
                <v-icon
                  color="white"
                  large
                  @click="searchEvaluationDialog = false"
                  >close</v-icon
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-card>
          <v-container>
            <v-text-field
              color="primary"
              v-model="searchNumber"
              label="Phone number"
              dense
              outlined
              maxlength="13"
              onkeypress="return event.key === 'Enter'
              || Number(event.key) >= 0
              && Number(event.key) <= 9"
            ></v-text-field>

            <p v-if="evaluationErr.length">{{ evaluationErr }}</p>
            <v-row class="align-center justify-end  fill-height">
              <v-btn
                class="ma-2"
                @click="searchEvaluation()"
                style="color:#5C5C5C"
                >Submit</v-btn
              >
              <v-btn
                class="ma-2"
                @click="searchEvaluationDialog = false"
                style="color:#5C5C5C"
                >Close</v-btn
              >
            </v-row>
          </v-container>
        </v-card>
      </v-card>
    </v-dialog>

    <LevelTestEvaluation
      ref="evDialog"
      :classEvaluation="classEvaluation"
    ></LevelTestEvaluation>
    <EventAgreementDialog ref="eaDialog"></EventAgreementDialog>
    <PrivacyPolicyDialog ref="ppDialog"></PrivacyPolicyDialog>
    <div class="">
      <v-snackbar color="success" outlined v-model="snackbar">
        "필수 입력값"을 확인해주세요.
        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>

      <v-snackbar color="success" outlined v-model="successSnackbar">
        레벨테스트 신청에 성공하셨습니다.
        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>

      <v-snackbar color="red" outlined v-model="errorSnackbar">
        레벨테스트 신청에 실패하였습니다. 잠시 후 다시 이용해주세요.
        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
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
import LevelTestEvaluation from "@/components/LevelTestEvaluation";
import axios from "axios";

export default {
  components: {
    EventAgreementDialog,
    PrivacyPolicyDialog,
    LevelTestEvaluation
  },
  data() {
    return {
      showEvaluationDialog: false,
      searchEvaluationDialog: false,
      snackbar: false,
      successSnackbar: false,
      errorSnackbar: false,
      name: "",
      number: "",
      searchNumber: "",
      mail: "",
      dateTimes: [],
      days: [0, 1],
      daySelected: 0,
      confirmDialog: false,
      allCheck: false,
      ppCheck: false,
      eaCheck: false,
      selectedDate: "",
      selectedTime: [[], []],
      selectedType: "phone",
      selectedSpeed: 0,
      class_speeds: [
        "천천히 발음해주세요.",
        "보통 속도로 말해주세요.",
        "빨리 말하셔도 괜찮아요."
      ],
      classEvaluation: [],
      evaluationErr: {}
    };
  },
  computed: {
    ...mapState(["screenWidth", "isMobile", "loginToken"]),
    form() {
      return {
        name: this.name,
        number: this.number,
        speed: this.selectedSpeed,
        date: this.days[this.daySelected],
        time: this.selectedTime[this.daySelected],
        ppCheck: this.ppCheck,
        eaCheck: this.eaCheck
      };
    }
  },
  created() {
    let headers = {
      Authorization: this.loginToken
    };
    //날짜 검색 기능
    axios
      .get("//phone.megatalking.com/origin/api/leveltest.php", {
        params: {
          action: "getTimes"
        },
        headers
      })
      .then(rs => {
        this.dateTimes = rs.data.dates;
        this.days = Object.keys(this.dateTimes);
        //회원이라면 이름초기화
        if (rs.data.member) {
          let member = rs.data.member;
          this.name = member.name;
          this.mail = member.mail;
          this.number = `${member.aHp}-${member.bHp}-${member.cHp}`;
        }
      })
      .catch(err => {
        console.log("error", err);
      });
  },
  mounted() {},
  watch: {
    allCheck() {
      this.ppCheck = this.allCheck;
      this.eaCheck = this.allCheck;
    },
    number(val) {
      this.number = val
        .replace(/[^0-9]/g, "")
        .replace(
          /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
          "$1-$2-$3"
        )
        .replace("--", "-");
    },
    searchNumber(val) {
      this.searchNumber = val
        .replace(/[^0-9]/g, "")
        .replace(
          /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
          "$1-$2-$3"
        )
        .replace("--", "-");
    }
  },
  methods: {
    selectTime(event, index) {
      this.selectedTime = [[], []];
      this.selectedTime[index] = event.target.innerText;
    },
    resetForm() {},
    submit() {
      let noValidate = ["speed", "date", "time", "eaCheck"];
      Object.keys(this.form).forEach(f => {
        if ("time" == f && this.form[f].length == 0) this.snackbar = true;

        if (noValidate.indexOf(f) !== -1) return;
        if (!this.form[f]) this.snackbar = true;
        if (!this.$refs[f].validate(true)) this.snackbar = true;
      });
      if (!this.snackbar) {
        this.confirmDialog = true;
      }
    },
    confirm() {
      const config = {
        headers: { Authorization: this.loginToken }
      };
      axios
        .post(
          "//phone.megatalking.com/origin/api/leveltest.php",
          this.form,
          config
        )
        .then(rs => {
          console.log(rs);
          if (rs.data.result) {
            //code
            this.confirmDialog = false;
            this.successSnackbar = true;
          } else {
            //code
            this.confirmDialog = false;
            this.errorSnackbar = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    searchEvaluation() {
      this.evaluationErr = {};
      this.classEvaluation = [];
      //확인해봐야할것
      if (this.searchNumber) {
        axios
          .get("//phone.megatalking.com/origin/api/leveltest.php", {
            params: {
              action: "getEval",
              searchNumber: this.searchNumber
            }
          })
          .then(res => {
            if (res.data) {
              const evaluation = res.data;
              this.$set(this.$data, "classEvaluation", evaluation);
              if (this.classEvaluation) {
                this.searchEvaluationDialog = false;
                this.showEvaluationDialog = true;
                this.$refs.evDialog.open();
              }
            } else {
              this.evaluationErr =
                "평가서를 찾을 수 없습니다. 전화번호를 다시 입력해주세요.";
            }
          })
          .catch(err => {
            this.evaluationErr =
              "평가서를 가져올수 없습니다. 관리자에게 문의하세요.";
            console.log(err);
          });
      }
    }
  }
};
</script>
