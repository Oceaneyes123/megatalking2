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
                @click="ratingDialog = false"
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
export default {
  name: "StudentRatingConfirmation",

  props: ["data"],

  data() {
    return {
      ratingDialog: false,
      confirmationData: {},
      rating: 0,
      btnLoading: false
    };
  },

  methods: {
    open(confirmationData) {
      this.ratingDialog = true;
      this.confirmationData = confirmationData;
      this.rating = confirmationData.rating;
    }
  }
};
</script>

<style scoped>
.blue-text {
  color: #2564cb;
}
</style>
