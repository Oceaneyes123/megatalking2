<template>
  <v-app style="background-color: #00000000">
    <!--  ----------- -->

    <v-container style="margin-top: 200px">
      <v-tabs v-model="testTab">
        <v-tab>1</v-tab>
        <v-tab>2</v-tab>
        <v-tab-item>
          <iframe
            src="http://localhost:8081"
            frameborder="0"
            height="500"
            id="ifr"
          ></iframe>
        </v-tab-item>
        <v-tab-item>Hello to 2nd tab</v-tab-item>
      </v-tabs>
    </v-container>

    <!--  ----------- -->

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
      tab2Header: [
        "No.",
        "날짜",
        "사용/ 적립 내용 ",
        "적립금 내역",
        "잔여 적립금"
      ],
      tab2Item: [],
      tab3Header: ["No.", "상품명 ", "사용가능기간 ", "사용일 ", "상태"],
      tab3Item: [],
      token: this.$cookie.get("access-token"),

      testTab: 0
    };
  },

  created() {
    window.addEventListener("resize", this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },

  watch: {},

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

    //  window.setInterval(this.clickFrame, 100);
  },

  methods: {
    onWindowResize() {
      this.screenWidth = screen.width;
    },

    // clickFrame() {
    //    var iframe = document.getElementById("ifr");

    //   if (document.activeElement == document.getElementById("ifr")) {
    //     console.log("test");
    //     console.log(this.$cookie.get("isNext"));
    //     if (this.$cookie.get("isNext")) {
    //       this.testTab = 1;
    //       document.cookie = "isNext=false";
    //     }
    //     window.focus();

    //     var button = iframe.contentWindow.document.getElementById("nextButton");
    //     console.log(button.textContent);
    //   }
    // },

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
            // console.log(this.tab1Item);
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
