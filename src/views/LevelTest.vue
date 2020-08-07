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
            class="rounded-xl shadow"
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
              <v-row
                class="px-10 mt-5 d-flex align-center"
                style="margin-bottom:50px"
              >
                <div class="text-purple font-weight-black">
                  모든 레벨테스트는 전화로 진행됩니다.
                </div>
                <v-spacer></v-spacer>
                <div>
                  <v-btn color="#5a55a1" large class="white--text rounded-lg"
                    >결과 확인하기</v-btn
                  >
                </div>
              </v-row>
              <v-divider class="mx-10 mb-10"></v-divider>
              <div class="text-dark-purple h6">
                <span class="font-weight-black">나에게 맞춘 날짜와 시간</span>에
                언제든지 진행 가능합니다.
              </div>
              <v-row class="px-10 my-10 d-flex  justify-center">
                <div class="mx-2">
                  <v-icon style="font-size:50px" color="#4185b3">
                    far fa-file-alt
                  </v-icon>
                  <div class="mt-3 caption">신청서 작성</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">
                    fas fa-angle-right
                  </v-icon>
                </div>
                <div class="mx-2">
                  <v-icon style="font-size:50px" color="#4185b3">
                    fas fa-calendar-plus
                  </v-icon>
                  <div class="mt-3 caption">예약 완료</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">
                    fas fa-angle-right
                  </v-icon>
                </div>
                <div class="mx-2">
                  <v-icon style="font-size:50px" color="#4185b3">
                    fas fa-envelope
                  </v-icon>
                  <div class="mt-3 caption">
                    문자메시지 발송 <br />
                    (예약 확인, 테스트 안내 )
                  </div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">
                    fas fa-angle-right
                  </v-icon>
                </div>
                <div class="mx-2 ">
                  <v-icon style="font-size:50px" color="#4185b3">
                    fas fa-desktop
                  </v-icon>
                  <div class="mt-3 caption">
                    강사님과 1:1수업 <br />
                    (간단 자기소개 등)
                  </div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">
                    fas fa-angle-right
                  </v-icon>
                </div>
                <div class="mx-2">
                  <v-icon style="font-size:50px" color="#4185b3">
                    fas fa-chart-bar
                  </v-icon>
                  <div class="mt-3 caption">
                    테스트 결과 받기
                  </div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">
                    fas fa-angle-right
                  </v-icon>
                </div>
                <div class="mx-2">
                  <v-icon style="font-size:50px" color="#4185b3">
                    far fa-smile-beam
                  </v-icon>
                  <div class="mt-3 caption">
                    개별 맞춤 상담
                  </div>
                </div>
              </v-row>
              <div class="h6 font-weight-black text-left px-10">
                과목 선택
              </div>
              <v-row class="mx-10 mb-10">
                <v-checkbox
                  v-model="checkbox1"
                  color="primary"
                  class="mr-10"
                  label="메가토킹 전화영어"
                >
                </v-checkbox>
                <v-checkbox
                  v-model="checkbox1"
                  color="primary"
                  label="메가토킹 화상영어"
                >
                </v-checkbox>
              </v-row>
              <v-row class="d-flex align-center mx-10 mb-10">
                <div class="pb-7 font-weight-black">이름</div>
                <v-col cols="4" class="mr-5">
                  <v-text-field color="primary" dense outlined></v-text-field>
                </v-col>

                <div class="pb-7 font-weight-black">연락처</div>
                <v-col cols="4">
                  <v-text-field color="primary" dense outlined></v-text-field>
                </v-col>
              </v-row>
              <div class="mx-10 font-weight-black h6 text-left">
                예약 일시
              </div>
            </v-container>
          </v-card>
        </v-container>
      </v-card>
    </v-container>
  </v-app>
</template>
