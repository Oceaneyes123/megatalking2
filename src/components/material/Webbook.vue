<template lang="html">
  <v-card
    v-if="isTimeScore"
    height="100%"
    width="100%"
    class="d-flex justify-center align-center"
  >
    <div>
      Please go to next Tab
    </div>
  </v-card>
  <iframe
    v-else
    width="100%"
    height="100%"
    :src="link"
    frameborder="0"
  ></iframe>
</template>

<script>
export default {
  data() {
    return {
      isTimeScore: false
    };
  },
  props: ["url"],
  mounted() {
    console.log("weebbook");

    if (
      this.link.indexOf("1203") != -1 ||
      this.link.indexOf("1204") != -1 ||
      this.link.indexOf("1205") != -1 ||
      this.link.indexOf("1206") != -1 ||
      this.link.indexOf("1207") != -1 ||
      this.link.indexOf("jkols") != -1
    ) {
      this.isTimeScore = true;
    }
  },
  computed: {
    link() {
      // return `https://megatalking.co.kr/students-material/#/step3?unitid=${this.unitId}`;
      return this.url;
    }
  }
};
</script>

<style lang="css" scoped></style>
