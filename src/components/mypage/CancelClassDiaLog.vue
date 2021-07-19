<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="360">
      <v-card>
        <v-card-title>
          <span :class="$vuetify.breakpoint.xsOnly ? '' : 'headline'"
            >수업을 취소하시겠습니까?</span
          >
          <v-spacer></v-spacer>
          <v-icon
            v-ripple
            color="#859ec9"
            style="cursor: pointer"
            @click="$refs.videoHelp.open()"
            >help</v-icon
          >
        </v-card-title>

        <VideoHelp ref="videoHelp"></VideoHelp>

        <v-card-text>
          수업을 취소하시겠습니까?<br />
          수업취소는 수업시작 30분전까지 가능하십니다.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            닫기
          </v-btn>

          <v-btn color="green darken-1" text @click="submit()">
            수업취소
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
import VideoHelp from "@/components/mypage/VideoHelp";
export default {
  components: { VideoHelp },
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
        action: "cancelClass",
        date: this.date,
        s_id: this.s_id,
        ableGetCoupon: this.ableGetCoupon
      };
      this.$store.dispatch("cancelClass", playload);
      this.dialog = false;
    }
  }
};
</script>
