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

export default {
  data() {
    return {
      showOpenBtn: false
    };
  },
  computed: {
    ...mapState(["currentCourseName", "currentCourseLink"])
  },
  methods: {
    nextBook() {
      if (this.currentCourseLink.length != 0)
        window.open(this.currentCourseLink, "_blank");
      else this.$emit("nextBook");
    }
  },
  created() {
    if (this.currentCourseName == "프리토킹") {
      this.showOpenBtn = false;
    } else if (this.currentCourseName.length != 0) {
      this.showOpenBtn = true;
    }
  }
};
</script>

<style lang="css" scoped></style>
