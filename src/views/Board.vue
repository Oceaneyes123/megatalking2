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
    <v-container fluid class="py-0 px-5 px-md-0">
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
              <v-select
                :items="items"
                item-text="text"
                item-value="key"
                v-model="defaultSelected"
                outlined
                dense
              ></v-select>
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
            <v-data-table
              style="width:100%"
              :headers="header"
              :items="content"
            ></v-data-table>
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
      defaultSelected: {
        key: "new",
        text: "최신순"
      },
      items: [
        {
          key: "new",
          text: "최신순"
        },
        {
          key: "name",
          text: "이름순"
        }
      ],

      header: [
        {
          text: "No.",
          value: "no"
        },
        {
          text: "날짜",
          value: "date"
        },
        {
          text: "수강종류",
          value: "course"
        },
        {
          text: "제목",
          value: "title"
        },
        {
          text: "회원명",
          value: "name"
        },
        {
          text: "조회수",
          value: "views"
        }
      ],

      content: [
        {
          no: "2",
          date: "2020-04-15",
          course: "입문과정",
          title: "작품 활동을 위해 수강했습니다.",
          name: "강동원",
          views: "2"
        },
        {
          no: "1",
          date: "2020-04-12",
          course: "승무원영어",
          title: "리얼해서 활용도 높은",
          name: "이유리",
          views: "28"
        }
      ]
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
