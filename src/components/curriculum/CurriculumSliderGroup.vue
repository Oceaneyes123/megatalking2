<template>
  <v-slide-group v-model="bookSlide1" :show-arrows="!isMobile" class="mb-3">
    <v-slide-item v-for="(book, i) in currentBook" :key="i">
      <v-card
        flat
        color="#fafafa"
        class="rounded-xl mx-2"
        :height="isMobile ? '' : '100%'"
        style="border: 1px solid #dee3ee"
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
          class="subtitle-text-1 mx-auto text-center font-weight-black mt-3"
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
    </v-slide-item>
  </v-slide-group>
</template>
<script>
export default {
  props: ["current-book", "mobile"],
  data() {
    return {};
  },
  mounted() {},

  methods: {}
};
</script>

<style lang="css" scoped></style>
