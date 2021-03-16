<template lang="html">
  <v-dialog
    v-model="showEvaluationDialog"
    max-width="750"
    style="border-radius: 25px 25px 25px 25px !important;overflow-x:hidden"
    height="700"
    class="border-xl"
  >
    <v-card flat class="tile">
      <v-card flat color="#A9A7F3" class="tile">
        <v-container class="py-0">
          <v-row>
            <v-col cols="6" class="white--text">
              <span class="ml-5 h5 nanum">레벨 테스트 결과</span>
            </v-col>
            <v-col cols="6" class="d-flex justify-end">
              <v-icon color="white" large @click="showEvaluationDialog = false"
                >close</v-icon
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <v-card>
        <v-container style="max-width: 700px;">
          <v-row>
            <v-col cols="12">
              <span style="color:#7D79FF;">{{ classEvaluation["name"] }}</span
              >의 테스트 결과를준비하였습니다.
            </v-col>

            <v-col cols="12">
              수고하셨습니다. {{ classEvaluation["tutor"] }}강사님이 준비한
              테스트 결과에 따라 학습 컨설턴트가 회원님에 맞는수업을 추천해
              드립니다.
            </v-col>

            <v-col cols="12">
              <span style="color:#7D79FF;">발음</span>
            </v-col>

            <v-col cols="12">
              <span v-html="pronunciation"></span>
            </v-col>

            <v-col cols="12">
              <span style="color:#7D79FF;">문법</span>
            </v-col>

            <v-col cols="12">
              <span v-html="grammar"></span>
            </v-col>

            <v-col cols="12">
              <span style="color:#7D79FF;">이해도</span>
            </v-col>

            <v-col cols="12">
              <span v-html="comprehension"></span>
            </v-col>

            <v-col cols="12">
              <span style="color:#7D79FF;">유창성</span>
            </v-col>

            <v-col cols="12">
              <span v-html="confidence"></span>
            </v-col>

            <v-col cols="12">
              <v-card
                min-width="500"
                style="border: 1px solid black"
                min-height="200"
              >
                <v-list>
                  <v-list-item>
                    <v-list-item-title>Total Score</v-list-item-title>

                    <v-list-item-action
                      >{{ level_score }}/1000</v-list-item-action
                    >
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-title>Area</v-list-item-title>
                    <v-list-item-action>Score</v-list-item-action>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Pronunciation</v-list-item-title>
                    <v-list-item-action>
                      {{
                        classEvaluation["score_pronunciation"]
                      }}</v-list-item-action
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Grammar</v-list-item-title>
                    <v-list-item-action>
                      {{ classEvaluation["score_grammar"] }}</v-list-item-action
                    >
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-title>Comprehension</v-list-item-title>
                    <v-list-item-action>
                      {{
                        classEvaluation["score_comprehension"]
                      }}</v-list-item-action
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Fluency</v-list-item-title>
                    <v-list-item-action>
                      {{ classEvaluation["score_fluency"] }}</v-list-item-action
                    >
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>

            <v-col cols="12">
              <div style="position:relative">
                <div style="position:absolute;width:48%;z-index:5;">
                  <p class="text-right mb-0 pt-2" style="color:#7c868e">
                    Pronunciation
                  </p>
                  <p class="text-right mb-0 pt-2" style="color:#7c868e">
                    Grammar
                  </p>
                  <p class="text-right mb-0 pt-2" style="color:#7c868e">
                    Comprehension
                  </p>
                  <p class="text-right mb-0 pt-2" style="color:#7c868e">
                    Fluency
                  </p>
                </div>
                <div class="text-center">
                  <v-progress-circular
                    :value="classEvaluation['score_pronunciation'] * 10"
                    width="25"
                    size="350"
                    color="#64b5f6"
                    rotate="-90"
                  >
                    <v-progress-circular
                      :value="classEvaluation['score_grammar'] * 10"
                      width="25"
                      size="290"
                      color="#1976d2"
                      rotate="-90"
                    >
                      <v-progress-circular
                        :value="classEvaluation['score_comprehension'] * 10"
                        width="25"
                        size="230"
                        color="#ef6c00"
                        rotate="-90"
                      >
                        <v-progress-circular
                          :value="classEvaluation['score_fluency'] * 10"
                          width="25"
                          size="170"
                          color="#ffd54f"
                          rotate="-90"
                        >
                        </v-progress-circular>
                      </v-progress-circular>
                    </v-progress-circular>
                  </v-progress-circular>
                </div>
              </div>
            </v-col>
          </v-row>

          <v-row class="align-center justify-center  fill-height">
            <v-btn
              class="ma-2 mt-5 white--text"
              @click="$router.push('/enrollment')"
              color="#7D79FF"
              >수강신청</v-btn
            >
            <v-btn
              class="ma-2 mt-5"
              @click="showEvaluationDialog = false"
              style="color:#5C5C5C"
              >Close</v-btn
            >
          </v-row>
        </v-container>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
import nl2br from "nl2br";
export default {
  data() {
    return {
      showEvaluationDialog: false
    };
  },
  computed: {
    pronunciation() {
      return nl2br(this.classEvaluation["pronunciation"]);
    },
    grammar() {
      return nl2br(this.classEvaluation["grammar"]);
    },
    comprehension() {
      return nl2br(this.classEvaluation["comprehension"]);
    },
    confidence() {
      return nl2br(this.classEvaluation["confidence"]);
    },
    level_score() {
      //((41+42+44+42)/400)*1000
      let sp = parseFloat(this.classEvaluation["score_pronunciation"]) * 10;
      let sg = parseFloat(this.classEvaluation["score_grammar"]) * 10;
      let sc = parseFloat(this.classEvaluation["score_comprehension"]) * 10;
      let sf = parseFloat(this.classEvaluation["score_fluency"]) * 10;
      let level_score = ((sp + sg + sc + sf) / 400) * 1000;
      return level_score;
    }
  },
  props: ["classEvaluation"],
  methods: {
    open() {
      this.showEvaluationDialog = true;
    }
  }
};
</script>

<style lang="css" scoped></style>
