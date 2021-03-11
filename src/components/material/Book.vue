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
      return `http://178.128.213.14/students-material/#/step3?unitid=${this.unitId}`;
    }
  }
};
</script>

<style lang="css" scoped></style>
