<template>
  <v-app style="background: #f2f2f2">
    <v-container fluid class="py-0 px-0 py-md-5">
      <v-card
        class="mx-auto d-flex flex-column"
        elevation="7"
        width="100%"
        max-width="700px"
        min-height="800px"
      >
        <v-container class="px-0 py-0">
          <ContentCover v-if="step == 0" @nextBook="nextBook(1)" />
          <ContentList
            v-else-if="step == 1 && currentCourseLink == ''"
            @nextBook="nextBook(2)"
          />
          <Webbook v-else-if="step == 1"></Webbook>
          <Tabs v-else :unitId="unitId" />
        </v-container>
        <FooterMenuBar class="mt-auto" @openList="nextBook" />
      </v-card>
    </v-container>
  </v-app>
</template>

<style></style>

<script>
import Tabs from "@/components/material/Tabs";
import ContentCover from "@/components/material/ContentCover";
import ContentList from "@/components/material/ContentList";

import Webbook from "@/components/material/Webbook";

import FooterMenuBar from "@/components/material/FooterMenuBar";
import { mapState } from "vuex";
import { bus } from "@/main";

export default {
  data() {
    return {
      courseName: "",
      unitId: 1,
      screenWidth: "",
      isMobile: false,
      status: false,
      connection: null,
      step: 0,
      classInfo: []
    };
  },
  components: {
    Tabs,
    FooterMenuBar,
    ContentCover,
    ContentList,
    Webbook
  },
  computed: {
    ...mapState(["currentCourseName", "currentClassInfo", "currentCourseLink"])
  },
  created() {
    window.addEventListener("resize", this.onWindowResize);
    this.courseName = this.currentCourseName;
    this.classInfo = this.currentClassInfo;
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },

  mounted() {
    this.screenWidth = screen.width;
    this.isMobile = this.screenWidth <= 960 ? true : false;

    bus.$on("setUnitId", unitId => {
      this.unitId = unitId;
    });

    if (this.currentCourseLink == "") {
      console.log("hello1");
    } else {
      console.log("hello2");
    }

    document.getElementById("frame").src = "http://178.128.213.14/";

    window.addEventListener("message", receiveMessage, false);

    var vm = this;
    function receiveMessage(evt) {
      if (
        evt.origin == "https://rocky-reef-33555.herokuapp.com" &&
        evt.data == "status=true"
      ) {
        vm.proceed();
      }
    }
  },

  methods: {
    nextBook(step) {
      this.step = step;
    },
    proceed() {
      console.log(this.status, "test");
      this.tabs = 1;
    },
    send(message) {
      console.log("sending");
      this.connection.send(message);
    },
    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
    }
  }
};
</script>
