<template>
  <v-dialog max-width="700" v-model="courseDialog" class="rounded-xl">
    <v-card max-width="700" class="rounded-xl">
      <v-card
        color="#6a9af2"
        class="pa-3 white--text font-weight-bold h6 rounded-tr-xl rounded-tl-xl"
        tile
      >
        Course Certificate
      </v-card>
      <v-container>
        <v-row>
          <v-col cols="12" md="6" class="pb-0 pb-md-3">
            <v-container class="px-0 py-0">
              <v-row no-gutters class="mb-2">
                <v-col cols="6" class="font-weight-bold">Company</v-col>
                <v-col cols="6">[Company]</v-col>
              </v-row>
              <v-row no-gutters class="mb-2">
                <v-col cols="6" class="font-weight-bold">Address</v-col>
                <v-col cols="6">[Address]</v-col>
              </v-row>
              <v-row no-gutters class="mb-2">
                <v-col cols="6" class="font-weight-bold">Registration #</v-col>
                <v-col cols="6">[Registration #]</v-col>
              </v-row>
              <v-row no-gutters class="mb-2">
                <v-col cols="6" class="font-weight-bold"
                  >Nature of Business</v-col
                >
                <v-col cols="6">[Nature of Business]</v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="12" md="6" class="pt-0 pt-md-3">
            <v-container class="px-0 py-0">
              <v-row no-gutters class="mb-2">
                <v-col cols="6" class="font-weight-bold">Representative</v-col>
                <v-col cols="6">[Representative]</v-col>
              </v-row>

              <v-row no-gutters class="mb-2">
                <v-col cols="6" class="font-weight-bold">Type</v-col>
                <v-col cols="6">[Type]</v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
      <v-container>
        <v-row no-gutters class="mb-2">
          <v-col cols="3" class="font-weight-bold">Name</v-col>
          <v-col cols="9">[Name]</v-col>
        </v-row>
        <v-row no-gutters class="mb-2">
          <v-col cols="3" class="font-weight-bold">Course</v-col>
          <v-col cols="9">[Course]</v-col>
        </v-row>
        <v-row no-gutters class="mb-2">
          <v-col cols="3" class="font-weight-bold">Contract</v-col>
          <v-col cols="9">[Contract]</v-col>
        </v-row>
        <v-row no-gutters class="mb-2">
          <v-col cols="3" class="font-weight-bold">Period</v-col>
          <v-col cols="9">[Period]</v-col>
        </v-row>
        <v-row>
          <v-col class="caption-text">
            This certification is a proof that the student studied in this
            academy. <br />
            [today_date]
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-end">
            <v-btn
              @click="courseDialog = false"
              class="mr-3"
              outlined
              color="#6a9af2"
            >
              Close
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      courseDialog: false
    };
  },
  methods: {
    open() {
      this.courseDialog = true;
    }
  }
};
</script>

<style lang="css" scoped></style>
