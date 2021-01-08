<template lang="html">
  <v-footer color="#00000000">
    <v-card max-width="1000" class="mx-auto mt-10 " color="#00000000" flat>
      <v-container>
        <v-row no-gutters class="d-flex flex-column-reverse flex-md-row">
          <v-col cols="12" md="3">
            <v-container fill-height>
              <v-row>
                <div class="mb-4">고객센터 1688-5705</div>
                <div class="caption text--secondary">
                  (평일 오전 9시~18시)
                </div>
              </v-row>

              <v-row  class="d-flex fill-height mt-5 mt-md-0">
                <v-card color="#00000000" flat class="d-flex flex-column justify-end">
                  <v-img
                    @click="$router.push('/')"
                    contain
                    src="@/assets/mega_blue.png"
                    width="150"
                    class="subheading mt-auto"
                  ></v-img>
                </v-card>
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="12" md="5">
            <v-container>
              <v-row>
                <div class="mb-4">계좌번호 안내</div>
              </v-row>
              <v-row>
                <div style="color: #cb5413" class="caption">
                  예금주 (주)유에듀케이션
                </div>
              </v-row>
              <v-row class="mt-5">
                <div class="caption text--secondary">
                  국민은행 466490-60-194511
                </div>
              </v-row>
              <v-row>
                <div class="caption text--secondary">
                  우리은행 605-747180-18892
                </div>
              </v-row>
              <v-row>
                <div class="caption text--secondary">
                  신한은행 562-01572-559672
                </div>
              </v-row>
              <v-row>
                <div class="caption text--secondary">
                  씨티은행 750-10229-91401
                </div>
              </v-row>
              <v-row>
                <div class="caption text--secondary">
                  농협 790007-52-578681
                </div>
              </v-row>
              <v-row class="caption mt-10 text--secondary">
                <div class="mr-3">(주)유에듀케이션</div>
                <div class="mr-3">대표 정원석</div>
                <div>사업자등록번호 124-87-33297</div>
                <div>주소 경기 수원시 권선구 세권로 219 3층</div>
              </v-row>
            </v-container>
          </v-col>
          <v-col>
            <v-container class="text--secondary">
              <v-row>
                <div style="letter-spacing: 5px">FOLLOW US</div>
              </v-row>
              <v-row>
                <v-card class="d-flex flex-row mt-5" color="#00000000" flat>
                  <a
                    href="https://www.facebook.com/megatalking"
                    target="_blank"
                  >
                    <v-img
                      src="@/assets/fa.png"
                      width="50"
                      class="mr-5"
                    ></v-img>
                  </a>
                  <a
                    href="https://www.instagram.com/megatalking_english/"
                    target="_blank"
                  >
                    <v-img
                      src="@/assets/inst.png"
                      width="50"
                      class="mr-5"
                    ></v-img>
                  </a>
                </v-card>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      screenWidth: "",
      isMobile: false
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
    this.onWindowResize();
  },

  methods: {
    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
      console.log("resize");
    }
  }
};
</script>

<style lang="css" scoped></style>
