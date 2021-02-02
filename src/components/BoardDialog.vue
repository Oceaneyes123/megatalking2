<template>
  <v-dialog v-model="boardDialog" width="700">
    <v-card color="#A9A7F3" dark class="rounded-xl">
      <v-card-title>
        <span class="h5 font-weight-black nanum">Class Review</span>
      </v-card-title>
      <v-card-text class="white text--primary">
        <div class=" nanum pt-5" style="color: #6a6a6a">
          <div class="d-flex">
            <div class="h6 font-weight-bold mb-3">{{ title }}</div>
            <v-spacer></v-spacer>
            <div class="text-right">{{ date }}</div>
          </div>
        </div>
        <div class="h6 " style="color:#A9A7F3">{{ member_name }}</div>
        <v-container fluid class="px-0 my-5">
          <div>
            Lorem ipsum dolor sit amet, sit liber deleniti maluisset te. Te
            apeirian facilisi insolens cum, mea an alienum incorrupte. Nec id
            decore delectus evertitur, postea feugiat eam ne, vulputate
            constituam ea sea. An malis hendrerit expetendis mel, ei quod ipsum
            suavitate sea, id quodsi eruditi delenit vix.
          </div>
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
