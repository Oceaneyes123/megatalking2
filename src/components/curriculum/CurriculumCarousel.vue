<template>
  <v-hover v-slot:default="{ hover }">
    <v-carousel
      :cycle="!hover"
      height="100%"
      hide-delimiter-background
      show-arrows-on-hover
      hide-delimiters
      :interval="isMobile ? `1500` : `6000`"
    >
      <v-carousel-item
        eager
        height="750"
        v-for="(book, i) in currentBook"
        :key="i"
      >
        <v-card
          class="mx-auto rounded-xl"
          flat
          max-width="700"
          color="#dee3ee"
          :class="isMobile ? 'pt-10' : ''"
        >
          <v-container class="d-flex justify-center">
            <v-row>
              <v-col class="py-0 d-flex justify-center" cols="12" md="5">
                <v-card
                  flat
                  color="#fafafa"
                  class="rounded-xl"
                  :height="mobile ? '' : '100%'"
                  style="border: 1px solid #dee3ee"
                  max-width="300"
                >
                  <v-img
                    :src="book.image"
                    max-width="300"
                    height="200"
                    class="mx-auto"
                    eager
                  ></v-img>
                  <v-card
                    flat
                    color="#fafafa"
                    width="80%"
                    class="
                      subtitle-text-1
                      black--text
                      mx-auto
                      text-center
                      font-weight-black
                      mt-3
                    "
                    >{{ book.title }}</v-card
                  >
                  <v-card
                    flat
                    color="#fafafa"
                    width="80%"
                    max-width="300"
                    class="mx-auto mt-5 text-left caption-text mb-5"
                    style="color: #325fc4"
                    >{{ book.details }}</v-card
                  >
                </v-card>
              </v-col>
              <v-col cols="12" md="7">
                <v-container fluid>
                  <v-row class="h6 font-weight-bold" justify="center">
                    <div class="text-center black--text">학습교재</div>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <v-img
                        v-if="book.mobile"
                        :src="book.mobile"
                        width="250"
                        height="300"
                        contain
                        eager
                      ></v-img>
                    </v-col>
                    <v-col cols="6" class="d-flex align-end">
                      <div class="d-flex flex-column align-start">
                        <v-btn
                          class="
                            rounded-xl
                            white--text
                            font-weight-bold
                            h5
                            nanum
                            mb-5
                          "
                          style="
                            background: linear-gradient(
                              to right,
                              #8fa1fe,
                              #4d94e9
                            );
                          "
                          @click="$router.push('/enrollment')"
                          >수강신청</v-btn
                        >
                        <div
                          class="h5 nanum black--text text-left"
                          style="line-break: strict; word-break: keep-all"
                        >
                          {{ book.title }}
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-hover>
</template>
<script>
import { mapState } from "vuex";

export default {
  props: ["current-book", "mobile"],
  data() {
    return {};
  },
  computed: {
    ...mapState(["isMobile"])
  },
  mounted() {
    console.log(this.currentBook);
    console.log(this.mobile);
  },

  methods: {}
};
</script>

<style lang="css" scoped></style>
