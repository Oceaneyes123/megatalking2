<template>
  <v-app style="background-color: #00000000">
    <v-container fluid class="py-0 px-0 mx-0">
      <v-card flat tile color="#8bb6f700" class="text-center pa-3 px-0">
        <div
          class="h3 font-weight-bold white--text mb-5 gmarket"
          style="margin-top: 200px"
        >
          커리큘럼
        </div>
        <div class="h4 nanum font-weight-bold" style="color: #bfd384">
          “Enjoy English. <br v-if="$vuetify.breakpoint.xsOnly" />
          Enjoy Megatalking.”
        </div>
        <div class="mt-5 h5 nanum white--text">
          메가토킹은 말이 되는 영어, 실전에 강한 영어 회화를 만들어갑니다.
        </div>

        <v-card
          class="rounded-xl mx-auto"
          elevation="7"
          width="100%"
          style="margin-top: 90px"
          max-width="1000px"
          color="#fafafa"
        >
          <v-container class="px-md-10 py-10 mx-0">
            <v-sheet class="mx-auto px-4" color="rgba(0,0,0,0.0)">
              <v-slide-group
                mandatory
                class="mx-auto"
                v-model="slide"
                center-active
              >
                <v-slide-item
                  v-for="(tab, i) in sliderTabs"
                  :key="i"
                  class="mx-1"
                  v-slot:default="{ active }"
                >
                  <v-btn
                    @click="selectCategory($event, i)"
                    depressed
                    class="py-2 rounded-xl"
                    width="97"
                    min-height="80"
                    :class="{ 'blue--text': active }"
                    :color="active ? 'primary' : '#e6f2ff'"
                    :outlined="active"
                  >
                    <div v-html="tab"></div>
                  </v-btn>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>

            <!-- <div
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
            </v-row>-->

            <div class="mt-10 pt-10 h4 nanum text-purple font-weight-bold">
              {{ category }}
              <!-- <span class="h6 text-purple font-weight-bold">기초발음교정 (level 1~3)</span> -->
            </div>
            <div class="d-flex justify-center mb-10">
              <v-card
                flat
                color="#fafafa"
                class="text-center mt-10"
                style="color: #ada8a8; word-break: keep-all; line-break: strict"
                max-width="500"
              >
                {{ curriculumInfo[this.slide] }}
              </v-card>
            </div>

            <!-- Carousel -->
            <v-hover v-slot:default="{ hover }">
              <v-carousel
                :cycle="!hover"
                height="100%"
                v-if="slide == 0"
                hide-delimiter-background
                show-arrows-on-hover
                hide-delimiters
                :interval="isMobile ? `1500` : `6000`"
                @change="changeCarousel(book_list.books_1, $event)"
              >
                <v-carousel-item
                  eager
                  height="750"
                  v-for="(book, i) in book_list.books_1"
                  :key="i"
                >
                  <v-card
                    class="mx-auto rounded-xl"
                    flat
                    max-width="700"
                    color="#dee3ee"
                    :class="isMobile ? 'pt-10' : ''"
                  >
                    <v-container>
                      <v-row>
                        <v-col
                          class="py-0 d-flex justify-center"
                          cols="12"
                          md="5"
                        >
                          <v-card
                            flat
                            color="#fafafa"
                            class="rounded-xl"
                            :height="isMobile ? '' : '100%'"
                            style="border: 1px solid #dee3ee"
                            max-width="300"
                          >
                            <v-card class="mx-auto">
                              <v-img
                                :src="book.image"
                                max-width="300"
                                height="200"
                                class="mx-auto"
                                eager
                              ></v-img>
                            </v-card>

                            <v-card
                              flat
                              color="#fafafa"
                              width="80%"
                              class="
                                subtitle-text-1
                                text-black
                                mx-auto
                                text-center
                                font-weight-black
                                mt-3
                              "
                              >{{ book.title }}</v-card
                            >
                            <v-card
                              flat
                              color="#fafafa"
                              width="80%"
                              max-width="300"
                              class="mx-auto mt-5 text-left caption-text mb-5"
                              style="color: #325fc4"
                              >{{ book.details }}</v-card
                            >
                          </v-card>
                        </v-col>
                        <v-col cols="12" md="7">
                          <v-container fluid>
                            <v-row class="h6 font-weight-bold" justify="center">
                              <div class="text-center text-black">학습교재</div>
                            </v-row>
                            <v-row>
                              <v-col cols="12">
                                <v-img
                                  style="transform: rotate(90deg)"
                                  v-if="book.tab && i % 2 != 1"
                                  :src="book.tab"
                                  width="250"
                                  height="300"
                                  class="mx-auto"
                                  contain
                                  eager
                                ></v-img>
                                <v-img
                                  v-if="book.tab && i % 2 == 1"
                                  :src="book.tab"
                                  width="250"
                                  height="300"
                                  class="mx-auto"
                                  contain
                                  eager
                                ></v-img>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" class="d-flex align-end">
                                <div
                                  class="d-flex flex-row align-start mx-auto"
                                >
                                  <div
                                    class="
                                      h5
                                      nanum
                                      text-black text-left
                                      mr-5
                                      font-weight-bold
                                    "
                                    style="
                                      line-break: strict;
                                      word-break: keep-all;
                                      color: #325fc4;
                                    "
                                  >
                                    {{ title }}
                                  </div>
                                  <v-btn
                                    class="
                                      rounded-xl
                                      white--text
                                      font-weight-bold
                                      h5
                                      nanum
                                      mb-5
                                    "
                                    :style="{
                                      background: `linear-gradient(90deg, ${gradient})`
                                    }"
                                    @click="$router.push('/enrollment')"
                                    >수강신청</v-btn
                                  >
                                </div>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-carousel-item>
              </v-carousel>

              <CurriculumSliderGroup
                v-else-if="slide == 1 || slide == 2 || slide == 3 || slide == 8"
                :current-book="currentBook"
                :mobile="isMobile"
              ></CurriculumSliderGroup>

              <CurriculumCarousel
                v-else
                :current-book="currentBook"
                :mobile="isMobile"
              ></CurriculumCarousel>
            </v-hover>

            <!--    <v-carousel
              cycle
              height="100%"
              v-if="slide == 3"
              hide-delimiter-background
              show-arrows-on-hover
              hide-delimiters
              @change="changeCarousel(book_list.books_4, $event)"
            >
              <v-carousel-item
                eager
                height="750"
                v-for="(book, i) in book_list.books_4"
                :key="i"
              >
                <v-card
                  class="mx-auto rounded-xl"
                  flat
                  max-width="700"
                  color="#dee3ee"
                >
                  <v-row>
                    <v-col class="py-0 d-flex justify-center" cols="12" md="5">
                      <v-card
                        flat
                        color="#fafafa"
                        class="rounded-xl"
                        :height="isMobile ? '' : '100%'"
                        style="border: 1px solid #dee3ee"
                        max-width="300"
                      >
                        <v-img
                          :src="book.image"
                          max-width="300"
                          height="200"
                          class="mx-auto"
                          eager
                        ></v-img>
                        <v-card
                          flat
                          color="#fafafa"
                          width="80%"
                          class="subtitle-text-1 text-black mx-auto text-center font-weight-black mt-3"
                          >{{ book.title }}</v-card
                        >
                        <v-card
                          flat
                          color="#fafafa"
                          width="80%"
                          max-width="300"
                          class="mx-auto mt-5 text-left caption-text mb-5"
                          style="color: #325fc4"
                          >{{ book.details }}</v-card
                        >
                      </v-card>
                    </v-col>
                    <v-col cols="12" md="7">
                      <v-container fluid>
                        <v-row class="h6 font-weight-bold" justify="center">
                          <div class="text-center text-black">학습교재</div>
                        </v-row>
                        <v-row>
                          <v-col cols="6">
                            <v-img
                              v-if="book.mobile"
                              :src="book.mobile"
                              width="250"
                              height="300"
                              contain
                              eager
                            ></v-img>
                          </v-col>
                          <v-col cols="6" class="d-flex align-end">
                            <div class="d-flex flex-column align-start">
                              <v-btn
                                class="rounded-xl white--text font-weight-bold h5 nanum mb-5"
                                style="
                                  background: linear-gradient(
                                    to right,
                                    #8fa1fe,
                                    #4d94e9
                                  );
                                "
                                @click="$router.push('/enrollment')"
                                >수강신청</v-btn
                              >
                              <div
                                class="h5 nanum text-black text-left"
                                style="line-break: strict; word-break: keep-all"
                              >
                                {{ title }}
                              </div>
                            </div>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-col>
                  </v-row>
                </v-card>
              </v-carousel-item>
            </v-carousel>

            <v-carousel
              cycle
              height="100%"
              v-if="slide == 4"
              hide-delimiter-background
              show-arrows-on-hover
              hide-delimiters
              @change="changeCarousel(book_list.books_5, $event)"
            >
              <v-carousel-item
                eager
                height="750"
                v-for="(book, i) in book_list.books_5"
                :key="i"
              >
                <v-card
                  class="mx-auto rounded-xl"
                  flat
                  max-width="700"
                  color="#dee3ee"
                >
                  <v-row>
                    <v-col class="py-0 d-flex justify-center" cols="12" md="5">
                      <v-card
                        flat
                        color="#fafafa"
                        class="rounded-xl"
                        :height="isMobile ? '' : '100%'"
                        style="border: 1px solid #dee3ee"
                        max-width="300"
                      >
                        <v-img
                          :src="book.image"
                          max-width="300"
                          height="200"
                          class="mx-auto"
                          eager
                        ></v-img>
                        <v-card
                          flat
                          color="#fafafa"
                          width="80%"
                          class="subtitle-text-1 text-black mx-auto text-center font-weight-black mt-3"
                          >{{ book.title }}</v-card
                        >
                        <v-card
                          flat
                          color="#fafafa"
                          width="80%"
                          max-width="300"
                          class="mx-auto mt-5 text-left caption-text mb-5"
                          style="color: #325fc4"
                          >{{ book.details }}</v-card
                        >
                      </v-card>
                    </v-col>
                    <v-col cols="12" md="7">
                      <v-container fluid>
                        <v-row class="h6 font-weight-bold" justify="center">
                          <div class="text-center text-black">학습교재</div>
                        </v-row>
                        <v-row>
                          <v-col cols="6">
                            <v-img
                              v-if="book.mobile"
                              :src="book.mobile"
                              width="250"
                              height="300"
                              contain
                              eager
                            ></v-img>
                          </v-col>
                          <v-col cols="6" class="d-flex align-end">
                            <div class="d-flex flex-column align-start">
                              <v-btn
                                class="rounded-xl white--text font-weight-bold h5 nanum mb-5"
                                style="
                                  background: linear-gradient(
                                    to right,
                                    #8fa1fe,
                                    #4d94e9
                                  );
                                "
                                @click="$router.push('/enrollment')"
                                >수강신청</v-btn
                              >
                              <div
                                class="h5 nanum text-black text-left"
                                style="line-break: strict; word-break: keep-all"
                              >
                                {{ title }}
                              </div>
                            </div>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-col>
                  </v-row>
                </v-card>
              </v-carousel-item>
            </v-carousel>

            <v-carousel
              cycle
              height="100%"
              v-if="slide == 5"
              hide-delimiter-background
              show-arrows-on-hover
              hide-delimiters
              @change="changeCarousel(book_list.books_6, $event)"
            >
              <v-carousel-item
                eager
                height="750"
                v-for="(book, i) in book_list.books_6"
                :key="i"
              >
                <v-card
                  class="mx-auto rounded-xl"
                  flat
                  max-width="700"
                  color="#dee3ee"
                >
                  <v-row>
                    <v-col class="py-0" cols="12" md="5">
                      <v-card
                        flat
                        color="#fafafa"
                        class="rounded-xl"
                        :height="isMobile ? '' : '100%'"
                        style="border: 1px solid #dee3ee"
                        max-width="300"
                      >
                        <v-img
                          :src="book.image"
                          max-width="300"
                          height="200"
                          class="mx-auto"
                          eager
                        ></v-img>
                        <v-card
                          flat
                          color="#fafafa"
                          width="80%"
                          class="subtitle-text-1 text-black mx-auto text-center font-weight-black mt-3"
                          >{{ book.title }}</v-card
                        >
                        <v-card
                          flat
                          color="#fafafa"
                          width="80%"
                          max-width="300"
                          class="mx-auto mt-5 text-left caption-text mb-5"
                          style="color: #325fc4"
                          >{{ book.details }}</v-card
                        >
                      </v-card>
                    </v-col>
                    <v-col cols="12" md="7">
                      <v-container fluid>
                        <v-row class="h6 font-weight-bold" justify="center">
                          <div class="text-center text-black">학습교재</div>
                        </v-row>
                        <v-row>
                          <v-col cols="6">
                            <v-img
                              v-if="book.mobile"
                              :src="book.mobile"
                              width="250"
                              height="300"
                              contain
                              eager
                            ></v-img>
                          </v-col>
                          <v-col cols="6" class="d-flex align-end">
                            <div class="d-flex flex-column align-start">
                              <v-btn
                                class="rounded-xl white--text font-weight-bold h5 nanum mb-5"
                                style="
                                  background: linear-gradient(
                                    to right,
                                    #8fa1fe,
                                    #4d94e9
                                  );
                                "
                                @click="$router.push('/enrollment')"
                                >수강신청</v-btn
                              >
                              <div
                                class="h5 nanum text-black text-left"
                                style="line-break: strict; word-break: keep-all"
                              >
                                {{ title }}
                              </div>
                            </div>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-col>
                  </v-row>
                </v-card>
              </v-carousel-item>
            </v-carousel>

            <v-carousel
              cycle
              height="100%"
              v-if="slide == 6"
              hide-delimiter-background
              show-arrows-on-hover
              hide-delimiters
              @change="changeCarousel(book_list.books_7, $event)"
            >
              <v-carousel-item
                eager
                height="750"
                v-for="(book, i) in book_list.books_7"
                :key="i"
              >
                <v-card
                  class="mx-auto rounded-xl"
                  flat
                  max-width="700"
                  color="#dee3ee"
                >
                  <v-row>
                    <v-col class="py-0 d-flex justify-center" cols="12" md="5">
                      <v-card
                        flat
                        color="#fafafa"
                        class="rounded-xl"
                        :height="isMobile ? '' : '100%'"
                        style="border: 1px solid #dee3ee"
                        max-width="300"
                      >
                        <v-img
                          :src="book.image"
                          max-width="300"
                          height="200"
                          class="mx-auto"
                          eager
                        ></v-img>
                        <v-card
                          flat
                          color="#fafafa"
                          width="80%"
                          class="subtitle-text-1 text-black mx-auto text-center font-weight-black mt-3"
                          >{{ book.title }}</v-card
                        >
                        <v-card
                          flat
                          color="#fafafa"
                          width="80%"
                          max-width="300"
                          class="mx-auto mt-5 text-left caption-text mb-5"
                          style="color: #325fc4"
                          >{{ book.details }}</v-card
                        >
                      </v-card>
                    </v-col>
                    <v-col cols="12" md="7">
                      <v-container fluid>
                        <v-row class="h6 font-weight-bold" justify="center">
                          <div class="text-center text-black">학습교재</div>
                        </v-row>
                        <v-row>
                          <v-col cols="6">
                            <v-img
                              v-if="book.mobile"
                              :src="book.mobile"
                              width="250"
                              height="300"
                              contain
                              eager
                            ></v-img>
                          </v-col>
                          <v-col cols="6" class="d-flex align-end">
                            <div class="d-flex flex-column align-start">
                              <v-btn
                                class="rounded-xl white--text font-weight-bold h5 nanum mb-5"
                                style="
                                  background: linear-gradient(
                                    to right,
                                    #8fa1fe,
                                    #4d94e9
                                  );
                                "
                                @click="$router.push('/enrollment')"
                                >수강신청</v-btn
                              >
                              <div
                                class="h5 nanum text-black text-left"
                                style="line-break: strict; word-break: keep-all"
                              >
                                {{ title }}
                              </div>
                            </div>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-col>
                  </v-row>
                </v-card>
              </v-carousel-item>
            </v-carousel>

            <v-slide-group
              v-model="bookSlide6"
              v-if="slide == 7"
              :show-arrows="!isMobile"
              class="mb-3"
            >
              <v-slide-item
                v-for="(book, i) in book_list.books_8"
                :key="i"
                :class="i == 1 ? 'mr-auto' : 'ml-auto'"
              >
                <v-card
                  flat
                  color="#fafafa"
                  class="rounded-xl mx-2"
                  max-height="500"
                  style="border: 1px solid #dee3ee"
                >
                  <v-img
                    :src="book.image"
                    max-width="300"
                    height="200"
                    class="mx-auto"
                    eager
                  ></v-img>

                  <v-card
                    flat
                    color="#fafafa"
                    width="80%"
                    class="subtitle-text-1 mx-auto text-center font-weight-black mt-3"
                    >{{ book.title }}</v-card
                  >
                  <v-card
                    flat
                    color="#fafafa"
                    width="80%"
                    max-width="300"
                    class="mx-auto mt-5 text-left caption-text mb-5"
                    style="color: #325fc4"
                    >{{ book.details }}</v-card
                  >
                </v-card>
              </v-slide-item>
            </v-slide-group>

            <v-slide-group
              v-model="bookSlide7"
              v-if="slide == 8"
              :show-arrows="!isMobile"
              class="mb-3"
            >
              <v-slide-item v-for="(book, i) in book_list.books_9" :key="i">
                <v-card
                  flat
                  color="#fafafa"
                  class="rounded-xl mx-2"
                  max-height="500"
                  style="border: 1px solid #dee3ee"
                >
                  <v-img
                    :src="book.image"
                    max-width="300"
                    height="200"
                    class="mx-auto"
                    eager
                  ></v-img>

                  <v-card
                    flat
                    color="#fafafa"
                    width="80%"
                    class="subtitle-text-1 mx-auto text-center font-weight-black mt-3"
                    >{{ book.title }}</v-card
                  >
                  <v-card
                    flat
                    color="#fafafa"
                    width="80%"
                    max-width="300"
                    class="mx-auto mt-5 text-left caption-text mb-5"
                    style="color: #325fc4"
                    >{{ book.details }}</v-card
                  >
                </v-card>
              </v-slide-item>
            </v-slide-group> -->

            <div
              class="text-purple headline font-weight-bold text-center mt-10"
            >
              “짜임새 있고 기초부터
              <br v-if="$vuetify.breakpoint.xsOnly" />
              탄탄한영어를 만듭니다.”
            </div>
            <div
              class="
                text--secondary
                mt-3
                subheading
                font-weight-bold
                korean-text
              "
            >
              메가토킹은 말이 되는 영어,
              <br v-if="$vuetify.breakpoint.xsOnly" />
              실전에 강한 영어 회화를 만들어갑니다.
            </div>
            <v-row class="mt-10" justify="center">
              <v-col cols="12" md="3" class="px-3">
                <v-img
                  src="../assets/c-icon1.png"
                  width="200"
                  class="mx-auto"
                  eager
                ></v-img>
                <div class="h5 font-weight-black">기초부터 탄탄하게</div>
                <div
                  class="h7 text--secondary mt-3 korean-text"
                  style="letter-spacing: -1px !important"
                >
                  레벨테스트를 통해 나의 영어실력에 맞춘 수업을
                  <br v-if="$vuetify.breakpoint.xsOnly" />
                  선택하여 들을 수 있습니다.
                </div>
              </v-col>
              <v-col cols="12" md="3" class="px-3">
                <v-img
                  src="../assets/c-icon2.png"
                  width="200"
                  class="mx-auto"
                  eager
                ></v-img>
                <div class="h5 font-weight-black">비즈니스 맞춤형</div>
                <div
                  class="h7 text--secondary mt-3"
                  style="letter-spacing: -1px !important"
                >
                  비즈니즈 과정을 통해 회화를 보다 빠르게 배울 수 있습니다.
                </div>
              </v-col>
              <v-col cols="12" md="3" class="px-3">
                <v-img
                  src="../assets/c-icon3.png"
                  width="200"
                  class="mx-auto"
                  eager
                ></v-img>
                <div class="h5 font-weight-black">폰에서 보는 교재</div>
                <div
                  class="h7 text--secondary mt-3"
                  style="letter-spacing: -1px !important"
                >
                  별도의 출력 없이 교재를 다운로드 하실 수 있습니다.
                </div>
              </v-col>
            </v-row>

            <!-- <v-row v-if="isMobile">
              <v-tabs grow>
                <v-tab v-for="(tab, i) in booksInLevels" :key="i"
                  >Level {{ tab.level }}</v-tab
                >
                <v-tab-item v-for="(item, i) in booksInLevels" :key="i">
                  <v-carousel hide>
                   <v-carousel-item eager
                      v-for="(book, j) in booksInLevels[i].books"
                      :key="j"
                    >
                      <v-card>{{ book }}</v-card>
                    </v-carousel-item>
                  </v-carousel>
                </v-tab-item>
              </v-tabs>
            </v-row> -->

            <v-row v-if="$vuetify.breakpoint.smAndUp">
              <v-card flat color="#00000000">
                <v-img
                  src="../assets/level-diagram.png"
                  width="100%"
                  eager
                ></v-img>
              </v-card>
            </v-row>

            <!-- <v-container v-if="!isMobile">
              <v-row justify="center" class="my-10">
                <v-card
                  flat
                  class="rounded-xl"
                  style="width: 1000px !important"
                >
                  <v-simple-table>
                    <template v-slot:default>
                      <thead class="rounded-xl">
                        <tr
                          class="rounded-xl"
                          style="
                            background: linear-gradient(
                              to right,
                              #83b7d3,
                              #725ce0
                            );
                            border-radius: 25px;
                          "
                        >
                          <th style="background: #bed6e94f"></th>
                          <th
                            colspan="3"
                            class="text-center white--text"
                            style="background: #725ce0"
                          >
                            Level 1 ~ 3
                          </th>
                          <th
                            colspan="2"
                            class="text-center white--text"
                            style="background: #725ce0"
                          >
                            Level 4 ~ 5
                          </th>
                          <th
                            colspan="2"
                            class="text-center white--text"
                            style="background: #725ce0"
                          >
                            Level 6 ~ 7
                          </th>
                          <th
                            colspan="2"
                            class="text-center white--text"
                            style="background: #725ce0"
                          >
                            Level 8 ~ 9
                          </th>
                          <th
                            class="text-center white--text"
                            style="background: #725ce0"
                          >
                            Level 10
                          </th>
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
                            <br />동사연습편1 <br />상황별연습1
                          </td>
                          <td>
                            동사연습편2
                            <br />상황별연습2 <br />비즈니스전화
                          </td>
                          <td>
                            동사연습편3
                            <br />상황별연습3 <br />비즈니스회의
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
            </v-container> -->

            <v-container v-else>
              <v-row justify="center">
                <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                  <v-timeline-item color="#6cb7de" fill-dot small>
                    <v-card color="#6cb7de" dark>
                      <v-card-title class="title"> Level 1 - 3 </v-card-title>
                      <v-card-text class="white text--primary korean-text">
                        <div class="korean-text text-center pt-3">
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            입문과정
                          </p>
                          <p class="mb-1">기초 발음교정</p>
                          <p class="mb-1">기초 문장연습</p>
                          <p>기초 회화연습</p>
                        </div>
                        <div>
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            초/ 중급 <br />회화과정
                          </p>
                          <p>초급회화</p>
                        </div>
                        <div>
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            문법 <br />패턴과정
                          </p>
                          <p>기초 패턴회화</p>
                        </div>
                        <div>
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            토론/ <br />프리토킹
                          </p>
                          <p>초급 토론과정</p>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="#55a1cd" fill-dot small>
                    <v-card color="#55a1cd" dark>
                      <v-card-title class="title"> Level 4 - 5 </v-card-title>
                      <v-card-text class="white text--primary korean-text">
                        <div class="pt-3">
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            <br />잉글리쉬 문법
                          </p>
                          <p>중급회화</p>
                        </div>
                        <div>
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            정규 <br />회화과정
                          </p>
                          <p>중급 토론과정</p>
                        </div>
                        <div>
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            토론/ <br />프리토킹
                          </p>
                          <p class="mb-1">심화토론 과정고급</p>
                          <p>주니어 조선 초급</p>
                        </div>
                        <div>
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            영자신문 <br />과정
                          </p>
                          <p class="mb-1">주니어 조선 초급</p>
                          <p>주니어 조선 중급</p>
                        </div>
                        <div>
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            비즈니스
                            <br />과정
                          </p>
                          <p>비즈니스 회화</p>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="#4591c1" fill-dot small>
                    <v-card color="#4591c1" dark>
                      <v-card-title class="title"> Level 6 - 7 </v-card-title>
                      <v-card-text class="white text--primary korean-text">
                        <div class="pt-3 korean-text">
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            뉴욕라이브 <br />잉글리쉬
                          </p>
                          <p>뉴욕라이브 잉글리쉬</p>
                        </div>
                        <div>
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            문법 <br />패턴과정
                          </p>
                          <p>문법 패턴회화</p>
                        </div>
                        <div>
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            토론/
                            <br />프리토킹
                          </p>
                          <p>시사 토론과정</p>
                        </div>
                        <div>
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            영자신문 <br />과정
                          </p>
                          <p class="mb-1">주니어 조선 고급</p>
                          <p>전문조선 초급</p>
                        </div>
                        <div>
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            비즈니스
                            <br />과정
                          </p>
                          <p>비즈니스 맞춤</p>
                        </div>
                        <div>
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            특별전문/
                            <br />취업준비과정
                          </p>
                          <p class="mb-1">취업 인터뷰</p>
                          <p>호텔영어 승무원영어</p>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="#3783b7" fill-dot small>
                    <v-card color="#3783b7" dark>
                      <v-card-title class="title"> Level 8 - 9 </v-card-title>
                      <v-card-text class="white text--primary korean-text">
                        <div class="pt-3">
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            영자신문 <br />과정
                          </p>
                          <p class="mb-1">전문조선 고급</p>
                          <p>전문조선 고급</p>
                        </div>
                        <div>
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            비즈니스 <br />과정
                          </p>
                          <p>비즈니스 토론</p>
                        </div>
                        <div>
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            특별전문/ <br />취업준비과정
                          </p>
                          <p class="mb-1">IELTS 오픽</p>
                          <p>토익스피킹 심화토익스피킹</p>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="#2370a8" fill-dot small>
                    <v-card color="#2370a8" dark>
                      <v-card-title class="title"> Level 10 </v-card-title>
                      <v-card-text class="white text--primary korean-text">
                        <div class="pt-3">
                          <p
                            style="background-color: #5dc5fc40"
                            class="font-weight-bold h6 py-2"
                          >
                            특별전문/
                            <br />취업준비과정
                          </p>
                          <p>의학영어</p>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-timeline-item>
                </v-timeline>
              </v-row>
            </v-container>
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

.text-dark-blue {
  color: #325fc4;
}

.text-black {
  color: #000;
}
</style>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { getBookList, getTabs } from "@/static-database/curriculum.js";
import CurriculumCarousel from "@/components/curriculum/CurriculumCarousel.vue";
import CurriculumSliderGroup from "@/components/curriculum/CurriculumSliderGroup.vue";
import { mapState } from "vuex";

export default {
  components: {
    CurriculumCarousel,
    CurriculumSliderGroup
  },
  data() {
    return {
      slide: null,
      course5: null,
      bookSlide0: 0,
      bookSlide1: 0,
      bookSlide2: 0,
      bookSlide3: 0,
      bookSlide4: 0,
      bookSlide5: 0,
      bookSlide6: 0,
      bookSlide7: 0,
      book_list: [],

      gradient: ["#8fa1fe", "#4d94e9"],

      currentBook: "",
      category: "유튜브 회화과정",
      screenWidth: "",
      isMobile: false,
      title: "",
      sliderTabs: "",

      curriculumInfo: [
        `유튜브 회화과정에서는 다양한 주제의 영상을 이용해 흥미로운 수업을 진행하실 수 있습니다.`,
        `정규회화과정에서는 일상생활의 다양한 주제들과 관련한 회화 표현과 함께 수준별 회화학습이 준비되어 있습니다.
         일반적으로 회화학습을 시작하기 원하는 대부분의 수강생분들이 이 과정부터 시작하실 수 있습니다.`,
        `스피킹 실력향상을 위해서는 다양한 주제를 가지고 본인의 의견을 직접 말해보는 경험을 쌓는것이 중요합니다.
         토론/프리토킹과정에서는 자유로운 스피킹을 위한 다양한 토론주제로 말하기실력을 향상시킵니다.`,
        `직장인 수강생이 딱 필요로 하는 실무 비즈니스 과정들을 고루 담았습니다.
         상황과 필요에 맞춰서 각 과정을 선택하여 수강하실 수 있으며, 직장생활을 준비하려는 목적으로 수강하기에도 훌륭한 대비과정이 될 것입니다. `,
        `회화학습을 시작 하기 전에, 기본적인 문장 구성이나 많이 쓰이는 회화 패턴들을 학습하기 위한 과정입니다.
         기초패턴회화의 경우, 알고 있는 단어를 회화로 이끌어 내기 위해, 기본적인 회화 패턴들을 집중적으로 훈련합니다.
         문법패턴회화의 경우, 기본적인 문법의 개념들을 정리하고, 이를 회화에 직접 응용해보는 과정입니다.`,
        `각 분야별 특별전문과정입니다. 취업준비, 실무준비에 있어서 맞춤식 교재가 준비되어 있습니다.
          전문과정과 시험과정들이기 때문에 실용적인 연습이 중요하며, 어휘와 주제, 전략포인트는 미리 예습 후, 전화영어에서는 응용하는 과정으로
          활용하시면 좋습니다.`,
        `초/중급 회화과정에서는, 일상생활에서 접하기 쉬운 주제들을 가지고 초급과정과 중급과정으로 나누어 회화학습이 진행됩니다.
        초급 단어들과 표현들부터 시작하여 쉽게 회화학습을 시작하기 원하는 수강생분들이 학습하실 수 있습니다.`,
        `입문과정에서는 영어를 아주 처음 시작하는 왕초보와, 초심을 가지고
        발음부터 차근차근 시작하실 수강생분들을 위한 과정입니다. 1~2개월
        완성 과정으로써, 기초적인 발음규칙과 함께 기초적인 단어를 익힐
        수 있습니다.`
      ]
    };
  },

  computed: {
    ...mapState(["screenWidth", "isMobile"])
  },

  mounted() {
    this.screenWidth = screen.width;
    this.isMobile = this.screenWidth <= 960 ? true : false;
    AOS.init();
    this.book_list = getBookList();
    this.sliderTabs = getTabs().sliderTabs;
    this.currentBook = this.book_list["books_1"];
  },

  methods: {
    selectCategory(event, current) {
      this.slide = current;
      this.category = event.target.innerText;

      for (var i = 0; i < 9; i++) {
        if (i == this.slide) {
          this.currentBook = this.book_list[`books_${i + 1}`];
        }
      }
    },

    changeCarousel(books, event) {
      this.title = books[event].title;
    }
  }
};
</script>
