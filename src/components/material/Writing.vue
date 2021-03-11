<template lang="html">
  <v-container>
    <div class="h5 text-left nanum">1:1 글쓰기.</div>
    <div class="caption-text text-left">
      오늘 연습한 표현을 활용하여 영작해주세요.
    </div>
    <v-card flat class="rounded-xl mx-auto mt-8" width="90%">
      <v-textarea height="150" outlined color="#769de4"></v-textarea>
    </v-card>
    <v-row justify="center">
      <v-btn
        class="white--text rounded-pill px-10"
        style="
          background: linear-gradient(to right, #add6f5, #85a5df);
        "
        >제출하기</v-btn
      >
    </v-row>
    <div class="h5 text-left nanum mt-10">영작 피드백</div>
    <div class="caption-text text-left">
      강사님이 직접 남겨주신 피드백입니다 .
    </div>
    <v-card flat class="rounded-xl mx-auto mt-8" width="90%">
      <v-textarea height="150" outlined color="#769de4"></v-textarea>
    </v-card>
    <v-row justify="center">
      <v-btn
        class="white--text rounded-pill px-10"
        style="
          background: linear-gradient(to right, #add6f5, #85a5df);
        "
        >제출하기</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="css" scoped></style>
