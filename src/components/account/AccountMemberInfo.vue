<template>
  <div>
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
              <v-checkbox label="수신동의" v-model="raCheck"></v-checkbox>
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["data"],
  data() {
    return {
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
      ]
    };
  },

  mounted() {
    this.getInfo();
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
  methods: {
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
    }
  },

  submitModify() {
    console.log(this.password);
    if (!this.password) {
      this.passwordRules = [];
      this.passwordCheckRules = [];
    } else {
      this.passwordRules = [v => (v && v.length >= 4) || "4글자 입력해주세요"];
    }
    if (this.$refs.modifyForm.validate()) {
      // code...
      console.log("test");
    }
  }
};
</script>
