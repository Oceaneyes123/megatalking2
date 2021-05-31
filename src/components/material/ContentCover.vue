<template lang="html">
  <v-card
    class="d-flex justify-center"
    style="background:#438fff"
    min-height="800px"
  >
    <div class="white--text h3 my-auto">
      <p class="text-center">Megatalking</p>
      <p class="text-center">Material</p>
      <p class="text-center overline">{{ courseName }}</p>
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
      showOpenBtn: false,
      courseName: "",
      courseLink: ""
    };
  },
  created() {
    console.log(this.currentCourseName.length);
    if (this.currentCourseName == "프리토킹") {
      this.showOpenBtn = false;
    } else if (this.currentCourseName.length != 0) {
      this.courseName = this.currentCourseName;
      localStorage.setItem("currentCourseName", this.currentCourseName);
      localStorage.setItem("currentCourseLink", this.currentCourseLink);
      this.showOpenBtn = true;
    }

    //  window.addEventListener("message", function(e){
    //  console.log(e)
    //  })
  },

  mounted() {
    if (this.currentCourseName == "") {
      this.courseName = localStorage.getItem("currentCourseName");
      this.showOpenBtn = true;
    }

    if (this.currentCourseLink == "") {
      this.courseLink = localStorage.getItem("currentCourseLink");
    }

    console.log(this.courseName, this.courseLink);
  },
  computed: {
    ...mapState(["currentCourseName", "currentCourseLink", "currentClassInfo"])
  },
  methods: {
    nextBook() {
      // if (this.currentCourseLink.length != 0) {
      //   window.open(this.currentCourseLink, "_blank");
      // } else

      let link = this.courseLink;

      console.log(this.courseLink);

      if (
        link.indexOf("1203") != -1 ||
        link.indexOf("1204") != -1 ||
        link.indexOf("1205") != -1 ||
        link.indexOf("1206") != -1 ||
        link.indexOf("1207") != -1 ||
        link.indexOf("http:") != -1
      ) {
        window.open(this.courseLink, "_blank");
        this.$emit("nextBook");
      } else {
        this.$emit("nextBook");
      }
    }
  }
};
</script>

<style lang="css" scoped></style>
