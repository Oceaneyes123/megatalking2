<template>
  <v-container class="d-flex justify-center">
    <v-card
      color="#6991C7"
      style="border-radius: 20px"
      :style="$vuetify.breakpoint.xsOnly ? 'width: 100%' : 'width: 30%'"
    >
      <div class="h6 nanum white--text pt-10">
        월 <span class="h4 font-weight-bold gmarket">51,167</span> 원
        <span style="color: #ffe092">
          <span class="h4 font-weight-bold gmarket">20%</span> 할인
        </span>
      </div>
      <div class="h6 nanum white--text pb-5">
        총 614,000<span class="caption-text">원</span>
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
              <div>무통장 입금</div>
              <div>768,000원</div>
              <div class="font-weight-bold" style="color: #cb5413">
                -154,000원
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-right">
              <v-btn depressed rounded class="blue-text">취소</v-btn>
            </v-col>
            <v-col>
              <v-btn depressed rounded dark color="#2564cb">결제</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "PaymentSummary"
};
</script>

<style scoped>
.blue-text {
  color: #2564cb;
}
</style>
