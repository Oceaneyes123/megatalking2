<template lang="html">
  <v-card
    class="d-flex justify-center"
    style="background:#438fff"
    min-height="800px"
  >
    <div class="white--text h3 my-auto">
      <p class="text-center">Megatalking</p>
      <p class="text-center">Material</p>
      <p class="text-center">
        <v-btn x-large rounded @click="nextBook()">
          Open
          <v-icon right dark>
            mdi-book-open-outline
          </v-icon>
        </v-btn>
      </p>
    </div>
  </v-card>
</template>

<script>
export default {
  methods: {
    nextBook() {
      this.$emit("nextBook");
    }
  }
};
</script>

<style lang="css" scoped></style>
