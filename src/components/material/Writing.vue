<template lang="html">
  <v-container class="">
    <div class="h5 text-left nanum mt-5 ml-10">1:1 글쓰기.</div>
    <v-card flat class="rounded-xl mx-auto mt-8" width="90%">
      <v-textarea
        height="200"
        outlined
        color="#769de4"
        label="오늘 연습한 표현을 활용하여 영작해주세요."
        v-model="contents"
      ></v-textarea>
    </v-card>
    <v-row justify="center">
      <v-btn
        class="white--text rounded-pill px-10"
        style="
          background: linear-gradient(to right, #add6f5, #85a5df);
        "
        :disabled="validate"
        @click="sendWriting()"
        >제출하기</v-btn
      >
    </v-row>
    <div class="h5 text-left nanum mt-5 ml-10">영작 피드백</div>
    <v-card flat class="rounded-xl mx-auto mt-8" width="90%">
      <v-textarea
        height="250"
        outlined
        color="#769de4"
        readonly
        label="강사님이 직접 남겨주신 피드백입니다 ."
        value="test"
      ></v-textarea>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      contents: ""
    };
  },
  computed: {
    ...mapState(["currentClassInfo"]),
    form() {
      return {
        contents: this.contents,
        tutor_id: this.currentClassInfo.lec_id,
        todate: this.currentClassInfo.todate
      };
    },
    validate() {
      return this.contents.trim() == "";
    }
  },
  methods: {
    sendWriting() {
      if (this.contents.trim() == "") return;
      let token = this.$cookie.get("access-token");
      if (token) {
        axios.defaults.headers.common["Authorization"] = this.$cookie.get(
          "access-token"
        );
        axios
          .post("//phone.megatalking.com/origin/api/write.php", this.form)
          .then(rs => {
            console.log(rs);
            this.contents = "";
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style lang="css" scoped></style>
