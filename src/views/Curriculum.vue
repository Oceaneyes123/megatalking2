<template>
  <v-app style="background-color:#00000000">
    <v-container fluid class="py-0 px-0">
      <v-card flat tile color="#8bb6f700" class="text-center pa-3">
        <div class="h3 font-weight-bold white--text mb-5" style="margin-top:200px">커리큘럼</div>
        <div
          class="h4 nanum font-weight-bold"
          style="color:#bfd384"
        >“Anytime, Anywhere, Home Learn English.”</div>
        <div class="mt-5 h5 nanum white--text">메가토킹은 말이 되는 영어, 실전에 강한 영어 회화를 만들어갑니다.</div>

        <v-card
          class="rounded-xl mx-auto"
          elevation="7"
          width="100%"
          style="margin-top:90px"
          max-width="1000px"
          color="#fafafa"
        >
          <v-container class="px-10 py-10">
            <v-sheet class="mx-auto px-4" color="rgba(0,0,0,0.0)">
              <v-slide-group mandatory class="mx-auto" v-model="slide" center-active>
                <v-slide-item class="mx-1" v-slot:default="{ active, toggle }">
                  <v-btn
                    @click="toggle, selectCategory($event, 0)"
                    depressed
                    class="py-2"
                    width="97"
                    min-height="80"
                    :class="{'blue--text': active}"
                    :color="active ? 'primary' : 'white'"
                    :outlined="active"
                  >입문과정</v-btn>
                </v-slide-item>

                <v-slide-item class="mx-1" v-slot:default="{ active, toggle }">
                  <v-btn
                    @click="toggle, selectCategory($event, 1)"
                    depressed
                    class="py-2"
                    width="97"
                    min-height="80"
                    :class="{'blue--text': active}"
                    :outlined="active"
                    :color="active ? 'primary' : 'white'"
                  >
                    초/중급
                    <br />회화과정
                  </v-btn>
                </v-slide-item>

                <v-slide-item class="mx-1" v-slot:default="{ active, toggle }">
                  <v-btn
                    @click="toggle, selectCategory($event, 2)"
                    depressed
                    class="py-2"
                    width="97"
                    min-height="80"
                    :class="{'blue--text': active}"
                    :color="active ? 'primary' : 'white'"
                    :outlined="active"
                  >정규회화과정</v-btn>
                </v-slide-item>

                <v-slide-item class="mx-1" v-slot:default="{ active, toggle }">
                  <v-btn
                    @click="toggle, selectCategory($event, 3)"
                    depressed
                    class="py-2"
                    width="97"
                    min-height="80"
                    :class="{'blue--text': active}"
                    :color="active ? 'primary' : 'white'"
                    :outlined="active"
                  >
                    뉴욕라이브
                    <br />잉글리쉬
                  </v-btn>
                </v-slide-item>

                <v-slide-item class="mx-1" v-slot:default="{ active, toggle }">
                  <v-btn
                    @click="toggle, selectCategory($event, 4)"
                    depressed
                    class="py-2"
                    width="97"
                    min-height="80"
                    :class="{'blue--text': active}"
                    :color="active ? 'primary' : 'white'"
                    :outlined="active"
                  >
                    문법
                    <br />패턴과정
                  </v-btn>
                </v-slide-item>

                <v-slide-item class="mx-1" v-slot:default="{ active, toggle }">
                  <v-btn
                    @click="toggle, selectCategory($event, 5)"
                    depressed
                    class="py-2"
                    width="97"
                    min-height="80"
                    :class="{'blue--text': active}"
                    :color="active ? 'primary' : 'white'"
                    :outlined="active"
                  >
                    토론/프리토킹
                    <br />과정
                  </v-btn>
                </v-slide-item>

                <v-slide-item class="mx-1" v-slot:default="{ active, toggle }">
                  <v-btn
                    @click="toggle, selectCategory($event, 6)"
                    depressed
                    class="py-2"
                    width="97"
                    min-height="80"
                    :class="{'blue--text': active}"
                    :color="active ? 'primary' : 'white'"
                    :outlined="active"
                  >
                    비즈니스
                    <br />과정
                  </v-btn>
                </v-slide-item>

                <v-slide-item class="mx-1" v-slot:default="{ active, toggle }">
                  <v-btn
                    @click="toggle, selectCategory($event, 7)"
                    depressed
                    class="py-2"
                    width="97"
                    min-height="80"
                    :class="{'blue--text': active}"
                    :color="active ? 'primary' : 'white'"
                    :outlined="active"
                  >
                    특별전문과정/
                    <br />취업준비과정
                  </v-btn>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>

            <div
              class="text-purple headline font-weight-bold text-center mt-10"
            >“짜임새 있는, 기초부터 탄탄한영어를 만듭니다.”</div>
            <div
              class="text--secondary mt-3 subheading font-weight-bold"
            >메가토킹은 말이 되는 영어, 실전에 강한 영어 회화를 만들어갑니다.</div>
            <v-row class="mt-10" justify="center">
              <v-col cols="12" md="3" class="px-3">
                <v-img src="../assets/c-icon1.png" width="200" class="mx-auto"></v-img>
                <div class="h5 font-weight-black">기초부터 탄탄하게</div>
                <div
                  class="h6 text--secondary mt-3"
                  style="letter-spacing:-1px !important"
                >레벨테스트를 통해 나의 영어실력에 맞춘 수업을 선택하여 들을 수 있습니다.</div>
              </v-col>
              <v-col cols="12" md="3" class="px-3">
                <v-img src="../assets/c-icon2.png" width="200" class="mx-auto"></v-img>
                <div class="h5 font-weight-black">비즈니스 맞춤형</div>
                <div
                  class="h6 text--secondary mt-3"
                  style="letter-spacing:-1px !important"
                >비즈니즈 과정을 통해 회화를 보다 빠르게 배울 수 있습니다.</div>
              </v-col>
              <v-col cols="12" md="3" class="px-3">
                <v-img src="../assets/c-icon3.png" width="200" class="mx-auto"></v-img>
                <div class="h5 font-weight-black">폰에서 보는 교재</div>
                <div
                  class="h6 text--secondary mt-3"
                  style="letter-spacing:-1px !important"
                >택배 or 별도의 출력 없이 교재를 다운로드 하실 수 있습니다.</div>
              </v-col>
            </v-row>
            <v-row justify="center" class="my-10">
              <v-card flat class="rounded-xl">
                <v-simple-table style="width:100%">
                  <template v-slot:default>
                    <thead class="rounded-xl">
                      <tr
                        class="rounded-xl"
                        style="background: linear-gradient(to right, #83b7d3, #725ce0); border-radius: 25px"
                      >
                        <th style="background: #bed6e94F"></th>
                        <th colspan="3" class="text-center white--text">Level 1 ~ 3</th>
                        <th colspan="2" class="text-center white--text">Level 4 ~ 5</th>
                        <th colspan="2" class="text-center white--text">Level 6 ~ 7</th>
                        <th colspan="2" class="text-center white--text">Level 8 ~ 9</th>
                        <th class="text-center white--text">Level 10</th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                      <tr>
                        <td>입문과정</td>
                        <td>
                          기초
                          <br />발음교정
                        </td>
                        <td>
                          기초
                          <br />문장연습
                        </td>
                        <td>
                          기초
                          <br />회화연습
                        </td>
                        <td colspan="7"></td>
                      </tr>
                      <tr>
                        <td>
                          초/ 중급
                          <br />회화과정
                        </td>
                        <td></td>
                        <td></td>
                        <td>초급회화</td>
                        <td>중급회화</td>
                        <td colspan="6"></td>
                      </tr>
                      <!-- <tr>
                        <td>
                          정규
                          <br />회화과정
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>정규회화</td>
                        <td colspan="5"></td>
                      </tr>-->
                      <tr>
                        <td>
                          뉴욕라이브
                          <br />잉글리쉬
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          뉴욕라이브
                          <br />잉글리쉬
                        </td>
                        <td colspan="4"></td>
                      </tr>
                      <tr>
                        <td>
                          문법
                          <br />패턴과정
                        </td>
                        <td>기초 패턴회화</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>문법 패턴회화</td>
                        <td colspan="4"></td>
                      </tr>
                      <tr>
                        <td>
                          토론/
                          <br />프리토킹
                        </td>
                        <td>초급 토론과정</td>
                        <td></td>
                        <td></td>
                        <td>
                          중급
                          <br />토론과정
                        </td>
                        <td>
                          심화토론
                          <br />과정고급
                        </td>
                        <td>
                          시사
                          <br />토론과정
                        </td>
                        <td colspan="4"></td>
                      </tr>
                      <tr>
                        <td>
                          영자신문
                          <br />과정
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          주니어
                          <br />조선 초급
                        </td>
                        <td>
                          주니어
                          <br />조선 중급
                        </td>
                        <td>
                          주니어
                          <br />조선 고급
                        </td>
                        <td>
                          전문조선
                          <br />초급
                        </td>
                        <td>
                          전문조선
                          <br />고급
                        </td>
                        <td>
                          전문조선
                          <br />고급
                        </td>
                        <td colspan="1"></td>
                      </tr>
                      <tr>
                        <td>
                          비즈니스
                          <br />과정
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          비즈니스
                          <br />회화
                        </td>
                        <td>
                          비즈니스
                          <br />맞춤
                        </td>
                        <td></td>
                        <td>
                          비즈니스
                          <br />토론
                        </td>
                        <td colspan="2"></td>
                      </tr>
                      <tr>
                        <td>
                          다락원
                          <br />교재 과정
                        </td>
                        <td>
                          패턴
                          <br />연습편1
                        </td>
                        <td>
                          패턴
                          <br />연습편2
                        </td>
                        <td>
                          패턴연습편3
                          <br />동사연습편1
                          <br />상황별연습1
                        </td>
                        <td>
                          동사연습편2
                          <br />상황별연습2
                          <br />비즈니스전화
                        </td>
                        <td>
                          동사연습편3
                          <br />상황별연습3
                          <br />비즈니스회의
                        </td>
                        <td>
                          비즈니스
                          <br />이메일
                        </td>
                        <td>
                          비즈니스
                          <br />프리젠테이션
                        </td>
                        <td colspan="3"></td>
                      </tr>
                      <tr>
                        <td>
                          특별전문/
                          <br />취업준비과정
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>취업 인터뷰</td>
                        <td>
                          호텔영어
                          <br />승무원영어
                        </td>
                        <td>
                          IELTS
                          <br />오픽
                        </td>
                        <td>
                          토익스피킹
                          <br />심화토익스피킹
                        </td>
                        <td>의학영어</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card>
            </v-row>
            <div class="mt-10 pt-10 h4 nanum text-purple font-weight-bold">
              {{category}}
              <span class="h6 text-purple font-weight-bold">기초발음교정 (level 1~3)</span>
            </div>
            <div class="d-flex justify-center">
              <v-card
                flat
                color="#fafafa"
                class="text-center mt-10"
                style="color: #ada8a8; word-break:keep-all; line-break:strict"
                max-width="500"
              >
                입문과정에서는 영어를 아주 처음 시작하는 왕초보와, 초심을 가지고
                발음부터 차근차근 시작하실 수강생분들을 위한 과정입니다.
                1~2개월 완성 과정으로써, 기초적인 발음규칙과 함께 기초적인 단어를 익힐 수 있습니다.
              </v-card>
            </div>

            <v-sheet color="#fafafa">
              <v-slide-group v-model="bookSlide0" v-if="slide == 0" show-arrows class="mb-3">
                <v-slide-item class="pa-3" v-for="(book, i) in allBooks.books_1" :key="i">
                  <v-card flat color="#fafafa">
                    <v-card flat max-width="300" color="#ebebeb" class="ma-3 py-5">
                      <v-img :src="book.image" width="80%" class="mx-auto"></v-img>
                    </v-card>
                    <v-card
                      flat
                      color="#fafafa"
                      width="80%"
                      class="subtitle-text-1 mx-auto text-left"
                    >{{book.title}}</v-card>
                    <v-card
                      flat
                      color="#fafafa"
                      width="80%"
                      max-width="300"
                      class="mx-auto mt-5 text-left caption-text"
                      style="color:#ada8a8"
                    >{{book.details}}</v-card>
                  </v-card>
                </v-slide-item>
              </v-slide-group>

              <v-slide-group v-model="bookSlide1" v-if="slide == 1" show-arrows class="mb-3">
                <v-slide-item class="pa-3" v-for="(book, i) in allBooks.books_2" :key="i">
                  <v-card flat color="#fafafa">
                    <v-card flat max-width="300" color="#ebebeb" class="ma-3 py-5">
                      <v-img :src="book.image" width="80%" class="mx-auto"></v-img>
                    </v-card>
                    <v-card
                      flat
                      color="#fafafa"
                      width="80%"
                      class="subtitle-text-1 mx-auto text-left"
                    >{{book.title}}</v-card>
                    <v-card
                      flat
                      color="#fafafa"
                      width="80%"
                      max-width="300"
                      class="mx-auto mt-5 text-left caption-text"
                      style="color:#ada8a8"
                    >{{book.details}}</v-card>
                  </v-card>
                </v-slide-item>
              </v-slide-group>

              <v-slide-group v-model="bookSlide2" v-if="slide == 2" show-arrows class="mb-3">
                <v-slide-item class="pa-3" v-for="(book, i) in allBooks.books_3" :key="i">
                  <v-card flat color="#fafafa">
                    <v-card flat max-width="300" color="#ebebeb" class="ma-3 py-5">
                      <v-img :src="book.image" width="80%" class="mx-auto"></v-img>
                    </v-card>
                    <v-card
                      flat
                      color="#fafafa"
                      width="80%"
                      class="subtitle-text-1 mx-auto text-left"
                    >{{book.title}}</v-card>
                    <v-card
                      flat
                      color="#fafafa"
                      width="80%"
                      max-width="300"
                      class="mx-auto mt-5 text-left caption-text"
                      style="color:#ada8a8"
                    >{{book.details}}</v-card>
                  </v-card>
                </v-slide-item>
              </v-slide-group>

              <v-slide-group v-model="bookSlide3" v-if="slide == 3" show-arrows class="mb-3">
                <v-slide-item class="pa-3" v-for="(book, i) in allBooks.books_4" :key="i">
                  <v-card flat color="#fafafa">
                    <v-card flat max-width="300" color="#ebebeb" class="ma-3 py-5">
                      <v-img :src="book.image" width="80%" class="mx-auto"></v-img>
                    </v-card>
                    <v-card
                      flat
                      color="#fafafa"
                      width="80%"
                      class="subtitle-text-1 mx-auto text-left"
                    >{{book.title}}</v-card>
                    <v-card
                      flat
                      color="#fafafa"
                      width="80%"
                      max-width="300"
                      class="mx-auto mt-5 text-left caption-text"
                      style="color:#ada8a8"
                    >{{book.details}}</v-card>
                  </v-card>
                </v-slide-item>
              </v-slide-group>

              <v-slide-group v-model="bookSlide4" v-if="slide == 4" show-arrows class="mb-3">
                <v-slide-item class="pa-3" v-for="(book, i) in allBooks.books_5" :key="i">
                  <v-card flat color="#fafafa">
                    <v-card flat max-width="300" color="#ebebeb" class="ma-3 py-5">
                      <v-img :src="book.image" width="80%" class="mx-auto"></v-img>
                    </v-card>
                    <v-card
                      flat
                      color="#fafafa"
                      width="80%"
                      class="subtitle-text-1 mx-auto text-left"
                    >{{book.title}}</v-card>
                    <v-card
                      flat
                      color="#fafafa"
                      width="80%"
                      max-width="300"
                      class="mx-auto mt-5 text-left caption-text"
                      style="color:#ada8a8"
                    >{{book.details}}</v-card>
                  </v-card>
                </v-slide-item>
              </v-slide-group>

              <v-slide-group v-model="bookSlide5" v-if="slide == 5" show-arrows class="mb-3">
                <v-slide-item class="pa-3" v-for="(book, i) in allBooks.books_6" :key="i">
                  <v-card flat color="#fafafa">
                    <v-card flat max-width="300" color="#ebebeb" class="ma-3 py-5">
                      <v-img :src="book.image" width="80%" class="mx-auto"></v-img>
                    </v-card>
                    <v-card
                      flat
                      color="#fafafa"
                      width="80%"
                      class="subtitle-text-1 mx-auto text-left"
                    >{{book.title}}</v-card>
                    <v-card
                      flat
                      color="#fafafa"
                      width="80%"
                      max-width="300"
                      class="mx-auto mt-5 text-left caption-text"
                      style="color:#ada8a8"
                    >{{book.details}}</v-card>
                  </v-card>
                </v-slide-item>
              </v-slide-group>

              <v-slide-group v-model="bookSlide6" v-if="slide == 6" show-arrows class="mb-3">
                <v-slide-item class="pa-3" v-for="(book, i) in allBooks.books_7" :key="i">
                  <v-card flat color="#fafafa">
                    <v-card flat max-width="300" color="#ebebeb" class="ma-3 py-5">
                      <v-img :src="book.image" width="80%" class="mx-auto"></v-img>
                    </v-card>
                    <v-card
                      flat
                      color="#fafafa"
                      width="80%"
                      class="subtitle-text-1 mx-auto text-left"
                    >{{book.title}}</v-card>
                    <v-card
                      flat
                      color="#fafafa"
                      width="80%"
                      max-width="300"
                      class="mx-auto mt-5 text-left caption-text"
                      style="color:#ada8a8"
                    >{{book.details}}</v-card>
                  </v-card>
                </v-slide-item>
              </v-slide-group>

              <v-slide-group v-model="bookSlide7" v-if="slide == 7" show-arrows class="mb-3">
                <v-slide-item class="pa-3" v-for="(book, i) in allBooks.books_8" :key="i">
                  <v-card flat color="#fafafa">
                    <v-card flat max-width="300" color="#ebebeb" class="ma-3 py-5">
                      <v-img :src="book.image" width="80%" class="mx-auto"></v-img>
                    </v-card>
                    <v-card
                      flat
                      color="#fafafa"
                      width="80%"
                      class="subtitle-text-1 mx-auto text-left"
                    >{{book.title}}</v-card>
                    <v-card
                      flat
                      color="#fafafa"
                      width="80%"
                      max-width="300"
                      class="mx-auto mt-5 text-left caption-text"
                      style="color:#ada8a8"
                    >{{book.details}}</v-card>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-container>
        </v-card>
      </v-card>
    </v-container>
  </v-app>
</template>

<style scoped>
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  padding-right: 5px;
  padding-left: 5px;
}

td:nth-child(1) {
  background-color: #bed6e9;
  color: white;
}

td:nth-child(n + 2) {
  color: #ada8a8;
  background-color: white;
}
</style>

<script>
export default {
  data() {
    return {
      slide: null,
      bookSlide0: 0,
      bookSlide1: 0,
      bookSlide2: 0,
      bookSlide3: 0,
      bookSlide4: 0,
      bookSlide5: 0,
      bookSlide6: 0,
      bookSlide7: 0,
      category: "입문과정",

      allBooks: {
        books_1: [
          {
            image: require("../assets/curriculum/phonics.jpg"),
            title: "Phonics 1~6",
            details:
              "기본 알파벳과 기본 단어부터 차근차근 배우고자 하시는 분, 부담없이 시작 할 수 있는 왕기초 발음교정 과정입니다. 1권부터 6권까지 3개월완성! (빠른 진도시 한달만에도 완성가능)"
          },
          {
            image: require("../assets/curriculum/adv_phonics.jpg"),
            title: "Advanced Phonics 1~6",
            details:
              "각 Phonics의 발음들을 보다 심층적으로, 빠르게 배울 수 있는 퀵Phonics 커리큘럼입니다. Phonics를 전체적으로 복습하고자 하시는 분, 빠르게 Phonics를 익히고자 하시는분께 적합합니다."
          },
          {
            image: require("../assets/curriculum/p_course_jr.jpg"),
            title: "P-course Junior Basic~Advanced",
            details:
              "기초적인 단어들을 사용하여, 간단한 문장들을 만들어보는 과정입니다. 그림과 함께 단어들을 학습할 수 있기 때문에, 보다 쉽고 편안한 단어암기가 가능합니다."
          },
          {
            image: require("../assets/curriculum//c-course_jr.jpg"),
            title: "C-course Junior Basic~Advanced",
            details:
              "주위에서 흔히 볼 수 있는 사물들과 환경들로, 친숙한 회화표현들을 익혀보는 과정입니다. 그림과 함께 쉽게 회화를 익혀볼 수 있습니다."
          }
        ],

        books_2: [
          {
            image: require("../assets/curriculum/milestones.jpg"),
            title: "Milestones",
            details:
              "기초적인 단어들을 사용하여, 간단한 문장들을 만들어보는 과정입니다. 그림과 함께 단어들을 학습할 수 있기 때문에, 보다 쉽고 편안한 단어암기가 가능합니다."
          },
          {
            image: require("../assets/curriculum/1st_step.jpg"),
            title: "First Step In Conversation Level 1~3",
            details:
              "다양한 상황과 단어들을 이용한 중급 회화 입니다. 그림과 함께한 중급용 회화교재입니다. 배운 숙어를 활용하여 응용연습을 함으로, 회화실력을 다져나갈 수 있습니다."
          }
        ],

        books_3: [
          {
            image: require("../assets/curriculum/conv.jpg"),
            title: "Regular Conversation Step 1~3",
            details:
              "짧은 회화 다이얼로그 학습입니다. 부담스럽지 않게 그날그날의 주제 표현들을 학습할 수 있습니다. 레벨별로 보다 더 다양한 주제들이 등장하며, 레벨이 올라감에 따라 본문의 양이 조금씩 많아집니다."
          },
          {
            image: require("../assets/curriculum/interactive.jpg"),
            title: "Interactive English Series (Beginner~Advanced)",
            details:
              "4단계 레벨로 나누어져 있으며, 동영상컨텐츠가 함께 준비되어 있어, 듣기연습과 말하기 연습, 복습과 예습에 다양하게 활용하실 수 있습니다. 간단한 회화 주제들부터 시작하여 일상생활에서 사용하는 고급스러운 표현과 심오한 주제까지 고루 학습할 수 있습니다."
          }
        ],

        books_4: [
          {
            image: require("../assets/curriculum/nye.jpg"),
            title: "New York Live English",
            details:
              "각 명소에 대한 설명이 흥미롭게 구성되어 있어 듣기능력과 회화능력 뿐만 아니라 뉴욕에 대한 풍부한 상식도 배울 수 있습니다. 독학과정을 신청할 수도 있으며, 전화영어와 세트로 학습하여, 공부한 내용을 실전처럼 활용해 볼 수도 있습니다. 본인에게 약한 부분을 집중적으로 학습할 수 있어, 정말 스마트한 학습이 될 것입니다."
          }
        ],

        books_5: [
          {
            image: require("../assets/curriculum/sp_1.jpg"),
            title: "스피킹 패턴과정",
            details: "자주 나오는 중요한 패턴 100개 연습하기"
          },
          {
            image: require("../assets/curriculum/dp_sp.webp"),
            title: "Grammar in Pattern 과정",
            details: "패턴속에 문법까지 짚어가며 정확한 표현배우기"
          },
          {
            image: require("../assets/curriculum/dd_1.jpg"),
            title: "일상 Dialogue 과정",
            details:
              "현지인과 맞닥뜨리게되는 다양한 상황속에서 영어로 편하게 의사소통하기"
          }
        ],

        books_6: [
          {
            image: require("../assets/curriculum/ft_q_a1.webp"),
            title: "프리토킹 묻고 답하기",
            details: "미리 예정된 토픽에 대해 편안하게 대화하기"
          },
          {
            image: require("../assets/curriculum/ft_op1.webp"),
            title: "프리토킹 의견말하기",
            details: "일상에 자주 거론되는 이슈에 대한 나의 의견 영어로 말하기"
          },
          {
            image: require("../assets/curriculum/ft_ds1.webp"),
            title: "프리토킹 사진묘사",
            details: "일상에 자주 거론되는 이슈에 대한 나의 의견 영어로 말하기"
          },
          {
            image: require("../assets/curriculum/news.jpg"),
            title: "프리토킹 영자신문",
            details: "최신 뉴스기사를 영어로 접하면서 대화하기"
          },
          {
            image: require("../assets/curriculum/debate.jpg"),
            title: "Debate",
            details:
              "토론과정에 더하여, 사회적인 이슈가 되었던 문제들을 토론하는 과정입니다. 인터뷰나 다양한 논술시험에 대비하여 자신의 의견을 정리해볼 수 있는 과정입니다."
          }
        ],

        books_7: [
          {
            image: require("../assets/curriculum/bd_1.webp"),
            title: "비지니스 회화과정",
            details:
              "직장생활에서 일어날수있는 여러 상황을 대화지문으로 배우고 영어로 정확하게 소통하는 연습하기"
          },
          {
            image: require("../assets/curriculum/be_sd.jpg"),
            title: "Business English (Situational Dialogues)",
            details:
              "전화응대, 프레젠테이션, 보고하기, 회의자료 준비 및 회의하기 등의 업무상 필요한 모든 회화전략을 담았습니다. 실용적으로 사용할 비즈니스 회화를 학습하고자 하는 수강생에게 적합합니다."
          },
          {
            image: require("../assets/curriculum/email.jpg"),
            title: "E-mail",
            details:
              "E-mail, Meeting, Negotiation, Presentaion 각 4가지의 집중 과정으로, 학습자의 실무적 우선순위를 두고 학습할 수 있는 과정입니다. 각 4가지의 교재를 골라서 맞춤식 학습을 할 수 있습니다."
          },
          {
            image: require("../assets/curriculum/meeting.jpg"),
            title: "Meeting",
            details:
              "E-mail, Meeting, Negotiation, Presentaion 각 4가지의 집중 과정으로, 학습자의 실무적 우선순위를 두고 학습할 수 있는 과정입니다. 각 4가지의 교재를 골라서 맞춤식 학습을 할 수 있습니다."
          },
          {
            image: require("../assets/curriculum/negotiation.jpg"),
            title: "Negotiation",
            details:
              "E-mail, Meeting, Negotiation, Presentaion 각 4가지의 집중 과정으로, 학습자의 실무적 우선순위를 두고 학습할 수 있는 과정입니다. 각 4가지의 교재를 골라서 맞춤식 학습을 할 수 있습니다."
          },
          {
            image: require("../assets/curriculum/presentation.jpg"),
            title: "Presentation",
            details:
              "E-mail, Meeting, Negotiation, Presentaion 각 4가지의 집중 과정으로, 학습자의 실무적 우선순위를 두고 학습할 수 있는 과정입니다. 각 4가지의 교재를 골라서 맞춤식 학습을 할 수 있습니다."
          },
          {
            image: require("../assets/curriculum/be_sd.jpg"),
            title: "Business English (Discussion and Analysis)",
            details:
              "마케팅적 토론, 광고, 금융, 사내조직 등의 여러 비즈니스상의 키워드들에 대한 심도있는 토론과정입니다. 다양한 비즈니스 용어들을 익힐 수 있으며, 지문과 질문에 대한 흥미로운 토론학습입니다."
          }
        ],

        books_8: [
          {
            image: require("../assets/curriculum/int_1.webp"),
            title: "Interview (영어 면접)과정",
            details:
              "영어면접에서 면접관의 질문을 정확히 이해하고 나를 충분히 어필하는 연습하기"
          },
          {
            image: require("../assets/curriculum/hotel.jpg"),
            title: "Hotel Dialogues",
            details:
              "방 예약부터 전화응대, 체크인 등 호텔에서 일어날 수 있는 다양하고 고급스러운 서비스표현들을 담고 있습니다. 호텔리어를 준비하시는 수강생, 또는 여행을 자주 가시거나 여행을 계획중이신 수강생들에게 좋은 과정입니다."
          },
          {
            image: require("../assets/curriculum/cabin_crew.jpg"),
            title: "Cabin Crew",
            details:
              "승무원의 역사, 의상, 기내상식과 기내방송등 승무원의 모든 스피킹을 담았습니다. 승무원을 준비하시는 수강생분들, 승무원영어과정으로 알차게 준비해보세요!"
          },
          {
            image: require("../assets/curriculum/ielts.jpg"),
            title: "IELTS",
            details:
              "IELTS란, 국제영어능력시험으로써, 영국, 오스트레일리아, 캐나다, 뉴질랜드 대학입학에 필요한 영어시험입니다. 대부분 대학입학성적으로 6.0점 이상을 요구하며, 화상및전화영어를 통하여는, 스피킹시험을 준비하실 수 있습니다. 수업을 통해 발음교정과 다양한 토픽에 맞는 스피킹을 준비하게 됩니다."
          },
          {
            image: require("../assets/curriculum/ielts.jpg"),
            title: "IELTS",
            details:
              "IELTS란, 국제영어능력시험으로써, 영국, 오스트레일리아, 캐나다, 뉴질랜드 대학입학에 필요한 영어시험입니다. 대부분 대학입학성적으로 6.0점 이상을 요구하며, 화상및전화영어를 통하여는, 스피킹시험을 준비하실 수 있습니다. 수업을 통해 발음교정과 다양한 토픽에 맞는 스피킹을 준비하게 됩니다."
          },
          {
            image: require("../assets/curriculum/medical_english.jpg"),
            title: "Medical English",
            details:
              "검진, 예약, 차트작성, 응급상황 시 대처방법 등 실무에 필요한 의학영어들을 담았습니다. 의학용어들이 등장하여 어휘에 난이도가 있긴 하지만 몇몇 난이도 있는 용어를 제외하면, 다양한 상황에서의 의학회화들을 실용적으로 학습해나갈 수 있는 과정입니다."
          }
        ]
      }
    };
  },

  methods: {
    selectCategory(event, current) {
      this.slide = current;
      this.category = event.target.innerText;
    }
  }
};
</script>

