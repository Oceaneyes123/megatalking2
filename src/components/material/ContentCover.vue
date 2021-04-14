<template lang="html">
  <v-card
    class="d-flex justify-center"
    style="background:#438fff"
    min-height="800px"
  >
    <div class="white--text h3 my-auto">
      <p class="text-center">Megatalking</p>
      <p class="text-center">Material</p>
      <p class="text-center overline">{{ currentCourseName }}</p>
      <p class="text-center">
        <v-btn x-large rounded @click="nextBook()" :disabled="!showOpenBtn">
          Open
          <v-icon right dark>
            mdi-book-open-outline
          </v-icon>
        </v-btn>
      </p>
      <p class="text-center overline" v-show="!showOpenBtn">
        교재로 진행하는 수업이 아니거나, 잘못된 접근 경로입니다.
      </p>
    </div>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
//import moment from "moment";

export default {
  data() {
    return {
      showOpenBtn: false
    };
  },
  created() {
    if (this.currentCourseName == "프리토킹") {
      this.showOpenBtn = false;
    } else if (this.currentCourseName.length != 0) {
      this.showOpenBtn = true;
    }

    // window.addEventListener("message", function(e){
    //   console.log(e)
    // })
  },
  computed: {
    ...mapState(["currentCourseName", "currentCourseLink"])
  },
  methods: {
    nextBook() {
      if (this.currentCourseLink.length != 0) {
        // window.open(this.currentCourseLink, "_blank");
        var bookWindow = window.open(
          "http://localhost:8000/book#/FreeTalking-QnA/FreeTalking-STEP1/chapter2",
          "bookWindow"
        );
        var data = { materialStartTime: new Date(Date.now()) };
        console.log(bookWindow);
        bookWindow.window.postMessage(data, "*");

        // if(localStorage.getItem("book_start_time") != null){
        //   console.log(moment((localStorage.getItem("book_start_time"))).add(1,'hours').format('h:mm'))
        // }else{
        //   localStorage.setItem('book_start_time', new Date(Date.now()))
        //   console.log(localStorage.getItem("book_start_time"))
        // }
      } else this.$emit("nextBook");
    }
  }
};
</script>

<style lang="css" scoped></style>
