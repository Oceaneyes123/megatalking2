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
    <v-tab class="white--text" v-for="(step, i) in steps" :key="i">{{
      step
    }}</v-tab>
    <v-tab-item style="height: 80vh">
      <VideoContent :unitId="unitId" />
    </v-tab-item>
    <v-tab-item style="height: 80vh">
      <Book :unitId="unitId" />
    </v-tab-item>
    <v-tab-item class="text-left">
      <ClassReview />
    </v-tab-item>
    <v-tab-item style="height: 80vh">
      <Writing />
    </v-tab-item>
  </v-tabs>
</template>

<script>
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
      steps: ["예습", "수업", "평가", "영작"]
    };
  },
  props: ["unitId"],
  methods: {}
};
</script>

<style lang="css" scoped></style>
