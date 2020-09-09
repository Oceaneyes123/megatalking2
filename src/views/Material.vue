<template>
  <v-app>
    <v-container fluid class="py-0 px-0">
      <v-card class="rounded-xl mx-auto" elevation="7" width="100%" max-width="700px">
        <v-container class="px-0 py-0">
          <v-tabs
            grow
            :show-arrows="false"
            height="50"
            center-active
            background-color="#667fe3"
            slider-color="#FFF"
            v-model="tabs"
          >
            <v-tab class="white--text" v-for="(step, i) in steps" :key="i">{{step}}</v-tab>
            <v-tab-item></v-tab-item>
            <v-tab-item></v-tab-item>
            <v-tab-item class="text-left">
              <v-card flat>
                <v-window v-model="window3">
                  <v-window-item>
                    <v-container class="px-5">
                      <v-row>
                        <v-col cols="12">
                          <div class="text-blue mb-5">영어 본문</div>
                          <div
                            class="text-grey mb-2 mx-5"
                            v-for="(text, i) in step3EnglishText"
                            :key="i"
                          >{{text}}</div>
                        </v-col>
                        <v-col cols="12">
                          <div class="text-blue mb-5">영어 본문</div>
                          <div
                            class="text-dark-blue mb-2 mx-5"
                            v-for="(text, i) in step3KoreanText"
                            :key="i"
                          >{{text}}</div>
                        </v-col>
                      </v-row>
                      <v-row justify="center">
                        <v-btn
                          @click="window3 = 1"
                          style="background: linear-gradient(to right, #8FA1FE, #4993E8)"
                          class="mx-auto rounded-lg white--text mb-5"
                        >Next</v-btn>
                      </v-row>
                    </v-container>
                  </v-window-item>
                  <v-window-item>
                    <v-container class="px-5">
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
                          @click="window3 = window3 + 1"
                          style="background: linear-gradient(to right, #8FA1FE, #4993E8)"
                          class="mx-auto rounded-lg white--text mb-5"
                        >Next</v-btn>
                      </v-row>
                    </v-container>
                  </v-window-item>
                  <v-window-item>
                    <v-container class="px-5">
                      <div class="h5 nanum text-blue mb-10">Today's Expression</div>
                      <v-row>
                        <v-col
                          cols="12"
                          v-for="(answer, i) in step3TodayExpressionAnswer"
                          :key="i"
                          :class="(i + 1) % 2 == 0 && isMobile ? 'mb-10' : 'mb-0'"
                        >
                          <div class="h6 nanum">{{answer.question}}</div>
                          <div class="mb-2">{{answer.choice}}</div>
                          <div class="text-grey">{{answer.answer}}</div>
                        </v-col>
                      </v-row>
                      <v-row justify="center">
                        <v-btn
                          @click="tabs = 3"
                          style="background: linear-gradient(to right, #8FA1FE, #4993E8)"
                          class="mx-auto rounded-lg white--text mb-5"
                        >Next</v-btn>
                      </v-row>
                    </v-container>
                  </v-window-item>
                </v-window>
              </v-card>
            </v-tab-item>
            <v-tab-item class="text-left">
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
            </v-tab-item>
            <v-tab-item></v-tab-item>
          </v-tabs>
        </v-container>
      </v-card>
    </v-container>
  </v-app>
</template>

<style  >
.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)
  > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes)
  .v-slide-group__prev {
  display: none;
  visibility: hidden;
}

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
      tabs: 0,
      rating: 4.8,
      screenWidth: "",
      isMobile: false,
      steps: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"],
      selectedSuggestion: [],

      window3: 0,

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
      ],

      step4Suggestions: [
        "조금 천천히 말해주세요.",
        "활기찬 분위기를 원해요.",
        "질문을 많이 해주세요.",
        "틀린 부분을 바로바로 고쳐주세요.",
        "많이 말하도록 유도해주세요."
      ],

      step4PracticePronunciation: ["Brother", "Skirt", "Change"],
      step4BetterExpression: [
        {
          original: "I usually home shopping ",
          better: "I usually do home shopping. "
        },
        {
          original: "I buy my wallet.",
          better: "I usually do home shopping. "
        },
        {
          original: "The old one worn out",
          better: "The old one was worn out."
        }
      ],

      step4Icons: [
        "fas fa-tired",
        "fas fa-frown",
        "fas fa-smile",
        "far fa-grin",
        "far fa-grin-beam"
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
    window.reload();
    this.screenWidth = screen.width;
    this.isMobile = this.screenWidth <= 960 ? true : false;
  },

  methods: {
    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
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
