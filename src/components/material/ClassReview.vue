<template lang="html">
  <v-container class="pb-5">
    <v-row class="align-md-center">
      <v-col cols="12">
        <div class="text-center mb-2">
          Annie 강사님 수업은 어떠셨나요?
        </div>
        <div class="text-center">
          <v-rating
            v-model="rating"
            half-increments
            color="yellow darken-2"
            hover
            x-large
            background-color="yellow darken-2"
            full-icon="fas fa-star"
            empty-icon="far fa-star"
            half-icon="fas fa-star-half-alt"
          ></v-rating>
        </div>
      </v-col>
      <v-col
        class="mx-auto"
        cols="12"
        sm="7"
        align-self="center"
        v-for="(suggestion, i) in step4Suggestions"
        :key="i"
      >
        <v-btn
          large
          outlined
          block
          @click="selectSuggestion(i)"
          :class="
            selectedSuggestion.includes(i)
              ? 'primary--text font-weight-bold border'
              : 'text-grey'
          "
          >{{ suggestion }}</v-btn
        >
      </v-col>
      <v-col class="mx-auto" cols="12" sm="7">
        <v-textarea
          outlined
          class="rounded-xl"
          height="20vh"
          v-model="opinion"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-btn
        style="
          background: linear-gradient(to right,#8fa1fe,#4993e8);
        "
        class="mx-auto rounded-lg white--text mb-5"
        >Next</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      rating: 4.5,
      opinion: "",
      step4Suggestions: [
        "조금 천천히 말해주세요.",
        "활기찬 분위기를 원해요.",
        "질문을 많이 해주세요.",
        "틀린 부분을 바로바로 고쳐주세요.",
        "많이 말하도록 유도해주세요."
      ],
      selectedSuggestion: []
    };
  },
  computed: {
    ...mapState(["currentClassInfo"]),
    form() {
      let selected = [];
      this.selectedSuggestion.forEach((item, i) => {
        selected.push({ key: i, text: this.step4Suggestions[item] });
      });

      return {
        timestamp: this.currentClassInfo.todate,
        score: this.rating,
        selected: selected,
        text: this.opinion,
        s_id: this.currentClassInfo.s_id,
        type: "RC"
      };
    }
  },
  methods: {
    selectSuggestion(index) {
      if (this.selectedSuggestion.includes(index)) {
        const num = this.selectedSuggestion.indexOf(index);
        this.selectedSuggestion.splice(num, 1);
      } else {
        this.selectedSuggestion.push(index);
      }
    }
  }
};
</script>

<style lang="css" scoped>
.border {
  border: 2px solid;
}
</style>
