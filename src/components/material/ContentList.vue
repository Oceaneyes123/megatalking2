<template lang="html">
  <v-card min-height="800px" class="pb-15 pb-md-5">
    <v-app-bar flat class="nanum">교재목차</v-app-bar>

    <v-overlay :value="bookUnits.length == 0" absolute>
      <v-progress-circular
        indeterminate
        color="purple"
        size="64"
      ></v-progress-circular>
    </v-overlay>
    <v-list dense>
      <v-subheader>{{ bookTitle }}</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item
          v-for="(unit, i) in bookUnits"
          :key="i"
          @click="nextBook(unit.id)"
        >
          <v-list-item-icon>
            <v-icon>mdi-file-document-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="unit.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import axios from "axios";
import { bus } from "@/main";
import { mapState } from "vuex";

export default {
  data() {
    return {
      bookTitle: "",
      bookUnits: []
    };
  },
  methods: {
    nextBook(unitId) {
      bus.$emit("setUnitId", unitId);
      this.$emit("nextBook");
    }
  },
  computed: {
    ...mapState(["currentCourseName"])
  },
  created() {
    console.log(this.currentCourseName);
    // let url = "http://178.128.213.14/content-utilities/api/cms/miscs/get_materials_for_list";
    let url = "https://megatalking.co.kr/api/get_materials_for_list.php";
    axios
      .get(url)
      .then(rs => {
        if (this.currentCourseName.length != 0) {
          let currentCourseName = this.currentCourseName.split(":")[1];
          let bookDto = rs.data.find(
            course => course.title == currentCourseName
          );
          this.bookTitle = bookDto.title;
          this.bookUnits = bookDto.list_units;
          console.log(rs);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="css" scoped></style>
