<template lang="html">
  <v-container class="pb-5">
    <v-snackbar
      :timeout="5000"
      color="blue-grey"
      absolute
      cneter
      rounded="pill"
      top
      v-model="snackbar"
    >
      <div class="text-center korean-text">
        강사평가서가 성공적으로 보내졌습니다.
      </div>
    </v-snackbar>

    <v-row class="align-md-center">
      <v-col cols="12">
        <div class="text-center mb-2 korean-text">
          {{ currentClassInfo.year }}년 {{ currentClassInfo.month }}월
          {{ currentClassInfo.day }}일 <br />{{ currentClassInfo.lec_name }}
          강사님 수업은 어떠셨나요?
        </div>
        <div class="text-center">
          <v-rating
            v-model="rating"
            half-increments
            color="yellow darken-2"
            hover
            x-large
            background-color="yellow darken-2"
            full-icon="fas fa-star"
            empty-icon="far fa-star"
            half-icon="fas fa-star-half-alt"
            :readonly="disabled || validate"
          ></v-rating>
        </div>
      </v-col>
      <v-col
        class="mx-auto"
        cols="12"
        sm="7"
        align-self="center"
        v-for="(suggestion, i) in step4Suggestions"
        :key="i"
      >
        <v-btn
          large
          outlined
          block
          @click="selectSuggestion(i)"
          :class="
            selectedSuggestion.includes(i)
              ? 'primary--text font-weight-bold border'
              : 'text-grey'
          "
          :disabled="validate"
          >{{ suggestion }}</v-btn
        >
      </v-col>
      <v-col class="mx-auto" cols="12" sm="7">
        <v-textarea
          outlined
          class="rounded-xl"
          height="20vh"
          v-model="opinion"
          label="오늘 수업 즐거우셨나요?"
          :readonly="disabled || validate"
          :filled="disabled || validate"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-10 mb-md-0">
      <v-btn
        style="
          background: linear-gradient(to right,#8fa1fe,#4993e8);
        "
        class="mx-auto rounded-lg white--text mb-5"
        @click="sendClassReview()"
        :loading="btnLoading"
        :disabled="disabled || validate"
        >보내기</v-btn
      >
    </v-row>

    <StudentRatingConfirmation
      :data="{}"
      ref="ratingDialog"
    ></StudentRatingConfirmation>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import StudentRatingConfirmation from "@/components/material/StudentRatingConfirmation.vue";
export default {
  components: { StudentRatingConfirmation },
  data() {
    return {
      snackbar: false,
      rating: 0.5,
      opinion: "",
      step4Suggestions: [
        "조금 천천히 말해주세요.",
        "활기찬 분위기를 원해요.",
        "질문을 많이 해주세요.",
        "틀린 부분을 바로바로 고쳐주세요.",
        "많이 말하도록 유도해주세요."
      ],
      selectedSuggestion: [],
      btnLoading: false,
      disabled: false,
      validate: true
    };
  },
  created() {
    this.filterValideDate();
    this.getReviewData();
  },
  computed: {
    ...mapState(["currentClassInfo"]),
    form() {
      let selected = [];
      let type = "";
      this.selectedSuggestion.forEach(item => {
        selected.push({ key: item, text: this.step4Suggestions[item] });
      });
      type = this.currentClassInfo.jong == 1 ? "RC" : "MC";
      console.log(type);
      return {
        timestamp: this.currentClassInfo.todate,
        score: this.rating,
        selected: selected,
        text: this.opinion,
        s_id: this.currentClassInfo.s_id,
        tutor_id: this.currentClassInfo.lec_id,
        student_id: this.currentClassInfo.id,
        type: type
      };
    }
  },

  mounted() {
    console.log(this.currentClassInfo);
  },
  methods: {
    filterValideDate() {
      //오늘이전 3일 수업전만 가능하게
      let startDate, endDate, pickDate;
      endDate = new Date(); //오늘
      startDate = new Date(endDate.getTime() - 60 * 60 * 24 * 3 * 1000); //3일전
      pickDate = new Date(this.currentClassInfo.todate * 1000); //선택한 날짜
      if (
        startDate.getTime() <= pickDate.getTime() &&
        pickDate.getTime() <= endDate.getTime()
      ) {
        this.validate = false;
        this.rating = 4.5;
      }
    },
    sendClassReview() {
      if (this.disabled) return;
      this.btnLoading = true;
      let token = this.$cookie.get("access-token");
      if (token) {
        axios.defaults.headers.common["Authorization"] = this.$cookie.get(
          "access-token"
        );
        var confirmationData = {
          lec_name: this.currentClassInfo.lec_name,
          rating: this.rating
        };
        axios
          .post(
            "//phone.megatalking.com/origin/api/class_review.php",
            this.form
          )
          .then(rs => {
            if (rs.data.result == true) {
              this.btnLoading = false;
              this.snackbar = true;
              this.getReviewData();
              this.$refs.ratingDialog.open(confirmationData);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    getReviewData() {
      let token = this.$cookie.get("access-token");
      if (token) {
        axios.defaults.headers.common["Authorization"] = this.$cookie.get(
          "access-token"
        );
        axios
          .get("//phone.megatalking.com/origin/api/class_review.php", {
            params: {
              s_id: this.currentClassInfo.s_id,
              timestamp: this.currentClassInfo.todate
            }
          })
          .then(rs => {
            let existData = Object.keys(rs.data).length;
            if (existData) {
              //수업이 있다면
              this.disabled = true;
              this.rating = rs.data.score / 2;
              this.opinion = rs.data.text;
              let selected = JSON.parse(rs.data.selected);
              this.selectedSuggestion = [];
              selected.forEach(item => {
                this.selectedSuggestion.push(item.key);
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    selectSuggestion(index) {
      if (this.disabled) return;
      if (this.selectedSuggestion.includes(index)) {
        const num = this.selectedSuggestion.indexOf(index);
        this.selectedSuggestion.splice(num, 1);
      } else {
        this.selectedSuggestion.push(index);
      }
    }
  }
};
</script>

<style lang="css" scoped>
.border {
  border: 2px solid;
}
</style>
