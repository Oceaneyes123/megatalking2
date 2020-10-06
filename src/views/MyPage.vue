<template>
  <v-app style="background-color: #00000000">
    <v-container fluid class="py-0 px-0">
      <v-card tile color="#faae7d00" flat class="text-center pa-3">
        <div
          class="h3 font-weight-bold white--text mb-5 gmarket"
          style="margin-top:200px"
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
          style="margin-top:90px"
          max-width="1000px"
        >
          <v-container class="px-md-10 pt-10 text-left">
            <v-row>
              <v-col cols="5" md="3">
                <v-select
                  v-model="select"
                  :items="selectItems"
                  outlined
                  dense
                ></v-select>
              </v-col>
            </v-row>
            <div class="text-center font-weight-black h4">{{ month }}</div>
            <v-divider style="background-color:#5a55a1"></v-divider>
            <v-row>
              <v-col cols="1" class="d-flex align-center justify-center">
                <v-icon @click="$refs.calendar.prev()" x-large
                  >fas fa-angle-left</v-icon
                >
              </v-col>
              <v-col cols="10">
                <v-sheet>
                  <v-calendar
                    class="calendar"
                    ref="calendar"
                    :now="today"
                    color="#faae7d"
                    type="week"
                  ></v-calendar>
                </v-sheet>
              </v-col>
              <v-col cols="1" class="d-flex align-center justify-center">
                <v-icon @click="$refs.calendar.next()" x-large
                  >fas fa-angle-right</v-icon
                >
              </v-col>
            </v-row>

            <v-row class="my-10">
              <v-col cols="12">
                <v-sheet>
                  <v-slide-group :show-arrows="!isMobile">
                    <v-slide-item class="mx-3">
                      <v-card
                        style="border: 3px solid #df7a30"
                        width="300"
                        class="rounded-xl py-3 px-5"
                      >
                        <div class="caption mb-3" style="color:#df7a30">
                          [주2회 화,목] 프리토킹
                        </div>
                        <div class="h6 nanum" style="color:#df7a30">
                          10%
                          <span class="subtitle-text-1">수강 중</span>
                        </div>
                        <div class="caption grey--text">
                          수강종료일: 2020.09.30
                        </div>
                        <v-card
                          color="#df7a30"
                          class="d-flex white--text rounded-xl mt-3 px-5 py-2"
                        >
                          <div>수업 홀드</div>
                          <div class="mx-auto">|</div>
                          <div>수강신청 연장</div>
                        </v-card>
                      </v-card>
                    </v-slide-item>
                    <v-slide-item class="mx-3">
                      <v-card
                        style="border: 3px solid #5e75cf"
                        width="300"
                        class="rounded-xl py-3 px-5"
                      >
                        <div class="caption mb-3" style="color:#5e75cf">
                          [주2회 화,목] 비즈니스 과정
                        </div>
                        <div class="h6 nanum" style="color:#5e75cf">
                          40%
                          <span class="subtitle-text-1">수강 중</span>
                        </div>
                        <div class="caption grey--text">
                          수강종료일: 2020.09.30
                        </div>
                        <v-card
                          color="#5e75cf"
                          class="d-flex white--text rounded-xl mt-3 px-5 py-2"
                        >
                          <div>수업 홀드</div>
                          <div class="mx-auto">|</div>
                          <div>수강신청 연장</div>
                        </v-card>
                      </v-card>
                    </v-slide-item>
                    <v-slide-item class="mx-3">
                      <v-card
                        style="border: 3px solid #bbbbbb"
                        width="300"
                        class="rounded-xl py-3 px-5"
                      >
                        <div class="caption" style="color:#5e75cf">
                          보강 쿠폰현황
                        </div>
                        <div class="h6 nanum">강의1, 강의26</div>
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
                          class="d-flex white--text rounded-xl mt-3 px-5 py-2"
                          >보강 시간 설정</v-card
                        >
                      </v-card>
                    </v-slide-item>
                  </v-slide-group>
                </v-sheet>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col cols="12" md="6">
                <div class="h5 gmarket">수강 종류</div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="h6 font-weight-black">
                  20.07.15 6:40+ 10 Annie / 프리토킹 묻고 답하기
                </div></v-col
              >
            </v-row>

            <v-container fluid class="px-0">
              <!-- Book -->
              <v-img
                @click="$router.push('/material')"
                class="rounded-xl"
                src="../assets/curriculum/sp_1.jpg"
                width="100%"
                height="auto"
                v-if="isBook"
              >
                <v-card height="100%" color="#000000AD">
                  <v-container>
                    <div
                      class="font-weight-black text-left mx-3 white--text gmarket"
                      :class="isMobile ? 'h4' : 'h2'"
                    >
                      Speaking Pattern 100 Course
                    </div>
                    <div
                      :class="isMobile ? '' : 'h4'"
                      class="font-weight-black text-right white--text gmarket"
                      style="position:absolute;bottom:20px;right:20px"
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
                <v-img src="../assets/tab/video4.jpg"></v-img>
                <div :class="isMobile ? 'h5 nanum' : 'h3'" class="text-center">
                  유튜브 미디어과정:: 셀럽과의 대화
                </div>
                <v-divider></v-divider>
                <div
                  :class="isMobile ? 'h5 nanum' : 'h3'"
                  class="text-center"
                  style="color:#5e75cf;line-break:strict;word-break:keep-all"
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
                    class=" white--text rounded-pill mt-5 pa-7"
                    style="background:linear-gradient(to right, #ff9351, #f96a70)"
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
            <v-container fluid>
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
                    <div class="text-center mt-2">
                      불편사항 신고
                    </div>
                  </v-card>
                </v-col>

                <v-col cols="6" md="4" class="pr-0">
                  <v-card class="pa-3 white--text" color="grey">
                    <div class="mb-2">
                      <v-icon color="white">thumb_up_alt</v-icon>
                    </div>
                    <div class="mb-2">
                      오늘 수업은 어땠나요?
                    </div>
                    <div>
                      <v-rating
                        :small="isMobile"
                        value="4"
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
export default {
  data() {
    return {
      selectItems: ["수업 회차순"],
      select: "수업 회차순",
      today: "",
      date: new Date(),
      month: "",
      screenWidth: "",
      isMobile: false,

      isBook: false,
      isVideo: false,
      isPDF: true,

      selectedSuggestion: [],

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

  created() {
    window.addEventListener("resize", this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },

  mounted() {
    this.screenWidth = screen.width;
    this.isMobile = this.screenWidth <= 960 ? true : false;

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
    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
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
