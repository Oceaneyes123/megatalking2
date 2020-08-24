<template>
  <v-app style="background-color: #00000000">
    <v-container fluid class="py-0 px-0">
      <v-card tile color="#faae7d00" flat class="text-center pa-3">
        <div class="h3 font-weight-bold white--text mb-5" style="margin-top:200px">마이 페이지</div>
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

            <v-container fluid class="px-0">
              <v-carousel hide-delimiters touch light :show-arrows="!isMobile">
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
              </v-carousel>
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
            <v-container class="px-10">
              <v-row class="mt-5 mx-1 mb-10">
                <v-col cols="12" md="6">
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
      ],

      step3EnglishText: [
        "First thing always first thing always have a book.because if you're not reading, what are you doing?",
        "I always have a pair of sunglasses. I just hate having stuff that you don't need.",
        "I really try to just keep it to the things that I use every single day.",
        "A model or actress,  I would say should always have something to keep them entertained in their bag",
        "because we wait around a lot and there's only so many times we can scroll through Instagram and Twitter and all that."
      ],

      step3KoreanText: [
        "가장 먼저 책이 꼭 있어야죠.왜냐하면 당신이 무엇을 읽고 있지 않다면 뭘 하겠어요?",
        "선글라스는 꼭 가지고다녀요. 난 그냥 필요 없는 것들을 갖고 다니는 것을 싫어해요.",
        "저는 정말 매일 사용하는 것에만 신경을 씁니다.",
        "모델이나 여배우라면, 항상 가방에 즐겁게 해줄 무언가가 있어야한다고 말하고 싶습니다.",
        "왜냐하면 우리는 많은 시간을 기다리기 때문입니다. 인스타그램과 트위터를 보는데도 한계가 있기 때문이죠."
      ],

      step3TodayExpressionWeb: [
        {
          expression: "A pair of (한 쌍)",
          definition:
            "a pair of는 똑같은 두개, 한쌍을 의미해요.<br> 신발 한쌍, 양말 한켤레, 장갑 한켤레 등을 나타낼 때 사용해요.<br><br>다음 단어를 사용해서 문장을 만들어 보세요",
          question1: "그는 낡은 청바지에 운동화를 신고 있었다.",
          question2: " 그것은 가위를 잡는 바른[제대로 된] 방식이 아니다",
          question3:
            "“A pair of”를 활용하여 문장을 만들어 보세요<br>____________________________",
          choice1: "wear / old jeans / sneakers. ",
          answer1: "He wore old jeans and a pair of sneakers.",
          choice2: "right way / hold / scissors",
          answer2: "That’s not the right way to hold a pair of scissors."
        },
        {
          expression: "Try to ( ~하려고 노력하다)",
          definition:
            "Try to 는 ~ 하려고 노력하다, ~하려고 시도하다를 의미해요.<br>행위의 어려움을 강조하고 결과에 상관없이 노력한다는 뜻입니다. <br>상황의 어려움을 강조하기 때문에 실패나 어려움의 결과가 나타납니다.",
          question1: "침착성을 잃지 않도록 해 봐.",
          question2: "있었던 일은 잊어버리도록 해.",
          question3:
            "“Try to”를 활용하여 문장을 만들어 보세요.<br>____________________________",
          choice1: " remain/ calm",
          answer1: "Try to remain calm",
          choice2: "forget / happen",
          answer2: "Try to forget about "
        },
        {
          expression: " I would say~ ( 내 생각엔.. , ~ 인 것 같아.)",
          definition:
            "I would say = I’d say 는 확실하지 않을때 자신의 의견을 말하는 경우 사용하는 표현이예요. 내생각엔… 이라는 뜻으로 해석할 수 있어요. 확실하지 않은 생각이나 의견 표현에 쓰입니다. ",
          question1: "그거 좋은 아이디어라고 할 수 있겠네.",
          question2: "내가 널 그리워한다고 할 수 있겠어.",
          question3:
            "“I would say”를 활용하여 문장을 만들어 보세요.<br>____________________________",
          choice1: "(내 생각엔 그거 좋은 아이디어인 것 같아.)",
          answer1: "I would say it's a good idea.",
          choice2: "(내 생각엔 내가 널 그리워하는 것 같아)",
          answer2: "I would say I miss you"
        }
      ],

      step3TodayExpression: [
        {
          expression: "A pair of (한 쌍)",
          definition:
            "a pair of는 똑같은 두개, 한쌍을 의미해요.<br> 신발 한쌍, 양말 한켤레, 장갑 한켤레 등을 나타낼 때 사용해요.<br><br>다음 단어를 사용해서 문장을 만들어 보세요",
          question1:
            "그는 낡은 청바지에 운동화를 신고 있었다.  <br>  wear / old jeans / sneakers.<br>[ ___________________________ ]",
          question2:
            " 그것은 가위를 잡는 바른[제대로 된] 방식이 아니다.<br>right way / hold / scissors<br>[ ___________________________ ]",
          question3:
            "“A pair of”를 활용하여 문장을 만들어 보세요<br>____________________________"
        },
        {
          expression: "Try to ( ~하려고 노력하다)",
          definition:
            "Try to 는 ~ 하려고 노력하다, ~하려고 시도하다를 의미해요.<br>행위의 어려움을 강조하고 결과에 상관없이 노력한다는 뜻입니다. <br>상황의 어려움을 강조하기 때문에 실패나 어려움의 결과가 나타납니다.",
          question1:
            "침착성을 잃지 않도록 해 봐.<br>remain/ calm<br>[ ___________________________ ]",
          question2:
            "있었던 일은 잊어버리도록 해.<br>forget / happen<br>[ ___________________________ ]",
          question3:
            "“Try to”를 활용하여 문장을 만들어 보세요.<br>___________________________ "
        },
        {
          expression: " I would say~ ( 내 생각엔.. , ~ 인 것 같아.)",
          definition:
            "I would say = I’d say 는 확실하지 않을때 자신의 의견을 말하는 경우 사용하는 표현이예요. 내생각엔… 이라는 뜻으로 해석할 수 있어요. 확실하지 않은 생각이나 의견 표현에 쓰입니다. ",
          question1:
            "그거 좋은 아이디어라고 할 수 있겠네.<br>(내 생각엔 그거 좋은 아이디어인것 같아.)<br>Good / Idea<br>[ ___________________________ ]",
          question2:
            "내가 널 그리워한다고 할 수 있겠어.<br>(내 생각엔 내가 널 그리워하는 것 같아)<br>Miss / you<br>[  ___________________________ ]",
          question3:
            "“I would say”를 활용하여 문장을 만들어 보세요.<br>____________________________"
        }
      ],

      step3TodayExpressionAnswer: [
        {
          question: "그는 낡은 청바지에 운동화를 신고 있었다. ",
          choice: "wear / old jeans / sneakers. ",
          answer: "He wore old jeans and a pair of sneakers."
        },
        {
          question: "그것은 가위를 잡는 바른[제대로 된] 방식이 아니다.",
          choice: "right way / hold / scissors",
          answer: "That’s not the right way to hold a pair of scissors."
        },
        {
          question: "침착성을 잃지 않도록 해 봐.",
          choice: " remain/ calm",
          answer: "Try to remain calm"
        },
        {
          question: "있었던 일은 잊어버리도록 해.",
          choice: "forget / happen",
          answer: "Try to forget about "
        },
        {
          question: "그거 좋은 아이디어라고 할 수 있겠네",
          choice: "(내 생각엔 그거 좋은 아이디어인 것 같아.)",
          answer: "I would say it's a good idea."
        },
        {
          question: "내가 널 그리워한다고 할 수 있겠어.",
          choice: "(내 생각엔 내가 널 그리워하는 것 같아)",
          answer: "I would say I miss you"
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
    }
  }
};
</script>
