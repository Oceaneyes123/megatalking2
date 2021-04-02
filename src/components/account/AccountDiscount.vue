<template>
  <div>
    <div class="my-5 font-weight-bold h5 nanum">할인쿠폰</div>
    <v-card
      depressed
      class="mx-auto rounded-xl"
      style="border: solid 1px #6a9af2"
      v-if="!data.isMobile"
    >
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <td
                v-for="(header, i) in data.tab3Header"
                :key="i"
                style="border-bottom: solid 1px #6a9af2"
              >
                {{ header }}
              </td>
            </tr>
          </thead>
          <tbody v-if="data.tab3Item.length != 0">
            <tr v-for="(item, i) in data.tab3Item" :key="i">
              <td>{{ item.no }}</td>
              <td>{{ item.couponName }}</td>
              <td>{{ item.expirationDate }}</td>
              <td>{{ item.dateUsed }}</td>
              <td v-if="item.status == '수강신청'">
                <v-btn
                  text
                  class="rounded-pill white--text"
                  style="
                    background: linear-gradient(to right, #8fa1fe, #4d94e9);
                  "
                  >{{ item.status }}</v-btn
                >
              </td>
              <td v-else>{{ item.status }}</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="5">
                <span>준비중 입니다.</span>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <v-card class="rounded-xl" v-else>
      <v-list>
        <v-list-group
          v-for="(item, i) in 3"
          :key="i"
          v-model="item.active"
          no-action
          subheader
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="d-flex justify-space-between">
                <span class="font-weight-bold"> TEST </span>
                <span
                  class="font-weight-bold blue--text"
                  :class="isMobile ? '' : 'h6'"
                >
                  0</span
                >
              </v-list-item-title>
              <v-list-item-subtitle
                v-text="item.date"
                class="text-left"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </template>

          <v-container>
            <v-row>
              <v-col cols="4"> Coming Soon </v-col>
            </v-row>
          </v-container>
        </v-list-group>
      </v-list>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {};
  }
};
</script>
