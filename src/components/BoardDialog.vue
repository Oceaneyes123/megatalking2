<template>
  <v-dialog v-model="boardDialog" width="700">
    <v-card color="#A9A7F3" dark class="rounded-xl">
      <v-card-title>
        <span class="h5 font-weight-black nanum">{{ title }}</span>
      </v-card-title>
      <v-card-text class="white text--primary">
        <p
          class="h6 font-weight-bold nanum pt-5 text-right"
          style="color: #6a6a6a"
        >
          {{ date }}
        </p>
        <v-container>
          <v-row>
            <v-col cols="12"> {{ course }} </v-col>
            <v-col cols="12"> {{ member_name }} </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row class="justify-end">
            <v-btn color="#A9A7F3" outlined @click="boardDialog = false">
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
      date: "",
      course: "",
      member_name: "",
      title: "",
      boardDialog: false,
    };
  },
  methods: {
    open(row) {
      this.boardDialog = true;
      this.date = row.date;
      this.course = row.course;
      this.member_name = row.name;
      this.title = row.title;
    },
  },
};
</script>

<style lang="css" scoped></style>