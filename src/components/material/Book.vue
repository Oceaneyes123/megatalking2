<template lang="html">
  <iframe width="100%" height="100%" :src="link" frameborder="0"></iframe>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["unitId"],
  computed: {
    link() {
      // return `https://megatalking.co.kr/students-material/#/step3?unitid=${this.unitId}`;
      // return `https://ueducms.org/students-material/dist/#/player?unitid=${this.unitId}`;
      return `https://ueducms.org/students-material/dist/#/step3?unitid=${this.unitId}`;
    }
  }
};
</script>

<style lang="css" scoped></style>
