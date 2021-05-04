<template>
  <v-dialog max-width="500" v-model="receiptDialog" class="rounded-xl">
    <v-container class="px-0 py-0">
      <v-card color="#6991C7" style="border-radius: 20px">
        <v-container class="h5 nanum white--text text-left">
          <v-row class="px-5">
            <v-col>
              <div>영수증</div>
            </v-col>
          </v-row>
        </v-container>
        <v-card class="text-left px-5 card-bg" style="border-radius: 20px">
          <v-container>
            <v-row>
              <v-col class="font-weight-bold">
                <div>Name</div>
                <div>Instructor</div>
              </v-col>
              <v-col sm="6" cols="8">
                <div>[student_name]</div>
                <div>[instructor_name]</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                class="blue-text font-weight-bold py-1"
                style="font-size: 18px"
              >
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
              <v-col
                class="blue-text font-weight-bold py-1"
                style="font-size: 18px"
              >
                <div>결제 예정금액</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="font-weight-bold">
                <div>결제방법</div>
                <div>수강금액</div>
                <div>할인금액</div>
                <div>결제금액</div>
              </v-col>
              <v-col sm="6" cols="8">
                <div>무통장 입금</div>
                <div>768,000원</div>
                <div class="font-weight-bold" style="color: #cb5413">
                  -154,000원
                </div>
                <div class="font-weight-bold">월 51,167원 (20% 할인)</div>
                <div>총 614,000원</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="nanum" style="font-size: 9px">
                  The member above proves that they have taken the MegaTalking
                  English class as above.
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-center">
                <v-btn
                  depressed
                  rounded
                  class="blue-text font-weight-bold"
                  color="#E5E5E5"
                >
                  취소
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-card>
    </v-container>
  </v-dialog>
</template>

<script>
export default {
  name: "PaymentReceipt",

  data() {
    return {
      receiptDialog: false,
      receiptData: []
    };
  },
  methods: {
    open(item) {
      this.receiptData = item;
      this.receiptDialog = true;
      console.log(item);
    }
  }
};
</script>

<style scoped>
.blue-text {
  color: #2564cb;
}
.card-bg {
  background-image: url("../../assets/android-chrome-512x512 2.png"),
    linear-gradient(to right, #fff, #fff);
  background-position: bottom right;
  background-repeat: no-repeat;
}
</style>

<!--
<template>
  <v-dialog max-width="500" v-model="receiptDialog" class="rounded-xl">
    <v-card max-width="500" class="rounded-xl">
      <v-card
        color="#6a9af2"
        class="pa-3 white--text font-weight-bold h6 rounded-tr-xl rounded-tl-xl"
        tile
      >
        Receipt
      </v-card>
      <v-container class="pa-3">
        <v-row no-gutters class="mb-2">
          <v-col cols="3" class="font-weight-bold">Name</v-col>
          <v-col cols="9">[Name]</v-col>
        </v-row>
        <v-row no-gutters class="mb-2">
          <v-col cols="3" class="font-weight-bold">Course</v-col>
          <v-col cols="9">{{ receiptData.course }}</v-col>
        </v-row>
        <v-row no-gutters class="mb-2">
          <v-col cols="3" class="font-weight-bold">Contract</v-col>
          <v-col cols="9">{{ receiptData.week }}</v-col>
        </v-row>
        <v-row no-gutters class="mb-2">
          <v-col cols="3" class="font-weight-bold">Period</v-col>
          <v-col cols="9">{{ receiptData.times }}</v-col>
        </v-row>
        <v-row no-gutters class="mb-2">
          <v-col cols="3" class="font-weight-bold">Start Date</v-col>
          <v-col cols="9">{{ receiptData.date }}</v-col>
        </v-row>
        <v-row no-gutters class="mb-2">
          <v-col cols="3" class="font-weight-bold">Instructor</v-col>
          <v-col cols="9">[Instructor]</v-col>
        </v-row>
        <v-row no-gutters class="mb-5">
          <v-col cols="3" class="font-weight-bold">Tuition</v-col>
          <v-col cols="9">{{ receiptData.price }}</v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="10 caption-text">
            The member above proves that they have taken the MegaTalking English
            class as above.
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/mega_logo.png" max-width="60%"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-end">
            <v-btn
              @click="receiptDialog = false"
              class="mr-3"
              outlined
              color="#6a9af2"
            >
              Cancel
            </v-btn>
            <v-btn color="#6a9af2" class="white--text"> Print </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
// export default {
//   data() {
//     return {
//       receiptDialog: false,
//       receiptData: []
//     };
//   },
//   methods: {
//     open(item) {
//       this.receiptData = item;
//       this.receiptDialog = true;
//       console.log(item);
//     }
//   }
// };
</script>

<style lang="css" scoped></style>

-->
