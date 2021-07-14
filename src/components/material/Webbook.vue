<template lang="html">
  <v-card
    v-if="isTimeScore"
    height="100%"
    width="100%"
    class="d-flex flex-column justify-center align-center"
  >
    <div class="mb-10">
      <v-btn :href="link" target="_blank">교재보기</v-btn>
    </div>
    <div class="">
      오늘의 수업평가를 위해 "평가" 탭을 클릭해주세요.
    </div>
    <div>
      Please go to next Tab for evaluating today class
    </div>
  </v-card>
  <v-card height="100%" flat v-else>
    <v-overlay v-model="overlay" absolute>
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-overlay>
    <iframe
      id="frame"
      width="100%"
      height="100%"
      :src="link"
      frameborder="0"
    ></iframe>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      overlay: true
    };
  },
  props: ["url", "active"],
  mounted() {
    setTimeout(() => {
      this.overlay = false;
    }, 2500);
  },

  watch: {
    active: function() {
      if (this.active) {
        document.getElementById("frame").src = this.link;
      } else {
        var frame = document.getElementById("frame");
        frame.src = "";
      }
    }
  },
  computed: {
    isTimeScore() {
      if (
        this.link.indexOf("1203") != -1 ||
        this.link.indexOf("1204") != -1 ||
        this.link.indexOf("1205") != -1 ||
        this.link.indexOf("1206") != -1 ||
        this.link.indexOf("1207") != -1 ||
        this.link.indexOf("jkols") != -1 ||
        this.link.indexOf("textbook.php") != -1 ||
        this.link.indexOf("http:") != -1
      ) {
        return true;
      }
      return false;
    },
    link() {
      // return `https://megatalking.co.kr/students-material/#/step3?unitid=${this.unitId}`;
      return this.url;
    }
  }
};
</script>

<style lang="css" scoped></style>
