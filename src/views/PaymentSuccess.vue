<template lang="html">
  <v-app style="background-color: #00000000">
    <v-container fluid class="py-0 px-0">
      <v-card tile color="#8bb6f700" flat class="text-center pa-1">
        <div class="h3 font-weight-bold white--text" style="margin-top: 200px">
          수강 결제 완료
        </div>
        <div class="h6 nanum white--text">
          <div class="my-10">
            왕초보라도, 영어1도 못해도, 메가토킹과 함께라면 어렵지 않아요.
          </div>
          <div class="my-2">외국인과 말하기 두려워도, 영어가 서툴러도</div>
          <div class="my-2">메가토킹 선생님이 친구처럼 도와드려요.</div>
        </div>
      </v-card>
      <v-card shaped max-width="400" class="mx-auto mt-5" color="white">
        <v-card-title class="nanum">[전화영어] 주3회 20분 6개월</v-card-title>
        <v-card-text>test</v-card-text>
        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text class="ml-auto"
            >hello</v-btn
          >
          <v-btn color="deep-purple lighten-2" text class="">world</v-btn>
        </v-card-actions>
      </v-card>
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

<style lang="css" scoped></style>
