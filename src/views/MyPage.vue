<template>
  <v-app style="background-color: #00000000">
    <v-container fluid class="py-0 px-0">
      <v-card tile color="#faae7d00" flat class="text-center pa-1">
        <div
          class="h3 font-weight-bold white--text mb-5 gmarket"
          style="margin-top: 200px"
        >
          마이 페이지
        </div>
        <div class="h6 nanum white--text">
          <div class="my-1">재미있는 영어수다! 친구처럼 편한 영어!</div>
          <div class="my-2">매일 매일 영어습관, 메가토킹.</div>
        </div>
        <v-card
          class="rounded-xl mx-auto"
          elevation="7"
          width="100%"
          style="margin-top: 90px"
          max-width="1000px"
        >
          <v-container class="px-md-10 pt-4 pt-md-10 text-left">
            <v-row>
              <v-col>
                <div class="ml-3 mb-3 h5">
                  나의 스케줄
                </div>
                <v-card class="rounded-xl fadeInUp" elevation="1">
                  <v-date-picker
                    v-model="date2"
                    color="#859ec9"
                    width="100%"
                    data-aos="zoom-in"
                    :events="functionEvents"
                    locale="ko"
                    :picker-date.sync="pickerDate"
                    @click:date="pickDate"
                  ></v-date-picker>
                </v-card>
              </v-col>
            </v-row>
            <!--`-->
            <v-row class="my-10">
              <v-col cols="12">
                <v-sheet>
                  <v-slide-group
                    :show-arrows="!isMobile"
                    v-if="hasClassPickDay"
                  >
                    <v-slide-item
                      class="mx-3"
                      v-for="(classes, index) in pickDateClasses"
                      :key="index"
                    >
                      <v-card
                        :style="
                          `border: 3px solid ${getClassColor(classes)}; ${
                            classes.no_class ? 'background:#f6e5e5' : ''
                          }`
                        "
                        width="300"
                        class="rounded-xl py-3 px-5"
                      >
                        <div
                          class="caption mb-3"
                          :style="`color: ${getClassColor(classes)}`"
                        >
                          {{ getClassDate() }} {{ getTitle(classes) }} <br />
                          {{ getBookName(classes) }}
                        </div>
                        <div
                          class="h6 nanum"
                          :style="`color: ${getClassColor(classes)}`"
                        >
                          {{ getTimes(classes) }}
                          <span class="subtitle-text-1">
                            {{ getStatus(classes) }}</span
                          >
                        </div>
                        <div class="caption grey--text">
                          {{ getEndDay(classes) }}
                        </div>
                        <v-card
                          :color="getClassColor(classes)"
                          class="rounded-xl mt-3 px-5 py-2"
                          :elevation="classes.no_class == 1 ? '0' : '2'"
                        >
                          <div
                            class="d-flex mx-4 white--text my-0 py-0"
                            v-if="!classes.no_class"
                          >
                            <div>
                              <v-btn
                                text
                                class="white--text pa-0 my-0"
                                style="font-size:16px"
                                small
                                block
                                @click="openHoldDialog(classes)"
                              >
                                수업 홀드
                              </v-btn>
                            </div>
                            <div class="mx-auto">|</div>
                            <div>
                              <v-btn
                                class="white--text pa-0 my-0"
                                style="font-size:16px"
                                text
                                small
                                block
                                @click="selectClass(classes)"
                              >
                                수강 보기
                              </v-btn>
                            </div>
                          </div>
                          <div class="d-flex justify-center white--text" v-else>
                            <div>수업 홀드 완료</div>
                          </div>
                        </v-card>
                      </v-card>
                    </v-slide-item>
                    <!--
                    <v-slide-item class="mx-3">
                      <v-card
                        style="border: 3px solid #bbbbbb"
                        width="300"
                        class="rounded-xl py-3 px-5"
                      >
                        <div class="caption" style="color: #5e75cf">
                          보강 쿠폰현황
                        </div>
                        <div class="h6 nanum">보강 설정하기</div>
                        <div class="d-flex">
                          <v-icon
                            color="bbbbbb"
                            class="text-center mx-auto"
                            x-large
                            >add</v-icon
                          >
                        </div>
                        <v-card
                          color="#bbbbbb"
                          class="d-flex white--text rounded-xl mt-3 px-5 py-0 justify-center"
                          >
                          <v-btn text class="white--text"  style="font-size:16px" block>
                            보강 시간 설정
                          </v-btn>
                        </v-card>
                      </v-card>
                    </v-slide-item>
                    -->
                  </v-slide-group>
                  <v-slide-group v-else>
                    <v-slide-item class="mx-3">
                      <v-card
                        style="border: 3px solid #bbbbbb"
                        width="300"
                        class="rounded-xl py-3 px-5"
                      >
                        <div class="caption" style="color: #5e75cf">
                          {{
                            date2.split("-")[1] +
                              "월" +
                              date2.split("-")[2] +
                              "일"
                          }}
                        </div>
                        <div class="h6 nanum">수업이 없습니다.</div>
                        <div class="d-flex">
                          <v-icon
                            color="bbbbbb"
                            class="text-center mx-auto"
                            x-large
                            >close</v-icon
                          >
                        </div>
                        <v-card
                          color="#bbbbbb"
                          class="d-flex white--text rounded-xl mt-3 px-5 py-0 justify-center"
                        >
                          <v-btn
                            text
                            class="white--text"
                            style="font-size:16px"
                            block
                          >
                            수강 신청 하기
                          </v-btn>
                        </v-card>
                      </v-card>
                    </v-slide-item>
                  </v-slide-group>
                </v-sheet>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col cols="12" md="5">
                <div class="h5 gmarket ml-3" data-aos="fade-right">
                  수강 종류
                </div>
              </v-col>
              <v-col cols="12" md="7">
                <v-card
                  color="#df7a30"
                  class="h6 font-weight-black white--text pa-3 text-center"
                  data-aos="fade-left"
                >
                  <div>{{ selectedClassInfo }}</div>
                </v-card>
              </v-col>
            </v-row>

            <v-container fluid class="px-0 pb-15 mb-15 mt-2">
              <!-- Book -->
              <v-img
                @click="$router.push('/material')"
                class="rounded-xl"
                data-aos="fade-up"
                :src="selectedClassImg"
                width="100%"
                height="auto"
                v-if="isBook"
              >
                <v-card height="100%" color="#000000AD">
                  <v-container>
                    <div
                      class="font-weight-black text-left ml-5 mt-5 white--text gmarket"
                      :class="isMobile ? 'h4' : 'h2'"
                    >
                      {{ selectedClassTitle }}
                    </div>
                    <div
                      :class="isMobile ? '' : 'h4'"
                      class="font-weight-black text-right white--text gmarket mr-5"
                      style="position: absolute; bottom: 20px; right: 20px;cursor:pointer"
                    >
                      Next >
                    </div>
                  </v-container>
                </v-card>
              </v-img>

              <!-- Video -->
              <v-card
                class="rounded-xl"
                style="border: 1px solid #5e75cf"
                v-if="isVideo"
                @click="$router.push('/material')"
                flat
              >
                <v-img src="@/assets/tab/video4.jpg"></v-img>
                <div :class="isMobile ? 'h5 nanum' : 'h3'" class="text-center">
                  유튜브 미디어과정:: 셀럽과의 대화
                </div>
                <v-divider></v-divider>
                <div
                  :class="isMobile ? 'h5 nanum' : 'h3'"
                  class="text-center"
                  style="
                    color: #5e75cf;
                    line-break: strict;
                    word-break: keep-all;
                  "
                >
                  오늘의 강의
                </div>
              </v-card>

              <v-card class="rounded-xl pa-5" color="#fafafa" v-if="isPDF" flat>
                <v-card color="#333333" class="pa-10 rounded-xl" flat>
                  <div class="text-center white--text">Image Here</div>
                </v-card>
                <div class="d-flex mx-auto justify-center">
                  <v-btn
                    class="white--text rounded-pill mt-5 pa-7"
                    style="
                      background: linear-gradient(to right, #ff9351, #f96a70);
                    "
                  >
                    <span class="h5 nanum">PDF 교재 다운로드</span>
                  </v-btn>
                </div>

                <div class="mt-5 grey--text caption">
                  * 다운로드 버튼을 통해 교재를 확인해주세요.
                </div>
              </v-card>

              <!-- <v-carousel hide-delimiters touch light :show-arrows="!isMobile">
                <v-carousel-item class="px-md-16 px-5">
                  <v-row>
                    <v-col cols="12" md="6">
                      <div class="text-blue mb-5">영어 본문</div>
                      <div
                        class="text-grey mb-2"
                        v-for="(text, i) in step3EnglishText"
                        :key="i"
                      >{{text}}</div>
                    </v-col>
                    <v-col cols="12" md="6">
                      <div class="text-blue mb-5">영어 본문</div>
                      <div
                        class="text-dark-blue mb-2"
                        v-for="(text, i) in step3KoreanText"
                        :key="i"
                      >{{text}}</div>
                    </v-col>
                  </v-row>
                </v-carousel-item>
                <v-carousel-item class="px-md-16 px-5">
                  <div class="h5 nanum">Today's Expression</div>
                  <v-row>
                    <v-col cols="12" v-for="(expression, i) in step3TodayExpression" :key="i">
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="6">
                            <div class="mb-2 text-blue">{{expression.expression}}</div>
                            <div class="text-grey" v-html="expression.definition"></div>
                          </v-col>
                          <v-col cols="12" md="6">
                            <div class="mb-2" v-html="expression.question1"></div>
                            <div class="mb-2" v-html="expression.question2"></div>
                            <div class="text-blue" v-html="expression.question3"></div>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-col>
                    <v-btn
                      style="background: linear-gradient(to right, #8FA1FE, #4993E8)"
                      class="mx-auto rounded-lg white--text mb-5"
                    >Next</v-btn>
                  </v-row>
                </v-carousel-item>
                <v-carousel-item class="px-md-16 px-5">
                  <div class="h5 nanum text-blue mb-10">Today's Expression</div>
                  <v-row>
                    <v-col
                      cols="12"
                      md="6"
                      v-for="(answer, i) in step3TodayExpressionAnswer"
                      :key="i"
                      :class="(i + 1) % 2 == 0 && isMobile ? 'mb-10' : 'mb-0'"
                    >
                      <div class="h6 nanum">{{answer.question}}</div>
                      <div class="mb-2">{{answer.choice}}</div>
                      <div class="text-grey">{{answer.answer}}</div>
                    </v-col>
                  </v-row>
                </v-carousel-item>
                <v-carousel-item class="px-md-16 px-5">
                  <v-container>
                    <v-row class="align-md-center">
                      <v-col cols="12">
                        <div class="text-center mb-2">Annie 강사님 수업은 어떠셨나요?</div>
                        <div class="text-center">
                          <v-rating
                            v-model="rating"
                            half-increments
                            color="yellow darken-2"
                            hover
                            x-large
                            background-color="yellow darken-2"
                            full-icon="fas fa-star"
                            empty-icon="far fa-star"
                            half-icon="fas fa-star-half-alt"
                          ></v-rating>
                        </div>
                      </v-col>
                      <v-col
                        class="mx-auto"
                        cols="12"
                        sm="7"
                        align-self="center"
                        v-for="(suggestion, i) in step4Suggestions"
                        :key="i"
                      >
                        <v-btn
                          large
                          outlined
                          block
                          @click="selectSuggestion(i)"
                          :class=" selectedSuggestion.includes(i) ? 'primary--text': 'text-grey'"
                        >{{suggestion}}</v-btn>
                      </v-col>
                      <v-col class="mx-auto" cols="12" sm="7">
                        <v-textarea outlined class="rounded-xl" height="20vh"></v-textarea>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-carousel-item>
                <v-carousel-item>
                  <v-container class="pl-md-16">
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-card
                          class="d-flex align-center rounded-pill pa-3 mb-4"
                          color="#dfdfdf"
                          max-width="300"
                          flat
                        >
                          <v-icon color="#5a55a1" x-large>far fa-play-circle</v-icon>
                          <v-progress-linear
                            v-model="progress"
                            value="60"
                            color="#5a55a1"
                            class="mx-5"
                          ></v-progress-linear>
                          <div class="text--secondary">0:40</div>
                        </v-card>
                        <v-card
                          flat
                          class="d-flex rounded-lg white--text py-3 px-2"
                          color="#5D6687"
                          max-width="300"
                        >
                          <span>녹음파일 전체듣기</span>
                          <span class="mx-auto">|</span>
                          <span>음원 다운로드</span>
                        </v-card>
                        <div class="mt-15 mb-5 h6">다음 발음을 연습해주세요.</div>
                        <div
                          class="mt-1"
                          v-for="(pronunciation, i) in step4PracticePronunciation"
                          :key="i"
                        >{{i + 1}}. {{pronunciation}}</div>
                      </v-col>
                      <v-col cols="12" md="6">
                        <div class="h6 mb-5">더 나은 표현을 알려드릴게요.</div>
                        <div class="mb-2" v-for="(expression, i) in step4BetterExpression" :key="i">
                          <div>{{i + 1}}. {{expression.original}}</div>
                          <div class="text-blue">=> {{expression.better}}</div>
                        </div>
                      </v-col>
                      <v-col cols="12">
                        <div class="h6">강사님 코멘트</div>
                        <v-col cols="12" md="10" class="mx-auto">
                          <v-textarea class="rounded-xl" outlined color="#667fe3"></v-textarea>
                        </v-col>
                      </v-col>
                      <v-col cols="12">
                        <div class="text-center mb-4">오늘 수업을 한마디로 표현한다면,</div>
                        <div class="d-flex justify-center">
                          <v-icon
                            class="mx-3"
                            v-for="(icon, i) in step4Icons"
                            :key="i"
                            x-large
                          >{{icon}}</v-icon>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-carousel-item>
              </v-carousel>-->

              <!-- <v-row>
                  <v-col cols="12" md="4">
                    <v-card flat class="rounded-xl">
                      <v-img src="../assets/mypage1.png" width="auto" height="auto"></v-img>
                    </v-card>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="12" md="8">
                    <v-card flat class="rounded-xl" color="#b9b9b9" width="100%" height="100%"></v-card>
                  </v-col>
              </v-row>-->
            </v-container>
            <v-container fluid v-if="false">
              <v-row class="mt-5 mx-1 mb-10" justify="center">
                <v-col cols="6" md="4" class="pl-0">
                  <v-card
                    class="pa-3 white--text"
                    color="#df7a30"
                    height="100%"
                  >
                    <div class="mb-2">
                      <v-icon color="white">report</v-icon>
                    </div>
                    <div class="mb-2">
                      교재 or 수업 중 불편사항이 있으셨나요?
                    </div>
                    <v-divider></v-divider>
                    <div class="text-center mt-2">불편사항 신고</div>
                  </v-card>
                </v-col>

                <v-col cols="6" md="4" class="pr-0">
                  <v-card class="pa-3 white--text" color="grey">
                    <div class="mb-2">
                      <v-icon color="white">thumb_up_alt</v-icon>
                    </div>
                    <div class="mb-2">오늘 수업은 어땠나요?</div>
                    <div>
                      <v-rating
                        :small="isMobile"
                        :value="4"
                        readonly
                        color="yellow"
                        half-increments
                        empty-icon="far fa-star"
                        full-icon="fas fa-star"
                        half-icon="fas fa-star-half-alt"
                        background-color="grey lighten-2"
                        :dense="isMobile"
                      ></v-rating>
                    </div>
                    <v-divider></v-divider>
                    <div class="text-center mt-2">강사평가 하기</div>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-container>
        </v-card>
      </v-card>
    </v-container>
    <HoldDialog ref="HoldDialog"></HoldDialog>
  </v-app>
</template>

<style>
.v-calendar-daily__pane {
  height: 0px !important;
}

.v-responsive__content {
  overflow-y: auto;
  overflow-x: hidden;
}

.v-calendar-daily__intervals-head {
  flex: none;
  position: relative;
  display: none;
}

.v-btn--fab.v-size--default {
  height: 36px;
  width: 36px;
}
</style>

<style scoped>
.text-grey {
  color: #a4a4a4;
}

.text-dark-blue {
  color: #5d6687;
}

.text-blue {
  color: #667fe3;
}

.text-black {
  color: black;
}
</style>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { mapState } from "vuex";
import moment from "moment";
import HoldDialog from "@/components/HoldDialog";

export default {
  components: {
    HoldDialog
  },
  data() {
    return {
      memberName: "",
      selectedClassImg: require("@/assets/curriculum/sp_1.jpg"),
      showClass: [],
      schedule: [],
      holdDatas: [],
      pickDateClasses: [],
      pickDay: "",
      selectItems: ["수업 회차순"],
      select: "수업 회차순",
      today: "",
      date: new Date(),
      year: "",
      month: "",
      nextSaturday: "",
      nextSunday: "",
      preveSaturday: "",
      prevSunday: "",
      date2: new Date().toISOString().substr(0, 10),
      arrayEvents: null,
      isBook: true,
      isVideo: false,
      isPDF: false,
      selectedSuggestion: [],
      pickerDate: null,
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
  computed: {
    ...mapState(["screenWidth", "isMobile"]),
    selectedClassInfo() {
      let deVal = `안녕하세요. ${this.memberName} 회원님:)`;
      if (this.showClass.length !== 0) {
        let hour, min, duration, cate_name;
        hour = this.showClass.s_hour;
        min = this.showClass.s_min * 10 - 10;
        min = min === 0 ? "0" + min : min;
        duration = this.showClass.times * 10;
        cate_name = this.showClass.cate_id === 1 ? "전화영어" : "화상영어";
        deVal = `${this.showClass.year}.${this.showClass.month}.${this.showClass.day} ${hour}:${min}+${duration} ${this.showClass.lec_name} (${cate_name})`;
      }
      return deVal;
    },
    selectedClassTitle() {
      let deVal = "수업을 선택해주세요.";
      if (this.showClass.length !== 0) deVal = this.showClass.book_name;
      return deVal;
    },
    hasClassPickDay() {
      return this.pickDateClasses.length === 0 ? false : true;
    }
    // selectedClassImg(){
    //   let deVal = "../assets/curriculum/sp_1.jpg";
    //   console.log(deVal)
    //   return deVal;
    // },
  },
  watch: {
    async pickerDate(val) {
      let [year, month] = val.split("-");
      this.getSchedule(year, month);
    }
  },
  created() {
    AOS.init();
  },
  destroyed() {},
  mounted() {
    this.today = this.formatDate(this.date);
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "access-token"
    );
  },
  methods: {
    openHoldDialog(classObj) {
      let date = this.date2;
      this.$refs.HoldDialog.open(date, classObj);
    },
    getBookName(obj) {
      return obj.book_name;
    },
    selectClass(classObj) {
      //let path = "@/assets/curriculum/";
      let books = [
        require("@/assets/curriculum/1st_step.jpg"),
        require("@/assets/curriculum/adv_phonics.jpg"),
        require("@/assets/curriculum/be_sd.jpg"),
        require("@/assets/curriculum/cabin_crew.jpg"),
        require("@/assets/curriculum/conv.jpg"),
        require("@/assets/curriculum/dd_1.jpg"),
        require("@/assets/curriculum/debate.jpg"),
        require("@/assets/curriculum/email.jpg"),
        require("@/assets/curriculum/hotel.jpg"),
        require("@/assets/curriculum/ielts.jpg"),
        require("@/assets/curriculum/interactive.jpg"),
        require("@/assets/curriculum/it_1.jpg"),
        require("@/assets/curriculum/medical_english.jpg"),
        require("@/assets/curriculum/meeting.jpg"),
        require("@/assets/curriculum/negotiation.jpg"),
        require("@/assets/curriculum/nye.jpg"),
        require("@/assets/curriculum/presentation.jpg")
      ];

      let [year, month, day] = this.date2.split("-");
      let randomItem = books[Math.floor(Math.random() * books.length)];
      classObj.year = year;
      classObj.month = month;
      classObj.day = day;
      this.$set(this.$data, "showClass", classObj);
      this.selectedClassImg = randomItem;
    },
    getClassColor(classObj) {
      let color = "";
      let jong = ["", "#df7a30", "#5e75cf"];
      if (classObj.no_class) {
        color = "grey";
      } else {
        color = jong[classObj.jong];
      }
      return color;
    },
    getClassDate() {
      let [, month, day] = this.date2.split("-");
      return `${month}월${day}일`;
    },
    getTitle(obj) {
      let countDaysOfWeek = 0;
      let daysOfweek = [];
      for (var i = 1; i <= 5; i++) {
        if (obj["ck" + i]) {
          countDaysOfWeek++;
          if (i == 1) daysOfweek.push("월");
          else if (i == 2) daysOfweek.push("화");
          else if (i == 3) daysOfweek.push("수");
          else if (i == 4) daysOfweek.push("목");
          else if (i == 5) daysOfweek.push("금");
        }
      }

      return `[주${countDaysOfWeek}회 ${daysOfweek}] ${obj.lec_name}`;
    },
    getStatus(obj) {
      let status = "";
      if (obj.no_class) {
        status = "수업 홀드";
      } else if (obj.state == "yes") {
        status = "수강중";
      } else if (obj.state == "no") {
        status = "수업 대기중";
      }
      return status;
    },
    getEndDay(obj) {
      return (
        "수강 종료일: " +
        moment(new Date(obj.end_day * 1000)).format("YYYY.MM.DD")
      );
    },
    getTimes(obj) {
      let duration = obj.times * 10;
      let min = obj.s_min * 10 - 10;
      min = min == 0 ? "0" + min : min;
      return `${obj.s_hour}:${min}+${duration}`;
    },
    pickDate(val) {
      let [, , day] = val.split("-");
      let pickDateClasses = [];
      this.pickDay = day;
      if (Object.keys(this.schedule).includes(day)) {
        pickDateClasses = this.schedule[day].class;
      }
      this.$set(this.$data, "pickDateClasses", pickDateClasses);
    },
    async getSchedule(year, month) {
      let config = {
        params: {
          action: "schedule",
          year,
          month
        }
      };

      await axios
        .get("//mega02.cafe24.com/origin/api/mypage.php", config)
        .then(rs => {
          console.log(rs);
          if (rs.data.result == true) {
            let schedule = rs.data.schedule;
            let holdDatas = {
              hold: rs.data.hold,
              cancel: rs.data.cancel
            };
            this.memberName = rs.data.memberInfo.data.name;
            this.$set(this.$data, "schedule", schedule);
            this.$set(this.$data, "holdDatas", holdDatas);
            if (this.pickDateClasses.length === 0) this.pickDate(this.today);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    functionEvents(date) {
      const [, , day] = date.split("-");
      let mark = [];
      let existClass = Object.keys({ ...this.schedule[day] }).includes("class");
      let existHoldA = Object.keys({ ...this.schedule[day] }).includes("holdA");
      let existHold = Object.keys({ ...this.schedule[day] }).includes("hold");
      let existCancel = Object.keys({ ...this.schedule[day] }).includes(
        "cancel"
      );
      let todayClass = true;
      if (existHoldA) {
        mark.push("red");
      } else if (existClass) {
        // this.schedule[day].class.forEach(item => {
        //   if (!item.no_class) todayClass = true;
        //   return true;
        // }); //end foreach
        if (todayClass) mark.push("blue");
      }
      if (existHold || existCancel) {
        //mark.push("blue");
      }
      // console.log(Object.keys( {...this.schedule[day]} ).includes('class'));
      return mark;
    },

    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      month = month.length == 1 ? "0" + month : month;

      if (day.length < 2) day = +day;

      return [year, month, day].join("-");
    },

    selectSuggestion(index) {
      if (this.selectedSuggestion.includes(index)) {
        const num = this.selectedSuggestion.indexOf(index);
        this.selectedSuggestion.splice(num, 1);
      } else {
        this.selectedSuggestion.push(index);
      }
    }
  }
};
</script>
