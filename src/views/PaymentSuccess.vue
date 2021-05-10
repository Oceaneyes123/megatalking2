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
          color="#FA7676"
          style="border-radius: 20px"
          :style="$vuetify.breakpoint.xsOnly ? 'width: 100%' : 'width: 30%'"
          v-if="err == 'wrong-access'"
        >
          <div class="pt-10">
            <span class="h5 font-weight-bold  white--text nanum"
              >잘못된 경로입니다</span
            >
          </div>
          <div class="h6 nanum white--text pb-5">
            -
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
                  <div>-</div>
                  <div>-</div>
                  <div>-</div>
                  <div>-</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-center">
                  <v-btn
                    depressed
                    rounded
                    class="blue-text font-weight-bold"
                    style="text-transform: none"
                    @click="$router.push('/')"
                  >
                    홈으로
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-card>
        <v-card
          color="#54BD7E"
          style="border-radius: 20px"
          :style="$vuetify.breakpoint.xsOnly ? 'width: 100%' : 'width: 30%'"
          v-else-if="err == 'ready'"
        >
          <div class="pt-10">
            <span class="h5 font-weight-bold  white--text nanum">
              <v-progress-circular
                indeterminate
                color="blue-grey"
              ></v-progress-circular>
            </span>
          </div>
          <div class="h6 nanum white--text pb-5">
            <v-progress-circular
              indeterminate
              color="blue-grey"
              size="20"
            ></v-progress-circular>
          </div>
          <v-sheet class="pa-3">
            <v-skeleton-loader
              class="mx-auto"
              max-width="300"
              type="card"
            ></v-skeleton-loader>
          </v-sheet>
        </v-card>
        <v-card
          color="#54BD7E"
          style="border-radius: 20px"
          :style="$vuetify.breakpoint.xsOnly ? 'width: 100%' : 'width: 30%'"
          v-else-if="paymentInfo.type"
        >
          <div class="h5 nanum white--text pt-10">
            결제가 성공했습니다!
          </div>
          <div class="h4 gmarket white--text pb-5">
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
                  <div>
                    {{ paymentInfo.type == "Phone" ? "전화영어" : "화상영어" }}
                    ({{ paymentInfo.duration }})
                  </div>
                  <div>{{ paymentInfo.course }}</div>
                  <div>
                    {{ paymentInfo.period }} / {{ paymentInfo.daysOfWeek }}
                  </div>
                  <div>
                    {{ paymentInfo.startDay }} /
                    {{ paymentInfo.convertedStartTime }}
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-center">
                  <v-btn
                    depressed
                    rounded
                    class="blue-text font-weight-bold"
                    style="text-transform: none"
                    @click="$router.push('/mypage')"
                  >
                    마이페이지
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
import { mapState } from "vuex";

export default {
  data() {
    return {
      err: "ready"
    };
  },
  beforeCreate() {
    const query = this.$route.query;
    const type = "success";
    const orderId = query.orderId;
    const paymentKey = query.paymentKey;
    const amount = query.amount;
    console.log(orderId, paymentKey, amount);

    axios
      .post("//phone.megatalking.com/origin/api/payment.php", {
        type,
        orderId,
        paymentKey,
        amount
      })
      .then(rs => {
        this.$store.commit("setPaymentInfo", rs.data.paymentInfo);
        if (rs.data.code == "INVALID_REQUEST") {
          this.err = "wrong-access";
        } else {
          this.err = "";
          console.log("suc", rs);
        }
      })
      .catch(err => {
        console.log("err", err);
      });
  },
  created() {},
  beforeMount() {},
  mounted() {},
  computed: { ...mapState(["paymentInfo"]) }
};
</script>

<style lang="css" scoped>
.blue-text {
  color: #2564cb;
}
</style>
