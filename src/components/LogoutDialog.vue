<template lang="html">
  <v-row justify="center">
    <v-dialog v-model="logoutDialog" max-width="290" @click:outside="close()">
      <v-card>
        <v-card-title class="headline">
          로그아웃
        </v-card-title>

        <v-card-text>
          정말 로그아웃 하시겠습니까?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="close()">
            취소
          </v-btn>

          <v-btn color="green darken-1" text @click="logout()">
            로그아웃
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["logoutDialog"],
  methods: {
    close() {
      this.$emit("logoutDialogToggle");
    },
    logout() {
      this.$store.dispatch("logout");
      this.close();
      this.$router.push("/");
    }
  }
};
</script>

<style lang="css" scoped></style>
