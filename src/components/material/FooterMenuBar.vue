<template lang="html">
  <v-card color="#DCDCDC" tile>
    <v-container>
      <v-row justify="space-between" class="px-5">
        <div class="d-flex flex-column mx-auto">
          <v-icon color="white" x-large @click="$router.push('/mypage')"
            >far fa-user</v-icon
          >
          <div class="mt-3 text-center">마이페이지</div>
        </div>
        <v-divider vertical></v-divider>
        <div class="d-flex flex-column mx-auto">
          <v-icon color="white" x-large @click="$router.push('/board')"
            >far fa-bell</v-icon
          >
          <div class="mt-3 text-center nanum">알림</div>
        </div>

        <v-divider vertical></v-divider>
        <div class="d-flex flex-column mx-auto">
          <v-icon color="white" x-large @click="$router.push('/material')"
            >fas fa-book-open</v-icon
          >
          <div class="mt-3 text-center">교재</div>
        </div>
        <v-divider vertical></v-divider>
        <div class="d-flex flex-column mx-auto">
          <v-icon color="white" x-large @click="$router.push('/account')"
            >fas fa-ticket-alt</v-icon
          >
          <div class="mt-3 text-center">수강권 내역</div>
        </div>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="css" scoped></style>
