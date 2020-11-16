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
        <v-tab class="white--text" v-for="(tab, i) in tabs" :key="i">{{
          tab
        }}</v-tab>
        <v-tab-item>
          <v-container style="max-width: 1000px; margin-top: 90px">
            <v-card
              depressed
              class="mx-auto rounded-xl"
              style="border: solid 1px #6a9af2"
            >
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <td
                        v-for="(header, i) in tab1Header"
                        :key="i"
                        style="border-bottom: solid 1px #6a9af2"
                      >
                        {{ header }}
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in tab1Item" :key="i">
                      <td>{{ item.no }}</td>
                      <td>{{ item.date }}</td>
                      <td>{{ item.course }}</td>
                      <td>{{ item.amount }}</td>
                      <td>{{ item.method }}</td>
                      <td>{{ item.status }}</td>
                      <td>
                        <v-btn
                          class="white--text rounded-pill"
                          style="
                            background: linear-gradient(
                              to right,
                              #8fa1fe,
                              #4d94e9
                            );
                          "
                          >영수증 | 수강증 | 출석증명서</v-btn
                        >
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container style="max-width: 1000px; margin-top: 90px">
            <v-card
              depressed
              class="mx-auto rounded-xl"
              style="border: solid 1px #6a9af2"
            >
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <td
                        v-for="(header, i) in tab2Header"
                        :key="i"
                        style="border-bottom: solid 1px #6a9af2"
                      >
                        {{ header }}
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in tab2Item" :key="i">
                      <td>{{ item.no }}</td>
                      <td>{{ item.date }}</td>
                      <td>{{ item.explain }}</td>
                      <td>{{ item.point }}</td>
                      <td>{{ item.residualPoint }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container style="max-width: 1000px; margin-top: 90px">
            <v-card
              depressed
              class="mx-auto rounded-xl"
              style="border: solid 1px #6a9af2"
            >
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <td
                        v-for="(header, i) in tab3Header"
                        :key="i"
                        style="border-bottom: solid 1px #6a9af2"
                      >
                        {{ header }}
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in tab3Item" :key="i">
                      <td>{{ item.no }}</td>
                      <td>{{ item.couponName }}</td>
                      <td>{{ item.expirationDate }}</td>
                      <td>{{ item.dateUsed }}</td>
                      <td v-if="item.status == '수강신청'">
                        <v-btn
                          flat
                          class="rounded-pill white--text"
                          style="
                            background: linear-gradient(
                              to right,
                              #8fa1fe,
                              #4d94e9
                            );
                          "
                          >{{ item.status }}</v-btn
                        >
                      </td>
                      <td v-else>{{ item.status }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container style="max-width: 1000px; margin-top: 90px">
            <v-card
              depressed
              class="mx-auto rounded-xl"
              style="border: solid 1px #6a9af2"
            >
              <div class="my-3" style="border-bottom: solid 1px #6a9af2">
                회원정보수정
              </div>
              <v-container class="text-left subtitle-text-1 mx-md-10">
                <v-row>
                  <v-col cols="6" sm="2">아이디</v-col>
                  <v-col cols="6" sm="4">imeau1212@gmail.com</v-col>
                </v-row>
                <v-row>
                  <v-col cols="6" sm="2">비밀번호</v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field
                      outlined
                      class="rounded-lg"
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="2">비밀번호 확인</v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field
                      outlined
                      class="rounded-lg"
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                  <v-col cols="6" sm="2">이름</v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field
                      outlined
                      class="rounded-lg"
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="2">영어이름</v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field
                      outlined
                      class="rounded-lg"
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6" sm="2">연락처</v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field
                      outlined
                      class="rounded-lg"
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="2">휴대전화</v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field
                      outlined
                      class="rounded-lg"
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                  <v-col cols="6" sm="2">Email</v-col>
                  <v-col cols="6" sm="4">
                    <v-text-field
                      outlined
                      class="rounded-lg"
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="3" class="pt-sm-0">
                    <v-checkbox label="수신동의"></v-checkbox>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6" sm="2">현금영수증</v-col>
                  <v-col cols="6" sm="4">
                    <v-text-field
                      outlined
                      class="rounded-lg"
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="2" class="pt-sm-0">
                    <v-checkbox label="신청"></v-checkbox>
                  </v-col>
                  <v-col cols="6" sm="2" class="pt-sm-0">
                    <v-checkbox label="미신청"></v-checkbox>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
            <v-row class="mt-5" justify="center">
              <v-btn class="mr-3 rounded-pill white--text" color="#6a9af2" large
                >확인</v-btn
              >
              <v-btn color="grey white--text" class="rounded-xl" large
                >새로입력하기</v-btn
              >
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      rating: 4.8,
      screenWidth: "",
      isMobile: false,
      tabs: ["수강내역", "적립금", "할인쿠폰", "회원정보수정"],
      tab1Header: [
        "No",
        "주문일자",
        "주문상품명",
        "실 결제금액",
        "결제방법",
        "결제상태",
        "내역 인쇄",
      ],
      tab1Item: [
        {
          no: "1",
          date: "2020-05-25",
          course: "정규회화과정 주2회 10분",
          amount: "51,980원",
          method: "네이버페이",
          status: "입금완료",
        },
      ],
      tab2Header: [
        "No.",
        "날짜",
        "사용/ 적립 내용 ",
        "적립금 내역",
        "잔여 적립금",
      ],
      tab2Item: [
        {
          no: "10",
          date: "2020-08-25",
          explain: "재적립",
          point: "+3000",
          residualPoint: "8000원",
        },
      ],
      tab3Header: ["No.", "상품명 ", "사용가능기간 ", "사용일 ", "상태"],
      tab3Item: [
        {
          no: "5",
          couponName: "Coupon Name",
          expirationDate: "2020-05-25",
          dateUsed: "-",
          status: "수강신청",
        },
        {
          no: "4",
          couponName: "Coupon Name",
          expirationDate: "2020-05-25",
          dateUsed: "-",
          status: "기간만료",
        },
      ],
    };
  },

  created() {
    window.addEventListener("resize", this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },

  mounted() {
    this.screenWidth = screen.width;
    this.isMobile = this.screenWidth <= 960 ? true : false;
  },

  methods: {
    onWindowResize() {
      this.screenWidth = screen.width;
    },
  },
};
</script>
