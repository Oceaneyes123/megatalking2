<template>
  <v-app>
    <v-container fluid class="py-0 px-0">
      <v-card tile color="#8bb6f7" class="text-center pa-3">
        <div
          class="h4 font-weight-bold white--text mb-5"
          style="margin-top:200px"
        >
          레벨테스트
        </div>
        <div class="h4 mb-5 font-weight-bold" style="color:#2564cb">
          “Anytime, Anywhere, Home Learn English.”
        </div>
        <div class="h5 mb-5" style="color:#5f8dd3">
          레벨테스트를 통해 나의 영어 실력을 알고, 무료수업을 신청해보세요 .
        </div>
        <v-container style="max-width:1000px;margin-top:90px">
          <v-card
            class="rounded-xl"
            elevation="7"
            width="100%"
            style="margin-bottom:500px"
            color="#fafafa"
          >
            <v-container class="px-10 pt-10">
              <v-row class="px-10">
                <div class="h5">전화영어 무료 레벨테스트.</div>
              </v-row>
              <v-row class="pl-10">
                <div class="h5 font-weight-black">간편하게 신청해보세요.</div>
              </v-row>
              <v-row class="px-10 d-flex align-center">
                <div>
                  모든 레벨테스트는 전화로 진행됩니다.
                </div>
                <v-spacer></v-spacer>
                <div>
                  <v-btn color="#5a55a1" large class="white--text"
                    >결과 확인하기</v-btn
                  >
                </div>
              </v-row>
            </v-container>
          </v-card>
        </v-container>
      </v-card>
    </v-container>
  </v-app>
</template>
