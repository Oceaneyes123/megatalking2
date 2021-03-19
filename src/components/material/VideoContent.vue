<template lang="html">
  <iframe width="100%" height="100%" :src="link" frameborder="0"></iframe>
</template>

<script>
export default {
  props: ["unitId"],
  computed: {
    link() {
      return `http://178.128.213.14/students-material/#/player?unitid=${this.unitId}`;
    }
  }
};
</script>

<style lang="css" scoped></style>
