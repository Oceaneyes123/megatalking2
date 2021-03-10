<template lang="html">
  <v-card min-height="800px">
    <v-app-bar flat class="nanum">교재목차</v-app-bar>
    <v-list dense>
      <v-subheader>{{ bookTitle }}</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(book, i) in books" :key="i" @click="nextBook()">
          <v-list-item-icon>
            <v-icon>mdi-file-document-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="book.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      bookTitle: "",
      books: []
    };
  },
  methods: {
    nextBook() {
      this.$emit("nextBook");
    }
  },
  created() {
    axios
      .get(
        "http://178.128.213.14/content-utilities/api/cms/miscs/get_materials_for_list"
      )
      .then(rs => {
        this.bookTitle = rs.data[0].title;
        this.books = rs.data[0].list_units;
        console.log(rs);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="css" scoped></style>
