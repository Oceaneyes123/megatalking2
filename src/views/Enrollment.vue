<template>
  <v-app style="background-color:#00000000">
    <v-container fluid class="py-0 px-0">
      <v-card tile color="#8bb6f700" flat class="text-center pa-3">
        <div class="h3 font-weight-bold white--text" style="margin-top:200px">수강 신청</div>
        <div class="h6 nanum white--text">
          <div class="my-10">왕초보라도, 영어1도 못해도, 메가토킹과 함께라면 어렵지 않아요.</div>
          <div class="my-2">외국인과 말하기 두려워도, 영어가 서툴러도</div>
          <div class="my-2">메가토킹 선생님이 친구처럼 도와드려요.</div>
        </div>
        <v-container style="max-width:1000px;margin-top:90px">
          <v-card class="rounded-xl shadow" width="100%">
            <v-container class="px-0 py-0">
              <v-row no-gutters>
                <v-col cols="12" md="8">
                  <v-card class="pl-10 pt-10 pr-8 rounded-xl" flat color="#fafafa">
                    <div class="h6 font-weight-black text-left">수강 종류</div>
                    <v-container class="px-0 mt-7">
                      <v-row no-gutters class="mb-5">
                        <v-col cols="12" sm="6" class="text-left">
                          <div class="h6 font-weight-bold">전화로 할래요</div>
                          <div class="subheading">
                            <v-icon
                              color="#5a55a1"
                              class="mr-2"
                              style="font-size:20px"
                            >fas fa-phone-square-alt</v-icon>화성영어 서비스 제공
                          </div>
                        </v-col>
                        <v-col cols="12" sm="6" class="text-left">
                          <div class="h6 font-weight-bold" style="color:#4242a3">화상으로 할래요.</div>
                          <div class="subheading">
                            <v-icon
                              color="#5a55a1"
                              class="mr-2"
                              style="font-size:20px"
                            >fas fa-phone-square-alt</v-icon>스카이프 서비스 제공
                          </div>
                        </v-col>
                      </v-row>
                    </v-container>

                    <v-divider class="mr-10"></v-divider>

                    <div class="h6 font-weight-black text-left mt-10 mb-10">수업 선택</div>
                    <v-tabs
                      v-model="tab"
                      :vertical="!isMobile"
                      :grow="isMobile"
                      background-color="#fafafa"
                      hide-slider
                    >
                      <v-tab
                        active-class="active white--text"
                        v-for="(duration, i) in durations"
                        :key="i"
                        style="border-radius: 30px 0 0 30px"
                      >{{duration}}</v-tab>
                      <v-tab-item v-for="(index, i) in 3" :key="i">
                        <v-card flat color="#f5f4f6">
                          <v-container class="pa-5 pa-sm-10">
                            <!-- frequency row-->
                            <v-row no-gutters justify="center" class="mb-3">
                              <v-col
                                cols="12"
                                sm="4"
                                v-for="(frequency, i) in frequncies"
                                :key="i"
                                class="px-2"
                                active-class="font-weight-bold"
                              >
                                <v-btn
                                  class="rounded-lg"
                                  block
                                  depressed
                                  @click="frequencySelected = i, frequencySummary = frequency"
                                  :color="
                                    frequencySelected == i
                                      ? 'primary'
                                      : '#FFFFFF'
                                  "
                                  :outlined="
                                    frequencySelected == i ? true : false
                                  "
                                >{{ frequency }}</v-btn>
                              </v-col>
                            </v-row>
                            <div class="caption" style="color:#bdbdbd">수업 횟수</div>
                            <!-- days row-->
                            <v-row no-gutters justify="center" class="mt-10">
                              <v-col
                                cols="12"
                                sm="4"
                                v-for="(day, i) in days"
                                :key="i"
                                class="px-2 mb-3"
                              >
                                <v-btn
                                  class="rounded-lg"
                                  block
                                  depressed
                                  @click="daySelected = i, daySummary = day"
                                  :color="
                                    daySelected == i ? 'primary' : '#FFFFFF'
                                  "
                                  :outlined="daySelected == i ? true : false"
                                >{{ day }}</v-btn>
                              </v-col>
                            </v-row>
                            <div class="caption" style="color:#bdbdbd">수업 날짜</div>
                            <!-- period row-->
                            <v-row no-gutters justify="center" class="mb-3 mt-10">
                              <v-col
                                cols="12"
                                sm="3"
                                v-for="(period, i) in periods"
                                :key="i"
                                class="px-2"
                              >
                                <v-btn
                                  class="rounded-lg"
                                  block
                                  depressed
                                  @click="periodSelected = i, periodSummary = period"
                                  :color="
                                    periodSelected == i ? 'primary' : '#FFFFFF'
                                  "
                                  :outlined="periodSelected == i ? true : false"
                                >{{ period }}</v-btn>
                              </v-col>
                            </v-row>
                            <div class="caption" style="color:#bdbdbd">수강기간</div>
                            <!-- book row-->
                            <v-row no-gutters justify="center" class="mb-3 mt-10" v-if="tab == 0">
                              <v-col
                                cols="12"
                                sm="3"
                                v-for="(book, i) in bookList10"
                                :key="i"
                                class="px-2 mb-2"
                              >
                                <v-btn
                                  height="100"
                                  class="rounded-lg px-0"
                                  block
                                  depressed
                                  @click="bookSelected = i, bookSummary = book.text"
                                  :color="
                                    bookSelected == i ? 'primary' : '#FFFFFF'
                                  "
                                  :outlined="bookSelected == i ? true : false"
                                  :disabled="book.status == 'disabled'"
                                  style="display: unset; white-space: unset;line-break: strict;word-break: keep-all;"
                                >{{ book.text }}</v-btn>
                              </v-col>
                            </v-row>
                            <v-row no-gutters justify="center" class="mb-3 mt-10" v-if="tab == 1">
                              <v-col
                                cols="12"
                                sm="3"
                                v-for="(book, i) in bookList20"
                                :key="i"
                                class="px-2 mb-2"
                              >
                                <v-btn
                                  height="100"
                                  class="rounded-lg px-0"
                                  block
                                  depressed
                                  @click="bookSelected = i"
                                  :color="
                                    bookSelected == i ? 'primary' : '#FFFFFF'
                                  "
                                  :outlined="bookSelected == i ? true : false"
                                  :disabled="book.status == 'disabled'"
                                  style="display: unset; white-space: unset;line-break: strict;word-break: keep-all;"
                                >{{ book.text }}</v-btn>
                              </v-col>
                            </v-row>
                            <v-row no-gutters justify="center" class="mb-3 mt-10" v-if="tab == 2">
                              <v-col
                                cols="12"
                                sm="3"
                                v-for="(book, i) in bookList30"
                                :key="i"
                                class="px-2 mb-2"
                              >
                                <v-btn
                                  height="100"
                                  class="rounded-lg px-0"
                                  block
                                  depressed
                                  @click="bookSelected = i"
                                  :color="
                                    bookSelected == i ? 'primary' : '#FFFFFF'
                                  "
                                  :outlined="bookSelected == i ? true : false"
                                  :disabled="book.status == 'disabled'"
                                  style="display: unset; white-space: unset;line-break: strict;word-break: keep-all;"
                                >{{ book.text }}</v-btn>
                              </v-col>
                            </v-row>
                            <div class="caption" style="color:#bdbdbd">수업 유형</div>
                          </v-container>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>

                    <div class="h6 font-weight-black text-left mt-10 mb-10">수업 시간</div>

                    <v-container class="pb-1">
                      <v-row no-gutters>
                        <v-col class="text-left" style="cursor:pointer;">
                          <span
                            style="cursor:pointer;color:#5a55a1"
                            @click="(currentZone = 0), setTime(6)"
                          >프라임</span>
                          <br />
                          <span class="caption" @click="currentZone = 0">6:00 - 10:00</span>
                        </v-col>
                        <v-col class="text-left" style="cursor:pointer;">
                          <span
                            style="cursor:pointer;color:#5a55a1"
                            @click="(currentZone = 1), setTime(10)"
                          >이코노미</span>
                          <br />
                          <span class="caption" @click="currentZone = 1">10:00 - 5:00</span>
                        </v-col>
                        <v-col class="text-left" style="cursor:pointer;">
                          <span
                            style="cursor:pointer;color:#5a55a1"
                            @click="(currentZone = 2), setTime(17)"
                          >프라임</span>
                          <br />
                          <span class="caption" @click="currentZone = 2">5:00 - 0:00</span>
                        </v-col>
                      </v-row>
                    </v-container>
                    <v-divider class="mt-0" style="background-color: #222dc05F"></v-divider>
                    <v-card flat color="#f5f4f6" class="mb-5">
                      <v-tabs
                        grow
                        v-if="seeMore && currentZone == 0"
                        show-arrows
                        slider-color="#5a55a1"
                      >
                        <v-tab v-for="n in 4" :key="n" @click="setTime(n + 5)">{{ n + 5 }}</v-tab>
                      </v-tabs>
                      <v-tabs
                        grow
                        v-if="seeMore && currentZone == 1"
                        show-arrows
                        slider-color="#5a55a1"
                      >
                        <v-tab v-for="n in 7" :key="n" @click="setTime(n + 9)">{{ n + 9 }}</v-tab>
                      </v-tabs>
                      <v-tabs
                        grow
                        v-if="seeMore && currentZone == 2"
                        show-arrows
                        slider-color="#5a55a1"
                      >
                        <v-tab v-for="n in 7" :key="n" @click="setTime(n + 16)">{{ n + 16 }}</v-tab>
                      </v-tabs>
                      <v-container class="px-0">
                        <v-row no-gutters>
                          <v-col cols="2" v-for="(time, i) in timeList" :key="i">
                            <v-btn
                              depressed
                              @click="timeSelected = i"
                              :color="timeSelected == i ? 'primary' : '#FFFFFF'"
                              :outlined="timeSelected == i ? true : false"
                              class="rounded-lg"
                            >{{ time }}</v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                    <div
                      v-if="!seeMore"
                      @click="seeMore = true"
                      class="caption mb-5"
                      style="color:#bdbdbd"
                    >시간표 전체보기 ></div>
                    <div class="h6 font-weight-black text-left mt-10 mb-10">결제 방식</div>
                    <v-row>
                      <v-col cols="4" v-for="(method, i) in paymentMethods" :key="i">
                        <v-btn color="#5a55a1" outlined x-large class="rounded-lg">{{method.text}}</v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>

                <v-col cols="12" md="4">
                  <v-card flat class="pt-10 rounded-xl">
                    <div class="h6 font-weight-black">수강선택 요약</div>
                    <v-container class="mt-3 px-7 text-left">
                      <v-row no-gutters class="px-2">
                        <v-col cols="4">수강코스</v-col>
                        <v-spacer></v-spacer>
                        <v-col class="font-weight-bold">{{bookSummary}}</v-col>
                      </v-row>
                      <v-divider class="mx-3 mb-4"></v-divider>
                      <v-row no-gutters class="px-2">
                        <v-col>수강과정</v-col>
                        <v-spacer></v-spacer>
                        <v-col class="font-weight-bold">
                          {{frequencySummary}}
                          <span
                            v-if="frequencySummary != '' && periodSummary != ''"
                          >/</span>
                          {{periodSummary}}
                        </v-col>
                      </v-row>
                      <v-divider class="mx-3 mb-4"></v-divider>
                      <v-row no-gutters class="px-2">
                        <v-col>시작일</v-col>
                        <v-spacer></v-spacer>
                        <v-col class="font-weight-bold">{{daySummary}}</v-col>
                      </v-row>
                      <v-divider class="mx-3"></v-divider>
                    </v-container>

                    <v-divider style="margin-top:100px; margin-bottom:100px" class="mx-7"></v-divider>

                    <div class="h6 font-weight-black mb-5">결제 예정금액</div>

                    <v-container class="mt-3 px-7 text-left">
                      <v-row no-gutters class="px-2">
                        <v-col>결제금액</v-col>
                        <v-spacer></v-spacer>
                        <v-col class="font-weight-bold">0</v-col>
                      </v-row>
                      <v-divider class="mx-3 mb-4"></v-divider>
                      <v-row no-gutters class="px-2">
                        <v-col>할인금액</v-col>
                        <v-spacer></v-spacer>
                        <v-col class="font-weight-bold">0</v-col>
                      </v-row>
                      <v-divider class="mx-3 mb-4"></v-divider>
                      <v-row no-gutters class="px-2">
                        <v-col>교재비</v-col>
                        <v-spacer></v-spacer>
                        <v-col class="font-weight-bold">0</v-col>
                      </v-row>
                      <v-divider class="mx-3 mb-4"></v-divider>
                      <v-row no-gutters class="px-2">
                        <v-col>총 할인금액</v-col>
                        <v-spacer></v-spacer>
                        <v-col class="font-weight-bold">0</v-col>
                      </v-row>
                    </v-container>
                    <v-btn
                      color="#5a55a1"
                      class="rounded-lg white--text font-weight-bold"
                      style="margin-top:150px"
                    >수업 신청하기</v-btn>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-container>
      </v-card>
    </v-container>
  </v-app>
</template>

<style scoped>
.active {
  background-color: #2564cb;
}
</style>

<script>
export default {
  data() {
    return {
      tab: 0,
      durations: ["하루 10분", "하루 20분", "하루 30분"],
      frequncies: ["주2회 화목", "주3회 화목", "주5회 화목"],
      days: [],
      periods: ["4주", "12주", "6개월", "1년"],
      dateTime: new Date(),
      timeList: [],
      seeMore: false,
      currentZone: 0,

      bookSummary: "",
      frequencySummary: "",
      periodSummary: "",
      daySummary: "",

      paymentMethods: [
        { text: "무통장 입금", color: "" },
        { text: "카드 결제 ", color: "" },
        { text: "정기 결제 ", color: "" }
      ],

      frequencySelected: -1,
      daySelected: -1,
      periodSelected: -1,
      bookSelected: -1,
      timeSelected: -1,

      isMobile: false,

      bookList10: [
        {
          status: "enabled",
          text: "프리토킹 묻고 답하기",
          curriculum: "프리토킹",
          material: "묻고 답하기"
        },
        {
          status: "enabled",
          text: "프리토킹 \n 의견말하기",
          curriculum: "프리토킹",
          material: "의견말하기"
        },
        {
          status: "enabled",
          text: "프리토킹\n 사진묘사",
          curriculum: "프리토킹",
          material: "사진묘사"
        },
        {
          status: "enabled",
          text: "프리토킹\n 영자신문 (준비중)",
          curriculum: "프리토킹",
          material: "영자신문"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 스피킹패턴",
          curriculum: "일상&패턴",
          material: "스피킹패턴"
        },
        {
          status: "disabled",
          text: "일상&패턴\n 문법패턴",
          curriculum: "일상&패턴",
          material: "문법패턴"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 일상대화",
          curriculum: "일상&패턴",
          material: "일상대화"
        },
        {
          status: "disabled",
          text: "리딩&스피킹\n 퍼펙트리딩",
          curriculum: "리딩&스피킹",
          material: "퍼펙트리딩"
        },
        {
          status: "disabled",
          text: "리딩&스피킹\n 영자신문 (준비중)",
          curriculum: "리딩&스피킹",
          material: "영자신문"
        },
        {
          status: "disabled",
          text: "비지니스\n 인터뷰과정",
          curriculum: "비지니스",
          material: "인터뷰과정"
        },
        {
          status: "enabled",
          text: "비지니스\n 비지니스회화",
          curriculum: "비지니스",
          material: "비지니스회화"
        },
        {
          status: "enabled",
          text: "여행영어",
          curriculum: "여행영어",
          material: "여행영어"
        }
      ],

      bookList20: [
        {
          status: "enabled",
          text: "프리토킹 묻고 답하기",
          curriculum: "프리토킹",
          material: "묻고 답하기"
        },
        {
          status: "enabled",
          text: "프리토킹 \n 의견말하기",
          curriculum: "프리토킹",
          material: "의견말하기"
        },
        {
          status: "enabled",
          text: "프리토킹\n 사진묘사",
          curriculum: "프리토킹",
          material: "사진묘사"
        },
        {
          status: "enabled",
          text: "프리토킹\n 영자신문 (준비중)",
          curriculum: "프리토킹",
          material: "영자신문"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 스피킹패턴",
          curriculum: "일상&패턴",
          material: "스피킹패턴"
        },
        {
          status: "disabled",
          text: "일상&패턴\n 문법패턴",
          curriculum: "일상&패턴",
          material: "문법패턴"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 일상대화",
          curriculum: "일상&패턴",
          material: "일상대화"
        },
        {
          status: "enabled",
          text: "리딩&스피킹\n 퍼펙트리딩",
          curriculum: "리딩&스피킹",
          material: "퍼펙트리딩"
        },
        {
          status: "enabled",
          text: "리딩&스피킹\n 영자신문 (준비중)",
          curriculum: "리딩&스피킹",
          material: "영자신문"
        },
        {
          status: "enabled",
          text: "비지니스\n 인터뷰과정",
          curriculum: "비지니스",
          material: "인터뷰과정"
        },
        {
          status: "enabled",
          text: "비지니스\n 비지니스회화",
          curriculum: "비지니스",
          material: "비지니스회화"
        },
        {
          status: "enabled",
          text: "여행영어",
          curriculum: "여행영어",
          material: "여행영어"
        }
      ],

      bookList30: [
        {
          status: "enabled",
          text: "프리토킹 묻고 답하기",
          curriculum: "프리토킹",
          material: "묻고 답하기"
        },
        {
          status: "enabled",
          text: "프리토킹 \n 의견말하기",
          curriculum: "프리토킹",
          material: "의견말하기"
        },
        {
          status: "enabled",
          text: "프리토킹\n 사진묘사",
          curriculum: "프리토킹",
          material: "사진묘사"
        },
        {
          status: "enabled",
          text: "프리토킹\n 영자신문 (준비중)",
          curriculum: "프리토킹",
          material: "영자신문"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 스피킹패턴",
          curriculum: "일상&패턴",
          material: "스피킹패턴"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 문법패턴",
          curriculum: "일상&패턴",
          material: "문법패턴"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 일상대화",
          curriculum: "일상&패턴",
          material: "일상대화"
        },
        {
          status: "enabled",
          text: "리딩&스피킹\n 퍼펙트리딩",
          curriculum: "리딩&스피킹",
          material: "퍼펙트리딩"
        },
        {
          status: "enabled",
          text: "리딩&스피킹\n 영자신문 (준비중)",
          curriculum: "리딩&스피킹",
          material: "영자신문"
        },
        {
          status: "enabled",
          text: "비지니스\n 인터뷰과정",
          curriculum: "비지니스",
          material: "인터뷰과정"
        },
        {
          status: "enabled",
          text: "비지니스\n 비지니스회화",
          curriculum: "비지니스",
          material: "비지니스회화"
        },
        {
          status: "enabled",
          text: "여행영어",
          curriculum: "여행영어",
          material: "여행영어"
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

  watch: {
    tab: function() {
      // this.frequencySelected = -1;
      // this.daySelected = -1;
      // this.periodSelected = -1;
      this.bookSelected = -1;
    }
  },

  mounted() {
    this.screenWidth = screen.width;
    this.isMobile = this.screenWidth <= 960 ? true : false;

    for (var i = 1; i < 12; i++) {
      var today = new Date();
      var nextDates = new Date(today);
      nextDates.setDate(nextDates.getDate() + i);
      if (
        nextDates.getDay() != 6 &&
        nextDates.getDay() != 0 &&
        this.days.length < 6
      ) {
        this.days.push(this.formatDate(nextDates));
      }
    }

    this.timeList = [];
    this.setTime(6);
  },

  methods: {
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate();
      //year = d.getFullYear();

      if (day.length < 2) day = +day;

      return [month, day].join("/");
    },

    setTime(timeText) {
      this.timeList = [];
      this.dateTime.setHours(timeText);
      this.dateTime.setMinutes(0);

      for (var i = 0; i < 6; i++) {
        var nextTime = new Date(this.dateTime);
        nextTime.setMinutes(this.dateTime.getMinutes() + 10 * i);
        this.timeList.push(
          nextTime.getHours() +
            ":" +
            (nextTime.getMinutes() == 0
              ? nextTime.getMinutes() + "0"
              : nextTime.getMinutes())
        );
      }
    },

    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
    }
  }
};
</script>
