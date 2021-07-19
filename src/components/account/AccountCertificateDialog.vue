<template>
  <v-dialog max-width="700" v-model="certificateDialog" class="rounded-xl">
    <v-card color="#6991C7" style="border-radius: 20px">
      <v-container class="h5 nanum white--text text-left">
        <v-row :class="$vuetify.breakpoint.smAndUp ? 'px-5' : undefined">
          <v-col>
            <div>출석증명서</div>
          </v-col>
        </v-row>
      </v-container>
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
            <v-col class="font-weight-bold" sm="5" cols="5">
              <div>서비스명</div>
              <br v-show="$vuetify.breakpoint.xsOnly" />
              <div>사업자 등록번호</div>
              <div>업 태</div>
              <div>업 종</div>
            </v-col>
            <v-col sm="7" cols="7">
              <div>메가토킹(1:1 영어회화 교육 서비스)</div>
              <div>124-87-33297</div>
              <div>서비스</div>
              <div>온라인 교육 서비스</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="font-weight-bold" sm="5" cols="5">
              <div>수 강 자</div>
              <div>아 이 디</div>
              <div>수강정보</div>
              <div>수강기간</div>
              <div>출 석 률</div>
            </v-col>
            <v-col sm="7" cols="7">
              <div>
                {{ certificateData.name }}
              </div>
              <div>
                {{ certificateData.s_id }}
              </div>
              <div>
                {{ certificateData.course }}
              </div>
              <div>
                {{ certificateData.s_day }} ~ {{ certificateData.e_day }}
              </div>
              <div>
                {{
                  Math.floor(
                    (certificateData.attned_num / certificateData.t_no) * 100
                  )
                }}% (참여 수업 {{ certificateData.attned_num }}회 / 발행 수업
                {{ certificateData.t_no }}회)
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="text-center nanum">
                상기 내용이 사실임을 확인합니다. <br />
                2020년 06월 23일
              </div>
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
              >
                인쇄
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-card>
  </v-dialog>
  <!-- <v-dialog max-width="700" v-model="certificateDialog" class="rounded-xl">
    <v-card max-width="700" class="rounded-xl">
      <v-card
        color="#6a9af2"
        class="pa-3 white--text font-weight-bold h6 rounded-tr-xl rounded-tl-xl"
        tile
      >
        Certificate of Attendance
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
              @click="certificateDialog = false"
              class="mr-3"
              outlined
              color="#6a9af2"
            >
              Close
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog> -->
</template>

<script>
export default {
  data() {
    return {
      certificateDialog: false,
      certificateData: [],
      date: new Date()
    };
  },
  methods: {
    open(item) {
      this.certificateDialog = true;
      this.certificateData = item;
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
