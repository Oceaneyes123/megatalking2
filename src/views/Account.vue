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
          <v-container style="max-width: 1000px; margin-top: 90px">
            <!-- <v-card
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
                  <tbody v-if="tab1Item.length != 0">
                    <tr v-for="(item, i) in tab1Item" :key="i">
                      <td>{{ item.no }}</td>
                      <td>{{ item.date }}</td>
                      <td>{{ item.course }}</td>
                      <td>{{ item.amount }}</td>
                      <td>{{ item.method }}</td>
                      <td>{{ item.status }}</td>
                      <td>
                        <div>
                          <v-btn
                            class="white--text rounded-tl-xl rounded-bl-xl"
                            depressed
                            style="
                              background: linear-gradient(
                                to right,
                                #8fa1fe,
                                #4d94e9
                              ) !important;
                            "
                            color="blue"
                            tile
                            @click="receiptDialogOpen(item)"
                          >
                            영수증
                          </v-btn>
                          <v-btn
                            class="white--text"
                            depressed
                            style="
                              background: linear-gradient(
                                to right,
                                #8fa1fe,
                                #4d94e9
                              ) !important;
                            "
                            color="blue"
                            tile
                            @click="courseDialogOpen(item)"
                          >
                            수강증
                          </v-btn>
                          <v-btn
                            class="white--text rounded-tr-xl rounded-br-xl"
                            depressed
                            style="
                              background: linear-gradient(
                                to right,
                                #8fa1fe,
                                #4d94e9
                              ) !important;
                            "
                            color="blue"
                            tile
                            @click="certificateDialogOpen(item)"
                          >
                            출석증명서
                          </v-btn>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td colspan="7">
                        <p class="mt-5">신청된 수강이 없습니다.</p>
                        <v-btn
                          class="white--text rounded-xl mb-5"
                          depressed
                          style="
                            background: linear-gradient(
                              to right,
                              #8fa1fe,
                              #4d94e9
                            ) !important;
                          "
                          color="blue"
                          tile
                          @click="courseDialog = true"
                        >
                          수강신청 하기
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card> -->

            <v-list>
              <v-list-group
                v-for="(item, i) in tab1Item"
                :key="i"
                v-model="item.active"
                no-action
                subheader
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title class="d-flex justify-space-between">
                      <span class="font-weight-bold">
                        {{ item.course }}
                      </span>
                      <span
                        class="font-weight-bold blue--text"
                        :class="isMobile ? '' : 'h6'"
                      >
                        {{ item.price }}</span
                      >
                    </v-list-item-title>
                    <v-list-item-subtitle
                      v-text="item.date"
                      class="text-left"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </template>

                <v-container>
                  <v-row>
                    <v-col cols="4">
                      <v-btn
                        color="blue"
                        block
                        outlined
                        class="rounded-pill"
                        @click="receiptDialogOpen(item)"
                      >
                        영수증
                      </v-btn>
                    </v-col>
                    <v-col cols="4">
                      <v-btn
                        color="blue"
                        block
                        outlined
                        class="rounded-pill"
                        @click="courseDialogOpen(item)"
                      >
                        수강증
                      </v-btn>
                    </v-col>
                    <v-col cols="4">
                      <v-btn
                        color="blue"
                        block
                        outlined
                        class="rounded-pill"
                        @click="courseDialogOpen(item)"
                      >
                        출석증명서
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>

                <!-- <v-list-item v-for="i in 3" :key="i">
                  <v-list-item-content>
                    <v-list-item-title v-text="child.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item> -->
              </v-list-group>
            </v-list>

            <AccountReceiptDialog ref="receiptDialog"></AccountReceiptDialog>
            <AccountCourseDialog ref="courseDialog"></AccountCourseDialog>
            <AccountCertificateDialog
              ref="certificateDialog"
            ></AccountCertificateDialog>
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
                  <tbody v-if="tab2Item.length != 0">
                    <tr v-for="(item, i) in tab2Item" :key="i">
                      <td>{{ item.no }}</td>
                      <td>{{ item.date }}</td>
                      <td>{{ item.explain }}</td>
                      <td>{{ item.point }}</td>
                      <td>{{ item.residualPoint }}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td colspan="5">
                        <span>준비중 입니다.</span>
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
                        v-for="(header, i) in tab3Header"
                        :key="i"
                        style="border-bottom: solid 1px #6a9af2"
                      >
                        {{ header }}
                      </td>
                    </tr>
                  </thead>
                  <tbody v-if="tab3Item.length != 0">
                    <tr v-for="(item, i) in tab3Item" :key="i">
                      <td>{{ item.no }}</td>
                      <td>{{ item.couponName }}</td>
                      <td>{{ item.expirationDate }}</td>
                      <td>{{ item.dateUsed }}</td>
                      <td v-if="item.status == '수강신청'">
                        <v-btn
                          text
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
                  <tbody v-else>
                    <tr>
                      <td colspan="5">
                        <span>준비중 입니다.</span>
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
            <v-form ref="modifyForm">
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
                    <v-col cols="6" sm="4">{{ memberId }}</v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6" sm="2">비밀번호</v-col>
                    <v-col cols="6" sm="3">
                      <v-text-field
                        v-model="password"
                        outlined
                        class="rounded-lg"
                        dense
                        type="password"
                        style="font-family: auto"
                        :rules="passwordRules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" sm="2">비밀번호 확인</v-col>
                    <v-col cols="6" sm="3">
                      <v-text-field
                        v-model="passwordCheck"
                        outlined
                        class="rounded-lg"
                        type="password"
                        dense
                        style="font-family: auto"
                        :rules="passwordCheckRules"
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
                        v-model="name_kr"
                        :rules="name_krRules"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" sm="2">영어이름</v-col>
                    <v-col cols="6" sm="3">
                      <v-text-field
                        outlined
                        class="rounded-lg"
                        dense
                        v-model="name_en"
                        :rules="name_enRules"
                        required
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
                        v-model="tel"
                        :rules="telRules"
                        required
                        counter="13"
                        maxlength="13"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" sm="2">휴대전화</v-col>
                    <v-col cols="6" sm="3">
                      <v-text-field
                        outlined
                        class="rounded-lg"
                        dense
                        v-model="phone"
                        :rules="phoneRules"
                        required
                        counter="13"
                        maxlength="13"
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
                        v-model="mail"
                        :rules="mailRules"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" sm="3" class="pt-sm-0">
                      <v-checkbox
                        label="수신동의"
                        v-model="raCheck"
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6" sm="2">현금영수증</v-col>
                    <v-col cols="6" sm="4">
                      <v-text-field
                        outlined
                        class="rounded-lg"
                        dense
                        v-model="receipt"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" sm="2" class="pt-sm-0">
                      <v-checkbox label="신청" v-model="rcCheck"></v-checkbox>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
              <v-row class="mt-5" justify="center">
                <v-btn
                  class="mr-3 rounded-pill white--text"
                  color="#6a9af2"
                  large
                  @click="submitModify()"
                  >내정보 수정하기</v-btn
                >
                <v-btn
                  color="grey white--text"
                  class="rounded-xl"
                  large
                  @click="$refs.modifyForm.reset()"
                >
                  새로입력하기
                </v-btn>
              </v-row>
            </v-form>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import AccountReceiptDialog from "@/components/AccountReceiptDialog.vue";
import AccountCourseDialog from "@/components/AccountCourseDialog.vue";
import AccountCertificateDialog from "@/components/AccountCertificateDialog.vue";
export default {
  components: {
    AccountReceiptDialog,
    AccountCourseDialog,
    AccountCertificateDialog
  },

  data() {
    return {
      rating: 4.8,
      screenWidth: "",
      isMobile: false,
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
      memberInfo: [],
      memberId: "",
      name_kr: "",
      name_en: "",
      password: "",
      passwordCheck: "",
      tel: "",
      phone: "",
      receipt: "",
      mail: "",
      raCheck: "",
      rcCheck: "",
      name_krRules: [
        v => !!v || "이름을 입력해주세요",
        v => (v && v.length >= 2) || "2글자 이상 입력해주세요."
      ],
      name_enRules: [
        v => !!v || "영어 이름을 입력해주세요",
        v => /^[a-zA-Z ]*$/.test(v) || "영어이름은 영어만 가능합니다.",
        v => (v && v.length >= 3) || "3글자 이상 입력해주세요."
      ],
      passwordRules: [v => (v && v.length >= 4) || "4글자 입력해주세요"],
      passwordCheckRules: [
        v => v == this.password || "비밀번호가 일치하지 않습니다."
      ],

      telRules: [
        v => !!v || "전화번호를 입력해주세요.",
        v => /^[0-9-]*$/.test(v) || "번호만 입력 가능합니다.",
        v => (v && v.length >= 11) || "9자리 이상 입력해주세요"
      ],
      phoneRules: [
        v => !!v || "휴대전화번호를 입력해주세요.",
        v => (v && v.length >= 11) || "9자리 이상 입력해주세요"
      ],
      mailRules: [
        v => !!v || "이메일을 입력해주세요.",
        v => /.+@.+/.test(v) || "이메일 형식이 아닙니다."
      ],
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
  watch: {
    tel(val) {
      if (val) {
        this.tel = val
          .replace(/[^0-9]/g, "")
          .replace(
            /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
            "$1-$2-$3"
          )
          .replace("--", "-");
      }
    },
    phone(val) {
      if (val) {
        this.phone = val
          .replace(/[^0-9]/g, "")
          .replace(
            /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
            "$1-$2-$3"
          )
          .replace("--", "-");
      }
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

    receiptDialogOpen(item) {
      this.$refs.receiptDialog.open(item);
    },

    courseDialogOpen(item) {
      this.$refs.courseDialog.open(item);
    },

    certificateDialogOpen(item) {
      this.$refs.certificateDialog.open(item);
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
        this.getInfo();
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
    getInfo() {
      let config = {
        params: {
          action: "modify"
        }
      };
      axios
        .get("//phone.megatalking.com/origin/api/account.php", config)
        .then(rs => {
          console.log(rs.data);
          if (rs.data.result) {
            this.memberId = rs.data.data.id;
            this.mail = rs.data.data.mail;
            this.name_kr = rs.data.data.name;
            this.name_en = rs.data.data.name2;
            this.tel = `${rs.data.data.aTel}-${rs.data.data.bTel}-${rs.data.data.cTel}`;
            this.phone = `${rs.data.data.aHp}-${rs.data.data.bHp}-${rs.data.data.cHp}`;
            this.receipt = "";
            this.raCheck = "";
            this.rcCheck = "";
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitModify() {
      console.log(this.password);
      if (!this.password) {
        this.passwordRules = [];
        this.passwordCheckRules = [];
      } else {
        this.passwordRules = [
          v => (v && v.length >= 4) || "4글자 입력해주세요"
        ];
      }
      if (this.$refs.modifyForm.validate()) {
        // code...
        console.log("test");
      }
    },
    modify() {
      // code...
    }
  }
};
</script>
