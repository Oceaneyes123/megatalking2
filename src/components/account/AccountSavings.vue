<template>
  <div>
    <div class="my-5 font-weight-bold h5 nanum">적립금</div>
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
                v-for="(header, i) in data.tab2Header"
                :key="i"
                style="border-bottom: solid 1px #6a9af2"
              >
                {{ header }}
              </td>
            </tr>
          </thead>
          <tbody v-if="data.tab2Item.length != 0">
            <tr v-for="(item, i) in tab2Item" :key="i">
              <td>{{ item.no }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.explain }}</td>
              <td>{{ item.point }}</td>
              <td>{{ item.residualPoint }}</td>
            </tr>
          </tbody>
          <tbody>
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
