<template lang="html">
  <v-tabs
    grow
    :show-arrows="false"
    height="50"
    center-active
    background-color="#667fe3"
    slider-color="#FFF"
    v-model="tabs"
  >
    <v-tab
      class="white--text"
      v-for="(step, i) in steps"
      :key="i"
      v-show="step.show"
      >{{ step.title }}</v-tab
    >
    <v-tab-item style="height: 80vh" v-show="steps[0].show">
      <VideoContent
        :unitId="unitId"
        v-if="this.courseLink == ''"
        id="videoContent"
      />
      <Webbook :url="this.courseLink" id="webbook" />
    </v-tab-item>
    <v-tab-item style="height: 80vh" v-show="steps[1].show">
      <Book :unitId="unitId" />
    </v-tab-item>
    <v-tab-item class="text-left" v-show="steps[2].show">
      <ClassReview />
    </v-tab-item>
    <v-tab-item style="height: 80vh" v-show="steps[3].show">
      <Writing />
    </v-tab-item>
  </v-tabs>
</template>

<script>
import { mapState } from "vuex";
import VideoContent from "@/components/material/VideoContent";
import ClassReview from "@/components/material/ClassReview";
import Writing from "@/components/material/Writing";
import Book from "@/components/material/Book";
import Webbook from "@/components/material/Webbook";
//import Evaluation from "@/components/material/Evaluation";

export default {
  components: {
    VideoContent,
    ClassReview,
    Writing,
    Book,
    Webbook
    //Evaluation
  },

  props: ["unitId", "setTab"],

  data() {
    return {
      tabs: 0,
      courseLink: "",
      steps: [
        {
          title: "예습",
          show: true
        },
        {
          title: "수업",
          show: true
        },
        {
          title: "평가",
          show: true
        },
        {
          title: "영작",
          show: true
        }
      ]
    };
  },

  created() {
    var vm = this;
    window.addEventListener(
      "message",
      event => {
        // console.log(event);
        if (event.data.isNext) {
          vm.tabs++;
        } else if (event.data.isBack) {
          vm.tabs--;
        }
      },
      false
    );

    if (
      this.isEmpty(this.currentCourseName) ||
      this.currentCourseName.indexOf("Video") != 0 ||
      localStorage.getItem("currentCourseName").indexOf("Video") != 0
    ) {
      //  this.steps[0].show = false;
      this.steps[1].show = false;
      this.tabs = 0;
    }
  },

  computed: {
    ...mapState(["currentCourseName", "currentCourseLink"])
  },

  mounted() {
    window.setInterval(this.clickFrame, 100);
    this.courseLink = localStorage.getItem("currentCourseLink");

    console.log(this.setTab);
  },
  methods: {
    // clickFrame() {
    //   if (document.activeElement == document.getElementById("videoContent")) {
    //     if (this.$cookie.get("isNext")) {
    //       this.tab++;
    //     }
    //     window.focus();
    //   }
    // },

    newTab(tab) {
      this.tabs = tab;
    },

    isEmpty(value) {
      if (
        value == "" ||
        value == null ||
        value == undefined ||
        (value != null &&
          typeof value == "object" &&
          !Object.keys(value).length)
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="css" scoped></style>
