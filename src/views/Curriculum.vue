<template>
  <v-app>
    <v-container fluid class="py-0 px-0">
      <v-card tile color="#8bb6f7" class="text-center pa-3">
        <v-card
          class="rounded-xl mx-auto"
          elevation="7"
          width="100%"
          style="margin-top:200px;margin-bottom:500px"
          max-width="1000px"
          color="#fafafa"
        >
          <v-container class="px-10 py-10">
            <v-sheet class="mx-auto px-4" color="rgba(0,0,0,0.0)">
              <v-slide-group mandatory class="mx-auto" v-model="slide" center-active>
                <v-slide-item class="mx-1" v-slot:default="{ active, toggle }">
                  <v-btn
                    @click="toggle"
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
                    @click="toggle"
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
                    @click="toggle"
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
                    @click="toggle"
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
                    @click="toggle"
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
                    @click="toggle"
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
                    @click="toggle"
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
                    @click="toggle"
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
              <v-col cols="3" class="px-3">
                <v-img src="../assets/c-icon1.png" width="200"></v-img>
                <div class="h5 font-weight-black">기초부터 탄탄하게</div>
                <div
                  class="h6 text--secondary mt-3"
                  style="letter-spacing:-1px !important"
                >레벨테스트를 통해 나의 영어실력에 맞춘 수업을 선택하여 들을 수 있습니다.</div>
              </v-col>
              <v-col cols="3" class="px-3">
                <v-img src="../assets/c-icon2.png" width="200"></v-img>
                <div class="h5 font-weight-black">비즈니스 맞춤형</div>
                <div
                  class="h6 text--secondary mt-3"
                  style="letter-spacing:-1px !important"
                >비즈니즈 과정을 통해 회화를 보다 빠르게 배울 수 있습니다.</div>
              </v-col>
              <v-col cols="3" class="px-3">
                <v-img src="../assets/c-icon3.png" width="200"></v-img>
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
                      <tr>
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
                      </tr>
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
            <div></div>
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
      category: "입문과정",

      books: [
        {
          image: "../assets/curriculum/phonics.jpg",
          title: "Phonics 1~6",
          details:
            "기본 알파벳과 기본 단어부터 차근차근 배우고자 하시는 분, 부담없이 시작 할 수 있는 왕기초 발음교정 과정입니다. 1권부터 6권까지 3개월완성! (빠른 진도시 한달만에도 완성가능)"
        },
        {
          image: "",
          title: "",
          details: ""
        }
      ]
    };
  }
};
</script>

