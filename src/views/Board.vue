<template>
  <v-app style="background-color: #00000000">
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <div
      class="h3 font-weight-bold white--text gmarket"
      style="margin-top: 200px"
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
        style="margin-top: 100px; margin-bottom: 500px"
        max-width="1000px"
      >
        <v-container class="px-5 px-md-10 py-10">
          <v-row>
            <v-data-table
              style="width: 100%"
              :mobile-breakpoint="0"
              :headers="getHeader"
              :items="boards.REVIEW"
              @click:row="rowClicked"
              :item-class="tableRow"
            ></v-data-table>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
    <BoardDialog ref="boardDialog"></BoardDialog>
  </v-app>
</template>

<style>
.table-row {
  cursor: pointer;
}
</style>

<script>
import BoardDialog from "@/components/BoardDialog.vue";
import axios from "axios";
export default {
  components: {
    BoardDialog
  },
  data() {
    return {
      rating: 4.8,
      screenWidth: "",
      isMobile: false,
      boardDialog: false,
      overlay: true,

      selected_row: [],

      boards: [],

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
          text: "이름순",
          align: "right"
        }
      ],

      header: [
        {
          text: "No.",
          value: "board_id"
        },
        {
          text: "날짜",
          value: "date"
        },
        {
          text: "제목",
          value: "title"
        },
        {
          text: "회원명",
          value: "name"
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

  computed: {
    getHeader() {
      var breakpoint = this.$vuetify.breakpoint.name;
      if (breakpoint == "xs" || breakpoint == "sm") {
        return this.header.slice(2, this.header.length);
      } else {
        return this.header;
      }
    }
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

    this.getBoards();
  },

  methods: {
    tableRow: function() {
      return "table-row";
    },
    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
    },

    rowClicked(row) {
      this.$refs.boardDialog.open(row);
    },

    getBoards() {
      const token = "c3VwZXJfaGVyb191ZWR1Y2F0aW9u";
      const board = "review";
      const url = "//phone.megatalking.com/origin/api/get_board_json.php";

      const form = new FormData();
      form.append("token", token);
      form.append("board", board);

      axios.post(url, form).then(
        res => {
          if (res.data.STATUS == "TRUE") {
            this.boards = res.data;
            this.overlay = false;
            console.log(this.boards.REVIEW);
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }
};
</script>
