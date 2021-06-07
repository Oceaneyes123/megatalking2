<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="360">
      <v-card>
        <v-card-title class="headline">
          수업을 복원하시겠습니까?!
        </v-card-title>

        <v-card-text>
          수업 복원은 수업 시작전 30분전까지 가능합니다.
          <br />
          강사님이 다른 수업이 있는경우 취소가 불가능합니다.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            취소
          </v-btn>

          <v-btn color="green darken-1" text @click="submit()">
            수업복원
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-overlay :value="holdOverlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      date: "",
      s_id: "",
      ableGetCoupon: false
    };
  },
  computed: {
    ...mapState(["holdOverlay"])
  },
  methods: {
    open(date, classObj) {
      this.date = date;
      this.s_id = classObj.s_id;
      this.ableGetCoupon = classObj.ableGetCoupon;
      this.dialog = true;
      // console.log(date, classObj);
    },
    submit() {
      let playload = {
        action: "revertClass",
        date: this.date,
        s_id: this.s_id
      };
      this.$store.dispatch("revertClass", playload);
      this.dialog = false;
    }
  }
};
</script>
