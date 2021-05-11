<template lang="html">
  <v-bottom-navigation grow background-color="" :app="isMobile">
    <v-btn @click="$router.push('/mypage')">
      <span>마이페이지</span>
      <v-icon>mdi-calendar-clock</v-icon>
    </v-btn>

    <v-btn @click="openList(1)" v-if="showListBtn">
      <span>교재목차</span>
      <v-icon>mdi-format-list-bulleted</v-icon>
    </v-btn>

    <v-btn @click="openList(0)" v-if="!showListBtn">
      <span>교재열기</span>
      <v-icon>mdi-book-open-variant</v-icon>
    </v-btn>

    <v-btn @click="openList(2)" v-if="!showListBtn && isRC">
      <span>강사평가</span>
      <v-icon>mdi-clipboard-edit-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      showListBtn: false,
      isRC: true
    };
  },
  computed: {
    ...mapState([
      "currentImage",
      "showNav",
      "screenWidth",
      "isMobile",
      "currentCourseName"
    ])
  },
  methods: {
    openList(step) {
      this.$emit("openList", step);
    }
  },
  created() {
    if (this.currentCourseName.indexOf("Video") != -1) this.showListBtn = true;

    if (this.currentCourseName == "") this.isRC = false;
  }
};
</script>

<style lang="css" scoped></style>
