<template>
  <v-dialog max-width="700" v-model="videoDialog" class="rounded-xl">
    <v-card
      style="overflow-x: hidden"
      :style="$vuetify.breakpoint.xsOnly ? 'overflow-y:hidden' : ''"
    >
      <video
        width="100%"
        controls
        src="https://phone.megatalking.com/video/information/how_to_set_mc.mp4"
      ></video>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      videoDialog: false
    };
  },

  mounted() {},
  methods: {
    open() {
      this.videoDialog = true;
    }
  }
};
</script>

<style lang="css" scoped></style>
