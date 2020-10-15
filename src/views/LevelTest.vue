<template>
  <v-app style="background-color:#00000000">
    <v-container fluid class="py-0 px-0">
      <v-card tile color="#8bb6f700" flat class="text-center pa-3">
        <div
          class="h3 font-weight-bold white--text mb-5 gmarket"
          style="margin-top:200px"
        >
          레벨테스트
        </div>
        <div class="h6 nanum white--text">
          <div class="my-1">설레는 마음 반, 기대감이 반!</div>
          <div class="my-2">누구나 시작은 레벨테스트</div>
          <div class="my-2">걱정하지 마세요.</div>
          <div class="my-1">메가토킹선생님이 편안하게 친구처럼 도와드려요</div>
        </div>
        <v-container style="max-width:1000px;margin-top:90px">
          <v-card class="rounded-xl shadow" width="100%" color="#fafafa">
            <v-container class="px-md-10 pt-10 px-3">
              <v-row class="px-10">
                <div class="h5 text-left">전화영어 무료 레벨테스트.</div>
              </v-row>
              <v-row class="pl-10">
                <div class="h5 text-left font-weight-black">
                  간편하게 신청해보세요.
                </div>
              </v-row>
              <v-row
                no-gutters
                class="px-10 mt-5 d-flex align-center"
                style="margin-bottom:50px"
              >
                <v-col
                  cols="12"
                  sm="6"
                  class="text-purple font-weight-black text-left"
                  >모든 레벨테스트는 전화로 진행됩니다.</v-col
                >
                <v-spacer></v-spacer>
                <v-col cols="12" sm="6" class="mt-5 mt-sm-0">
                  <v-btn
                    color="#5a55a1"
                    large
                    class="white--text rounded-lg"
                    :block="isMobile"
                    >결과 확인하기</v-btn
                  >
                </v-col>
              </v-row>
              <v-divider class="mx-10 mb-10"></v-divider>
              <div class="px-10 text-dark-purple h6">
                <span class="font-weight-black">나에게 맞춘 날짜와 시간</span>에
                언제든지 진행 가능합니다.
              </div>
              <v-row class="px-10 my-10 d-flex justify-center">
                <div class="mx-2">
                  <v-img
                    class="mx-auto"
                    src="../assets/icon1.png"
                    width="70"
                  ></v-img>
                  <div class="mt-3 caption-text">신청서 작성</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2"
                    >fas fa-angle-right</v-icon
                  >
                </div>
                <div class="mx-2">
                  <v-img
                    class="mx-auto"
                    src="../assets/icon2.png"
                    width="70"
                  ></v-img>
                  <div class="mt-3 caption-text">예약 완료</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2"
                    >fas fa-angle-right</v-icon
                  >
                </div>
                <div class="mx-2">
                  <v-img
                    class="mx-auto"
                    src="../assets/icon3.png"
                    width="70"
                  ></v-img>
                  <div class="mt-3 caption-text">
                    문자메시지 발송
                    <br />(예약 확인, 테스트 안내 )
                  </div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2"
                    >fas fa-angle-right</v-icon
                  >
                </div>
                <div class="mx-2">
                  <v-img
                    class="mx-auto"
                    src="../assets/icon4.png"
                    width="70"
                  ></v-img>
                  <div class="mt-3 caption-text">
                    강사님과 1:1수업
                    <br />(간단 자기소개 등)
                  </div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2"
                    >fas fa-angle-right</v-icon
                  >
                </div>
                <div class="mx-2">
                  <v-img
                    class="mx-auto"
                    src="../assets/icon5.png"
                    width="70"
                  ></v-img>
                  <div class="mt-3 caption-text">테스트 결과 받기</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2"
                    >fas fa-angle-right</v-icon
                  >
                </div>
                <div class="mx-2">
                  <v-img
                    class="mx-auto"
                    src="../assets/icon6.png"
                    width="70"
                  ></v-img>
                  <div class="mt-3 caption-text">개별 맞춤 상담</div>
                </div>
              </v-row>

              <!-- <v-row class="px-10 my-10 d-flex flex-column justify-center" v-else>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon1.png" width="70"></v-img>
                  <div class="mt-3 caption-text">신청서 작성</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-down</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon2.png" width="70"></v-img>
                  <div class="mt-3 caption-text">예약 완료</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-down</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon3.png" width="70"></v-img>
                  <div class="mt-3 caption-text">
                    문자메시지 발송
                    <br />(예약 확인, 테스트 안내 )
                  </div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-down</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon4.png" width="70"></v-img>
                  <div class="mt-3 caption-text">
                    강사님과 1:1수업
                    <br />(간단 자기소개 등)
                  </div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-down</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon5.png" width="70"></v-img>
                  <div class="mt-3 caption-text">테스트 결과 받기</div>
                </div>
                <div class="mx-2 mt-3">
                  <v-icon style="font-size:40px" color="#dee0e2">fas fa-angle-down</v-icon>
                </div>
                <div class="mx-2">
                  <v-img class="mx-auto" src="../assets/icon6.png" width="70"></v-img>
                  <div class="mt-3 caption-text">개별 맞춤 상담</div>
                </div>
              </v-row>-->

              <div class="px-5 px-md-10 h6 font-weight-black text-left mb-5">
                과목 선택
              </div>
              <v-row class="mx-sm-10 mx-4">
                <v-col cols="12" sm="6" v-for="(type, i) in types" :key="i">
                  <v-btn
                    @click="selectedType = i"
                    class="rounded-pill"
                    :color="selectedType == i ? 'primary' : 'grey'"
                    :outlined="selectedType == i ? false : true"
                    block
                    >{{ type }}</v-btn
                  >
                </v-col>
              </v-row>

              <v-row class="align-center mx-4 mx-sm-10 mx-4 mb-10">
                <v-col cols="12" sm="6" class="pb-0 pb-sm-3">
                  <v-text-field
                    color="primary"
                    label="이름"
                    dense
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="pt-0 pt-sm-3">
                  <v-text-field
                    color="primary"
                    label="연락처"
                    dense
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>

              <div class="mx-10 mb-5 font-weight-black h6 text-left">
                수업 진행속도
              </div>
              <v-row justify="center" class="mx-sm-10 mx-4 mb-10">
                <v-col
                  cols="12"
                  sm="4"
                  v-for="(speed, i) in class_speeds"
                  :key="i"
                >
                  <v-btn
                    @click="selectedSpeed = i"
                    :color="selectedSpeed == i ? 'primary' : 'grey'"
                    :outlined="selectedSpeed == i ? false : true"
                    block
                    class="rounded-xl"
                    >{{ speed }}</v-btn
                  >
                </v-col>
              </v-row>

              <div class="mx-10 mb-5 font-weight-black h6 text-left">
                예약 일시
              </div>

              <v-row :justify="isMobile ? 'center' : 'end'" class="mb-5">
                <v-col cols="12" class="pb-0">
                  <v-container class="pb-0" fluid>
                    <v-row justify="center">
                      <v-btn
                        v-for="(day, i) in days"
                        :key="i"
                        class="rounded-lg mr-3"
                        :large="!isMobile"
                        @click="daySelected = i"
                        :color="daySelected == i ? 'primary' : ''"
                        depressed
                        >{{ day }}</v-btn
                      >
                    </v-row>
                  </v-container>
                </v-col>
              </v-row>

              <v-row class="mx-auto mb-5" v-if="daySelected == 0">
                <v-card
                  flat
                  max-height="230"
                  style="overflowY: scroll"
                  width="100%"
                >
                  <v-container class="px-0 py-0">
                    <v-row
                      no-gutters
                      v-for="(hour, i) in 24 - dateTime.getHours()"
                      :key="i"
                    >
                      <v-col
                        class="py-2"
                        cols="2"
                        v-for="(minute, j) in 6"
                        :key="j"
                      >
                        <span
                          class="regular"
                          style="cursor:pointer"
                          :class="{
                            'blue--text text--darken-3 font-weight-black':
                              dateTime.getHours() + i + ':' + j + '0' ==
                              selectedTime
                          }"
                        >
                          <strike
                            v-if="
                              dateTime.getMinutes() > Number(j + '0') &&
                                dateTime.getHours() + i == dateTime.getHours()
                            "
                            >{{ dateTime.getHours() + i }}:{{ j }}0</strike
                          >
                          <span @click="selectTime($event)" v-else
                            >{{ dateTime.getHours() + i }}:{{ j }}0</span
                          >
                        </span>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-row>

              <v-row class="mx-auto mb-5" v-else>
                <v-card
                  flat
                  max-height="230"
                  style="overflowY: scroll"
                  width="100%"
                >
                  <v-container class="px-0 py-0">
                    <v-row no-gutters v-for="(hour, i) in 18" :key="i">
                      <v-col
                        class="py-2"
                        cols="2"
                        v-for="(minute, j) in 6"
                        :key="j"
                      >
                        <span
                          @click="selectTime($event)"
                          class="regular"
                          style="cursor:pointer"
                          :class="{
                            'blue--text text--darken-3 font-weight-black':
                              hour + 5 + ':' + j + '0' == selectedTime
                          }"
                          >{{ hour + 5 }}:{{ j }}0</span
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-row>

              <v-row class="mx-sm-10 mx-4 mb-10">
                <v-col
                  cols="12"
                  sm="4"
                  class="d-flex align-center py-0 py-sm-3"
                >
                  <v-checkbox
                    color="primary"
                    class="mr-2"
                    label="개인정보 수집이용에 동의합니다."
                  ></v-checkbox>
                  <v-btn
                    color="grey"
                    @click="termsDialog = true"
                    class="rounded-pill"
                    small
                    depressed
                    >내용보기</v-btn
                  >
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                  class="d-flex align-center py-0 py-sm-3"
                >
                  <v-checkbox
                    color="primary"
                    class="mr-2"
                    label="개인정보 취급위탁에 동의합니다."
                  ></v-checkbox>
                  <v-btn
                    color="grey"
                    @click="termsDialog = true"
                    class="rounded-pill"
                    small
                    depressed
                    >내용보기</v-btn
                  >
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                  class="d-flex align-center py-0 py-sm-3"
                >
                  <v-checkbox
                    color="primary"
                    class="mr-2"
                    label="상담 및 이벤트 안내 동의(선택)."
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn
                    style="background: linear-gradient(to right, #a0b4ff, #4285ec)"
                    class="rounded-pill white--text h5 nanum"
                    depressed
                    large
                    >무료수업 신청하기</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-container>
      </v-card>
    </v-container>

    <v-dialog
      v-model="termsDialog"
      max-width="1000"
      style="border-radius: 25px 25px 25px 25px !important;overflow-x:hidden"
      height="700"
      class="border-xl"
    >
      <v-card flat class="rounded-xl" max-width="1000">
        <v-card flat color="#8aace9" class="rounded-tr-xl rounded-tl-xl">
          <v-container class="py-0">
            <v-row>
              <v-col cols="6" class="white--text">
                <span class="ml-5 h5 nanum">개인정보 수집 및 이용 안내</span>
              </v-col>
              <v-col cols="6" class="d-flex justify-end">
                <v-icon color="white" large @click="termsDialog = false"
                  >close</v-icon
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-card>
          <v-container style="overflow-y:scroll;height:500px">
            <v-row>
              <v-col cols="12" style="word-break: keep-all;line-break: strict;">
                1. 개인정보는 생존하는 개인에 관한 정보로서 실명, 전화번호 등의
                사항으로 당사 회원 개인을 식별할 수 있는 정보(당해 정보만으로는
                특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여
                식별할 수 있는 것을 포함)를 말합니다. 당사가 수집한 개인정보는
                다음의 목적을 위해 활용합니다 서비스 제공에 관한 계약 이행 및
                서비스 제공에 따른 요금정산, 콘텐츠 제공, 물품배송 또는 청구서
                등 발송, 금융거래 본인 인증 및 금융 서비스, 구매 및 요금 결제,
                요금추심, 회원 관리, 회원제 서비스 이용에 따른 본인확인,
                개인식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입
                의사 확인, 가입 및 가입횟수 제한, 만14세 미만 아동 개인 정보
                수집 시 법정 대리인 동의 여부 확인, 추후 법정 대리인 본인확인,
                분쟁 조정을 위한 기록보존, 불만처리 등 민원처리,고지사항 전달.
                마케팅 및 광고에 활용 - 신규 서비스(제품) 개발 및 특화,
                인구통계학적 특성에 따른 서비스 제공 및 광고게재, 접속 빈도
                파악, 회원의 서비스 이용에 대한 통계, 이벤트 등 광고성 정보 전달
                (회원님의 개인정보는 광고를 의뢰한 개인이나 단체에는 제공되지
                않습니다.)
                <br /><br />

                2. 수집개인정보 항목 및 수집방법 회사는 회원가입, 상담, 서비스
                신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다. ① 최초
                회원가입 시 수집항목: 이름, 아이디(보안을 위하여 강력한 암호
                알고리즘으로 암호화 되어 저장됨), 비밀번호, 자택 전화번호, 자택
                주소, 휴대전화번호, 이메일, 수업이름 ② 서비스 이용과정이나
                사업처리 과정에서 자동으로 생성되어 수집될 수 있는 항목: 접속
                IP, 쿠키, 결제기록, 접속로그, 서비스이용기록, 불량 이용기록,
                상담기록 ③ 개인정보 수집방법 : 홈페이지, 서면양식, 팩스, 전화,
                상담 게시판, 이메일, 이벤트 응모, 배송요청, 협력회사로부터의
                제공, 생성정보 수집 툴을 통한 수집
                <br /><br />
                3. 개인정보 보유 및 이용기간 회사는 원칙적으로 개인정보 수집 및
                이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단,
                관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와
                같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
                보존 항목 : 이름, 아이디, 결제기록, 서비스이용기록, 상담기록,
                쿠키, 접속IP, 접속로그 보존 근거 : 전자상거래 등에서의
                소비자보호에 관한 법률, 불량 이용자의 재가입 방지, 시스템 무결성
                유지 보존 기간 : 5년 표시/광고에 관한 기록 : 6개월 (전자상거래
                등에서의 소비자보호에 관한 법률) 계약 또는 청약철회 등에 관한
                기록 : 5년 (전자상거래 등에서의 소비자보호에 관한 법률) 대금결제
                및 재화 등의 공급에 관한 기록 : 5년 (전자상거래 등에서의
                소비자보호에 관한 법률) 소비자의 불만 또는 분쟁처리에 관한 기록
                : 3년 (전자상거래 등에서의 소비자보호에 관한 법률) 신용정보의
                수집/처리 및 이용 등에 관한7 기록 : 3년 (신용정보의 이용 및
                보호에 관한 법률)

                <br /><br />
                4. 개인정보 파기절차 및 방법 회사는 원칙적으로 개인정보 수집 및
                이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                파기절차 및 방법은 다음과 같습니다. ① 파기절차 회원님이 회원가입
                등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로
                옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에
                의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간
                저장된 후 파기되어집니다. 별도 DB로 옮겨진 개인정보는 법률에
                의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로
                이용되지 않습니다. ②파기방법 종이에 출력된 개인정보는 분쇄기로
                분쇄하거나 소각을 통하여 파기하고, 전자적 파일형태로 저장된
                개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여
                삭제합니다.
                <br /><br />

                5. 개인정보 제공 및 공유 회사는 원칙적으로 회원님의 개인정보를
                수집 및 이용목적에 한해서만 이용하며 타인 또는 타 기업 기관에
                공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다. ①
                이용자들이 사전에 동의한 경우 ② 법령의 규정에 의거하거나, 수사
                목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는
                경우
                <br /><br />
                6. 개인정보취급 위탁 및 해외이전 1. 위탁업체명 : ㈜LGU+
                위탁업무: 인터넷 결제 위탁정보: 회원정보, 주문정보
                <br /><br />
                7. 이용자권리와 행사방법 ① 회사는 법정대리인의 동의가 필요한 만
                14세 미만 아동의 회원 가입을 받고 있지 않습니다. ② 이용자는
                언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수
                있으며 가입해지를 요청할 수도 있습니다. ③ 이용자의 개인정보
                조회, 수정을 위해서는 회사 홈에 있는 “정보수정”을, 가입해지
                시에는 “회원탈퇴”를 클릭하여 본인 확인 절차를 거치신 후 직접
                열람, 정정 또는 탈퇴가 가능합니다. 혹은 개인정보관리책임자에게
                서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다. ④
                귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
                완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다.
                또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정
                처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록
                하겠습니다. ⑤ 회사는 이용자 혹은 법정대리인의 요청에 의해 해지
                또는 삭제된 개인정보는 “3. 개인정보의 보유 및 이용기간”에 명시된
                바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록
                처리하고 있습니다.
                <br /><br />
                8. 개인정보 자동수집장치의 설치 및 거부 회사는 귀하의 정보를
                저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다. 쿠키는
                웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는
                아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다.
                회사는 다음과 같은 목적을 위해 쿠키를 사용합니다. ① 쿠키의 목적
                회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과
                관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수
                파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공 ② 쿠키설정
                거부 귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서,
                귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를
                허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든
                쿠키의 저장을 거부할 수도 있습니다. * 설정방법 예(인터넷
                익스플로러의 경우) : 웹 브라우저 상단의 도구 > 인터넷 옵션 >
                개인정보 : 단, 쿠키 설치를 거부하였을 경우 로그인이 필요한 일부
                서비스의 이용이 어려울 수 있습니다.
                <br /><br />
                9. 개인정보 관리책임자 및 상담신고 회사는 고객의 개인정보를
                보호하고 개인정보와 관련한 불만을 처리하기 위하여
                개인정보관리책임자를 지정하고 있습니다. 고객의 개인정보와 관련한
                문의사항이 있으시면 아래의 개인정보 관리책임자에게 연락 주시기
                바랍니다.
                <br /><br />
                [개인정보 관리책임자] ㆍ성명 : 이현석 ㆍ소속 : (주)유에듀케이션
                ㆍ연락처 : 02-1688-5705 ㆍ이메일 : email@ueducation.co.kr
                개인정보침해에 관한 상담이 필요한 경우에는 개인정보침해신고센터,
                대검찰청 인터넷범죄 수사센터, 경찰청 사이버테러대응센터 등으로
                문의하실 수 있습니다. [개인정보침해신고센터] * 전화: 1336 * URL:
                http://www.cyberprivacy.or.kr/ [대검찰청 인터넷범죄수사센터] *
                전화: 02-3480-3600 * URL: http://icic.sppo.go.kr/ [경찰청
                사이버테러대응센터] * 전화: 02-392-0330 * URL:
                http://www.ctrc.go.kr/ 11. 기타 회사 사이트에 링크되어 있는
                웹사이트들이 개인정보를 수집하는 행위에 대해서는 본
                "개인정보취급방침"이 적용되지 않음을 알려 드립니다. 또한 회사가
                포함하고 있는 링크를 통해 타 사이트 방문 시, 해당 사이트의
                개인정보 취급방침은 무관하므로, 새로운 사이트의 개인정보
                취급방침을 확인하시기 바랍니다. 12. 고지의 의무 현
                개인정보취급방침 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소
                7일전부터 홈페이지의 '공지사항'을 통해 고지할 것입니다.
                <br /><br />
                - 수정공지일자: 2020년 7월 20일 - 시행일자: 2020년 7월 28일
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<style scoped>
.active {
  background-color: #2564cb;
}

.v-tabs--vertical.v-tabs--icons-and-text > .v-tabs-bar .v-tab {
  height: 115px;
  border-radius: 30px 0 0 30px;
}
</style>

<script>
export default {
  data() {
    return {
      days: [],
      daySelected: -1,

      termsDialog: false,

      dateTime: new Date(),
      // listOfTimes: [],

      checkbox1: false,
      tab: 0,
      selectedTime: "",
      selectedType: -1,
      selectedSpeed: "",
      screenWidth: "",
      isMobile: false,

      types: ["메가토킹 화상영어", "메가토킹 화상영어"],
      class_speeds: [
        "천천히 발음해주세요.",
        "보통 속도로 말해주세요.",
        "빨리 말하셔도 괜찮아요."
      ]
    };
  },

  created() {
    window.addEventListener("resize", this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },

  mounted() {
    this.screenWidth = screen.width;
    this.isMobile = this.screenWidth <= 960 ? true : false;

    for (var i = 0; i < 12; i++) {
      var today = new Date();
      var nextDates = new Date(today);
      nextDates.setDate(nextDates.getDate() + i);
      if (
        nextDates.getDay() != 6 &&
        nextDates.getDay() != 0 &&
        this.days.length < 2
      ) {
        this.days.push(this.formatDate(nextDates));
      }
    }

    // this.setListofTime();
  },

  methods: {
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      month = month.length == 1 ? "0" + month : month;
      day = day.length == 1 ? "0" + day : day;

      if (day.length < 2) day = +day;

      return [year, month, day].join("-");
    },

    // setListofTime() {
    //   var listOfTimes = [...Array(6)].map(() => new Array(6));

    //   for (var i = 0; i < 6; i++) {
    //     for (var j = 0; j < 6; j++) {
    //       listOfTimes[i][j] = i + 6 + ":" + j + "0";
    //     }
    //   }

    //   this.listOfTimes = listOfTimes;

    // },

    selectTime(event) {
      this.selectedTime = event.target.innerText;
    },

    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
    }
  }
};
</script>
