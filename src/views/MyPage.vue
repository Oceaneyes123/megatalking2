<template>
  <v-app>
    <v-container fluid class="py-0 px-0">
      <v-card tile color="#faae7d" class="text-center pa-3">
        <v-card
          class="rounded-xl mx-auto"
          elevation="7"
          width="100%"
          style="margin-top:200px;margin-bottom:500px"
          max-width="1000px"
        >
          <v-container class="px-10 pt-10 text-left">
            <v-row>
              <v-col cols="3">
                <v-select v-model="select" :items="selectItems" outlined></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-calendar ref="calendar" :now="today" color="primary" type="month"></v-calendar>
              </v-col>
            </v-row>
            <v-row class="mx-1">
              <div class="h6 font-weight-black mt-5">수강 신청내역</div>
            </v-row>
            <v-row>
              <v-col cols="12" md="3">
                <div class="text-purple mt-5">프라임</div>
                <div>6:00 - 10:00</div>
              </v-col>
              <v-col cols="12" md="8">test</v-col>
            </v-row>
            <v-row class="mt-10 mx-1">
              <div class="h6 font-weight-black">수강 종류</div>
            </v-row>
            <v-row class="mt-5 mx-1 mb-10">
              <v-col cols="6">
                <div class="h5 font-weight-bold">HAVE A NICE DAY!</div>
                <div class="h5 font-weight-black">MARK 선생님과 수업중입니다.</div>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <div>
                  <v-btn
                    color="#5a55a1"
                    class="rounded-lg font-weight-bold"
                    large
                    style="color: #f9bb75"
                  >강사평가 바로가기</v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row class="mt-10 mx-1">
              <div class="h6 font-weight-black">20.07.15 6:40+ 10 Annie / 프리토킹 묻고 답하기</div>
            </v-row>
            <v-container class="px-10">
              <v-row>
                <v-col cols="12" md="4">
                  <v-card class="rounded-xl">
                    <v-img src="../assets/mypage1.png" width="auto" height="auto"></v-img>
                  </v-card>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" md="8">
                  <v-card class="rounded-xl" color="#b9b9b9" width="100%" height="100%"></v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-container>
        </v-card>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      selectItems: ["수업 회차순"],
      select: "수업 회차순",
      today: "",
      date: new Date()
    };
  },

  mounted() {
    this.today = this.formatDate(this.date);
  },

  methods: {
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      month = month.length == 1 ? "0" + month : month;

      if (day.length < 2) day = +day;

      return [year, month, day].join("-");
    }
  }
};
</script>
