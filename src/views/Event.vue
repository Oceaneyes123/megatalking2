<template>
  <v-app style="background-color: #00000000">
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <div
      class="h3 font-weight-bold white--text gmarket"
      style="margin-top: 200px"
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
                outlined
                dense
                v-model="defaultSelected"
              ></v-select>
            </v-col>
          </v-row>
          <v-row
            v-if="
              defaultSelected == 'progress' || defaultSelected.key == 'progress'
            "
          >
            <v-container v-if="progressEvents.length == 0">
              <v-row>
                <v-col v-for="i in 3" :key="i">
                  <v-skeleton-loader
                    class="mx-auto"
                    max-width="300"
                    type="card"
                    boilerplate
                  ></v-skeleton-loader>
                </v-col>
              </v-row>
            </v-container>
            <v-col
              cols="12"
              sm="4"
              v-for="(event, i) in progressEvents"
              :key="i"
            >
              <v-card flat @click="$refs.eventDialog.open(event)">
                <!-- <v-card
                  color="#f99d59"
                  min-width="100"
                  min-height="200"
                  width="100%"
                  height="100%"
                ></v-card> -->
                <v-img
                  :src="getImage(event.image)"
                  width="100%"
                  height="200"
                ></v-img>
                <div class="mt-3 h6 font-weight-black text-left">
                  {{ event.title }}
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
          <v-row v-if="defaultSelected == 'end'">
            <v-col cols="12" sm="4" v-for="(event, i) in endEvents" :key="i">
              <v-card flat @click="$refs.eventDialog.open(event)">
                <!-- <v-card
                  color="#f99d59"
                  min-width="100"
                  min-height="200"
                  width="100%"
                  height="100%"
                ></v-card> -->
                <v-img
                  :src="getImage(event.image)"
                  width="100%"
                  height="200"
                ></v-img>
                <div class="mt-3 h6 font-weight-black text-left">
                  {{ event.title }}
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
        <EventDialog ref="eventDialog"></EventDialog>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import EventDialog from "@/components/event/EventDialog.vue";
import axios from "axios";
export default {
  components: {
    EventDialog
  },
  data() {
    return {
      rating: 4.8,
      screenWidth: "",
      isMobile: false,
      progressEvents: [],
      endEvents: [],
      eventDialog: false,
      // loading: true,
      overlay: true,

      defaultSelected: {
        key: "progress",
        text: "진행중인 이벤트"
      },
      items: [
        {
          key: "progress",
          text: "진행중인 이벤트"
        },
        {
          key: "end",
          text: "종료된 이벤트"
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

    this.getEvents();
  },

  watch: {
    defaultSelected: function() {
      console.log(this.defaultSelected);
    }
  },

  methods: {
    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
    },

    getEvents() {
      const token = "c3VwZXJfaGVyb191ZWR1Y2F0aW9u";
      const board = "event";
      const url = "//phone.megatalking.com/origin/api/get_board_json.php";

      const form = new FormData();
      form.append("token", token);
      form.append("board", board);

      axios.post(url, form).then(
        res => {
          if (res.data.STATUS == "TRUE") {
            for (var i = 0; i < res.data.EVENT.length; i++) {
              if (res.data.EVENT[i].status == "yes") {
                this.progressEvents.push(res.data.EVENT[i]);
              } else {
                this.endEvents.push(res.data.EVENT[i]);
              }
            }
            this.overlay = false;
            console.log(this.progressEvents);
            console.log(this.endEvents);
          }
        },
        error => {
          console.log(error);
        }
      );
    },

    getImage(image) {
      return "//phone.megatalking.com/files/" + image;
    }
  }
};
</script>
