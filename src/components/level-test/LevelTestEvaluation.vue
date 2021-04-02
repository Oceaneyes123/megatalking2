<template lang="html">
  <v-dialog
    v-model="showEvaluationDialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    class="black"
  >
    <v-card flat class="tile black">
      <v-toolbar dark>
        <v-toolbar-title>레벨 테스트 결과</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn icon dark @click="showEvaluationDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card class="black">
        <iframe
          width="100%"
          ref="myframe"
          style="height:90vh"
          :src="iframe.src"
          @load="load"
          v-show="iframe.loaded"
          frameborder="0"
        ></iframe>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      showEvaluationDialog: false,
      l_id: "",
      iframe: {
        src: "",
        loaded: false
      }
    };
  },
  computed: {},
  mounted() {},
  props: ["classEvaluation"],
  methods: {
    open() {
      this.showEvaluationDialog = true;
    },
    setLid(l_id) {
      this.iframe.src = "https://megatalking.co.kr/lv/#/evaluation-new/" + l_id;
    },
    load() {
      this.iframe.loaded = true;
    }
  }
};
</script>

<style lang="css" scoped></style>
