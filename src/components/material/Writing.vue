<template lang="html">
  <v-container class="">
    <v-snackbar
      :timeout="5000"
      color="blue-grey"
      absolute
      cneter
      rounded="pill"
      top
      v-model="snackbar"
    >
      <div class="text-center">
        영작교정 요청이 성공적으로 보내졌습니다.
      </div>
    </v-snackbar>
    <div class="h5 text-left nanum mt-5 ml-10">1:1 글쓰기.</div>
    <v-card flat class="rounded-xl mx-auto mt-8" width="90%">
      <v-textarea
        height="200"
        outlined
        color="#769de4"
        label="오늘 연습한 표현을 활용하여 영작해주세요."
        v-model="contents"
        :readonly="readonly"
        :filled="readonly"
      ></v-textarea>
    </v-card>
    <v-row justify="center">
      <v-btn
        class="white--text rounded-pill px-10"
        style="
          background: linear-gradient(to right, #add6f5, #85a5df);
        "
        :disabled="validate || readonly"
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
        v-model="readBack"
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
      snackbar: false,
      contents: "",
      readBack: "",
      readonly: false
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
  created() {
    this.getWriting();
  },
  methods: {
    getWriting() {
      let token = this.$cookie.get("access-token");
      if (token) {
        axios.defaults.headers.common["Authorization"] = this.$cookie.get(
          "access-token"
        );
        axios
          .get("//phone.megatalking.com/origin/api/write.php", {
            params: {
              todate: this.currentClassInfo.todate,
              tutor_id: this.currentClassInfo.lec_id,
              student_id: this.currentClassInfo.id
            }
          })
          .then(rs => {
            console.log(rs);
            let existData = Object.keys(rs.data).length;
            if (existData) {
              this.contents = rs.data.writing.contents_view;
              this.readonly = true;
              if (rs.data.answer) {
                this.readBack = rs.data.answer.contents_view;
              }
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
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
            if (rs.data.result == true) {
              this.snackbar = true;
              this.contents = "";
              this.getWriting();
            }
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
