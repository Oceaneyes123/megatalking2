<template lang="html">
  <iframe width="100%" height="100%" :src="link" frameborder="0"></iframe>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["unitId"],
  mounted() {
    console.log("weebbook");
  },
  computed: {
    link() {
      // return `https://megatalking.co.kr/students-material/#/step3?unitid=${this.unitId}`;
      return `http://ueducms.org/book_list`;
    }
  }
};
</script>

<style lang="css" scoped></style>
