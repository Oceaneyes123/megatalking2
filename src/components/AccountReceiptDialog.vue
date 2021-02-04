<template>
  <v-dialog max-width="500" v-model="receiptDialog" class="rounded-xl">
    <v-card max-width="500" class="rounded-xl">
      <v-card
        color="#6a9af2"
        class="pa-3 white--text font-weight-bold h6 rounded-tr-xl rounded-tl-xl"
        tile
      >
        Receipt
      </v-card>
      <v-container class="pa-3">
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
        <v-row no-gutters class="mb-2">
          <v-col cols="3" class="font-weight-bold">Start Date</v-col>
          <v-col cols="9">[Start Date]</v-col>
        </v-row>
        <v-row no-gutters class="mb-2">
          <v-col cols="3" class="font-weight-bold">Instructor</v-col>
          <v-col cols="9">[Instructor]</v-col>
        </v-row>
        <v-row no-gutters class="mb-5">
          <v-col cols="3" class="font-weight-bold">Tuition</v-col>
          <v-col cols="9">[Tuition]</v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="10 caption-text">
            The member above proves that they have taken the MegaTalking English
            class as above.
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="../assets/mega_logo.png" max-width="60%"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-end">
            <v-btn
              @click="receiptDialog = false"
              class="mr-3"
              outlined
              color="#6a9af2"
            >
              Cancel
            </v-btn>
            <v-btn color="#6a9af2" class="white--text"> Print </v-btn>
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
      receiptDialog: false
    };
  },
  methods: {
    open() {
      this.receiptDialog = true;
    }
  }
};
</script>

<style lang="css" scoped></style>
