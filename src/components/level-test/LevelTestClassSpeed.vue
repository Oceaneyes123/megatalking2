<template>
  <v-row justify="center" class="mx-sm-10 mx-4 mb-10">
    <v-col cols="12" sm="4" v-for="(speed, i) in class_speeds" :key="i">
      <v-btn
        @click="selectedSpeed = i"
        :color="selectedSpeed == i ? 'primary' : 'grey'"
        :outlined="selectedSpeed == i ? false : true"
        block
        class="rounded-xl"
        >{{ speed }}</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      selectedSpeed: 0,
      class_speeds: [
        "천천히 발음해주세요.",
        "보통 속도로 말해주세요.",
        "빨리 말하셔도 괜찮아요."
      ]
    };
  }
};
</script>
