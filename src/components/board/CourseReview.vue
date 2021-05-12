<template>
  <v-dialog v-model="courseReviewDialog" width="700">
    <v-card color="#6991C7" class="rounded-xl">
      <v-container class="h5 nanum white--text text-left">
        <v-row class="px-5">
          <v-col>
            <div>수강후기</div>
          </v-col>
        </v-row>
      </v-container>
      <v-card class="text-left px-5 rounded-xl">
        <v-container>
          <v-row>
            <v-col cols="2" class="font-weight-bold">
              <div>Name</div>
            </v-col>
            <v-col>
              <div>[student_name]</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="blue-text font-weight-bold" style="font-size: 18px">
              <div>Write a review about your course</div>
            </v-col>
          </v-row>
          <v-row class="px-3">
            <v-textarea outlined no-resize rows="10"></v-textarea>
          </v-row>
          <v-row>
            <v-col class="text-right">
              <v-btn
                depressed
                rounded
                class="blue-text font-weight-bold"
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
                class="nanum font-weight-bold"
                color="#2564CB"
                width="40%"
              >
                보내기
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CourseReview",
  data() {
    return {
      courseReviewDialog: false
    };
  },

  methods: {
    open() {
      this.courseReviewDialog = true;
    }
  }
};
</script>

<style scoped>
.blue-text {
  color: #2564cb;
}
</style>
