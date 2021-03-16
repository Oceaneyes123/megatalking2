<template>
  <v-row class="align-center mx-4 mx-sm-10 mx-4 mb-10">
    <v-col cols="12" sm="6" class="pb-0 pb-sm-3">
      <v-text-field
        color="primary"
        label="이름"
        dense
        outlined
        ref="name"
        v-model="name"
        :rules="[() => !!name || '필수 입력값입니다.']"
        required
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" class="pt-0 pt-sm-3">
      <v-text-field
        color="primary"
        label="연락처"
        dense
        outlined
        counter="13"
        maxlength="13"
        v-model="number"
        ref="number"
        :rules="[
          () => !!number || '필수 입력값입니다.',
          v => v.length <= 13 || '연락처는 13자리 입니다.'
        ]"
        required
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      number: ""
    };
  },

  watch: {
    number(val) {
      this.number = val
        .replace(/[^0-9]/g, "")
        .replace(
          /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
          "$1-$2-$3"
        )
        .replace("--", "-");
    }
  }
};
</script>
