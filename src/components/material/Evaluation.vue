<template lang="html">
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          class="d-flex align-center rounded-pill pa-3 mb-4"
          color="#dfdfdf"
          max-width="300"
          flat
        >
          <v-icon color="#5a55a1" x-large>far fa-play-circle</v-icon>
          <v-progress-linear
            v-model="progress"
            value="60"
            color="#5a55a1"
            class="mx-5"
          ></v-progress-linear>
          <div class="text--secondary">0:40</div>
        </v-card>
        <v-card
          flat
          class="d-flex rounded-lg white--text py-3 px-2"
          color="#5D6687"
          max-width="300"
        >
          <span>녹음파일 전체듣기</span>
          <span class="mx-auto">|</span>
          <span>음원 다운로드</span>
        </v-card>
        <div class="mt-15 mb-5 h6">
          다음 발음을 연습해주세요.
        </div>
        <div
          class="mt-1"
          v-for="(pronunciation, i) in step4PracticePronunciation"
          :key="i"
        >
          {{ i + 1 }}. {{ pronunciation }}
        </div>
      </v-col>
      <v-col cols="12">
        <div class="h6 mb-5">더 나은 표현을 알려드릴게요.</div>
        <div
          class="mb-2"
          v-for="(expression, i) in step4BetterExpression"
          :key="i"
        >
          <div>{{ i + 1 }}. {{ expression.original }}</div>
          <div class="text-blue">=> {{ expression.better }}</div>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="h6">강사님 코멘트</div>
        <v-col cols="12" md="10" class="mx-auto">
          <v-textarea class="rounded-xl" outlined color="#667fe3"></v-textarea>
        </v-col>
      </v-col>
      <v-col cols="12">
        <div class="text-center mb-4">
          오늘 수업을 한마디로 표현한다면,
        </div>
        <div class="d-flex justify-center">
          <v-icon
            @click="selectedIcon = i"
            :color="selectedIcon == i ? 'yellow darken-3' : 'grey'"
            class="mx-3"
            v-for="(icon, i) in step4Icons"
            :key="i"
            x-large
            >{{ icon }}</v-icon
          >
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-5">
      <div class="d-flex mx-auto">
        <v-btn
          @click="window4 = window4 - 1"
          style="
            background: linear-gradient( to right,  #8fa1fe,  #4993e8 );
          "
          class="mr-3 rounded-lg white--text mb-5"
          >Previous</v-btn
        >
        <v-btn
          @click="tabs = 4"
          style="
            background: linear-gradient(to right,#8fa1fe,#4993e8);
          "
          class="mx-auto rounded-lg white--text mb-5"
          >Next</v-btn
        >
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      step4PracticePronunciation: ["Brother", "Skirt", "Change"],
      step4BetterExpression: [
        {
          original: "I usually home shopping ",
          better: "I usually do home shopping. "
        },
        {
          original: "I buy my wallet.",
          better: "I usually do home shopping. "
        },
        {
          original: "The old one worn out",
          better: "The old one was worn out."
        }
      ],
      selectedIcon: -1,
      step4Icons: [
        "fas fa-tired",
        "fas fa-frown",
        "fas fa-smile",
        "far fa-grin",
        "far fa-grin-beam"
      ]
    };
  }
};
</script>

<style lang="css" scoped></style>
