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
                <div class="ml-3 mb-3 h5">나의 스케줄</div>
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
            <v-row class="my-10" id="detailContainer">
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
                                style="font-size: 16px"
                                small
                                block
                                @click="openHoldDialog(classes)"
                                v-if="classes.attend == 'ready'"
                              >
                                수업 홀드
                              </v-btn>
                              <v-btn
                                text
                                class="white--text pa-0 my-0"
                                style="font-size: 16px"
                                small
                                block
                                v-else-if="
                                  classes.attend == 'absent' ||
                                    classes.attend == 'passed'
                                "
                              >
                                수업 결석
                              </v-btn>
                              <v-btn
                                text
                                class="white--text pa-0 my-0"
                                style="font-size: 16px"
                                small
                                block
                                v-else
                                @click="openEval(classes)"
                              >
                                평가서 보기
                              </v-btn>
                            </div>
                            <div class="mx-auto">|</div>
                            <div>
                              <v-btn
                                class="white--text pa-0 my-0"
                                style="font-size: 16px"
                                text
                                small
                                block
                                @click="openRecording(classes)"
                                v-if="classes.attend == 'atten'"
                              >
                                녹취 듣기
                              </v-btn>
                              <v-btn
                                class="white--text pa-0 my-0"
                                style="font-size: 16px"
                                text
                                small
                                block
                                @click="selectClass(classes)"
                                v-else
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
                            style="font-size: 16px"
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
            <v-container
              fluid
              class="px-0 mt-2"
              v-if="isClass && isClassSelected"
            >
              <v-img
                class="rounded-xl"
                data-aos="fade-up"
                width="100%"
                :height="!isMobile ? 500 : 800"
                :src="selectedClassImg"
              >
                <v-overlay absolute opacity=".8">
                  <div v-if="!isMobile">
                    <v-container>
                      <v-row>
                        <v-col cols="5">
                          <v-card
                            class="d-flex align-center justify-end"
                            style="border-radius: 20px"
                            width="100%"
                            height="100%"
                            color="#00000000"
                            flat
                          >
                            <v-img
                              :src="selectedClassImg"
                              height="400"
                              max-width="300"
                            ></v-img>
                          </v-card>
                        </v-col>
                        <v-col cols="6">
                          <div
                            class="d-flex justify-center pt-1"
                            style="
                              background: white;
                              width: 25%;
                              border-radius: 10px;
                            "
                          >
                            <span class="h5 gmarket" style="color: #e37b39">
                              입문과정
                            </span>
                          </div>
                          <div
                            class="h4 font-weight-black text-left white--text gmarket my-10 korean-text"
                            style="word-break: keep-all; line-break: strict"
                          >
                            {{ selectedClassTitle }}
                          </div>
                          <div>
                            <v-container fluid class="px-0 py-0">
                              <v-row>
                                <v-col cols="6" class="py-0">
                                  <div
                                    class="nanum white--text d-flex align-center"
                                  >
                                    <v-icon class="white--text mr-2"
                                      >schedule</v-icon
                                    >
                                    {{ selectedClassInfo.hour }} :
                                    {{ selectedClassInfo.min }} +
                                    {{ selectedClassInfo.duration }}
                                  </div>
                                </v-col>
                                <v-col cols="6" class="py-0">
                                  <div
                                    class="nanum white--text d-flex align-center"
                                  >
                                    <v-icon class="white--text mr-2"
                                      >event</v-icon
                                    >
                                    TTh
                                  </div>
                                </v-col>
                                <v-col cols="6" class="py-0">
                                  <div
                                    class="nanum white--text d-flex align-center mt-1"
                                  >
                                    <v-icon class="white--text mr-2"
                                      >account_circle</v-icon
                                    >
                                    {{ showClass.lec_name }}
                                  </div>
                                </v-col>
                                <v-col cols="6" class="py-0">
                                  <div
                                    class="nanum white--text d-flex align-center mt-1"
                                  >
                                    <v-icon class="white--text mr-2"
                                      >phone</v-icon
                                    >
                                    {{ selectedClassInfo.cate_name }}
                                  </div>
                                </v-col>
                              </v-row>
                              <v-row align="center" class="mt-5">
                                <v-col>
                                  <v-btn
                                    large
                                    class="gmarket font-weight-bold pt-1"
                                    style="
                                      background: rgba(255, 255, 255, 0.25);
                                      font-size: 24px;
                                    "
                                    @click="openClassBook()"
                                  >
                                    START
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </v-container>
                          </div>
                        </v-col>
                      </v-row>
                    </v-container>
                  </div>
                  <v-container v-else>
                    <v-row justify="center">
                      <v-col class="d-flex justify-center">
                        <v-card class="rounded-xl" max-width="400">
                          <v-img :src="selectedClassImg"></v-img>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <div class="d-flex flex-column align-center text-left">
                          <div style="width: 50%" class="py-5">
                            <div
                              class="d-flex justify-center pt-1 mb-5"
                              style="
                                background: white;
                                width: 50%;
                                border-radius: 10px;
                              "
                            >
                              <span class="h5 gmarket" style="color: #e37b39">
                                입문과정
                              </span>
                            </div>
                            <div
                              class="font-weight-black text-left white--text gmarket korean-text"
                              :class="isMobile ? 'h4' : 'h4'"
                            >
                              {{ selectedClassTitle }}
                            </div>
                            <div class="py-5">
                              <v-row align="center">
                                <v-col>
                                  <div
                                    class="nanum white--text d-flex align-center"
                                  >
                                    <v-icon class="white--text mr-2"
                                      >schedule</v-icon
                                    >
                                    {{ selectedClassInfo.hour }} :
                                    {{ selectedClassInfo.min }} +
                                    {{ selectedClassInfo.duration }}
                                  </div>
                                  <div
                                    class="nanum white--text d-flex align-center mt-1"
                                  >
                                    <v-icon class="white--text mr-2"
                                      >account_circle</v-icon
                                    >
                                    {{ showClass.lec_name }}
                                  </div>
                                </v-col>
                                <v-col>
                                  <div
                                    class="nanum white--text d-flex align-center"
                                  >
                                    <v-icon class="white--text mr-2"
                                      >event</v-icon
                                    >
                                    TTh
                                  </div>
                                  <div
                                    class="nanum white--text d-flex align-center mt-1"
                                  >
                                    <v-icon class="white--text mr-2"
                                      >phone</v-icon
                                    >
                                    {{ selectedClassInfo.cate_name }}
                                  </div>
                                </v-col>
                              </v-row>
                            </div>
                            <v-btn
                              class="gmarket font-weight-bold pt-6 pb-5"
                              style="
                                background: rgba(255, 255, 255, 0.25);
                                font-size: 24px;
                                width: 100%;
                              "
                              @click="openClassBook()"
                            >
                              START
                            </v-btn>
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-overlay>
              </v-img>
            </v-container>

            <v-container
              fluid
              class="px-0 mt-2"
              v-if="isClass && pickDateClasses.length > 1 && !isClassSelected"
            >
              <v-card
                class="rounded-xl d-flex justify-center align-center"
                height="400"
                flat
                color="#d4d4d4"
              >
                <div
                  class="text-center h6 nanum font-weight-bold"
                  style="color: #e37b39"
                >
                  Please select class
                </div>
              </v-card>
            </v-container>

            <v-layout class="pb-15" v-if="isClass && isClassSelected">
              <v-row>
                <v-col>
                  <v-card flat color="#ECF0FB" class="py-5 px-10">
                    <v-row>
                      <v-col cols="4" class="d-flex justify-center">
                        <div class="px-5">
                          <v-img src="../assets/vector1.png"></v-img>
                        </div>
                      </v-col>
                      <v-col class="d-flex flex-column">
                        <div class="nanum text-blue">
                          Your contract will end on
                          <span
                            class="font-weight-bold"
                            style="font-size: 18px"
                          >
                            {{ getEndDay(showClass).substr(8) }}
                          </span>
                        </div>
                        <div class="nanum text-blue mb-2">
                          You have
                          <span
                            class="font-weight-bold"
                            style="font-size: 18px"
                          >
                            24
                          </span>
                          lessons left!
                        </div>
                        <div class="mt-auto">
                          <v-btn
                            depressed
                            class="gmarket white--text pt-1"
                            color="#E37B39"
                            style="font-size: 24px"
                            @click="$router.push('/enrollment')"
                          >
                            수강신청
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card flat color="#ECF0FB" class="py-5 px-10">
                    <v-row>
                      <v-col cols="4" class="d-flex justify-center">
                        <div class="px-5">
                          <v-img src="../assets/vector2.png"></v-img>
                        </div>
                      </v-col>
                      <v-col class="d-flex flex-column">
                        <div class="nanum text-blue">
                          We appreciate your
                          <span
                            class="font-weight-bold"
                            style="font-size: 18px"
                          >
                            feedback
                          </span>
                        </div>
                        <div class="nanum text-blue mb-2">
                          Send us a
                          <span
                            class="font-weight-bold"
                            style="font-size: 18px"
                          >
                            review
                          </span>
                          of the course!
                        </div>
                        <div class="mt-auto">
                          <v-btn
                            depressed
                            class="gmarket white--text pt-1"
                            color="#E37B39"
                            style="font-size: 24px"
                            @click="$router.push('/board')"
                          >
                            수강후기
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-layout>
            <!-- <v-row no-gutters>
              <v-col cols="12" md="5">
                <div class="h5 gmarket ml-3" data-aos="fade-right">
                  수강 종류
                </div>
              </v-col>
            </v-row>
            <v-container fluid class="px-0 pb-15 mb-15 mt-2">
              <v-img
                @click="openClassBook()"
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
                      style="
                        position: absolute;
                        bottom: 20px;
                        right: 20px;
                        cursor: pointer;
                      "
                    >
                      Next >
                    </div>
                  </v-container>
                </v-card>
              </v-img>
            </v-container> -->
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
    <Dialog ref="ModalDialog"></Dialog>
    <HoldDialog ref="HoldDialog"></HoldDialog>
    <HoldSnackbar ref="HoldSnackbar"></HoldSnackbar>
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
import HoldSnackbar from "@/components/Snackbar";
import Dialog from "@/components/mypage/Dialog";
// import BookCover from "@/components/mypage/BookCover";
// import VideoCover from "@/components/mypage/VideoCover";
// import PDFCover from "@/components/mypage/PDFCover";
import { bus } from "@/main";

export default {
  components: {
    HoldDialog,
    HoldSnackbar,
    Dialog
    // BookCover,
    // VideoCover,
    // PDFCover,
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
      isClass: false,
      isClassSelected: false,
      selectedSuggestion: [],
      selectedEndDay: "",
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
      //let deVal = `안녕하세요. ${this.memberName} 회원님:)`;
      let deVal = {};
      if (this.showClass.length !== 0) {
        let hour, min, duration, cate_name;
        hour = this.showClass.s_hour;
        min = this.showClass.s_min * 10 - 10;
        min = min === 0 ? "0" + min : min;
        duration = this.showClass.duration;
        cate_name = this.showClass.cate_id == 1 ? "전화영어" : "화상영어";
        // deVal = `${this.showClass.year}.${this.showClass.month}.${this.showClass.day} ${hour}:${min}+${duration} ${this.showClass.lec_name} (${cate_name})`;
        deVal = { hour, min, duration, cate_name };
      } else {
        return (deVal = { hour: "-", min: "-", duration: "-", cate_name: "-" });
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
    this.$store.commit("setClassInfo", {});
    this.$store.commit("setCurrentCourseName", { courseName: "" });
    this.$store.commit("setCurrentCourseLink", { link: "" });
    AOS.init();
  },
  destroyed() {},
  mounted() {
    this.today = this.formatDate(this.date);
    // axios.defaults.headers.common["Authorization"] = localStorage.getItem("access-token");
    axios.defaults.headers.common["Authorization"] = this.$cookie.get(
      "access-token"
    );
    bus.$on("HoldSnackbar", ({ text, state }) => {
      this.$refs.HoldSnackbar.show(text, state);
    });
    bus.$on("refreshSchedule", () => {
      //console.log(this.date2);
      let [year, month, day] = this.date2.split("-");
      this.getSchedule(year, month, day);
    });
    console.log(this.showClass);
  },
  methods: {
    openClassBook() {
      if (this.showClass.length !== 0) {
        // window.open(bookLink, "_blank");
      } else {
        // this.$router.push("/material");
      }
      this.$router.push("/material");
    },
    openRecording(classObj) {
      let obj = {
        call_date: classObj.Ymd,
        tel: classObj.aTel + classObj.bTel + classObj.cTel,
        hp: classObj.aHp + classObj.bHp + classObj.cHp
      };
      this.$refs.ModalDialog.setOpts(2, obj);
      this.$refs.ModalDialog.open();
      // let path = `https://phone.megatalking.com/my_phone1.htm?call_date=${classObj.Ymd}&tel001=${tel}&tel002=${hp}&company_code=ueducation`;
      // window.open(path, "PopupWin", "width=380,height=350");
    },
    openEval(classObj) {
      let obj = {
        link: `https://phone.megatalking.com/firmsugang_view.htm?app=1&s_id=${classObj.s_id}&todate=${classObj.todate}`
      };
      this.$refs.ModalDialog.setOpts(1, obj);
      this.$refs.ModalDialog.open();
      // let path = `https://phone.megatalking.com/firmsugang_view.htm?app=1&s_id=${classObj.s_id}&todate=${classObj.todate}`;
      // window.open(path, "PopupWin", "width=700,height=600");
    },
    async openHoldDialog(classObj) {
      let date = this.date2;
      await this.$refs.HoldDialog.open(date, classObj);
    },
    getBookName(obj) {
      return obj.book_name;
    },
    selectClass(classObj) {
      //let path = "@/assets/curriculum/";

      console.log(classObj);

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
      this.selectedEndDay = classObj.end_day;

      let courseName = this.showClass.book_name;
      let bookLink = this.showClass.book_link;

      this.$store.commit("setClassInfo", this.showClass); //0319 평가서를 위해

      this.$store.commit("setCurrentCourseName", { courseName });
      if (courseName.indexOf("Video") != 0)
        //비디오 아닌 교재만 링크넣기
        this.$store.commit("setCurrentCourseLink", { link: bookLink });
      //비디오 교재면 링크없애기
      else this.$store.commit("setCurrentCourseLink", { link: "" });
      this.isClassSelected = true;

      this.$vuetify.goTo("#detailContainer", {
        duration: 300,
        offset: 0,
        easing: "easeInOutCubic"
      });
    },
    getClassColor(classObj) {
      //console.log(classObj);
      let color = "";
      let jong = ["", "#df7a30", "#5e75cf"];
      if (classObj.no_class) {
        color = "grey";
      } else if (classObj.attend == "atten") {
        color = "#4caf50";
      } else if (classObj.attend == "passed" || classObj.attend == "absent") {
        color = "#ff5722";
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
      let duration = obj.duration;
      let min = obj.s_min * 10 - 10;
      min = min == 0 ? "0" + min : min;
      return `${obj.s_hour}:${min}+${duration}`;
    },
    pickDate(val) {
      let [, , day] = val.split("-");
      let pickDateClasses = [];
      if (Object.keys(this.schedule).includes(day)) {
        pickDateClasses = this.schedule[day].class;
        this.isClass = true;
        if (pickDateClasses.length == 1) {
          this.isClassSelected = true;
          this.selectClass(pickDateClasses[0]);
        } else {
          this.isClassSelected = false;
        }
      } else {
        this.isClass = false;
      }
      this.$set(this.$data, "pickDateClasses", pickDateClasses);
    },
    async getSchedule(year, month, day = "") {
      let config = {
        params: {
          action: "schedule",
          year,
          month
        }
      };

      await axios
        .get("//phone.megatalking.com/origin/api/mypage.php", config)
        .then(rs => {
          //console.log(rs);
          if (rs.data.result == true) {
            let schedule = rs.data.schedule;
            let holdDatas = {
              hold: rs.data.hold,
              cancel: rs.data.cancel
            };
            this.memberName = rs.data.memberInfo.data.name;
            this.$set(this.$data, "schedule", schedule);
            this.$set(this.$data, "holdDatas", holdDatas);
            // if (this.pickDateClasses.length === 0) this.pickDate(this.today);
            this.pickDate(this.date2);
          }
        })
        .catch(err => {
          console.log(err);
        })
        .then(() => {
          if (day !== "") {
            this.pickDate(this.date2);
          }
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
