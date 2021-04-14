<template lang="html">
  <iframe width="100%" height="100%" :src="link" frameborder="0"></iframe>
</template>

<script>
export default {
  props: ["unitId"],
  computed: {
    link() {
      return `https://megatalking.co.kr/students-material/#/player?unitid=${this.unitId}`;
      // return `http://178.128.213.14/students-material/#/player?unitid=8`;
    }
  }
};
</script>

<style lang="css" scoped></style>
