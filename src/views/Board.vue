<template>
  <v-app style="background-color: #00000000">
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
              style="width: 100%"
              :headers="header"
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
          text: "이름순"
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
