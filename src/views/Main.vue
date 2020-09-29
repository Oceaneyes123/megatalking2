<template>
  <v-app style="background-color:#00000000">
    <v-container>
      <div
        class="h3 font-weight-bold white--text mb-5"
        style="margin-top:200px"
      >
        친구처럼 편한 영어
      </div>
      <div class="white--text h6 mb-10">
        외국인과 말하기 두려워도, 영어가 서툴러도,
        <br />메가토킹 선생님이 친구처럼 도와드려요.
      </div>
      <v-row justify="center">
        <v-btn class="rounded-xl pa-8 title" color="primary"
          >레벨테스트 하러가기</v-btn
        >
      </v-row>
    </v-container>
    <v-container style="max-width:1000px;margin-top:90px">
      <v-card class="rounded-xl shadow" width="100%">
        <v-row class="px-10">
          <v-col cols="12" sm="4">
            <v-card class="pt-10" flat color="#00000000">
              <div class="mb-5 font-weight-bold">플립러닝 Push</div>
              <v-icon class="mb-3" size="80">contact_mail</v-icon>
              <div class="caption-text">
                <v-icon color="#00aff0">fab fa-skype</v-icon>화상영어 서비스
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="pt-10" flat>
              <div class="mb-5 font-weight-bold">수업 녹음파일 전송</div>
              <v-icon class="mb-3" size="80">video_label</v-icon>
              <div class="caption-text">수업 피드백 및 복습 자료</div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="pt-10" flat color="#00000000">
              <div class="mb-5 font-weight-bold">강사 평가점수</div>
              <div class="h6 mb-6">
                <span class="font-weight-bold nanum h4 mr-2">4.8</span>
                <span style="color:#7e7e7e">/5.0</span>
              </div>
              <v-rating
                readonly
                v-model="rating"
                color="yellow darken-3"
                background-color="grey darken-1"
                full-icon="fas fa-star"
                empty-icon="far fa-star"
                half-icon="fas fa-star-half-alt"
                half-increments
                hover
              ></v-rating>
            </v-card>
          </v-col>
        </v-row>
        <!--row 1 -->
        <v-card
          class="text-left mb-10 mx-auto rounded-xl"
          v-if="isMobile"
          height="85vh"
          width="95%"
          color="#f1f1f1"
          flat
        >
          <v-card color="#e9c5b1" flat class="mb-5">
            <v-img
              class="ml-auto"
              src="../assets/girl2-mobile.png"
              width="80%"
              position="90%"
            ></v-img>
          </v-card>

          <div class="ml-10">
            <div class="h4 font-weight-bold mb-7">나를 아는 영어</div>
            <div style="color:#b7b7b7;max-width:250px">
              <div class="mb-5">
                레벨테스트 부터 꼼꼼하게, 1차 예습, 수업, 3차 복습, 4차 영작
                체계적인 학습관리, 알림 서비스까지!
              </div>
              <div>
                자 연 스 럽 게 스며드는 영어회화,
                <span style="color:#df5d24">메가토킹</span>은다릅니다.
              </div>
            </div>
          </div>
        </v-card>

        <v-card
          flat
          class="mt-10 mx-auto"
          max-width="700"
          style="position:relative;margin-bottom:100px"
          v-if="!isMobile"
        >
          <v-card
            class="pt-10 pl-10 text-left pb-5 rounded-xl"
            width="90%"
            color="#f1f1f1"
            flat
          >
            <div class="h4 font-weight-bold mb-7">나를 아는 영어</div>
            <div style="color:#b7b7b7;max-width:250px">
              <div class="mb-5">
                레벨테스트 부터 꼼꼼하게, 1차 예습, 수업, 3차 복습, 4차 영작
                체계적인 학습관리, 알림 서비스까지!
              </div>
              <div>
                자 연 스 럽 게 스며드는 영어회화,
                <span style="color:#df5d24">메가토킹</span>은다릅니다.
              </div>
            </div>
          </v-card>
          <v-card
            width="300"
            height="300"
            color="#e9c5b1"
            style="position:absolute;right:25px;bottom:-70px"
            class="rounded-xl"
            flat
          >
            <v-img
              src="../assets/girl2.png"
              width="1000"
              style="transform: scale(1.3);position: absolute;bottom:33px"
            ></v-img>
          </v-card>
        </v-card>

        <!--row 2-->
        <v-card
          v-if="isMobile"
          flat
          color="#f1f1f1"
          height="80vh"
          class="pt-10 rounded-xl mx-auto"
          width="95%"
        >
          <v-card class="mb-5" flat color="#00000000">
            <v-img width="100%" position="50%" src="../assets/girl.png"></v-img>
          </v-card>
          <div style="color:#b7b7b7;max-width:250px" class="text-left ml-10">
            <div class="h4 font-weight-bold mb-7" style="color:#000">
              맞춤형 시간표
            </div>
            <div class="mb-5">
              직접 방문하지 않아도 언제, 어디서나 전화통화로 진행되는
              레벨테스트를 통해 맞춤형 영어를 배울 수 있습니다.
            </div>
            <div
              class="title font-weight-bold font-italic"
              style="color:#b34013"
            >
              레벨테스트 하러가기 >
            </div>
          </div>
        </v-card>

        <v-card
          flat
          class="mt-10 mx-auto"
          max-width="700"
          style="position:relative;margin-bottom:100px"
          v-if="!isMobile"
        >
          <v-card
            flat
            class="pt-10 pr-10 ml-auto  d-flex"
            width="100%"
            color="#f1f1f1"
            style="border-radius:24px 24px 24px 0"
          >
            <v-img
              style="border-radius:24px 24px 24px 0"
              width="350"
              position="50%"
              src="../assets/girl.png"
            ></v-img>
            <div
              style="color:#b7b7b7;max-width:250px"
              class="ml-auto text-left"
            >
              <div class="h4 font-weight-bold mb-7" style="color:#000">
                맞춤형 시간표
              </div>
              <div class="mb-5">
                직접 방문하지 않아도 언제, 어디서나 전화통화로 진행되는
                레벨테스트를 통해 맞춤형 영어를 배울 수 있습니다.
              </div>
              <div
                class="title font-weight-bold font-italic"
                style="color:#b34013"
              >
                레벨테스트 하러가기 >
              </div>
            </div>
          </v-card>
        </v-card>

        <!--row 3 -->
        <v-card
          flat
          width="95%"
          class="mt-10 mx-auto"
          max-width="700"
          style="position:relative;margin-bottom:100px"
        >
          <v-card flat class="text-left pb-5 rounded-xl" color="#f1f1f1">
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" class="px-10 px-md-5">
                  <div class="mr-5">
                    <div class="h4 font-weight-bold mb-7" style="color:#70689f">
                      35,000개
                      <br />품격있는 컨텐츠
                    </div>
                    <div style="color:#b7b7b7;max-width:250px">
                      <div class="mb-5">
                        프리토킹, 비지니스, 면접영어, 여행, 영자신문 등
                        35,000개의 콘텐츠로 즐겨요.
                      </div>
                      <div
                        class="title font-weight-bold font-italic"
                        style="color:#b34013"
                      >
                        커리큘럼 자세히보기 >
                      </div>
                    </div>
                  </div>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  style="overflow-x:hidden"
                  class="px-0 marquee-container"
                >
                  <div class="d-flex flex-column marquee-moving">
                    <div class="d-flex flex-row">
                      <v-card
                        class="mx-1 my-1"
                        v-for="(image, i) in marqueeImagesRow1"
                        width="200"
                        height="75"
                        :key="i"
                      >
                        <v-img :src="image" width="200" height="75"></v-img>
                      </v-card>
                    </div>
                    <div class="d-flex flex-row">
                      <v-card
                        class="mx-1 my-1"
                        v-for="(image, i) in marqueeImagesRow2"
                        width="200"
                        height="75"
                        :key="i"
                      >
                        <v-img :src="image" width="200" height="75"></v-img>
                      </v-card>
                    </div>
                    <div class="d-flex flex-row">
                      <v-card
                        class="mx-1 my-1"
                        v-for="(image, i) in marqueeImagesRow3"
                        width="200"
                        height="75"
                        :key="i"
                      >
                        <v-img :src="image" width="200" height="75"></v-img>
                      </v-card>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-card>

        <!--list grid -->
        <div class="h5">다양한 미디어 콘텐츠로 메가토킹을 즐기세요.</div>
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="5">
              <v-card color="brown lighten-3 mb-5" class="rounded-xl">
                <v-img src="../assets/emma_watson.jpg">
                  <v-card height="100%" color="#000000AD">
                    <v-container>
                      <div
                        class="font-weight-black h2 text-left mx-3 white--text gmarket"
                      >
                        Emma Watson
                      </div>
                    </v-container>
                  </v-card>
                </v-img>
              </v-card>
              <v-card color="brown lighten-3 mb-5" class="rounded-xl">
                <v-img src="../assets/ted_mainpage.jpg">
                  <v-card height="100%" color="#000000AD">
                    <v-container>
                      <div
                        class="font-weight-black h2 text-left mx-3 white--text gmarket"
                      >
                        TED
                      </div>
                    </v-container>
                  </v-card>
                </v-img>
              </v-card>
              <v-card color="brown lighten-3 mb-5" class="rounded-xl">
                <v-img src="../assets/movie.jpg">
                  <v-card height="100%" color="#000000AD">
                    <v-container>
                      <div
                        class="font-weight-black h2 text-left mx-3 white--text gmarket"
                      >
                        Movie
                      </div>
                      <div
                        class="white--text mb-2 text-left h6 nanum ml-3"
                        v-for="(item, i) in subtext.movie"
                        :key="i"
                      >
                        {{ item }}
                      </div>
                    </v-container>
                  </v-card>
                </v-img>
              </v-card>
              <v-card color="brown lighten-3 mb-5" class="rounded-xl">
                <v-img src="../assets/vogue.jpg">
                  <v-card height="100%" color="#000000AD">
                    <v-container>
                      <div
                        class="font-weight-black h2 text-left mx-3 white--text gmarket mb-3"
                      >
                        Vogue
                      </div>
                      <div
                        class="white--text mb-2 text-left h6 nanum ml-3"
                        v-for="(item, i) in subtext.vogue"
                        :key="i"
                      >
                        {{ item }}
                      </div>
                    </v-container>
                  </v-card>
                </v-img>
              </v-card>
            </v-col>
            <v-col cols="12" md="5">
              <v-card color="brown lighten-3 mb-5" class="rounded-xl">
                <v-img src="../assets/maroon5_mainpage.png">
                  <v-card height="100%" color="#000000AD">
                    <v-container>
                      <div
                        class="font-weight-black h2 text-left mx-3 white--text gmarket"
                      >
                        Maroon 5
                      </div>
                    </v-container>
                  </v-card>
                </v-img>
              </v-card>
              <v-card color="brown lighten-3 mb-5" class="rounded-xl">
                <v-img src="../assets/camera.jpg">
                  <v-card height="100%" color="#000000AD">
                    <v-container class="white--text text-left h6 nanum">
                      <div
                        class="font-weight-black h2 text-left mx-3 white--text gmarket"
                      >
                        셀럽인터뷰
                      </div>
                      <div class="mb-2">베네딕트 컴버배치</div>
                      <div class="mb-2">스칼렛 요한슨</div>
                      <div class="mb-2">클로이 모레츠</div>
                      <div>…</div>
                    </v-container>
                  </v-card>
                </v-img>
              </v-card>
              <v-card color="brown lighten-3 mb-5" class="rounded-xl">
                <v-img src="../assets/singer.jpg">
                  <v-card height="100%" color="#000000AD">
                    <v-container>
                      <div
                        class="font-weight-black h2 text-left mx-3 white--text gmarket mb-2"
                      >
                        Singer
                      </div>
                      <div
                        class="white--text mb-2 text-left h6 nanum ml-3"
                        v-for="(item, i) in subtext.singer"
                        :key="i"
                      >
                        {{ item }}
                      </div>
                    </v-container>
                  </v-card>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <v-card
          class="rounded-xl mx-auto"
          :width="isMobile ? '95%' : '80%'"
          style="margin-bottom:150px"
        >
          <v-img
            class="rounded-xl"
            width="100%"
            height="250"
            eager
            src="https://marketplace.canva.com/MADGxguiG6s/4/screen_2x/canva-woman-using-a-smartphone-while-fronting-a-macbook-pro-and-black-ipad-MADGxguiG6s.jpg"
          ></v-img>
          <v-card
            style="position:absolute;bottom:-100px;width:80%;left: 50%; transform: translateX(-50%)"
            class="pa-2 text-center rounded-xl"
          >
            <div class="title font-weight-bold">플립러닝 Push</div>
            <div class="caption-text mb-3" style="color:#b7b7b7">
              <v-icon color="#00aff0" small>fab fa-skype</v-icon>화상영어 서비스
            </div>
            <div class="caption-text mb-5" style="color:#b7b7b7">
              플립러닝 예습자료,
              <br />카톡으로 보내드려요.
            </div>
            <v-btn class="rounded-lg caption-text white--text" color="#5a55a1"
              >수강신청 바로가기</v-btn
            >
          </v-card>
        </v-card>

        <!-- row text -->
        <v-container class="text-left">
          <v-row justify="center">
            <v-col cols="12" md="5">
              <div class="h4 mb-7">항상 제자리인 내 영어,</div>
              <div class="mb-7" v-for="(item, i) in koreanTextGrey" :key="i">
                <div class="h6 font-weight-black mb-1" style="color:#5f5f5f">
                  {{ item.title }}
                </div>
                <div class="subtitle-text-1" style="color:#979797">
                  {{ item.text }}
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="5">
              <div class="h4 mb-7" style="color: #4065db">
                이제는 말할 수 있어요.
              </div>
              <div class="mb-7" v-for="(item, i) in koreanTextBlue" :key="i">
                <div class="h6 font-weight-black mb-1" style="color:#4065db">
                  {{ item.title }}
                </div>
                <div class="subtitle-text-1" style="color:#979797">
                  <span v-html="item.text"></span>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>

        <v-card
          class="rounded-xl mx-auto"
          :width="isMobile ? '95%' : '80%'"
          style="margin-bottom:150px"
        >
          <v-img
            class="rounded-xl"
            width="100%"
            height="250"
            src="https://marketplace.canva.com/1rlcg/MADyRR1rlcg/1/s2/canva-man-and-woman-sitting-facing-book-MADyRR1rlcg.jpg"
          ></v-img>
          <v-card
            style="position:absolute;bottom:-100px;width:80%;left: 50%; transform: translateX(-50%)"
            class="pa-2 text-center rounded-xl"
          >
            <div class="font-weight-black subheading mb-3 mt-1">
              생생한 수강후기
            </div>
            <div class="caption-text mb-5" style="color:#b7b7b7">
              회원님이 작성한 후기를 보고 나에게 적합한 수업 유형과 난이도를
              찾을 수 있어요.
            </div>
            <v-btn class="rounded-lg caption-text white--text" color="#5a55a1"
              >게시판 바로가기</v-btn
            >
          </v-card>
        </v-card>

        <div class="h5 text-left mx-10 px-10">
          생생한 수강후기, 메가토킹이어야하는 이유.
        </div>

        <v-sheet class="mt-5 mb-10">
          <v-slide-group :show-arrows="false">
            <template slot="next">
              <v-icon style="font-size:70px">fas fa-angle-right</v-icon>
            </template>
            <template slot="prev">
              <v-icon style="font-size:70px">fas fa-angle-left</v-icon>
            </template>
            <v-slide-item v-for="(review, i) in classReview" :key="i">
              <v-alert class="mx-2" outlined color="#769de4">
                <v-card
                  class="custom-scrollbar"
                  flat
                  width="385"
                  max-height="500"
                  style="overflow-x:hidden"
                >
                  <v-btn class="my-10 white--text rounded-lg" color="#769de4">{{
                    review.title
                  }}</v-btn>
                  <div
                    class="mb-5"
                    style="color: #979797; line-break: strict; word-break:keep-all"
                  >
                    <span v-html="review.content"></span>
                  </div>
                  <div style="color: #769de4" class="font-weight-bold">
                    from, {{ review.from }}
                  </div>
                </v-card>
              </v-alert>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>

        <v-card
          class="rounded-xl mx-auto"
          :width="isMobile ? '95%' : '80%'"
          style="margin-bottom:150px"
        >
          <v-img
            class="rounded-xl"
            width="100%"
            height="250"
            src="https://marketplace.canva.com/MADGyejemqw/4/screen_2x/canva-imac-turned-on-MADGyejemqw.jpg"
          ></v-img>
          <v-card
            style="position:absolute;bottom:-100px;width:80%;left: 50%; transform: translateX(-50%)"
            class="pa-2 text-center rounded-xl"
          >
            <div class="font-weight-bold title mb-3">영작 UPGRADE</div>
            <div class="caption-text mb-5" style="color:#b7b7b7">
              수업 끝나고 바로 바로 더 나은 표현, 녹음파일 제공 쉽게 영어를 배울
              수있습니다. !
            </div>
            <v-btn class="rounded-lg caption-text white--text" color="#5a55a1"
              >강의실 바로가기</v-btn
            >
          </v-card>
        </v-card>

        <v-card flat>
          <span style="visibility:hidden">test</span>
        </v-card>

        <!-- <v-container class="px-10 mx-10 mb-5">
          <div class="h5 text-left">1:1 글쓰기.</div>
          <div class="caption-text text-left">오늘 연습한 표현을 활용하여 영작해주세요.</div>
        </v-container>
        <v-card flat class="rounded-xl mx-auto" :width="isMobile ? '95%' : '80%'">
          <v-textarea height="150" outlined color="#769de4"></v-textarea>
        </v-card>

        <v-card flat class="rounded-xl mx-auto mb-10 px-10" :width="isMobile ? '95%' : '80%'">
          <v-btn
            block
            class="white--text rounded-pill px-10"
            style="background: linear-gradient(to right, #add6f5,  #85a5df);"
          >수강신청 바로가기</v-btn>
        </v-card>

        <v-container class="px-10 mx-10 mb-5">
          <div class="h5 text-left">영작 피드백</div>
          <div class="caption-text text-left">강사님이 직접 남겨주신 피드백입니다 .</div>
        </v-container>
        <v-card flat class="rounded-xl mx-auto" :width="isMobile ? '95%' : '80%'">
          <v-textarea height="150" outlined color="#769de4"></v-textarea>
        </v-card>-->
      </v-card>
    </v-container>
  </v-app>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 3px;
  background-color: #f5f5f5;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #838181;
}

.marquee-container {
  overflow: hidden;
  position: relative;
}

.marquee-container .marquee-moving {
  width: 100%;
  height: 100%;
  margin: 0;
  text-align: center;
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  -moz-animation: scroll-left 2s linear infinite;
  -webkit-animation: scroll-left 2s linear infinite;
  animation: scroll-left 20s linear infinite;
}

@-moz-keyframes scroll-left {
  0% {
    -moz-transform: translateX(0%);
  }
  100% {
    -moz-transform: translateX(-100%);
  }
}

@-webkit-keyframes scroll-left {
  0% {
    -webkit-transform: translateX(0%);
  }
  100% {
    -webkit-transform: translateX(-100%);
  }
}

@keyframes scroll-left {
  0% {
    -moz-transform: translateX(0%);
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
  100% {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
</style>

<script>
export default {
  data() {
    return {
      rating: 4.8,
      screenWidth: "",
      isMobile: false,

      marqueeImagesRow1: [
        require("../assets/curriculum/1st_step.jpg"),
        require("../assets/curriculum/adv_phonics.jpg"),
        require("../assets/curriculum/bd_1.webp"),
        require("../assets/curriculum/be_sd.jpg"),
        //   require("../assets/curriculum/c-course_jr.jpg"),
        require("../assets/curriculum/cabin_crew.jpg"),
        require("../assets/curriculum/conv.jpg"),
        require("../assets/curriculum/dd_1.jpg"),
        require("../assets/curriculum/debate.jpg")
      ],

      marqueeImagesRow2: [
        require("../assets/curriculum/dp_sp.webp"),
        require("../assets/curriculum/email.jpg"),
        require("../assets/curriculum/ft_ds1.webp"),
        require("../assets/curriculum/ft_op1.webp"),
        require("../assets/curriculum/hotel.jpg"),
        require("../assets/curriculum/ielts.jpg"),
        require("../assets/curriculum/int_1.webp"),
        require("../assets/curriculum/interactive.jpg"),
        require("../assets/curriculum/it_1.jpg")
      ],

      marqueeImagesRow3: [
        require("../assets/curriculum/medical_english.jpg"),
        require("../assets/curriculum/meeting.jpg"),
        require("../assets/curriculum/milestones.jpg"),
        require("../assets/curriculum/negotiation.jpg"),
        require("../assets/curriculum/news.jpg"),
        require("../assets/curriculum/p_course_jr.jpg"),
        require("../assets/curriculum/phonics.jpg"),
        require("../assets/curriculum/presentation.jpg"),
        require("../assets/curriculum/pr-1.webp"),
        require("../assets/curriculum/sp_1.jpg")
      ],

      subtext: {
        singer: [
          "애드시런",
          "아델",
          "저스틴 비버",
          "빌리 아일리시",
          "비욘세",
          "리한나",
          "셀레나 고메즈",
          "찰리푸스",
          "카밀라 카베요",
          "샤샤슬론",
          "샘 헨쇼",
          "줄리아 마이클스",
          "제드 앤 켈라니",
          "키아나 레데",
          "리암 페인"
        ],
        vogue: [
          "테일러 스위프트와 함께하는 73개의 질문들",
          "빅토리아 베컴의 가방속",
          "카이아 거버의 가방속",
          "테일러 힐이 런웨이 준비하는 법",
          "…"
        ],
        movie: [
          "오션스 8",
          "악마는 프라다를 입는다.",
          "라라랜드",
          "엠메스톤의 이지",
          "…"
        ]
      },
      koreanTextGrey: [
        {
          title: "재미없는 수업 그만.",
          text: "- 뭔가 재미있는 주제로 공부할 순 없을까?"
        },
        {
          title: "믿을 수 없는 내 의지력....",
          text: "- 지속성 없는 온라인 수업은 그만"
        },
        {
          title: "스피킹은 언제나 제자리?",
          text: "- 문법, 단어, 독해가 되어도 스피킹이 안 된다면?"
        },
        {
          title: "평범한 인강은 이제 그만.",
          text:
            "- 나에게 관련 없는 주제, 책상에 앉아서 일방적으로 듣기만 하는 강의는 지쳐요."
        },
        {
          title: "학원 가느라 한 시간 ㅠㅠ",
          text: "- 길바닥에 버리는 시간 너무 아까워요."
        }
      ],

      koreanTextBlue: [
        {
          title: "다양한 주제로!",
          text:
            "- 무비, 셀럽 인터뷰, TED, 최신Pop, 패션등 다양한 주제로 수업해보세요."
        },
        {
          title: "친구같은 강사님과 매일 1:1 수업",
          text:
            "- 외국인 강사님과 더 생생하고 편한한 분위기로 수업합니다. <br> - 프리토킹 클래스로 영어 실력을 쌓아보세요."
        },
        {
          title: "스피킹 실력=말하기 시간! ",
          text: "- 원어민과 말하기 시간을 획기적으로 늘려드려요."
        },
        {
          title: "실시간, 쌍방향 소통 ",
          text:
            "- 다양한 주제로 친구 같은 강사님과 매일 “영어수다”를 나눠보세요."
        },
        {
          title: "내 시간은 소중하니깐.",
          text:
            "- 언제 어디서나, 원하는 시간대에 메가토킹 선생님이 전화를 걸어 실시간 강의가 가능해요."
        }
      ],

      classReview: [
        {
          title: "미란다 선생님",
          content:
            "벌써 몇 달이 지났네요. 버벅버벅 대던 제가 이제는 몇 마디라도 말상대가 되다니 신기합니다. 오로지 문법만 부여잡고 영어공부하던 일들이 생각납니다. <br><br> 지금 시대에 영어가 필요함에도 정확히 표현하지 못했던 제게 전화영어는 참 소중한 존재입니다. 그중에서도 미란다 선생님의 도움이 아주 컸습니다. 항상 재치있고 발랄하게 받아쳐 주시고, 재미있게 이끌어주셔서 고마울 따름입니다. <br><br> 개인적으로 연락이 되면 자그마한 선물이라도 드리고 싶건만... Teacher's day를 주제로 한 오늘 수업도 감사하고 재미있었습니다. 항상 웃음을 잃지않고, 좋은 일만 가득하시길 빌께요.",
          from: "Sunny"
        },
        {
          title: "메가토킹 완전 좋네여",
          content:
            "올해 2월 전화영어란걸 알게되서, 비교해보려고 몇군데서 전화영어를 하고있는데 메가토킹 진짜 좋네요... <br><br>선생님이 대화를 굉장히 잘 이끌어주시네요. 틀리면 고쳐서 바로 말해주셔서 정확한 표현을 배울 수 있고, 단어도 다양하게 사용해주셔서 공부가 많이 됩니다.<br><br>부담없이 꽉 찬 수업 했다는 느낌을 받았고<br><br>피드백도 다른데는 늘 똑같은 말만 써있어서 아쉬웠는데.. 메가토킹은 피드백도 다르네요. 잘못된 표현과 발음을 제대로 점검하고 고칠 수 있고 더 공부할 수 있어서 유익하네요..<br><br> 미란다 선생님, 좋은 수업 감사합니다",
          from: "Hyewon"
        },
        {
          title: "miranda 선생님 감사해요!!",
          content:
            "전화영화 시작하면서 miranda 선생님과 함께한지 8개월 됐는데 무엇보다 영어 울렁증이 없어졌어요. <br>여행가서도 말 한마디 더 할 수 있게 돼서 좋고 아직은 부족하지만 선생님이 열심히 가르쳐주셔서 좋아요 !! 유쾌하시고 천천히 잘 알려주셔서 너무 좋아요 !!!선생님 감사해요 !!!",
          from: "Minjoo"
        },
        {
          title: "수강후기입니다!",
          content:
            "이번에 바쁠것 같아 주2회 10분 수업을 진행하고 있는데 역시나 시간이<br>모자라네요ㅜㅜ<br>일단 선생님께서 흥이 많아서 수업이 늘 즐거웠습니다. ㅋㅋㅋㅋㅋㅋㅋㅋ<br>그리고 역시 짧은 시간이라 그런지 프리토킹 하니까 더 좋은거같아요 >< <br>메가토킹으로 외국인 친구 사귄느낌이랄까<br>여튼 만족하며 하고 있어요!!:)",
          from: "Elly"
        },
        {
          title: "Nathan 선생님 참 좋아요",
          content:
            "메가토킹을 만난지는 5년도 더 된것 같고.. Nathan 선생님과 벌써 한 1년? 정도 매일<br>대화를 하고 있어요. 사람이 어린나이 일텐데 참 깊고, 따뜻하다라는 느낌을 받네요. 매일 출근<br>전 저의 영혼을 정화시켜주는 선생님 입니다. 그간 영어도 많이 늘어서 지금은 pardon?<br>이런것도 거의 없고 해외 출장나가도 좀 더 적극적으로 대화할 수 있게 되었어요. 필리핀 간다면<br>꼭 만나서 식사도 대접하고 싶지만, 당장은 여유가 안되니.. 메가토킹에서 제 감사함을 다양한<br>방식으로 전달해 주셨으면 합니다. 감사합니다.",
          from: "Nate"
        },
        {
          title: "재구매의향 있습니다.",
          content:
            "외국을 다녀온 후 영어의 감을 유지하고 싶어 메가토킹을 시작한지 이제 한달을 채워가는 중입니다.<br>20분이 무색할 정도로 질문과 답변으로 수업을 채워가며 문법 상 맞지 않는 부분에 대해<br>수정해주십니다. 친절하시고 리액션도 좋으셔서 자신감을 잃지 않고 계속 대화를 이어나갈 수 있는 것<br>같습니다. 그리고 고객센터가 너무 친절하십니다. 매번 카톡으로 궁금점과 변경사항 요청을 하는데 답변도<br>빠르시고 변경 또한 빠르게 해주십니다. 기간이 끝나기 전에 한번 더 연장 신청할 의향 있습니다.",
          from: "Hannah"
        },
        {
          title: "Tracie 선생님, 저에게 최고의 선생님이십니다 ^^",
          content:
            "그동안 작심삼일로 띄엄띄엄, 메가토킹 통해서 수년을 수업했어요.<br>영어는 지속의 힘이 전부인데 그게 쉽지가 않았어요.<br>본인의 의지가 가장 중요하고, 더불어 지도해 주시는 선생님의 에너지까지 더해지면 너무 좋죠!<br><br>지난 여름, 다시 영어수업을 시작하면서 만난 Tracie 선생님을 자랑하고 싶습니다.<br>1. 일관성있게 수업을 리드해 주십니다.<br>2. 교재를 전반적으로 잘 파악하고 계셔서 수업진행이 유연하십니다.<br>3. 발음이 참 좋으십니다.<br>4. 성실하십니다. (이 부분은 제가 선생님을 본받아야 해요 ㅜ,ㅜ)<br>5. 영작교정도 깔끔하게 잘 해 주십니다.<br><br>그 외에도 수업진행방식에 더 좋은 의견이 있으면 언제든지 말해 달라고 하셨고,<br>따뜻한 분위기로 수업해 주셔서 내내 만족하고 있습니다.<br>Tracie 선생님과 연결된게 너무 감사해요.<br>앞으로도 저는 영원히 Tracie 선생님의 열혈수강생 하렵니다 ^^",
          from: "Jasmine"
        },
        {
          title: "전화영어 수강 후기^^",
          content:
            "안녕하세요, 약 두달정도 전화영어를 하고있습니다. 처음에는 한달만 해볼까하는 마음으로 수업 신청했어요 한달 동한 주2회 20분 수업을 진행했는데 만족스러워서 3개월 수강권을 구매해서 전화영어를 계속하고있습니다ㅋ Sandra선생님과 수업을하고있는데 발음도 친절하게 잘잡아주시고,제가 질문을 이해못할때 이해할수있도록 설명해주셔서서 너무 만족해하고있습니다! 아직 두달밖에 하지않아서 눈에 뛰게 큰 변화가 있는건 아니지만 두달전과 달라진 모습을 외국인친구들과 마주칠때 확실하게 느낄수있었어요~ 듣고 이해하는 속도가 빨라졌고 무엇보다 제일 좋았던점은 외국인과 대화하는 두려움에서 벗어나서 문법이 틀리더라도 대화를 이어가면서 배워나간다는 점입니다.이 점때문에 앞으로 꾸준히 전화영어를 해야겠다고 결심했어요!좋은 수업 감사합니다!",
          from: "Bella"
        },
        {
          title: "Teacher Andrea 안드레아 선생님께.",
          content:
            "벌써 안드레아 선생님과 함께 수업한지 10달째가 되었네요. 저는 메가토킹 말고도 다른 영어통신수업을 두군데를 더 하고 있어요. 메가토킹까지 총 세군데를 하고 있네요. 한곳은 문법 위주로 하고 있고, 한곳은 단어를 제시해 주시면 그것들로 제가 문장을 만들고 있어요 수업을 할 때마다 단어가 늘어나고 있습니다. 메가토킹에서는 나머지 두군데서 배운 것들을 여기다가 몽땅 써먹는 것으로 활용하고 있어요. 왜냐하면 안드레아 선생님께서는 이야기를 잘 들어주시고 수정을 정말 완벽하게 해 주십니다. <br><br> 수업할때 이야기를 많이 하는 것도 중요하지만, 여기서 제공해주는 첨삭문의 하는 것도 정말 많은 도움이 되고 있습니다. 제 문장을 수정해주는것 뿐만 아니라 왜 틀렸는지에 대해서도 코멘트도 달아주고 항상 응원 메세지도 잊지 않으십니다. <br><br> 안드레아 선생님께서 수정해 주신 것을 다른 통신영어하는곳 선생님께(캐나다 사람이고 이분께서 새로운 단어 제시해 주시고 문장만들기를 하고 있음)보여드렸더니 문법적으로 완벽하다고 하시더군요. 그 이후로더욱 맹신하게 되었습니다. 안드레아 선생님을요! <br><br> 안드레아 선생님께서는 제가 쓰는 편지를 즐겁게 읽고 있다고 하십니다. 제가 영어 선생님 입장이라면 귀찮게 이런것을 많아 주면 싫을 수도 있을것 같은데.. 하는 미안안 생각도 있지만 정말 고마운 마음으로 하고있습니다.",
          from: "Daisy"
        },
        {
          title: "Annie 선생님 추천~~",
          content:
            "애니 선생님을 추천합니다. 지금 7년째 하고 있는 선생님인데 정말 좋습니다. 다른 회사 선생님도 만나봤고, 메가토킹안에서도 다른 분과 수업한적 있었는데요 애니 선생님만큼 잘 들어주고 이해해주고 가르쳐주는 사람은 없었습니다. <br><br> 하지만 하고 싶으셔도 못할거에요. 이미 선생님 스케줄이 다 찼기때문이에요. 간혹 한자리씩 난다고 하니 문의해보세요.<br><br> I recommend Annie teacher to anyone that really wants to improve English level. I met several teachers before meeting Annie but they didn't meet what I want. When I talked with her for the first time, she has been really nice and a good listener. Over 6 years, my English level has been higher than before.<br><br> DO YOU KNOW THAT? She has a full schedule so it's hard to catch herclass.but if you catch it, you could be lucky in theWorld.<br><br>bye~<br><br>P.S. Take care, Annie!",
          from: "Yuna"
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
    this.onWindowResize();
  },

  methods: {
    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
    }
  }
};
</script>
