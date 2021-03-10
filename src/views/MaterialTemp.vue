<template>
  <v-app>
    <v-container fluid class="py-0 px-0 py-md-5" style="background:#f2f2f2">
      <v-card
        class="mx-auto d-flex flex-column"
        elevation="7"
        width="100%"
        max-width="700px"
        min-height="800px"
      >
        <v-container class="px-0 py-0">
          <ContentCover v-if="step == 0" @nextBook="nextBook(1)" />
          <ContentList v-else-if="step == 1" @nextBook="nextBook(2)" />
          <Tabs v-else />
        </v-container>
        <FooterMenuBar class="mt-auto" />
      </v-card>
    </v-container>
  </v-app>
</template>

<style></style>

<script>
import axios from "axios";
import Tabs from "@/components/material/Tabs";
import ContentCover from "@/components/material/ContentCover";
import ContentList from "@/components/material/ContentList";
import FooterMenuBar from "@/components/material/FooterMenuBar";
export default {
  data() {
    return {
      screenWidth: "",
      isMobile: false,
      status: false,
      window1: 0,
      window3: 0,
      window4: 0,
      connection: null,
      step: 0
    };
  },
  components: {
    Tabs,
    FooterMenuBar,
    ContentCover,
    ContentList
  },
  created() {
    window.addEventListener("resize", this.onWindowResize);
    let url =
      "http://178.128.213.14/content-utilities/api/students/videoandcontents/1";
    axios
      .get(url)
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },

  mounted() {
    this.screenWidth = screen.width;
    this.isMobile = this.screenWidth <= 960 ? true : false;

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
