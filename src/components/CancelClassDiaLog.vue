<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="360">
      <v-card>
        <v-card-title class="headline">
          수업을 취소하시겠습니까?
        </v-card-title>

        <v-card-text>
          수업을 취소하시겠습니까?<br />
          수업취소는 수업시작전 30분전까지 가능하십니다.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            닫기
          </v-btn>

          <v-btn color="green darken-1" text @click="submit()">
            쿠폰복원
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
      s_id: ""
    };
  },
  computed: {
    ...mapState(["holdOverlay"])
  },
  methods: {
    open(date, classObj) {
      this.date = date;
      this.s_id = classObj.s_id;
      this.dialog = true;
    },
    submit() {
      let playload = {
        action: "cancelClass",
        date: this.date,
        s_id: this.s_id
      };
      this.$store.dispatch("cancelClass", playload);
      this.dialog = false;
    }
  }
};
</script>
