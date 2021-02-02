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
            <v-col cols="6" class="d-flex justify-center">
              <v-icon color="#000" style="font-size:150px"
                >fas fa-chalkboard-teacher</v-icon
              >
            </v-col>
            <v-col cols="6">
              <div class="h4 nanum mb-5">{{ course }}</div>
              <div class="h6 " style="color:#A9A7F3">{{ member_name }}</div>
            </v-col>
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
      boardDialog: false
    };
  },
  methods: {
    open(row) {
      this.boardDialog = true;
      this.date = row.date;
      this.course = row.course;
      this.member_name = row.name;
      this.title = row.title;
    }
  }
};
</script>

<style lang="css" scoped></style>
