<template>
  <v-dialog v-model="eventDialog" width="700">
    <v-card color="#A9A7F3" dark class="rounded-xl">
      <v-card-title class="h4 font-weight-bold nanum">
        HOT SUMMER EVENT
      </v-card-title>
      <v-card-text class="white text--primary">
        <p class="h5 font-weight-bold nanum pt-5" style="color: #6a6a6a">
          최대 70% OFF
        </p>
        <v-card color="#f99d59" width="100%" height="300">
          <!-- <v-img></v-img> -->
        </v-card>
        <v-container>
          <v-row class="justify-end">
            <v-btn color="#A9A7F3" outlined @click="eventDialog = false">
              Close
            </v-btn>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      eventDialog: false,
    };
  },
  methods: {
    open() {
      this.eventDialog = true;
    },
  },
};
</script>

<style lang="css" scoped></style>