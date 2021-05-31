<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline nanum">보강 수업 설정하기</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col class="d-flex" cols="12">
                <v-select
                  v-model="s_id"
                  class="nanum"
                  label="보강잡을 수업을 선택해주세요."
                  prepend-icon="mdi-calendar-clock"
                  dense
                  no-data-text="선택 가능한 강사님이 없습니다."
                  :items="tutorList"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-row class="nanum">
                  <v-col cols="6">
                    <v-btn
                      block
                      rounded
                      elevation="1"
                      :class="
                        tutorType == 'regular' ? 'selected-tutor-type' : ''
                      "
                      @click="tutorType = 'regular'"
                      :disabled="s_id == '' || btnBlockRc"
                    >
                      <v-icon dark left>
                        mdi-account-outline
                      </v-icon>
                      내 강사 선택
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      block
                      rounded
                      elevation="1"
                      :class="tutorType == 'to' ? 'selected-tutor-type' : ''"
                      @click="tutorType = 'to'"
                      :disabled="s_id == '' || btnBlockMc"
                    >
                      <v-icon dark left>
                        mdi-account-reactivate-outline
                      </v-icon>
                      대체 강사 선택
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12">
                <v-card elevation="1" shaped min-height="400">
                  <v-card-title class="nanum"
                    ><v-icon medium left>{{ timeBoxTitle.icon }}</v-icon
                    >{{ timeBoxTitle.text }}</v-card-title
                  >
                  <v-card-text>
                    <v-row v-if="filteredAbleTimeList.length > 0">
                      <v-col
                        v-for="item in filteredAbleTimeList"
                        :key="item.sortKey"
                        cols="4"
                        md="3"
                        class="d-flex justify-center"
                      >
                        <v-btn
                          elevation="1"
                          min-width="80px"
                          min-height="80px"
                          fab
                          :class="
                            selectedDateTime == item.sortKey
                              ? 'selected-tutor-type'
                              : ''
                          "
                          @click="(selectedDateTime = item.sortKey), submit()"
                        >
                          <div class="py-5">
                            <span v-html="item.btnName"></span>
                          </div>
                        </v-btn>
                      </v-col>
                    </v-row>
                    <v-row v-else>
                      <v-col class="d-flex justify-center pt-16 mt-4">
                        <v-progress-circular
                          :rotate="360"
                          :size="100"
                          :width="15"
                          :indeterminate="progressObj.text == '검색중'"
                          :value="progressObj.value"
                          color="info"
                        >
                          {{ progressObj.text }}
                        </v-progress-circular>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <small>*보강 일정은 오늘/내일까지만 신청가능</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            닫기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-overlay :value="holdOverlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      dialog: false,
      date: "",
      isNoAble: false,
      tutorList: [],
      tutorType: "",
      s_id: "",
      selectedDateTime: 0,
      ableTimeList: [],
      timeBoxTitleArr: [
        {
          icon: "mdi-calendar-check",
          text: "본수업을 선택해주세요."
        },
        {
          icon: "mdi-account-check-outline",
          text: "수업할 강사를 선택해주세요."
        },
        {
          icon: "mdi-magnify",
          text: "잠시만 기다려주세요."
        },
        {
          icon: "mdi-clock-check-outline",
          text: "보강 시간을 선택해주세요."
        },
        {
          icon: "mdi-clock-alert-outline",
          text: "수업 가능한 시간이 없습니다 ㅠㅠ"
        }
      ],
      attrs: {
        class: "mb-6",
        boilerplate: true,
        elevation: 2
      }
    };
  },
  computed: {
    ...mapState(["holdOverlay"]),
    timeBoxTitle() {
      return this.timeBoxTitleArr[this.stepProgress];
    },
    stepProgress() {
      let step = 0;
      if (this.s_id != "" && this.tutorType == "") step = 1;
      else if (
        this.tutorType != "" &&
        this.s_id != "" &&
        this.ableTimeList.length == 0 &&
        !this.isNoAble
      )
        step = 2;
      else if (
        this.tutorType != "" &&
        this.s_id != "" &&
        this.ableTimeList.length != 0
      )
        step = 3;
      else if (
        this.tutorType != "" &&
        this.s_id != "" &&
        this.ableTimeList.length == 0 &&
        this.isNoAble
      )
        step = 4;

      return step;
    },
    progressObj() {
      var obj = { text: "-", value: 0 };
      if (this.stepProgress == 1) obj = { text: "", value: 0 };
      else if (this.stepProgress == 2) obj = { text: "검색중", value: 0 };
      else if (this.stepProgress == 4) obj = { text: "시간없음", value: 0 };
      return obj;
    },
    btnBlockRc() {
      let value = false;
      if (this.stepProgress == 2 && this.tutorType == "to") value = true;
      return value;
    },
    btnBlockMc() {
      let value = false;
      if (this.stepProgress == 2 && this.tutorType == "regular") value = true;
      return value;
    },
    filteredAbleTimeList() {
      // let tempList = [];
      let dayKeys = Object.keys(this.ableTimeList);
      let dateName,
        dailyObjKeys,
        hoursObjKeys,
        realMin,
        unitsObj,
        sortKey,
        btnName;
      let tempArr = [];

      dayKeys.forEach(dateKey => {
        if (dateKey == "today") dateName = "오늘";
        else if (dateKey == "tomorrow") dateName = "내일";
        else dateName = dateKey;
        //날짜 기준으로 오브젝트 키값 가져오기
        dailyObjKeys = Object.keys(this.ableTimeList[dateKey]);
        dailyObjKeys.forEach(hour => {
          hoursObjKeys = Object.keys(this.ableTimeList[dateKey][hour]);
          hoursObjKeys.forEach(min => {
            realMin = min * 10 - 10;
            realMin = realMin < 10 ? "0" + realMin : realMin;
            unitsObj = this.ableTimeList[dateKey][hour][min];
            sortKey =
              dateKey == "today" ? "1" + hour + realMin : "2" + hour + realMin;
            btnName = `${dateName}<br>${hour}:${realMin}`;
            tempArr.push({
              sortKey: sortKey,
              btnName: btnName,
              classes: unitsObj
            });
            //console.log([dateName,hour,realMin,unitsObj,tempArr,sortKey]);
          });
        });
      });

      tempArr.sort((a, b) => {
        return a.sortKey - b.sortKey;
      });
      //console.log(tempArr);
      return tempArr;
    },
    form() {
      let selecetedDateTime, classesLength, randomIndex, selectedTutor, realMin;
      selecetedDateTime = this.filteredAbleTimeList.filter(
        obj => obj.sortKey == this.selectedDateTime
      )[0];
      classesLength = selecetedDateTime.classes.length;
      randomIndex = Math.floor(Math.random() * classesLength);
      selectedTutor = selecetedDateTime.classes[randomIndex];
      realMin = selectedTutor.min * 10 - 10;
      realMin = realMin < 10 ? "0" + realMin : realMin;
      return {
        action: "add",
        s_id: this.s_id,
        realMin: realMin,
        ...selectedTutor
      };
    }
  },
  methods: {
    open() {
      const date = new Date();
      let year, month, day;

      year = date.getFullYear();
      month = date.getMonth() + 1;
      day = date.getDate();

      this.date = `${year}-${month}-${day}`;
      this.getTutors(date);
      this.dialog = true;
    },
    submit() {
      let classInfo, tutor;
      let [day, time] = this.form.fullDateTime.split("/");
      if (day == "today") day = "오늘";
      else if (day == "tomorrow") day = "내일";
      tutor = this.tutorType == "regular" ? '"담당 강사"' : '"대체 강사"';
      classInfo = `${tutor}와 진행되는 ${day} ${time} 수업을 선택하셨습니다.\r보강을 신청하시겠습니까?`;
      if (confirm(classInfo)) {
        this.$store.dispatch("addMakeupClass", this.form);
        this.dialog = false;
      } else {
        this.selectedDateTime = 0;
      }
    },
    getTutors(date) {
      axios
        .get("//phone.megatalking.com/origin/api/mypage.php", {
          params: {
            action: "classes",
            date
          }
        })
        .then(rs => {
          if (rs.data.result == true) {
            this.$set(this.$data, "tutorList", rs.data.list);
            if (this.tutorList.length) {
              this.s_id = this.tutorList[0].value;
            }
          } else {
            this.$set(this.$data, "tutorList", []);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getAbleTimes() {
      axios
        .get("//phone.megatalking.com/origin/api/makeup.php", {
          params: {
            action: this.tutorType,
            s_id: this.s_id
          }
        })
        .then(rs => {
          // console.log(rs);
          if (rs.data.result == true) {
            this.isNoAble = false;
            this.$set(this.$data, "ableTimeList", rs.data.list);
          } else {
            this.isNoAble = true;
            this.$set(this.$data, "ableTimeList", []);
          }
        })
        .catch(err => {
          this.$set(this.$data, "ableTimeList", []);
          console.log(err);
        });
    }
  },
  watch: {
    dialog(val) {
      if (!val) {
        this.s_id = "";
        this.tutorType = "";
        this.$set(this.$data, "ableTimeList", []);
      }
    },
    s_id() {
      this.tutorType = "";
      this.$set(this.$data, "ableTimeList", []);
      this.isNoAble = false;
    },
    tutorType() {
      this.getAbleTimes();
      this.$set(this.$data, "ableTimeList", []);
      this.isNoAble = false;
    }
  }
};
</script>

<style scoped>
.selected-tutor-type {
  background-color: #859ec9 !important;
  color: white;
}
</style>
