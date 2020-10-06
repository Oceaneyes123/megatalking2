<template>
  <v-app style="background-color:#00000000">
    <div
      class="h3 font-weight-bold white--text gmarket"
      style="margin-top:200px"
    >
      수강후기
    </div>
    <div class="h6 nanum white--text">
      <div class="my-5">재미있는 영어수다! 친구처럼 편한 영어!</div>
      <div class="my-2">매일 매일 영어습관, 메가토킹.</div>
    </div>
    <v-container fluid class="py-0 px-0">
      <v-card
        class="rounded-xl mx-auto"
        elevation="7"
        width="100%"
        style="margin-top:100px;margin-bottom:500px"
        max-width="1000px"
      >
        <v-container class="px-5 px-md-10 py-10">
          <v-row>
            <v-col cols="5" md="3">
              <v-select :items="items" outlined dense></v-select>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="5" md="3">
              <v-text-field label="제목+내용">
                <template v-slot:append>
                  <v-icon color="orange">arrow_forward</v-icon>
                </template>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-simple-table style="width:100%">
              <template slot:default>
                <thead>
                  <tr>
                    <th class="text-center">No.</th>
                    <th class="text-center">날짜</th>
                    <th class="text-center">수강종류</th>
                    <th class="text-center">제목</th>
                    <th class="text-center">회원명</th>
                    <th class="text-center">조회수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="grey--text">2</td>
                    <td class="grey--text">2020-04-15</td>
                    <td class="blue--text">입문과정</td>
                    <td class="grey--text">작품 활동을 위해 수강했습니다.</td>
                    <td class="grey--text">강동원</td>
                    <td class="grey--text">2</td>
                  </tr>
                  <tr>
                    <td class="grey--text">1</td>
                    <td class="grey--text">2020-04-12</td>
                    <td class="blue--text">승무원영어</td>
                    <td class="grey--text">리얼해서 활용도 높은 영어네요^^!</td>
                    <td class="grey--text">이유리</td>
                    <td class="grey--text">28</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-row>
        </v-container>
      </v-card>
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

      items: ["최신순"]
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
      this.isMobile = this.screenWidth <= 960 ? true : false;
    }
  }
};
</script>
