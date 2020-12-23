<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">
          홀드 하시겠습니까?
        </v-card-title>

        <v-card-text>
          정말 홀드하시겠습니까?<br />
          한번 홀드한 수업은 되돌릴 수 없습니다.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            취소
          </v-btn>

          <v-btn color="green darken-1" text @click="submit()">
            홀드
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
      console.log(date, classObj);
    },
    submit() {
      let playload = {
        action: "hold",
        date: this.date,
        s_id: this.s_id
      };
      this.$store.dispatch("hold", playload);
      this.dialog = false;
    }
  }
};
</script>
