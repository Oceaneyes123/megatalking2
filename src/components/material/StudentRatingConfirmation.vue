<template>
  <v-dialog v-model="ratingDialog" max-width="700" class="rounded-xl">
    <v-card color="#6991C7" style="border-radius: 20px">
      <v-container class="h5 nanum white--text text-left">
        <v-row class="px-5">
          <v-col>
            <div>평가</div>
          </v-col>
        </v-row>
      </v-container>
      <v-card class="text-left px-5 card-bg" style="border-radius: 20px">
        <v-container>
          <v-row>
            <v-col
              style="font-size: 18px"
              class="d-flex flex-column align-center"
            >
              <div class="nanum">
                You gave {{ confirmationData.lec_name }} a rating of
              </div>
              <v-rating
                v-model="rating"
                value="5"
                length="5"
                half-increments
                color="yellow darken-2"
                hover
                x-large
                background-color="yellow darken-2"
                full-icon="fas fa-star"
                empty-icon="far fa-star"
                half-icon="fas fa-star-half-alt"
                readonly
              ></v-rating>
              <div class="nanum">Thank you for your feedback.</div>
              <div
                class="blue-text font-weight-bold nanum pt-5"
                style="font-size: 24px"
              >
                평가 감사드립니다. <br />
                좋은 하루 되세요~^^
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-right">
              <v-btn
                depressed
                rounded
                class="blue-text font-weight-bold py-5"
                color="#E5E5E5"
                width="40%"
              >
                취소
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                dark
                depressed
                rounded
                class="nanum font-weight-bold py-5"
                color="#2564CB"
                width="40%"
                :loading="btnLoading"
              >
                보내기
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "StudentRatingConfirmation",

  props: ["data"],

  data() {
    return {
      ratingDialog: false,
      confirmationData: {},
      rating: 0,
      btnLoading: false,
      form: {}
    };
  },

  computed: {
    ...mapState(["currentClassInfo"])
  },

  methods: {
    open(confirmationData, form) {
      this.ratingDialog = true;
      this.confirmationData = confirmationData;
      this.rating = confirmationData.rating;
      this.form = form;
    },

    sendClassReview() {
      if (this.disabled) return;
      this.btnLoading = true;
      let token = this.$cookie.get("access-token");
      if (token) {
        axios.defaults.headers.common["Authorization"] = this.$cookie.get(
          "access-token"
        );

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

<style scoped>
.blue-text {
  color: #2564cb;
}
</style>
