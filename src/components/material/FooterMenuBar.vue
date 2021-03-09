<template lang="html">
  <v-bottom-navigation grow background-color="" :app="isMobile">
    <v-btn @click="$router.push('/mypage')">
      <span>마이페이지</span>

      <v-icon>mdi-calendar-clock</v-icon>
    </v-btn>

    <v-btn @click="$router.push('/event')">
      <span>이벤트</span>

      <v-icon>mdi-bulletin-board</v-icon>
    </v-btn>

    <v-btn @click="$router.push('/account')">
      <span>수강내역</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["currentImage", "showNav", "screenWidth", "isMobile"])
  }
};
</script>

<style lang="css" scoped></style>
