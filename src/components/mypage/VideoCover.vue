<template>
  <v-card
    class="rounded-xl"
    style="border: 1px solid #5e75cf"
    @click="$router.push('/material')"
    flat
  >
    <v-img src="@/assets/tab/video4.jpg"></v-img>
    <div :class="isMobile ? 'h5 nanum' : 'h3'" class="text-center">
      유튜브 미디어과정:: 셀럽과의 대화
    </div>
    <v-divider></v-divider>
    <div
      :class="isMobile ? 'h5 nanum' : 'h3'"
      class="text-center"
      style="color: #5e75cf; line-break: strict; word-break: keep-all"
    >
      오늘의 강의
    </div>
  </v-card>
</template>

<script>
export default {
  props: [],
  data() {
    return {};
  },

  mounted() {},
  methods: {}
};
</script>

<style lang="css" scoped></style>
