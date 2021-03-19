<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-card class="rounded-xl" height="100%" dark color="#859ec9">
        <v-container>
          <v-img
            @click="$router.push('/material')"
            class="rounded-xl"
            data-aos="fade-up"
            :src="data.selectedClassImg"
            width="100%"
            height="auto"
          >
            <v-card height="100%" color="#000000AD">
              <v-container>
                <div
                  :class="isMobile ? '' : 'h4'"
                  class="font-weight-black text-right white--text gmarket mr-5"
                  style="
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                    cursor: pointer;
                  "
                >
                  Next >
                </div>
              </v-container>
            </v-card>
          </v-img>
          <v-row>
            <v-col class="text-center h5 nanum font-weight-bold">
              {{ selectedClassTitle }}</v-col
            >
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">2021.02.23</v-col>
            <v-col cols="12" sm="6">6:00+10</v-col>
            <v-col cols="12" sm="6">dave</v-col>
            <v-col cols="12" sm="6">Phone Class</v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {};
  },

  mounted() {},
  methods: {}
};
</script>

<style lang="css" scoped></style>
