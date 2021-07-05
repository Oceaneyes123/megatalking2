<template>
  <v-dialog max-width="700" v-model="courseDialog" class="rounded-xl">
    <v-card
      :class="
        $vuetify.breakpoint.xsOnly
          ? 'text-left card-bg'
          : 'text-left card-bg px-5'
      "
      style="border-radius: 20px"
    >
      <v-container style="font-size: 14px">
        <v-row>
          <v-col class="blue-text font-weight-bold" style="font-size: 18px">
            <div>공급자</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="font-weight-bold" sm="6" cols="4">
            <div>상호</div>
            <div>사업장소재지</div>
            <br v-show="$vuetify.breakpoint.xsOnly" />
            <div
              :style="$vuetify.breakpoint.xsOnly ? { fontSize: 'smaller' } : {}"
            >
              사업자등록번호
            </div>
            <div>업태</div>
            <div>대표자</div>
            <div>종목</div>
          </v-col>
          <v-col sm="6" cols="8">
            <div>(주)유에듀케이션</div>
            <div class="korean-text">
              수원시 팔달구 권광로 122, 두오빌딩 4층
            </div>
            <div>124-87-33297</div>
            <v-row no-gutters>
              <v-col style="width: max-content">
                <div>서비스</div>
                <div>정원석</div>
                <div>온라인 교육</div>
              </v-col>
              <v-col>
                <v-img width="75px" src="../../assets/boss_stamp 1.png"></v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="blue-text font-weight-bold" style="font-size: 18px">
            <div>수강선택</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="font-weight-bold" sm="6" cols="4">
            <div>발급일자</div>
            <div>수강과정</div>
            <div>학습기간</div>
            <br />
            <div>결제 금액</div>
            <div>결제방법</div>
            <div>결제일자</div>
            <div>수강자</div>
          </v-col>
          <v-col sm="6" cols="8">
            <div>{{ courseData.date }}</div>
            <div>
              <div v-if="courseData.pay_progress != null">
                {{ courseData.pay_progress.paymentInfo.bookName }}
                {{ courseData.course }}
              </div>
              <div v-else>-</div>
            </div>
            <div>{{ courseData.s_day }} ~ {{ courseData.e_day }}</div>
            <br />
            <div>
              <div v-if="courseData.pay_progress != null">
                {{ courseData.pay_progress.paymentInfo.value }}원
              </div>
              <div v-else>-</div>
            </div>
            <div>{{ courseData.method }}</div>
            <div>{{ courseData.date }}</div>
            <div>{{ courseData.name }}</div>
          </v-col>
        </v-row>
        <v-row align="end">
          <v-col class="d-flex flex-row justify-center align-end">
            <div
              class="nanum text-center font-weight-bold"
              style="font-size: 18px"
            >
              주식회사 유에듀케이션
            </div>
            <div>
              <v-img
                style="width: 50px !important"
                src="../../assets/uedu_stamp 1.png"
              ></v-img>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-right">
            <v-btn
              depressed
              rounded
              class="blue-text font-weight-bold py-5"
              color="#E5E5E5"
              width="40%"
              @click="courseDialog = false"
            >
              취소
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              dark
              depressed
              rounded
              class="nanum font-weight-bold py-5"
              color="#2564CB"
              width="40%"
              @click="courseDialog = false"
            >
              보내기
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <!-- <v-card max-width="700" class="rounded-xl">
      <v-card
        color="#6a9af2"
        class="pa-3 white--text font-weight-bold h6 rounded-tr-xl rounded-tl-xl"
        tile
      >
        Course Certificate
      </v-card>
      <v-container>
        <v-row>
          <v-col cols="12" md="6" class="pb-0 pb-md-3">
            <v-container class="px-0 py-0">
              <v-row no-gutters class="mb-2">
                <v-col cols="6" class="font-weight-bold">Company</v-col>
                <v-col cols="6">[Company]</v-col>
              </v-row>
              <v-row no-gutters class="mb-2">
                <v-col cols="6" class="font-weight-bold">Address</v-col>
                <v-col cols="6">[Address]</v-col>
              </v-row>
              <v-row no-gutters class="mb-2">
                <v-col cols="6" class="font-weight-bold">Registration #</v-col>
                <v-col cols="6">[Registration #]</v-col>
              </v-row>
              <v-row no-gutters class="mb-2">
                <v-col cols="6" class="font-weight-bold"
                  >Nature of Business</v-col
                >
                <v-col cols="6">[Nature of Business]</v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="12" md="6" class="pt-0 pt-md-3">
            <v-container class="px-0 py-0">
              <v-row no-gutters class="mb-2">
                <v-col cols="6" class="font-weight-bold">Representative</v-col>
                <v-col cols="6">[Representative]</v-col>
              </v-row>

              <v-row no-gutters class="mb-2">
                <v-col cols="6" class="font-weight-bold">Type</v-col>
                <v-col cols="6">[Type]</v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
      <v-container>
        <v-row no-gutters class="mb-2">
          <v-col cols="3" class="font-weight-bold">Name</v-col>
          <v-col cols="9">[Name]</v-col>
        </v-row>
        <v-row no-gutters class="mb-2">
          <v-col cols="3" class="font-weight-bold">Course</v-col>
          <v-col cols="9">[Course]</v-col>
        </v-row>
        <v-row no-gutters class="mb-2">
          <v-col cols="3" class="font-weight-bold">Contract</v-col>
          <v-col cols="9">[Contract]</v-col>
        </v-row>
        <v-row no-gutters class="mb-2">
          <v-col cols="3" class="font-weight-bold">Period</v-col>
          <v-col cols="9">[Period]</v-col>
        </v-row>
        <v-row>
          <v-col class="caption-text">
            This certification is a proof that the student studied in this
            academy. <br />
            [today_date]
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-end">
            <v-btn
              @click="courseDialog = false"
              class="mr-3"
              outlined
              color="#6a9af2"
            >
              Close
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card> -->
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      courseDialog: false,
      courseData: [],

      date: new Date()
    };
  },

  methods: {
    open(item) {
      this.courseData = item;
      this.courseDialog = true;
    },

    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    }
  }
};
</script>

<style scoped>
.blue-text {
  color: #2564cb;
}
.card-bg {
  background-image: url("../../assets/android-chrome-512x512 2.png"),
    linear-gradient(to right, #fff, #fff);
  background-position: bottom right;
  background-repeat: no-repeat;
}
</style>
