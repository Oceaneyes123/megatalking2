<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="snackbar" :color="state">
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
    state: "success",
    text: "please input the message"
  }),
  computed: {},
  props: {},
  methods: {
    show(text, state = "") {
      this.text = text;
      this.snackbar = true;
      if (state !== "") this.state = "blue-grey";
    }
  }
};
</script>
