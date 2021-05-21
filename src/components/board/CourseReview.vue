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
            <v-text-field
              single-line
              placeholder="Title"
              v-model="title"
              outlined
            ></v-text-field>
          </v-row>
          <v-row class="px-3">
            <v-textarea
              v-model="content"
              placeholder="Content"
              outlined
              no-resize
              rows="10"
            ></v-textarea>
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
                @click="writeReview()"
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
import axios from "axios";
export default {
  name: "CourseReview",
  data() {
    return {
      title: "",
      content: "",
      courseReviewDialog: false
    };
  },

  methods: {
    open() {
      this.courseReviewDialog = true;
    },
    writeReview() {
      console.log(this.title);
      console.log(this.content);

      // const form = new FormData();
      // form.append("title", this.title);
      // form.append("content", this.content);

      var form = { title: this.title, content: this.content };

      axios.post("//phone.megatalking.com/origin/api/review.php", form).then(
        res => {
          console.log(res.data);
        },
        error => {
          console.log(error);
        }
      );

      this.$emit("reviewCompleted");

      this.courseReviewDialog = false;
    }
  }
};
</script>

<style scoped>
.blue-text {
  color: #2564cb;
}
</style>
