<template lang="html">
  <v-app style="background-color: #00000000">
    <v-container fluid class="py-0 px-0" style="height:100%">
      <!-- <v-card shaped max-width="400" class="mx-auto mt-5" color="white">
        <v-card-title class="nanum">[전화영어] 주3회 20분 6개월</v-card-title>
        <v-card-text>test</v-card-text>
        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text class="ml-auto"
            >hello</v-btn
          >
          <v-btn color="deep-purple lighten-2" text class="">world</v-btn>
        </v-card-actions>
      </v-card> -->
      <v-container
        fluid
        class="d-flex justify-center align-center"
        style="height:100%"
      >
        <v-card
          color="#54BD7E"
          style="border-radius: 20px"
          :style="$vuetify.breakpoint.xsOnly ? 'width: 100%' : 'width: 30%'"
        >
          <div class="h4 gmarket white--text pt-10">
            Payment Successful!
          </div>
          <div class="h6 nanum white--text pb-5">
            Welcome to Megatalking
          </div>
          <v-card class="text-left px-5" style="border-radius: 20px;">
            <v-container>
              <v-row>
                <v-col class="blue-text font-weight-bold">
                  <div>수강선택</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="font-weight-bold">
                  <div>수강종류</div>
                  <div>수강과정</div>
                  <div>수강기간</div>
                  <div>시작일시</div>
                </v-col>
                <v-col sm="6" cols="8">
                  <div>전화영어 (하루 10분)</div>
                  <div>추천과정</div>
                  <div>1년 / 주2회(화,목)</div>
                  <div>4/15 (목) / 프라임 6:30</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-center">
                  <v-btn
                    depressed
                    rounded
                    class="blue-text font-weight-bold"
                    style="text-transform: none"
                  >
                    Close
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-card>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {};
  },
  beforeCreate() {
    const query = this.$route.query;
    const type = "success";
    const orderId = query.orderId;
    const paymentKey = query.paymentKey;
    const amount = query.amount;
    console.log(orderId, paymentKey, amount);

    axios
      .post("http://phone.megatalking.com/origin/api/payment.php", {
        type,
        orderId,
        paymentKey,
        amount
      })
      .then(rs => {
        console.log(rs);
      })
      .catch(err => {
        console.log(err);
      });
  },
  created() {},
  beforeMount() {},
  mounted() {},
  computed: {}
};
</script>

<style lang="css" scoped>
.blue-text {
  color: #2564cb;
}
</style>
