<template>
  <v-card class="rounded-xl pa-5" color="#fafafa" flat>
    <v-card color="#333333" class="pa-10 rounded-xl" flat>
      <div class="text-center white--text">Image Here</div>
    </v-card>
    <div class="d-flex mx-auto justify-center">
      <v-btn
        class="white--text rounded-pill mt-5 pa-7"
        style="background: linear-gradient(to right, #ff9351, #f96a70)"
      >
        <span class="h5 nanum">PDF 교재 다운로드</span>
      </v-btn>
    </div>

    <div class="mt-5 grey--text caption">
      * 다운로드 버튼을 통해 교재를 확인해주세요.
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
