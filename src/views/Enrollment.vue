<template>
  <v-app style="background-color: #00000000">
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-container fluid class="py-0 px-0">
      <v-card tile color="#8bb6f700" flat class="text-center pa-1">
        <div class="h3 font-weight-bold white--text" style="margin-top: 200px">
          수강 신청
        </div>
        <div class="h6 nanum white--text">
          <div class="my-10">
            왕초보라도, 영어1도 못해도, 메가토킹과 함께라면 어렵지 않아요.
          </div>
          <div class="my-2">외국인과 말하기 두려워도, 영어가 서툴러도</div>
          <div class="my-2">메가토킹 선생님이 친구처럼 도와드려요.</div>
        </div>
        <v-container
          style="max-width: 1000px; margin-top: 90px"
          class="px-0 mx-auto"
        >
          <v-card class="rounded-xl shadow" width="100%">
            <v-container class="px-0 py-0">
              <v-row no-gutters>
                <v-col cols="12" md="8">
                  <v-card
                    class="pl-md-10 px-5 pt-10 pb-15 pr-md-8 rounded-xl"
                    flat
                    color="#fafafa"
                  >
                    <div class="h6 font-weight-black text-left">수강 종류</div>
                    <v-container class="px-0 mt-7">
                      <v-row no-gutters class="mb-5">
                        <v-col cols="6" class="text-left">
                          <div
                            class="h6 font-weight-bold"
                            @click="(isPhone = true), (classType = 'Phone')"
                            :style="isPhone ? 'color:#2564cb' : 'color:#808080'"
                            style="cursor: pointer"
                          >
                            전화로 할래요
                          </div>
                          <div
                            class="subheading"
                            @click="(isPhone = true), (classType = 'Phone')"
                            style="cursor: pointer"
                            :style="isPhone ? 'color:#2564cb' : 'color:#808080'"
                          >
                            <v-icon
                              :style="
                                isPhone ? 'color:#2564cb' : 'color:#808080'
                              "
                              class="mr-2"
                              style="font-size: 20px"
                              >fas fa-phone-square-alt</v-icon
                            >전화 서비스 제공
                          </div>
                        </v-col>
                        <v-col cols="6" class="text-left">
                          <div
                            class="h6 font-weight-bold"
                            @click="(isPhone = false), (classType = 'Video')"
                            :style="
                              !isPhone ? 'color:#2564cb' : 'color:#808080'
                            "
                            style="cursor: pointer"
                          >
                            화상으로 할래요.
                          </div>
                          <div
                            class="subheading"
                            @click="(isPhone = false), (classType = 'Video')"
                            style="cursor: pointer"
                            :style="
                              !isPhone ? 'color:#2564cb' : 'color:#808080'
                            "
                          >
                            <v-icon
                              :style="
                                !isPhone ? 'color:#2564c;' : 'color:#808080'
                              "
                              class="mr-2"
                              style="font-size: 19px"
                              >fas fa-video</v-icon
                            >Skype 서비스 제공
                          </div>
                        </v-col>
                      </v-row>
                    </v-container>
                    <v-divider class="mr-10"></v-divider>
                    <div
                      class="h6 font-weight-black text-left mt-10 mb-10"
                      v-if="!isMobile"
                    >
                      수업 선택
                    </div>
                    <v-tabs
                      v-model="tab"
                      :vertical="!isMobile"
                      :grow="isMobile"
                      background-color="#fafafa"
                      hide-slider
                    >
                      <v-tab
                        active-class="active white--text"
                        v-for="(duration, i) in durations"
                        :key="i"
                        :style="[
                          hiddenDurations.includes(duration)
                            ? {
                                display: 'none'
                              }
                            : '',
                          !isMobile
                            ? {
                                'border-radius': '30px 0 0 30px'
                              }
                            : ''
                        ]"
                        @click="minuteSelected = duration"
                        >{{ duration }}</v-tab
                      >
                      <v-tab-item v-for="(index, i) in 4" :key="i">
                        <v-card flat color="#f5f4f6">
                          <v-container class="pa-5 pa-sm-10">
                            <!-- frequency row-->
                            <div class="h6 font-weight-black text-left">
                              수업 횟수
                            </div>
                            <v-row
                              no-gutters
                              justify="center"
                              class="mt-3 mb-5"
                            >
                              <v-col
                                cols="4"
                                v-for="(frequency, i) in frequncies"
                                :key="i"
                                class="px-2 mb-2 mb-md-0"
                                active-class="font-weight-bold"
                              >
                                <v-btn
                                  class="rounded-lg font-weight-bold"
                                  block
                                  outlined
                                  :style="
                                    frequencySelected == frequency
                                      ? 'border: 2px solid;background:white'
                                      : ''
                                  "
                                  x-large
                                  @click="
                                    (frequencySelected = frequency),
                                      (frequencySummary = frequency)
                                  "
                                  :color="
                                    frequencySelected == frequency
                                      ? 'primary'
                                      : 'grey'
                                  "
                                  :elevation="
                                    frequencySelected == frequency ? 3 : 0
                                  "
                                  >{{ frequency }}</v-btn
                                >
                              </v-col>
                            </v-row>
                            <!-- period row-->
                            <div class="h6 font-weight-black text-left">
                              수강 기간
                            </div>
                            <v-row
                              no-gutters
                              justify="center"
                              class="mb-5 mt-3"
                            >
                              <v-col
                                cols="6"
                                sm="3"
                                v-for="(period, i) in periods"
                                :key="i"
                                class="px-2 mb-2 mb-md-0"
                              >
                                <v-btn
                                  class="rounded-lg font-weight-bold"
                                  :style="
                                    durationSelected == period
                                      ? 'border: 2px solid;background:white'
                                      : ''
                                  "
                                  block
                                  x-large
                                  @click="
                                    (durationSelected = period),
                                      (periodSummary = period)
                                  "
                                  :color="
                                    durationSelected == period
                                      ? 'primary'
                                      : 'grey'
                                  "
                                  outlined
                                  :elevation="
                                    durationSelected == period ? 3 : 0
                                  "
                                  >{{ period }}</v-btn
                                >
                              </v-col>
                            </v-row>

                            <div class="h6 font-weight-black text-left">
                              수업 유형
                            </div>
                            <v-row justify="start" class="mb-3 mt-3">
                              <v-col
                                cols="6"
                                sm="4"
                                v-for="(material, i) in materials"
                                :key="i"
                                class="px-2 mb-2 mb-md-0"
                              >
                                <v-btn
                                  width="100%"
                                  height="50"
                                  class="rounded-lg font-weight-bold"
                                  :style="
                                    materialSelected == i
                                      ? 'border: 2px solid; background:white'
                                      : ''
                                  "
                                  block
                                  @click="
                                    (materialSelected = i),
                                      (materialSummary = material.course)
                                  "
                                  :color="
                                    materialSelected == i ? 'primary' : 'grey'
                                  "
                                  outlined
                                  :elevation="materialSelected == i ? 3 : 0"
                                  >{{ material.course }}</v-btn
                                >
                              </v-col>
                            </v-row>
                            <v-container style="background-color: #ececec">
                              <v-row justify="start" class="mb-3 mt-5">
                                <v-col
                                  cols="6"
                                  sm="6"
                                  v-for="(item, i) in materials[
                                    materialSelected
                                  ].series"
                                  :key="i"
                                  class="px-2 mb-2 mb-md-0"
                                >
                                  <v-btn
                                    width="100%"
                                    height="50"
                                    class="rounded-lg font-weight-bold"
                                    block
                                    @click="
                                      (seriesSelected = item),
                                        (seriesSummary = item.text)
                                    "
                                    :color="
                                      seriesSelected === item
                                        ? 'primary'
                                        : 'grey'
                                    "
                                    outlined
                                    :elevation="seriesSelected === item ? 3 : 0"
                                    style="
                                      display: unset;
                                      white-space: unset;
                                      line-break: strict;
                                      word-break: keep-all;
                                    "
                                    :style="
                                      seriesSelected === item
                                        ? 'border: 2px solid; background:white'
                                        : ''
                                    "
                                    >{{ item.text }}</v-btn
                                  >
                                </v-col>
                              </v-row>
                            </v-container>

                            <!-- days row-->
                            <div class="h6 font-weight-black text-left mt-10">
                              수업 날짜
                            </div>
                            <v-row
                              no-gutters
                              justify="center"
                              class="mt-3"
                              v-show="seeDays"
                            >
                              <v-col
                                cols="6"
                                sm="4"
                                v-for="(day, i) in days"
                                :key="i"
                                class="px-2 mb-3"
                              >
                                <v-btn
                                  class="rounded-lg font-weight-bold"
                                  block
                                  x-large
                                  :style="[
                                    !allowedDays.includes(i)
                                      ? {
                                          pointerEvents: 'none',
                                          textDecoration: 'line-through'
                                        }
                                      : '',
                                    daySelected == day
                                      ? {
                                          border: '2px solid',
                                          background: 'white'
                                        }
                                      : ''
                                  ]"
                                  @click="
                                    (daySelected = day), (daySummary = day)
                                  "
                                  :color="
                                    daySelected == day ? 'primary' : 'grey'
                                  "
                                  outlined
                                  :elevation="daySelected == day ? 3 : 0"
                                  >{{ day }}</v-btn
                                >
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>
                    <template v-if="seeSchedules === true">
                      <div class="h6 font-weight-black text-left mt-10">
                        수업 시간
                      </div>
                      <v-container class="pb-1" id="timeTable">
                        <v-row no-gutters>
                          <v-col class="text-center" style="cursor: pointer">
                            <span
                              style="cursor: pointer; color: #2564cb"
                              @click="(currentZone = 0), setTime(6)"
                              :class="
                                currentZone == 0 ? 'font-weight-bold' : ''
                              "
                              >프라임</span
                            >
                            <br />
                            <span
                              class="caption"
                              @click="(currentZone = 0), setTime(6)"
                              >6:00 - 9:50</span
                            >
                          </v-col>
                          <v-col class="text-center" style="cursor: pointer">
                            <span
                              style="cursor: pointer; color: #2564cb"
                              @click="(currentZone = 1), setTime(10)"
                              :class="
                                currentZone == 1 ? 'font-weight-bold' : ''
                              "
                              >이코노미</span
                            >
                            <br />
                            <span
                              class="caption"
                              @click="(currentZone = 1), setTime(10)"
                              >10:00 - 16:50</span
                            >
                          </v-col>
                          <v-col class="text-center" style="cursor: pointer">
                            <span
                              style="cursor: pointer; color: #2564cb"
                              @click="(currentZone = 2), setTime(17)"
                              :class="
                                currentZone == 2 ? 'font-weight-bold' : ''
                              "
                              >프라임</span
                            >
                            <br />
                            <span
                              class="caption"
                              @click="(currentZone = 2), setTime(17)"
                              >17:00 - 23:50</span
                            >
                          </v-col>
                        </v-row>
                      </v-container>
                      <v-divider
                        class="mt-0"
                        style="background-color: #2564cb"
                      ></v-divider>
                      <!-- <v-card flat color="#f5f4f6" class="mb-5 pa-5">
                        <v-tabs
                          grow
                          v-if="seeMore && currentZone == 0"
                          show-arrows
                          slider-color="#5a55a1"
                          v-model="selected_schedule_hour"
                          class="mb-5"
                        >
                          <v-tab
                            v-for="n in 4"
                            :key="n"
                            @click="setTime(n + 5), getHour(5, n)"
                            >{{ n + 5 }}</v-tab
                          >
                        </v-tabs>
                        <v-tabs
                          grow
                          v-if="seeMore && currentZone == 1"
                          show-arrows
                          slider-color="#5a55a1"
                          v-model="selected_schedule_hour"
                          class="mb-5"
                        >
                          <v-tab
                            v-for="n in 7"
                            :key="n"
                            @click="setTime(n + 9), getHour(9, n)"
                            >{{ n + 9 }}</v-tab
                          >
                        </v-tabs>
                        <v-tabs
                          grow
                          v-if="seeMore && currentZone == 2"
                          show-arrows
                          slider-color="#5a55a1"
                          v-model="selected_schedule_hour"
                          class="mb-5"
                        >
                          <v-tab
                            v-for="n in 7"
                            :key="n"
                            @click="setTime(n + 16), getHour(16, n)"
                            >{{ n + 16 }}</v-tab
                          >
                        </v-tabs> -->
                      <!-- <template v-if="onRequest">
                          <v-row no-gutters>
                            <v-col
                              cols="4"
                              sm="2"
                              class="mb-2 mb-md-0"
                              v-for="(time, i) in timeList"
                              :key="i"
                            >
                              <v-btn
                                depressed
                                :color="
                                  timeSelected == i ? 'primary' : '#FFFFFF'
                                "
                                :outlined="timeSelected == i ? true : false"
                                class="rounded-lg"
                                :loading="onRequest"
                                >{{ time }}</v-btn
                              >
                            </v-col>
                          </v-row>
                        </template> -->
                      <!-- this is temporary -->
                      <v-card flat color="#f5f4f6" class="mb-5 pa-5">
                        <v-tabs
                          grow
                          v-if="seeMore && currentZone == 0"
                          show-arrows
                          slider-color="#5a55a1"
                          v-model="selected_hour"
                          class="mb-5"
                        >
                          <v-tab
                            v-for="n in 4"
                            :key="n"
                            @click="setTime(n + 5)"
                            >{{ n + 5 }}</v-tab
                          >
                        </v-tabs>
                        <v-tabs
                          grow
                          v-if="seeMore && currentZone == 1"
                          show-arrows
                          slider-color="#5a55a1"
                          v-model="selected_hour"
                          class="mb-5"
                        >
                          <v-tab
                            v-for="n in 7"
                            :key="n"
                            @click="setTime(n + 9)"
                            >{{ n + 9 }}</v-tab
                          >
                        </v-tabs>
                        <v-tabs
                          grow
                          v-if="seeMore && currentZone == 2"
                          show-arrows
                          slider-color="#5a55a1"
                          v-model="selected_hour"
                          class="mb-5"
                        >
                          <v-tab
                            v-for="n in 7"
                            :key="n"
                            @click="setTime(n + 16)"
                            >{{ n + 16 }}</v-tab
                          >
                        </v-tabs>
                        <template>
                          <v-row no-gutters>
                            <v-col
                              cols="4"
                              sm="2"
                              class="mb-2 mb-md-0"
                              v-for="(time, i) in 6"
                              :key="i"
                            >
                              <v-btn
                                v-show="time === undefined"
                                depressed
                                style="pointer-events: none"
                                @click="timeSelected = time"
                                :color="
                                  timeSelected == time ? 'primary' : 'grey'
                                "
                                outlined
                                class="rounded-lg"
                                >...</v-btn
                              >
                              <v-btn
                                depressed
                                @click="timeSelected = time"
                                :color="
                                  timeSelected == time ? 'primary' : 'grey'
                                "
                                :style="
                                  timeSelected == time
                                    ? 'border: 2px solid;background:white'
                                    : ''
                                "
                                outlined
                                class="rounded-lg font-weight-bold"
                                v-show="time !== undefined"
                                :elevation="timeSelected == time ? 3 : 0"
                                >{{ time_hour }}:{{ time - 1 }}0</v-btn
                              >
                            </v-col>
                          </v-row>
                        </template>
                        <template v-if="selected_hour_available_times">
                          <v-row no-gutters>
                            <v-col
                              cols="4"
                              sm="2"
                              class="mb-2 mb-md-0"
                              v-for="(time, i) in selected_hour_available_times"
                              :key="i"
                            >
                              <v-btn
                                v-show="time === undefined"
                                depressed
                                style="pointer-events: none"
                                @click="timeSelected = time"
                                :color="
                                  timeSelected == time ? 'primary' : 'grey'
                                "
                                outlined
                                class="rounded-lg"
                                >...</v-btn
                              >
                              <v-btn
                                depressed
                                @click="timeSelected = time"
                                :color="
                                  timeSelected == time ? 'primary' : 'grey'
                                "
                                :style="
                                  timeSelected == time
                                    ? 'border: 2px solid;background:white'
                                    : ''
                                "
                                outlined
                                class="rounded-lg font-weight-bold"
                                v-show="time !== undefined"
                                :elevation="timeSelected == time ? 3 : 0"
                                >{{ time }}</v-btn
                              >
                            </v-col>
                          </v-row>
                        </template>
                      </v-card>
                      <!-- this is temporary -->
                      <div
                        v-if="!seeMore"
                        @click="seeMore = true"
                        class="caption mb-5"
                        style="color: #bdbdbd"
                      >
                        시간표 전체보기 >
                      </div>
                    </template>
                    <div
                      class="h6 font-weight-black text-left mt-10"
                      id="payTable"
                    >
                      결제 방식
                    </div>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="4"
                        v-for="(method, i) in paymentMethods"
                        :key="i"
                      >
                        <v-btn
                          :color="
                            methodSelected == method.text ? 'primary' : 'grey'
                          "
                          block
                          outlined
                          x-large
                          class="rounded-lg font-weight-bold"
                          :style="
                            methodSelected == method.text
                              ? 'border: 2px solid;background:white'
                              : ''
                          "
                          @click="methodSelected = method.text"
                          :elevation="methodSelected == method.text ? 3 : 0"
                          :disabled="method.text === '정기 결제'"
                        >
                          <v-icon left>
                            {{ method.icon }}
                          </v-icon>
                          {{ method.text }}
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4" ref="summaryCardArea">
                  <v-card
                    flat
                    class="pt-10 rounded-xl"
                    ref="summaryCard"
                    :style="{ top: stickySummeryTop + 'px' }"
                    :class="{ stickySummery: !isMobile }"
                  >
                    <div class="h6 font-weight-black">수강선택 요약</div>
                    <v-container
                      class="mt-3 px-7 text-left"
                      style="color:#696d73"
                    >
                      <v-row no-gutters class="px-2">
                        <v-col
                          ><span class="subtitle-2 font-weight-bold"
                            >수강유형:</span
                          >
                          <span class="subtitle-2 float-right">{{
                            materials[materialSelected]["course"]
                          }}</span>
                        </v-col>
                      </v-row>
                      <v-divider class="mx-3 mb-4"></v-divider>
                      <v-row no-gutters class="px-2">
                        <v-col
                          ><span class="subtitle-2 font-weight-bold"
                            >수강코스:</span
                          >
                          <span class="subtitle-2 float-right">{{
                            getCourse
                          }}</span>
                        </v-col>
                      </v-row>
                      <v-divider class="mx-3 mb-4"></v-divider>
                      <v-row no-gutters class="px-2">
                        <v-col
                          ><span class="subtitle-2 font-weight-bold"
                            >수강종류:</span
                          >
                          <span class="subtitle-2 float-right">{{
                            getType
                          }}</span></v-col
                        >
                      </v-row>
                      <v-divider class="mx-3 mb-4"></v-divider>
                      <v-row no-gutters class="px-2">
                        <v-col
                          ><span class="subtitle-2 font-weight-bold"
                            >수강기간:</span
                          >
                          <span class="subtitle-2 float-right"
                            >{{ getPeriod }} / {{ getFrequency }}</span
                          ></v-col
                        >
                      </v-row>
                      <v-divider class="mx-3 mb-4"></v-divider>
                      <v-row no-gutters class="px-2">
                        <v-col
                          ><span class="subtitle-2 font-weight-bold"
                            >시작일:</span
                          >
                          <span class="float-right">
                            <span class="subtitle-2">{{
                              daySelected !== -1 ? daySelected : ""
                            }}</span>
                            &nbsp; / &nbsp;
                            <span
                              class="subtitle-2"
                              v-html="getStartTime"
                            ></span>
                          </span>
                        </v-col>
                      </v-row>
                      <v-divider class="mx-3"></v-divider>
                    </v-container>
                    <div class="h6 font-weight-black mb-5 mt-5">
                      결제 예정금액
                    </div>
                    <v-container
                      class="mt-3 px-7 text-left"
                      style="color:#696d73"
                    >
                      <v-row no-gutters class="px-2">
                        <v-col
                          ><span class="subtitle-2 font-weight-bold"
                            >결제방법:</span
                          >
                          <span
                            class="subtitle-2 float-right"
                            v-html="getPayType"
                          ></span
                        ></v-col>
                      </v-row>
                      <v-divider class="mx-3 mb-4"></v-divider>
                      <v-row no-gutters class="px-2">
                        <v-col
                          ><span class="subtitle-2 font-weight-bold"
                            >수강금액:</span
                          >
                          <span class="subtitle-2 float-right"
                            >{{
                              (
                                getAmount.value + getAmount.dcn
                              ).toLocaleString()
                            }}원</span
                          ></v-col
                        >
                      </v-row>
                      <v-divider class="mx-3 mb-4"></v-divider>
                      <v-row no-gutters class="px-2">
                        <v-col
                          ><span class="subtitle-2 font-weight-bold"
                            >할인금액:</span
                          >
                          <span class="subtitle-2 red--text float-right"
                            >{{
                              getAmount.dcn
                                ? "-" + getAmount.dcn.toLocaleString()
                                : getAmount.dcn
                            }}원</span
                          ></v-col
                        >
                      </v-row>
                      <v-divider class="mx-3 mb-4"></v-divider>
                      <v-row no-gutters class="px-2">
                        <v-col
                          ><span class="subtitle-2 font-weight-bold"
                            >결제금액:</span
                          >
                          <span class="subtitle-2 float-right"
                            >{{ getAmount.value.toLocaleString() }}원
                            {{
                              getAmount.dcp ? `(${getAmount.dcp}% 할인)` : ""
                            }}</span
                          ></v-col
                        >
                      </v-row>
                      <v-row no-gutters class="px-2">
                        <v-col
                          ><span class="h6 float-right font-weight-bold"
                            >월 {{ getAmount4Month.toLocaleString() }}원</span
                          ></v-col
                        >
                      </v-row>
                    </v-container>
                    <v-btn
                      color="#2564cb"
                      class="rounded-lg white--text font-weight-bold mb-15"
                      style="margin-top: 50px"
                      large
                      @click="enroll_check_data()"
                      >수업 신청하기</v-btn
                    >
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-container>
      </v-card>
    </v-container>
    <v-dialog v-model="requiredField" width="320" height="">
      <v-card>
        <v-container>
          <v-row class="text-center justify-center">
            <v-col cols="12" class="pb-0 mb-0">
              <p style="">수업설정에 필요한 필수값을 입력해주세요.</p>
              <p>(필수입력 정보: 수업시간, 결제방법)</p>
            </v-col>
            <v-btn @click="requiredField = false">닫기</v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog v-model="confirmDialog" max-width="500">
      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
      <v-card max-width="500" class="pb-5 rounded-xl">
        <div
          class="h5 text-center pa-3 mb-5 white--text"
          style="background-color: #2564cb"
        >
          요약
        </div>
        <div class="px-5 mx-md-8">
          <div class="h5 gmarket" style="color: #2564cb">수강선택</div>
          <div>
            <v-container>
              <v-row no-gutters>
                <v-col class="font-weight-bold" cols="3">수강종류</v-col>
                <v-col class="text-right subtitle-2"
                  >{{
                    enrollmentData.type == "phone" ? "전화영어" : "화상영어"
                  }}
                  ({{ enrollmentData.duration }})</v-col
                >
              </v-row>
              <v-row no-gutters>
                <v-col class="font-weight-bold" cols="3">수강과정</v-col>
                <v-col class="text-right subtitle-2">{{
                  enrollmentData.course
                }}</v-col>
              </v-row>
              <v-row no-gutters>
                <v-col class="font-weight-bold" cols="3">수강기간</v-col>
                <v-col class="text-right subtitle-2"
                  >{{ enrollmentData.period }} / {{ getFrequency }}</v-col
                >
              </v-row>
              <v-row no-gutters>
                <v-col class="font-weight-bold" cols="3">시작일시</v-col>
                <v-col class="text-right subtitle-2"
                  >{{ enrollmentData.startDay }} /
                  <span v-html="getStartTime"></span
                ></v-col>
              </v-row>
            </v-container>
          </div>
          <v-divider></v-divider>
          <div class="h5 gmarket mt-5" style="color: #2564cb">
            결제 예정금액
          </div>
          <v-container>
            <v-row no-gutters>
              <v-col cols="3" class="font-weight-bold">결제방법</v-col>
              <v-col>
                <span class="subtitle-2 float-right" v-html="getPayType"></span
              ></v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="3" class="font-weight-bold">수강금액</v-col>
              <v-col>
                <span class="body-2 float-right"
                  >{{ (getAmount.value + getAmount.dcn).toLocaleString() }}원
                </span>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="3" class="font-weight-bold">할인금액</v-col>
              <v-col>
                <span class="subtitle-1 red--text float-right"
                  >{{
                    getAmount.dcn
                      ? "-" + getAmount.dcn.toLocaleString()
                      : getAmount.dcn
                  }}원</span
                >
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="3" class="font-weight-bold">결제금액</v-col>
              <v-col>
                <span class="subtitle-1 float-right font-weight-bold">
                  월 {{ getAmount4Month.toLocaleString() }}원
                  {{ getAmount.dcp ? `(${getAmount.dcp}% 할인)` : "" }}
                </span>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="3"></v-col>
              <v-col>
                <span class="body-2 float-right">
                  총 {{ getAmount.value.toLocaleString() }}원
                </span>
              </v-col>
            </v-row>
          </v-container>
          <div class="d-flex mt-5">
            <v-btn
              class="mx-auto rounded-xl font-weight-bold"
              depressed
              large
              @click="confirmDialog = false"
            >
              취소
            </v-btn>
            <v-btn
              color="#2564cb"
              class="mx-auto rounded-xl white--text font-weight-bold"
              depressed
              large
              @click="enroll()"
            >
              결제
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>
    <div class="stickyButton" v-show="isMobile" style="z-index: 20001">
      <!-- <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header expand-icon="mdi-menu-up">
            선택한 과정 정보
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card tile elevation="0">
              <v-list dense class="text-start">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title><span class="subtitle-2">수업 종류:</span>
                      {{ enrollmentData.type == phone ? '전화영어':'화상영어' }} ({{ enrollmentData.duration }})
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title><span class="subtitle-2">선택 과정:</span>
                      {{ enrollmentData.course }}
                      {{ enrollmentData.bookName }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title><span class="subtitle-2">수업 기간:</span> {{ getFrequency }} / {{ enrollmentData.period }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title><span class="subtitle-2">수업 일시:</span> {{ enrollmentData.startDay }} / <span v-html="getStartTime"></span> </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title><span class="subtitle-2">결제 방법:</span> <span class="" v-html="getPayType"></span></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title><span class="subtitle-2">결제 금액:</span>
                      <span class="subtitle-2"> 월 {{ getAmount4Month.toLocaleString() }}원 {{getAmount.dcp ? `(${getAmount.dcp}% 할인)` : "" }} </span> /
                      <span class="caption">총 {{ getAmount.value.toLocaleString() }}원</span>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels> -->
      <v-btn
        color="#2564cb"
        x-large
        class="white--text font-weight-bold py-8"
        block
        @click="enroll_check_data()"
        >수업 신청하기</v-btn
      >
    </div>
  </v-app>
</template>
<style scoped>
.active {
  background-color: #2564cb;
}
.stickyButton {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
}
.stickySummery {
  transition: all 1s ease 0s;
}
</style>
<script>
import moment from "moment";
import { bus } from "@/main";
import axios from "axios";
import price from "@/utils/price.js";
import { loadTossPayments } from "@tosspayments/sdk";

export default {
  data() {
    return {
      stickySummeryTop: 0,
      hiddenDurations: [],
      confirmDialog: false,
      requiredField: false,
      tab: 1,
      isPhone: true,
      classType: "Phone",
      overlay: false,
      durations: ["하루 10분", "하루 20분", "하루 30분", "하루 40분"],
      frequncies: ["주2회", "주3회", "주5회"],
      days: [],
      periods: ["1개월", "3개월", "6개월", "1년"],
      dateTime: new Date(),
      timeList: [],
      seeMore: false,
      currentZone: 0,
      selected_schedule_hour: "",
      //this is temporary
      time_hour: 6,
      //
      offerSummary: [],
      bookSummary: "",
      frequencySummary: "",
      periodSummary: "1년",
      daySummary: "",
      materialSummary: "",
      seriesSummary: "",
      seeSchedules: false,
      seeDays: false,
      allowedDays: [],
      paymentMethods: [
        {
          text: "무통장 입금",
          color: "",
          icon: "mdi-credit-card"
        },
        {
          text: "카드 결제",
          color: "",
          icon: "mdi-credit-card-check"
        },
        {
          text: "정기 결제",
          color: "",
          icon: "mdi-credit-card-clock"
        }
      ],
      selectedHour: 6,
      currentIndex: 0,
      schedule_available_hours: {},
      selected_hour_available_times: [],
      onRequest: false,
      frequencySelected: "주3회",
      minuteSelected: "하루 20분",
      daySelected: -1,
      durationSelected: "1년",
      bookSelected: -1,
      timeSelected: -1,
      methodSelected: -1,
      materialSelected: 2,
      seriesSelected: -1,
      materialIndex: 0,
      isMobile: false,
      isSticky: false,
      materials: [
        {
          course: "유튜브 회화과정",
          series: [
            {
              text: "셀럽 토크쇼",
              level: "",
              type: "video",
              link: ""
            },
            {
              text: "TED Ed",
              level: "",
              type: "video",
              link: ""
            },
            {
              text: "Movie",
              level: "",
              type: "video",
              link: ""
            },
            {
              text: "셀럽과의 대화",
              level: "",
              type: "video",
              link: ""
            },
            {
              text: "Pop Song",
              level: "",
              type: "video",
              link: ""
            }
          ]
        },
        {
          course: "정규 회화과정",
          series: [
            {
              text: "Interactive English Series",
              level: "",
              type: "",
              link: "http://onlinebookcenter.co.kr/files/a_1334592028414914.pdf"
            }
          ]
        },
        {
          course: "프리토킹 토론",
          series: [
            {
              text: "프리토킹(교재X)",
              level: "",
              type: "book",
              link:
                "http://178.128.213.14/book#/FreeTalking-QnA/FreeTalking-STEP1/chapter1"
            },
            {
              text: "묻고 답하기",
              level: "",
              type: "book",
              link:
                "http://178.128.213.14/book#/FreeTalking-QnA/FreeTalking-STEP1/chapter1"
            },
            {
              text: "의견말하기",
              level: "",
              type: "book",
              link:
                "http://178.128.213.14/book#/FreeTalkingOpinion/FreeTalkingOpinion1/chapter1"
            },
            {
              text: "사진묘사",
              level: "",
              type: "book",
              link:
                "http://178.128.213.14/book#/Freetalking-Description/Freetalking-Description-Level1/chapter1"
            },
            {
              text: "영자신문",
              level: "",
              type: "book",
              link: ""
            },
            {
              text: "Debate",
              level: "",

              type: "book",
              link: "http://onlinebookcenter.co.kr/files/a_1371462343559352.pdf"
            }
          ]
        },
        {
          course: "비즈니스 과정",
          series: [
            {
              text: "Business English",
              level: "",
              type: "pdf",
              link: "http://onlinebookcenter.co.kr/files/a_1371692800821642.pdf"
            },
            {
              text: "E-mail",
              level: "",
              type: "pdf",
              link: "http://onlinebookcenter.co.kr/files/a_1380088515234745.pdf"
            },
            {
              text: "Meeting",
              level: "",
              type: "pdf",
              link: "http://onlinebookcenter.co.kr/files/a_1380089522639995.pdf"
            },
            {
              text: "Negotiation",
              level: "",
              type: "pdf",
              link: "http://onlinebookcenter.co.kr/files/a_1380089818138373.pdf"
            },
            {
              text: "Presentation",
              level: "",
              type: "pdf",
              link: "http://onlinebookcenter.co.kr/files/a_1380090464254968.pdf"
            },
            {
              text: "비지니스 회화과정",
              level: "",
              type: "book",
              link: "http://onlinebookcenter.co.kr/files/a_13613380182233.pdf"
            }
          ]
        },
        {
          course: "문법/패턴",
          series: [
            {
              text: "스피킹 패턴과정",
              level: "",
              type: "book",
              link:
                "http://178.128.213.14/book#/pattern-course/grammar-in-pattern-basic/chapter1"
            },
            {
              text: "Grammar in Pattern 과정",
              level: "",
              type: "book",
              link:
                "http://178.128.213.14/book#/pattern-course/grammar-in-pattern-basic/chapter1"
            },
            {
              text: "일상 Dialogue 과정",
              level: "",
              type: "book",
              link: "http://178.128.213.14/book#/freetalking/beginner/chapter1"
            }
          ]
        },
        {
          course: "취업준비/특별 과정",
          series: [
            {
              text: "Interview (영어 면접)과정",
              level: "",
              type: "book",
              link:
                "http://178.128.213.14/book#/Interview-English/Interview-EnglishStep1/chapter1"
            },
            {
              text: "Hotel Dialogues",
              level: "",
              type: "",
              link: "http://ols.jkn.co.kr/html/books.php?code=55"
            },
            {
              text: "Cabin Crew",
              level: "",
              type: "pdf",
              link: "http://onlinebookcenter.co.kr/files/a_1364950846617721.pdf"
            },
            {
              text: "IELTS",
              level: "",
              type: "",
              link: "http://ols.jkn.co.kr/html/books.php?code=40"
            },
            {
              text: "Medical English",
              level: "",
              type: "pdf",
              link: "http://onlinebookcenter.co.kr/files/a_1369806108750352.pdf"
            }
          ]
        },
        {
          course: "초/중급 회화과정",
          series: [
            {
              text: "Milestones",
              level: "",
              type: "pdf",

              link: "http://onlinebookcenter.co.kr/files/MILESTONE1.pdf"
            },
            {
              text: "First Step In Conversation",
              level: "",
              type: "pdf",
              link:
                "http://onlinebookcenter.co.kr/files/First_Step_in_Conversation1_step1.pdf"
            }
          ]
        },
        {
          course: "입문과정",
          series: [
            {
              text: "Phonics ",
              level: "",
              type: "pdf",
              link: "http://onlinebookcenter.co.kr/files/a_1394519176740293.pdf"
            },
            // {
            //   text: "Advanced Phonics ",
            //   level: "",
            //   type: "pdf",
            //   link:
            //     "https://drive.google.com/file/d/1wHyXFBntIGgETbo42818tfIbytqLIsSE/view?usp=sharing",
            // },
            {
              text: "P-course Junior",
              level: "",
              type: "pdf",
              link: "http://onlinebookcenter.co.kr/files/a_1324796317325065.pdf"
            },
            {
              text: "C-course Junior",
              level: "",
              type: "pdf",
              link: "http://onlinebookcenter.co.kr/files/a_1329292220709465.pdf"
            }
          ]
        }
      ],
      bookList10: [
        {
          status: "enabled",
          text: "프리토킹 묻고 답하기",
          curriculum: "프리토킹",
          material: "묻고 답하기"
        },
        {
          status: "enabled",
          text: "프리토킹 \n 의견말하기",
          curriculum: "프리토킹",
          material: "의견말하기"
        },
        {
          status: "enabled",
          text: "프리토킹\n 사진묘사",
          curriculum: "프리토킹",
          material: "사진묘사"
        },
        {
          status: "enabled",
          text: "프리토킹\n 영자신문 (준비중)",
          curriculum: "프리토킹",
          material: "영자신문"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 스피킹패턴",
          curriculum: "일상&패턴",
          material: "스피킹패턴"
        },
        {
          status: "disabled",
          text: "일상&패턴\n 문법패턴",
          curriculum: "일상&패턴",
          material: "문법패턴"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 일상대화",
          curriculum: "일상&패턴",
          material: "일상대화"
        },
        {
          status: "disabled",
          text: "리딩&스피킹\n 퍼펙트리딩",
          curriculum: "리딩&스피킹",
          material: "퍼펙트리딩"
        },
        {
          status: "disabled",
          text: "리딩&스피킹\n 영자신문 (준비중)",
          curriculum: "리딩&스피킹",
          material: "영자신문"
        },
        {
          status: "disabled",
          text: "비지니스\n 인터뷰과정",
          curriculum: "비지니스",
          material: "인터뷰과정"
        },
        {
          status: "enabled",
          text: "비지니스\n 비지니스회화",
          curriculum: "비지니스",
          material: "비지니스회화"
        },
        {
          status: "enabled",
          text: "여행영어",
          curriculum: "여행영어",
          material: "여행영어"
        }
      ],
      bookList20: [
        {
          status: "enabled",
          text: "프리토킹 묻고 답하기",
          curriculum: "프리토킹",
          material: "묻고 답하기"
        },
        {
          status: "enabled",
          text: "프리토킹 \n 의견말하기",
          curriculum: "프리토킹",
          material: "의견말하기"
        },
        {
          status: "enabled",
          text: "프리토킹\n 사진묘사",
          curriculum: "프리토킹",
          material: "사진묘사"
        },
        {
          status: "enabled",
          text: "프리토킹\n 영자신문 (준비중)",
          curriculum: "프리토킹",
          material: "영자신문"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 스피킹패턴",
          curriculum: "일상&패턴",
          material: "스피킹패턴"
        },
        {
          status: "disabled",
          text: "일상&패턴\n 문법패턴",
          curriculum: "일상&패턴",
          material: "문법패턴"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 일상대화",
          curriculum: "일상&패턴",
          material: "일상대화"
        },
        {
          status: "enabled",
          text: "리딩&스피킹\n 퍼펙트리딩",
          curriculum: "리딩&스피킹",
          material: "퍼펙트리딩"
        },
        {
          status: "enabled",
          text: "리딩&스피킹\n 영자신문 (준비중)",
          curriculum: "리딩&스피킹",
          material: "영자신문"
        },
        {
          status: "enabled",
          text: "비지니스\n 인터뷰과정",
          curriculum: "비지니스",
          material: "인터뷰과정"
        },
        {
          status: "enabled",
          text: "비지니스\n 비지니스회화",
          curriculum: "비지니스",
          material: "비지니스회화"
        },
        {
          status: "enabled",
          text: "여행영어",
          curriculum: "여행영어",
          material: "여행영어"
        }
      ],
      bookList30: [
        {
          status: "enabled",
          text: "프리토킹 묻고 답하기",
          curriculum: "프리토킹",
          material: "묻고 답하기"
        },
        {
          status: "enabled",
          text: "프리토킹 \n 의견말하기",
          curriculum: "프리토킹",
          material: "의견말하기"
        },
        {
          status: "enabled",
          text: "프리토킹\n 사진묘사",
          curriculum: "프리토킹",
          material: "사진묘사"
        },
        {
          status: "enabled",
          text: "프리토킹\n 영자신문 (준비중)",
          curriculum: "프리토킹",
          material: "영자신문"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 스피킹패턴",
          curriculum: "일상&패턴",
          material: "스피킹패턴"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 문법패턴",
          curriculum: "일상&패턴",
          material: "문법패턴"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 일상대화",
          curriculum: "일상&패턴",
          material: "일상대화"
        },
        {
          status: "enabled",
          text: "리딩&스피킹\n 퍼펙트리딩",
          curriculum: "리딩&스피킹",
          material: "퍼펙트리딩"
        },
        {
          status: "enabled",
          text: "리딩&스피킹\n 영자신문 (준비중)",
          curriculum: "리딩&스피킹",
          material: "영자신문"
        },
        {
          status: "enabled",
          text: "비지니스\n 인터뷰과정",
          curriculum: "비지니스",
          material: "인터뷰과정"
        },
        {
          status: "enabled",
          text: "비지니스\n 비지니스회화",
          curriculum: "비지니스",
          material: "비지니스회화"
        },
        {
          status: "enabled",
          text: "여행영어",
          curriculum: "여행영어",
          material: "여행영어"
        }
      ],
      Offers: [],
      tossPayments: null
    };
  },
  created() {
    window.addEventListener("resize", this.onWindowResize);
    this.setOffer();
  },
  beforeMount() {
    window.addEventListener("scroll", this.move);
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
    window.removeEventListener("scroll", this.move);
  },
  watch: {
    materialSelected() {
      // this.seriesSelected = -1;
      this.seriesSelected = this.materials[this.materialSelected].series[0];
    },
    tab: function() {
      this.hiddenDurations = [];
      // this.frequencySelected = -1;
      // this.daySelected = -1;
      // this.durationSelected = -1;
      this.bookSelected = -1;
      if (this.minuteSelected && this.classType === "Phone") {
        this.hiddenDurations.push(this.durations[3]);
        let minuteSelected = parseInt(this.minuteSelected.replace(/\D/g, ""));
        if (minuteSelected >= 40) {
          this.minuteSelected = this.minuteSelected.replace("40", "30");
          setTimeout(() => {
            this.tab = 2;
          }, 1);
        }
      }
      if (this.minuteSelected && this.classType === "Video") {
        this.hiddenDurations.push(this.durations[0]);
        this.hiddenDurations.push(this.durations[2]);
        let minuteSelected = parseInt(this.minuteSelected.replace(/\D/g, ""));
        if (minuteSelected <= 10) {
          this.minuteSelected = this.minuteSelected.replace("10", "20");
          setTimeout(() => {
            this.tab = 1;
          }, 1);
        }
        if (minuteSelected === 30) {
          this.minuteSelected = this.minuteSelected.replace("30", "40");
          setTimeout(() => {
            this.tab = 3;
          }, 1);
        }
      }
    },
    timeSelected() {
      this.setOffer();
    },
    classType() {
      this.hiddenDurations = [];
      if (this.minuteSelected && this.classType === "Phone") {
        this.hiddenDurations.push(this.durations[3]);
        console.log(this.hiddenDurations, "dur");
        let minuteSelected = parseInt(this.minuteSelected.replace(/\D/g, ""));
        if (minuteSelected >= 40) {
          this.minuteSelected = this.minuteSelected.replace("40", "30");
          setTimeout(() => {
            this.tab = 2;
          }, 1);
        }
      }
      if (this.minuteSelected && this.classType === "Video") {
        this.hiddenDurations.push(this.durations[0]);
        this.hiddenDurations.push(this.durations[2]);
        let minuteSelected = parseInt(this.minuteSelected.replace(/\D/g, ""));
        if (minuteSelected <= 10) {
          this.minuteSelected = this.minuteSelected.replace("10", "20");
          setTimeout(() => {
            this.tab = 1;
          }, 1);
        }
        if (minuteSelected === 30) {
          this.minuteSelected = this.minuteSelected.replace("30", "40");
          setTimeout(() => {
            this.tab = 3;
          }, 1);
        }
      }
      this.setOffer();
    },
    minuteSelected() {
      let minuteSelected, frequencySelected, durationSelected;
      if (this.minuteSelected != -1) {
        minuteSelected = parseInt(this.minuteSelected.replace(/\D/g, ""));
      }
      if (this.frequencySelected != -1) {
        frequencySelected = parseInt(this.frequencySelected.replace(/\D/g, ""));
      }
      if (this.durationSelected != -1) {
        durationSelected = parseInt(this.durationSelected.replace(/\D/g, ""));
      }
      if (minuteSelected && frequencySelected && durationSelected) {
        this.seeDays = true;
      }
      if (this.seeSchedules) {
        if (this.currentIndex > 0) {
          this.selectedHour = this.selectedHour - this.currentIndex;
        }
        this.getHour(this.selectedHour, this.currentIndex);
      }
      this.setOffer();
    },
    frequencySelected() {
      this.setAllowedDays();
    },
    durationSelected() {
      const twice = [2, 4];
      const thrice = [1, 3, 5];
      const five = [1, 2, 3, 4, 5];
      let minuteSelected = parseInt(this.minuteSelected.replace(/\D/g, ""));
      let frequencySelected = parseInt(
        this.frequencySelected.replace(/\D/g, "")
      );
      let durationSelected = parseInt(this.durationSelected.replace(/\D/g, ""));
      let weekdays =
        frequencySelected === 2
          ? twice
          : frequencySelected === 3
          ? thrice
          : frequencySelected === 5
          ? five
          : "";
      let allowedDays = [];
      this.days.forEach((item, i) => {
        let split = item.split("/");
        let month = split[0] - 1;
        let day = split[1];
        let date_format = moment({
          month: month,
          day: day
        }).weekday();
        if (weekdays.includes(date_format)) {
          allowedDays.push(i);
        }
      });
      this.allowedDays = allowedDays;
      this.daySelected = this.days[this.allowedDays[0]];
      if (minuteSelected && frequencySelected && durationSelected) {
        this.seeDays = true;
      }
      this.setOffer();
    },
    daySelected() {
      this.seeSchedules = true;
      if (this.currentIndex > 0) {
        this.selectedHour = this.selectedHour - this.currentIndex;
      }
      this.getHour(this.selectedHour, this.currentIndex);
      this.initializeSchedule = true;
      this.setOffer();
    },
    currentZone(newval) {
      if (newval === 0) {
        this.selected_schedule_hour = 6;
        //  this.getHour(6, 0);
      }
      if (newval === 1) {
        this.selected_schedule_hour = 10;
        //  this.getHour(10, 0);
      }
      if (newval === 2) {
        this.selected_schedule_hour = 17;
        //   this.getHour(17, 0);
      }
    }
  },
  mounted() {
    localStorage.removeItem("enrollment_payload");
    this.screenWidth = screen.width;
    this.isMobile = this.screenWidth <= 960 ? true : false;
    for (var i = 0; i < 12; i++) {
      var today = new Date();
      var nextDates = new Date(today);
      nextDates.setDate(nextDates.getDate() + i);
      if (
        nextDates.getDay() != 6 &&
        nextDates.getDay() != 0 &&
        this.days.length < 6
      ) {
        this.days.push(this.formatDate(nextDates));
      }
    }
    this.timeList = [];
    this.setTime(6);
    this.minuteSelected = this.durations[1];
    this.seriesSelected = this.materials[this.materialSelected].series[0];
    if (this.classType === "Video") {
      this.hiddenDurations.push(this.durations[0]);
      this.hiddenDurations.push(this.durations[2]);
    } else {
      this.hiddenDurations.push(this.durations[3]);
    }
    this.setAllowedDays();
  },
  computed: {
    target() {
      //const value = this[this.type]
      // const value = "#timeTable";
      const value = "#payTable";
      if (!isNaN(value)) return Number(value);
      else return value;
    },
    options() {
      return {
        duration: 1000,
        offset: 500,
        easing: "easeInOutCubic"
      };
    },
    enrollmentData() {
      return {
        type: this.isPhone ? "phone" : "video",
        duration: this.minuteSelected,
        daysOfWeek: this.frequencySelected,
        period: this.durationSelected,
        course: this.materials[this.materialSelected]["course"],
        bookName: this.seriesSelected.text,
        startDay: this.daySelected,
        startTime: this.time_hour + ":" + (this.timeSelected - 1) + "0",
        payMethod: this.methodSelected,
        timeZone: this.currentZone
      };
    },
    getPayType() {
      let type = "";
      //console.log(this.methodSelected);
      switch (this.methodSelected) {
        case "무통장 입금":
          type = this.methodSelected;
          break;
        case "카드 결제":
          type = this.methodSelected;
          break;
        case "정기 결제":
          type = this.methodSelected;
          break;
        default:
          type = "<span class='red--text'>선택해주세요</span>";
      }
      return type;
    },
    getAmount4Month() {
      let monthAmount, period;
      monthAmount = 0;

      switch (this.durationSelected) {
        case "1개월":
          period = 1;
          break;
        case "3개월":
          period = 3;
          break;
        case "6개월":
          period = 6;
          break;
        case "1년":
          period = 12;
          break;
        default:
          period = 0;
      }

      if (this.getAmount.value != 0) {
        monthAmount = Math.round(this.getAmount.value / period);
      }
      return monthAmount;
    },
    getAmount() {
      let type, level, time, days, period, ts;
      type = this.isPhone === true ? "phone" : "video";

      switch (this.currentZone) {
        case 0:
          level = "prime";
          break;
        case 1:
          level = "economy";
          break;
        case 2:
          level = "prime";
          break;
        default:
          level = "";
      }

      switch (this.minuteSelected) {
        case "하루 10분":
          time = 10;
          break;
        case "하루 20분":
          time = 20;
          break;
        case "하루 30분":
          time = 30;
          break;
        case "하루 40분":
          time = 40;
          break;
        default:
          time = "";
      }

      switch (this.frequencySelected) {
        case "주2회":
          days = 2;
          break;
        case "주3회":
          days = 3;
          break;
        case "주5회":
          days = 5;
          break;
        default:
          days = "";
      }

      switch (this.durationSelected) {
        case "1개월":
          period = 1;
          break;
        case "3개월":
          period = 3;
          break;
        case "6개월":
          period = 6;
          break;
        case "1년":
          period = 12;
          break;
        default:
          period = "";
      }
      ts = this.timeSelected;
      //console.log(price(type, level, time, days, period, ts));
      return price(type, level, time, days, period, ts);
    },
    getCourse() {
      return this.seriesSelected.text;
    },
    getType() {
      let minText = this.minuteSelected.split(" ")[1];
      return (this.isPhone === true ? "전화영어" : "화상영어") + `(${minText})`;
    },
    getStartTime() {
      let option = "";
      switch (this.currentZone) {
        case 0:
          option = "프라임";
          break;
        case 1:
          option = "이코노미";
          break;
        case 2:
          option = "프라임";
          break;
        default:
          option = "";
      }
      // console.log('amount',this.getAmount);
      return (
        option +
        " " +
        (this.timeSelected != -1
          ? this.enrollmentData.startTime
          : '<span class="red--text">시간미정</span>')
      );
    },
    getFrequency() {
      let days = "";
      switch (this.frequencySelected) {
        case "주2회":
          days = "화,목";
          break;
        case "주3회":
          days = "월,수,금";
          break;
        case "주5회":
          days = "월-금";
          break;
        default:
      }
      return this.frequencySelected + `(${days})`;
    },
    getPeriod() {
      let week = "";
      switch (this.durationSelected) {
        case "1개월":
          week = "4주";
          break;
        case "3개월":
          week = "12주";
          break;
        case "6개월":
          week = "24주";
          break;
        case "1년":
          week = "48주";
          break;
        default:
      }
      return this.durationSelected + `(${week})`;
    }
  },
  methods: {
    setAllowedDays() {
      const twice = [2, 4];
      const thrice = [1, 3, 5];
      const five = [1, 2, 3, 4, 5];
      let minuteSelected, frequencySelected, durationSelected;
      if (this.minuteSelected != -1) {
        minuteSelected = parseInt(this.minuteSelected.replace(/\D/g, ""));
      }
      if (this.frequencySelected != -1) {
        frequencySelected = parseInt(this.frequencySelected.replace(/\D/g, ""));
      }
      if (this.durationSelected != -1) {
        durationSelected = parseInt(this.durationSelected.replace(/\D/g, ""));
      }
      let daySelected = this.daySelected;
      let weekdays =
        frequencySelected === 2
          ? twice
          : frequencySelected === 3
          ? thrice
          : frequencySelected === 5
          ? five
          : "";
      let allowedDays = [];
      this.days.forEach((item, i) => {
        let split = item.split("/");
        let month = split[0] - 1;
        let day = split[1];
        let date_format = moment({
          month: month,
          day: day
        }).weekday();
        if (weekdays.includes(date_format)) {
          allowedDays.push(i);
        }
      });

      this.allowedDays = allowedDays;
      let dayIndex = this.days.findIndex(data => data === daySelected);
      if (this.allowedDays.includes(dayIndex)) {
        this.daySelected = this.days[dayIndex];
      } else {
        this.daySelected = this.days[this.allowedDays[0]];
      }
      if (minuteSelected && frequencySelected && durationSelected) {
        this.seeDays = true;
      }
      if (this.seeSchedules) {
        if (this.currentIndex > 0) {
          this.selectedHour = this.selectedHour - this.currentIndex;
        }
        this.getHour(this.selectedHour, this.currentIndex);
      }
      this.setOffer();
    },
    move() {
      var cardTop = this.$refs.summaryCard.$el.scrollHeight;
      var scrollTop = document.documentElement.scrollTop;
      var limitHeight = this.$refs.summaryCardArea.offsetHeight;
      var scrollLimit = 900 - (limitHeight - (scrollTop - cardTop));
      // console.log((scrollTop-cardTop)+210,limitHeight-cardTop);
      // console.log((scrollTop-cardTop)+200,(scrollTop-cardTop));
      if (!this.isMobile) {
        if (scrollTop - cardTop + 200 > 0 && scrollLimit < 0) {
          this.stickySummeryTop = scrollTop - cardTop + 210;
        } else if (scrollTop - cardTop > 0) {
          this.stickySummeryTop = limitHeight - cardTop;
        } else if (scrollTop - cardTop < 0) {
          this.stickySummeryTop = 0;
        }
      } else {
        this.stickySummeryTop = 0;
      }
    },
    get_total_price() {
      if (this.offerSummary["total_price"]) {
        return this.offerSummary["total_price"].replace(
          /\B(?=(\d{3})+\b)/g,
          ","
        );
      }
    },
    formatDate(date) {
      var week = ["일", "월", "화", "수", "목", "금", "토"];
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        dayOfWeek = week[new Date(date).getDay()];

      //year = d.getFullYear();
      if (day.length < 2) day = +day;
      return [month, day].join("/") + ` (${dayOfWeek})`;
    },
    setTime(timeText) {
      // this.timeList = [];
      // this.dateTime.setHours(timeText);
      // this.dateTime.setMinutes(0);
      // for (var i = 0; i < 6; i++) {
      //   var nextTime = new Date(this.dateTime);
      //   nextTime.setMinutes(this.dateTime.getMinutes() + 10 * i);
      //   this.timeList.push(
      //     nextTime.getHours() +
      //       ":" +
      //       (nextTime.getMinutes() == 0
      //         ? nextTime.getMinutes() + "0"
      //         : nextTime.getMinutes())
      //   );
      // }
      this.timeSelected = -1;
      // console.log(timeText);
      this.time_hour = timeText;
      // console.log(this.time_hour);
    },
    onWindowResize() {
      // console.log(screen.width,window.innerWidth);
      this.screenWidth = screen.width;
      // this.isMobile = this.screenWidth <= 960 ? true : false;
      this.isMobile = window.innerWidth <= 960 ? true : false;
    },
    getHour(increment, index) {
      this.currentIndex = index;
      this.timeSelected = -1;
      this.selectedHour = increment + index;
      this.selected_hour_available_times = [];
      this.onRequest = true;
      //https://megatalking.co.kr/lms/Uedu/get_availabe_time_schedule
      const hour = increment + index;
      if (this.minuteSelected && this.frequencySelected && this.daySelected) {
        let splitDay = this.daySelected.split("/");
        let start_class_format = moment({
          day: splitDay[1],
          month: splitDay[0] - 1
        }).format("YYYY-MM-DD");
        const start_class = moment(start_class_format).unix();
        const minute = "00";
        const duration = parseInt(this.minuteSelected.replace(/\D/g, ""));
        const applicable_days =
          parseInt(this.frequencySelected.replace(/\D/g, "")) === 2
            ? ["T", "TH"]
            : parseInt(this.frequencySelected.replace(/\D/g, "")) === 3
            ? ["M", "W", "F"]
            : parseInt(this.frequencySelected.replace(/\D/g, "")) === 5
            ? ["M", "T", "W", "TH", "F"]
            : "";
        const form = new FormData();
        form.append("start_class", start_class);
        form.append("hour", hour);
        form.append("minute", minute);
        form.append("duration", duration);
        form.append("applicable_days", applicable_days);
        // axios
        //   .post(
        //     "https://megatalking.co.kr/lms/Uedu/get_availabe_time_schedule",
        //     form
        //   )
        //   .then((res) => {
        //     console.log(res);
        //     if (res.data.available_schedules) {
        //       const data = res.data.available_schedules;
        //       let schedules = [];
        //       for (var i = 0; i < 6; i++) {
        //         schedules.push(undefined);
        //       }
        //       Object.keys(data).forEach(function (i) {
        //         let split = parseInt(data[i].split(":")[1]) / 10;
        //         let dateTime = data[i].split(":");
        //         let hour = parseInt(dateTime[0]);
        //         let minute = parseInt(dateTime[1]);
        //         const time = moment({
        //           hour: hour,
        //           minute: minute,
        //         }).format("H:mm");
        //         schedules[split] = time;
        //       });
        //       this.schedule_available_hours[hour] = schedules;
        //       this.selected_hour_available_times = schedules;
        //       this.onRequest = false;
        //       this.selected_schedule_hour = index - 1;
        //       // this.schedule_available_hours[hour] = schedules
        //     }
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      }
      // console.log(increment, index, 'ii')
      //   console.log(    this.selected_hour_available_times, 'hour')
    },
    get_available_default_schedule() {
      if (this.tab === 0) {
        this.selected_schedule_hour = 6;
        this.getHour(6, 0);
      }
      if (this.tab === 1) {
        this.selected_schedule_hour = 10;
        this.getHour(10, 0);
      }
      if (this.tab === 2) {
        this.selected_schedule_hour = 17;
        this.getHour(17, 0);
      }
    },
    enroll() {
      const clientKey = "test_ck_N5OWRapdA8dvl2bklA9Vo1zEqZKL";
      // Promise를 사용하는 경우
      loadTossPayments(clientKey).then(tossPayments => {
        tossPayments.requestPayment("카드", {
          amount: 1000,
          orderId: new Date().getTime(),
          orderName: "토스 티셔츠 외 2건",
          customerName: "박토스",
          successUrl: window.location.origin + "/payment-success",
          failUrl: window.location.origin + "/payment-fail"
        });

        // tossPayments.requestBillingAuth("카드", {
        //   customerKey: "IUb-mOQLBidj80jh71a60",
        //   successUrl: window.location.origin + "/payment-success",
        //   failUrl: window.location.origin + "/payment-fail",
        // });

        // tossPayments.requestBillingAuth("카드", {
        //   customerKey: "IUb-mOQLBidj80jh71a60",
        //   successUrl: window.location.origin + "/payment-success",
        //   failUrl: window.location.origin + "/payment-fail"
        // });
      });

      const minuteSelected = this.minuteSelected;
      const frequencySelected = this.frequencySelected;
      const daySelected = this.daySelected;
      const durationSelected = this.durationSelected;
      const courseSelected = this.materials[this.materialSelected].course;
      const seriesSelected = this.seriesSelected;
      const timeSelected = this.timeSelected;
      const typeSelected = this.classType;
      if (
        typeSelected &&
        minuteSelected !== -1 &&
        frequencySelected !== -1 &&
        daySelected !== -1 &&
        durationSelected !== -1 &&
        courseSelected &&
        seriesSelected !== -1 &&
        timeSelected !== -1 &&
        this.offerSummary["total_price"]
      ) {
        // const duration = parseInt(minuteSelected.replace(/\D/g,''))
        // const applicable_days = parseInt(frequencySelected.replace(/\D/g,'')) === 2 ? '["","T","","TH",""]' : parseInt(this.frequencySelected.replace(/\D/g,'')) === 3 ? '["M","","W","","F"]' : parseInt(this.frequencySelected.replace(/\D/g,'')) === 5 ? '["M","T","W","TH","F"]' : ''
        // const days = parseInt(this.frequencySelected.replace(/\D/g,''))
        let splitTime = this.timeSelected.split(":");
        let splitDay = this.daySelected.split("/");
        let months =
          parseInt(this.durationSelected) === 4
            ? 1
            : parseInt(this.durationSelected) === 12
            ? 3
            : parseInt(this.durationSelected) === 1
            ? 12
            : 6;
        let start_class_format = moment({
          day: parseInt(splitDay[1]) + 1,
          month: splitDay[0] - 1
        }).format("YYYY-MM-DD");
        let end_class_format = moment(start_class_format, "YYYY-MM-DD")
          .add(parseInt(months), "months")
          .format("YYYY-MM-DD");
        const start_class = moment(start_class_format).unix();
        const end_class = moment(end_class_format).unix();
        const hour = splitTime[0];
        const minute = splitTime[1];
        const duration = parseInt(this.minuteSelected.replace(/\D/g, ""));
        const applicable_days =
          parseInt(this.frequencySelected.replace(/\D/g, "")) === 2
            ? '["","T","","TH",""]'
            : parseInt(this.frequencySelected.replace(/\D/g, "")) === 3
            ? '["M","","W","","F"]'
            : parseInt(this.frequencySelected.replace(/\D/g, "")) === 5
            ? '["M","T","W","TH","F"]'
            : "";
        const period = months;
        const days = parseInt(this.frequencySelected.replace(/\D/g, ""));
        const link = seriesSelected.link;
        const title = seriesSelected.text;
        const type = seriesSelected.type;
        const enrollment_payload = {
          start_class: start_class,
          end_class: end_class,
          hour: hour,
          minute: minute,
          duration: duration,
          applicable_days: applicable_days,
          period: period,
          days: days,
          course: courseSelected,
          link: link,
          title: title,
          type: type,
          class_type: typeSelected,
          total_price: this.offerSummary["total_price"]
        };
        localStorage.setItem(
          "enrollment_payload",
          JSON.stringify(enrollment_payload)
        );
        if (!localStorage.getItem("access-token")) {
          if (localStorage.getItem("socialAuth")) {
            bus.$emit("open_auth_sign_up", true);
            return;
          }
          bus.$emit("openAuth", true);
          return;
        }
        this.enrollStudent();
      } else {
        // this.requiredField = true;
      }
    },
    enroll_check_data() {
      console.log(this.enrollmentData);
      const minuteSelected = this.minuteSelected;
      const frequencySelected = this.frequencySelected;
      const daySelected = this.daySelected;
      const durationSelected = this.durationSelected;
      const courseSelected = this.materials[this.materialSelected].course;
      const seriesSelected = this.seriesSelected;
      const timeSelected = this.timeSelected;
      const typeSelected = this.classType;
      const methodSelected = this.methodSelected;
      console.log(this.methodSelected);

      if (
        typeSelected &&
        minuteSelected !== -1 &&
        frequencySelected !== -1 &&
        daySelected !== -1 &&
        durationSelected !== -1 &&
        courseSelected &&
        seriesSelected !== -1 &&
        timeSelected !== -1 &&
        methodSelected !== -1
      ) {
        this.confirmDialog = true;
      } else {
        this.requiredField = true;
        this.$vuetify.goTo(this.target, this.options);
      }
    },
    setOffer() {
      this.offerSummary = [];
      const minuteSelected = this.minuteSelected;
      const frequencySelected = this.frequencySelected;
      const daySelected = this.daySelected;
      const durationSelected = this.durationSelected;
      const courseSelected = this.materials[this.materialSelected].course;
      const seriesSelected = this.seriesSelected;
      const timeSelected = this.timeSelected;
      const typeSelected = this.classType;
      if (
        typeSelected &&
        minuteSelected !== -1 &&
        frequencySelected !== -1 &&
        daySelected !== -1 &&
        durationSelected !== -1 &&
        courseSelected &&
        seriesSelected !== -1 &&
        timeSelected !== -1
      ) {
        this.Offers.forEach(data => {
          if (
            data.duration === this.minuteSelected &&
            data.days === this.frequencySelected &&
            data.class_type === this.classType &&
            data.weeks === this.durationSelected
          ) {
            this.offerSummary = data;
          }
        });
      }
    },
    enrollStudent() {
      if (
        localStorage.getItem("enrollment_payload") &&
        localStorage.getItem("access-token")
      ) {
        this.overlay = true;
        let payload = localStorage.getItem("enrollment_payload");
        const token = localStorage.getItem("access-token");
        const config = {
          headers: {
            Authorization: token
          }
        };
        // const form = new FormData()
        // form.append('payload', JSON.stringify(payload))
        // form.append('token', token)
        // axios.post('https://megatalking.co.kr/lms/Student/enrollStudent', form).then(res => {
        payload = JSON.parse(payload);
        axios
          .post(
            "//phone.megatalking.com/origin/api/enrollment.php",
            payload,
            config
          )
          .then(res => {
            console.log(res);
            this.overlay = false;
            if (res.data.result === true) {
              localStorage.removeItem("enrollment_payload");
              localStorage.setItem(
                "enrollment_success_text",
                `Congratulations you successfully enrolled for a class, please wait while we choose the best tutor for you.`
              );
              this.overlay = false;
              this.$router.push("account");
            }
          })
          .catch(err => {
            this.overlay = false;
            console.log(err);
          });
      }
    }
  }
};
</script>
