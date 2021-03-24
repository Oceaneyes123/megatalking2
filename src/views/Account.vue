<template>
  <v-app style="background-color: #00000000">
    <v-container fluid class="py-0 px-0">
      <v-tabs
        class="h5 nanum"
        background-color="#6a9af2"
        style="margin-top: 70px"
        slider-color="#FFF"
        centered
      >
        <v-tab
          class="white--text"
          v-for="(tab, i) in tabs"
          :key="i"
          @click="loadData(tab)"
          >{{ tab }}</v-tab
        >
        <v-tab-item>
          <v-container fluid class="px-0" style="max-width: 1000px">
            <AccountCourseDetails
              ref="courseDetails"
              :data="{ tab1Item, tab1Header, isMobile }"
            ></AccountCourseDetails>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container style="max-width: 1000px">
            <AccountSavings
              ref="accountSavings"
              :data="{ tab2Item, tab2Header, isMobile }"
            ></AccountSavings>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container style="max-width: 1000px">
            <AccountDiscount
              ref="accountDiscount"
              :data="{ tab3Item, tab3Header, isMobile }"
            ></AccountDiscount>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container style="max-width: 1000px" class="pt-10">
            <AccountMemberInfo ref="memberInfo"></AccountMemberInfo>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";

import AccountCourseDetails from "@/components/account/AccountCourseDetails.vue";
import AccountSavings from "@/components/account/AccountSavings.vue";
import AccountDiscount from "@/components/account/AccountDiscount.vue";
import AccountMemberInfo from "@/components/account/AccountMemberInfo.vue";

export default {
  components: {
    AccountCourseDetails,
    AccountSavings,
    AccountDiscount,
    AccountMemberInfo
  },

  data() {
    return {
      rating: 4.8,
      screenWidth: "",
      certificateDialog: false,
      receiptDialog: false,
      courseDialog: false,
      tabs: ["수강내역", "적립금", "할인쿠폰", "회원정보수정"],
      tab1Header: [
        "No",
        "주문일자",
        "주문상품명",
        "실 결제금액",
        "결제방법",
        "결제상태",
        "내역 인쇄"
      ],
      tab1Item: [],
      // tab1Item: [
      //   {
      //     no: "1",
      //     date: "2020-05-25",
      //     course: "정규회화과정 주2회 10분",
      //     amount: "51,980원",
      //     method: "네이버페이",
      //     status: "입금완료",
      //   },
      // ],
      tab2Header: [
        "No.",
        "날짜",
        "사용/ 적립 내용 ",
        "적립금 내역",
        "잔여 적립금"
      ],
      tab2Item: [],
      // tab2Item: [
      //   {
      //     no: "10",
      //     date: "2020-08-25",
      //     explain: "재적립",
      //     point: "+3000",
      //     residualPoint: "8000원",
      //   },
      // ],
      tab3Header: ["No.", "상품명 ", "사용가능기간 ", "사용일 ", "상태"],
      tab3Item: [],
      // tab3Item: [
      //   {
      //     no: "5",
      //     couponName: "Coupon Name",
      //     expirationDate: "2020-05-25",
      //     dateUsed: "-",
      //     status: "수강신청",
      //   },
      //   {
      //     no: "4",
      //     couponName: "Coupon Name",
      //     expirationDate: "2020-05-25",
      //     dateUsed: "-",
      //     status: "기간만료",
      //   },
      // ],

      // token: localStorage.getItem("access-token")
      token: this.$cookie.get("access-token")
    };
  },

  created() {
    window.addEventListener("resize", this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },

  computed: {
    isMobile() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        case "md":
          return false;
        case "lg":
          return false;
        case "xl":
          return false;
      }
      return true;
    }
  },

  mounted() {
    this.screenWidth = screen.width;
    this.isMobile = this.screenWidth <= 960 ? true : false;
    axios.defaults.headers.common["Authorization"] = this.token;
    this.getHistory();
  },

  methods: {
    onWindowResize() {
      this.screenWidth = screen.width;
    },

    loadData(tab) {
      if (tab == "수강내역") {
        //tab1Item
        this.getHistory();
      } else if (tab == "적립금") {
        //tab2Item
      } else if (tab == "할인쿠폰") {
        //tab3Item
      } else if (tab == "회원정보수정") {
        // code...
        // this.getInfo();
      }
    },
    getHistory() {
      let config = {
        params: {
          action: "history"
        }
      };
      axios
        .get("//phone.megatalking.com/origin/api/account.php", config)
        .then(rs => {
          if (rs.data.result) {
            /*
          no: "1",
          date: "2020-05-25",
          course: "정규회화과정 주2회 10분",
          amount: "51,980원",
          method: "네이버페이",
          status: "입금완료",
          */

            let temArr = [];
            rs.data["data"].forEach(item => {
              temArr.push({
                ...item
              });
            });
            this.$set(this.$data, "tab1Item", temArr);
            console.log(this.tab1Item);
          }
          // console.log(rs);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getPoint() {
      // code...
    },
    getCoupon() {
      // code...
    },

    modify() {
      // code...
    }
  }
};
</script>
