<template>
  <v-app style="background-color:#00000000">
    <div
      class="h3 font-weight-bold white--text gmarket"
      style="margin-top:200px"
    >
      이벤트
    </div>
    <div class="h6 nanum white--text">
      <div class="my-5">재미있는 영어수다! 친구처럼 편한 영어!</div>
      <div class="my-2">메가토킹만의 이벤트를 확인해보세요..</div>
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
            <v-col cols="6" sm="4" v-for="i in 6" :key="i">
              <v-card flat>
                <v-card
                  color="#f99d59"
                  min-width="100"
                  min-height="200"
                  width="100%"
                  height="100%"
                ></v-card>
                <div class="mt-3 h6 font-weight-black text-left">
                  친구추가 이벤트!
                </div>
                <div class="grey--text text-left">2020-09-31까지</div>
                <div class="d-flex align-center mt-5">
                  <v-icon color="grey">favorite_border</v-icon>
                  <div class="mr-5 ml-2">07</div>
                  <v-icon color="orange">far fa-comment</v-icon>
                  <div class="ml-2">12</div>
                </div>
              </v-card>
            </v-col>
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

      items: ["진행중인 이벤트"]
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
