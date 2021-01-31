<template>
  <div id="app">
    <v-app>
      <Header></Header>
      <v-img
        :src="currentImage"
        width="showNav"
        class="text-center"
        v-if="showNav"
        style="overflow-y: hidden !important"
        id="imageContainer"
      >
        <div class="d-flex flex-column" style="height: 100% !important">
          <router-view></router-view>
          <Footer class="mt-auto"></Footer>
        </div>
      </v-img>
      <router-view v-else></router-view>
    </v-app>
  </div>
</template>

<style>
#imageContainer > .v-responsive__content {
  overflow-y: hidden;
}
</style>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["currentImage", "showNav", "screenWidth", "isMobile"])
  },
  created() {
    window.addEventListener("resize", this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },
  mounted() {
    this.$store.commit("onWindowResize", screen.width);
  },
  methods: {
    onWindowResize() {
      this.$store.commit("onWindowResize", screen.width);
    }
  }
};
</script>

<style>
#app {
  font-family: "Nanum Gothic", sans-serif;
  /* font-family: "NanumSquare", sans-serif; */
}
/* #app {
  font-family: "NanumSquare";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */

.text-purple {
  color: #5a55a1;
}

.text-dark-purple {
  color: #475ba4;
}

.icon-large {
  font-size: 48px;
}

.shadow {
  box-shadow: 0 4px 5px -2px rgba(179, 203, 240, 0.2),
    0 7px 10px 1px rgba(0, 0, 0, -0.86), 0 2px 16px 1px rgba(0, 0, 0, 0.12) !important;
}

.h1 {
  font-weight: 300;
  font-size: 6rem;
  letter-spacing: -0.09375rem;
}
.h2 {
  font-weight: 300;
  font-size: 3.75rem;
  letter-spacing: -0.03125rem;
}
.h3 {
  font-family: "GmarketSansGmarketSansBoldLight", sans-serif;
  font-weight: 400;
  font-size: 3rem;
  letter-spacing: normal;
}
.h4 {
  font-family: "GmarketSansBold", sans-serif;
  font-weight: 400;
  font-size: 2.125rem;
  letter-spacing: -0.015625rem;
}
.h5 {
  font-family: "GmarketSansBold", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  letter-spacing: normal;
  line-break: strict;
  word-break: keep-all;
}
.h6 {
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 0.009375rem;
}

.subtitle-text-1 {
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.009375rem;
}

.regular {
  font-weight: 400 !important;
}

.v-application .caption {
  font-family: unset;
}

.caption-text {
  font-family: "NanumSquare", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.025rem;
}

.nanum {
  font-family: "NanumSquare", sans-serif !important;
}

.gmarket {
  font-family: "GmarketSansBold", sans-serif !important;
}

.korean-text {
  word-break: keep-all;
  line-break: strict;
}

@font-face {
  font-family: "GmarketSansBold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

/* @font-face {
  font-family: "NanumSquareB";
  font-style: normal;
  src: url("https://cdn.jsdelivr.net/npm/typeface-nanum-square@1.1.0/NanumSquareB.woff")
      format("woff"),
    url("https://cdn.jsdelivr.net/npm/typeface-nanum-square@1.1.0/NanumSquareB.woff2")
      format("woff2");
}

@font-face {
  font-family: "NanumSquare";
  font-style: normal;
  src: url("https://cdn.jsdelivr.net/npm/@kfonts/nanum-square@0.1.0/NanumSquareRegular.woff")
      format("woff"),
    url("https://cdn.jsdelivr.net/npm/@kfonts/nanum-square@0.1.0/NanumSquareRegular.woff2")
      format("woff2");
} */
</style>
