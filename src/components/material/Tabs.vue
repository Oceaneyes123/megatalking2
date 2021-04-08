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
      <VideoContent :unitId="unitId" id="videoContent" />
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
//import Evaluation from "@/components/material/Evaluation";

export default {
  components: {
    VideoContent,
    ClassReview,
    Writing,
    Book
    //Evaluation
  },
  data() {
    return {
      tabs: 0,
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
  computed: {
    ...mapState(["currentCourseName"])
  },
  props: ["unitId"],
  mounted() {
    window.setInterval(this.clickFrame, 100);
  },
  methods: {
    clickFrame() {
      if (document.activeElement == document.getElementById("videoContent")) {
        console.log("test");
        console.log(this.$cookie.get("isNext"));
        window.focus();
      }
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
  },
  created() {
    if (
      this.isEmpty(this.currentCourseName) ||
      this.currentCourseName.indexOf("Video") != 0
    ) {
      this.steps[0].show = false;
      this.steps[1].show = false;
      this.tabs = 2;
    }
  }
};
</script>

<style lang="css" scoped></style>
