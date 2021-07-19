<template lang="html">
  <v-app style="background-color: #00000000">
    <v-container fluid class="d-flex justify-center align-center fill-height">
      <v-card
        color="#FA7676"
        style="border-radius: 20px"
        :style="
          $vuetify.breakpoint.xsOnly
            ? 'width: 100%;margin-top:100px'
            : 'width: 30%'
        "
        v-if="paymentInfo.type"
      >
        <div class="h6 nanum white--text pt-10">
          <div class="subtitle-text-1">
            결제가 실패하였습니다 ㅠㅠ 다시 시도해주세요.
          </div>
          <s>
            월
            <span class="h4 font-weight-bold gmarket">{{
              getAmount4Month.toLocaleString()
            }}</span>
            원
            <span style="color: #ffe092">
              <span class="h4 font-weight-bold gmarket"
                >{{ paymentInfo.dcp }}%</span
              >
              할인
            </span>
          </s>
        </div>
        <div class="h6 nanum white--text pb-5">
          <s
            >총 {{ paymentInfo.value.toLocaleString()
            }}<span class="caption-text">원</span></s
          >
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
                  {{ paymentInfo.type === "Phone" ? "전화영어" : "화상영어" }}
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
              <v-col class="blue-text font-weight-bold">
                <div>결제 예정금액</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="font-weight-bold">
                <div>결제방법</div>
                <div>수강금액</div>
                <div>할인금액</div>
              </v-col>
              <v-col sm="6" cols="8">
                <div>{{ paymentInfo.payMethod }}</div>
                <div>{{ paymentInfo.value.toLocaleString() }}원</div>
                <div class="font-weight-bold" style="color: #cb5413">
                  -{{ paymentInfo.dcn.toLocaleString() }}원
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-center">
                <v-btn
                  depressed
                  rounded
                  class="blue-text font-weight-bold"
                  @click="$router.push('enrollment')"
                >
                  다시결제하기
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card
        color="#FA7676"
        style="border-radius: 20px"
        :style="
          $vuetify.breakpoint.xsOnly
            ? 'width: 100%;margin-top:100px'
            : 'width: 30%'
        "
        v-else
      >
        <div class="pt-10">
          <span class="h5 font-weight-bold  white--text nanum"
            >잘못된 경로입니다</span
          >
        </div>
        <div class="h5 nanum white--text pb-5">
          {{ errMsg }}
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
              <v-col class="blue-text font-weight-bold">
                <div>결제 예정금액</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="font-weight-bold">
                <div>결제방법</div>
                <div>수강금액</div>
                <div>할인금액</div>
              </v-col>
              <v-col sm="6" cols="8">
                <div>-</div>
                <div>-</div>
                <div class="font-weight-bold" style="color: #cb5413">
                  -
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-center">
                <v-btn
                  depressed
                  rounded
                  class="blue-text font-weight-bold"
                  @click="$router.push('/')"
                >
                  홈으로
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  data() {
    return {
      err: "ready",
      errMsg: "-"
    };
  },
  beforeCreate() {
    const query = this.$route.query;
    const type = "fail";
    const code = query.code;
    const message = query.message;
    console.log(code, message);

    axios
      .post("//phone.megatalking.com/origin/api/payment.php", {
        type,
        code,
        message
      })
      .then(rs => {
        this.$store.commit("setPaymentInfo", rs.data.paymentInfo);
        if (rs.data.code !== undefined) {
          this.err = "wrong-access";
          this.errMsg = rs.data.message;
        } else {
          this.err = "";
          console.log("suc", rs);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  created() {},
  beforeMount() {},
  mounted() {},
  computed: {
    ...mapState(["paymentInfo"]),
    getAmount4Month() {
      let monthAmount, period;
      monthAmount = 0;

      switch (this.paymentInfo.period) {
        case "1개월":
          period = 1;
          break;
        case "3개월":
          period = 3;
          break;
        case "6개월":
          period = 6;
          break;
        case "1년":
          period = 12;
          break;
        default:
          period = 0;
      }

      if (this.paymentInfo.value != 0) {
        monthAmount = Math.round(this.paymentInfo.value / period);
      }
      return monthAmount;
    }
  }
};
</script>

<style lang="css" scoped>
.blue-text {
  color: #2564cb;
}
</style>
