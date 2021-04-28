<template>
  <v-dialog max-width="700" v-model="courseDialog" class="rounded-xl">
    <v-card color="#6991C7" style="border-radius: 20px">
      <v-container class="h5 nanum white--text text-left">
        <v-row :class="$vuetify.breakpoint.smAndUp ? 'px-5' : undefined">
          <v-col>
            <div>수강증</div>
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
            <v-col class="font-weight-bold" sm="6" cols="6">
              <div>Company</div>
              <div>Address</div>
              <div>Registration #</div>
              <div>Nature of Business</div>
              <div>Representative</div>
              <div>Type</div>
            </v-col>
            <v-col sm="6" cols="6">
              <div>MegaTalking</div>
              <div>[address]</div>
              <div>[reg#]</div>
              <div>Education</div>
              <div>[name_of_owner]</div>
              <div>[type]</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="blue-text font-weight-bold" style="font-size: 18px">
              <div>수강선택</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="font-weight-bold" sm="6" cols="6">
              <div>Name</div>
              <div>수강종류</div>
              <div>수강과정</div>
              <div>수강기간</div>
              <div>시작일시</div>
            </v-col>
            <v-col sm="6" cols="6">
              <div>[student_name]</div>
              <div>전화영어 (하루 10분)</div>
              <div>추천과정</div>
              <div>1년 / 주2회(화,목)</div>
              <div>4/15 (목) / 프라임 6:30</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="nanum" style="font-size: 9px">
                This certification is a proof that the student studied in this
                academy.
              </div>
              <div class="nanum" style="font-size: 9px">[today_date]</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-center">
              <v-btn
                depressed
                rounded
                class="blue-text font-weight-bold"
                color="#E5E5E5"
              >
                취소
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
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
      courseData: []
    };
  },
  methods: {
    open(item) {
      this.courseData = item;
      this.courseDialog = true;
      console.log(item);
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
