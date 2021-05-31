<template lang="html">
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="660"
      :fullscreen="isMobile"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-title class="primary lighten-1 white--text nanum">
          {{ title }}
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <!-- onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));' style="height:200px;width:100%;border:none;overflow:hidden;" -->
        <v-card-text>
          <iframe
            width="100%"
            :style="[{ height: getHeight }]"
            :src="link"
            frameborder="0"
            v-if="type == 1"
          ></iframe>
          <v-card
            width="500"
            class="mx-auto my-10"
            elevation="0"
            v-else-if="type == 2"
          >
            <p class="nanum">수업받은 전화번호를 선택하세요.</p>
            <v-btn block color="info lighten-1" @click="openRecording('hp')"
              >휴대전화</v-btn
            >
            <br />
            <v-btn block color="info lighten-1" @click="openRecording('tel')"
              >일반전화</v-btn
            >
          </v-card>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      type: 1,
      title: "title",
      dialog: false,
      link: "",
      call_date: "",
      tel: "",
      hp: ""
    };
  },
  computed: {
    ...mapState(["isMobile"]),
    getHeight() {
      return this.isMobile ? "90vh" : "650px";
    }
  },
  methods: {
    setOpts(type, obj) {
      if (type == 1) {
        this.type = type;
        this.title = "평가서 보기";
        this.link = obj.link;
      } else if (type == 2) {
        this.type = type;
        this.title = "녹취 듣기";
        this.call_date = obj.call_date;
        this.tel = obj.tel;
        this.hp = obj.hp;
      }
    },
    open() {
      this.dialog = true;
    },
    openRecording(type) {
      let link =
        "http://121.78.147.57:8000/Eple_Web/Record.action?company_code=ueducation&";
      if (type == "hp") {
        link += `call_date=${this.call_date}&phone_number=${this.hp}`;
        window.open(link, "PopupWin", "width=700,height=600");
      } else if (type == "tel") {
        link += `call_date=${this.call_date}&phone_number=${this.tel}`;
        window.open(link, "PopupWin", "width=700,height=600");
      }
    }
  }
};
</script>

<style lang="css" scoped></style>
