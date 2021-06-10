<template>
  <div>
    <div class="my-5 font-weight-bold h5 nanum">수강내역</div>
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
                v-for="(header, i) in data.tab1Header"
                :key="i"
                style="border-bottom: solid 1px #6a9af2"
              >
                {{ header }}
              </td>
            </tr>
          </thead>
          <tbody v-if="data.tab1Item.length != 0">
            <tr v-for="(item, i) in data.tab1Item" :key="i">
              <td>{{ item.no }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.course }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.method }}</td>
              <td>{{ item.status }}</td>
              <td>
                <div>
                  <v-btn
                    class="white--text rounded-tl-xl rounded-bl-xl"
                    depressed
                    style="
                      background: linear-gradient(
                        to right,
                        #8fa1fe,
                        #4d94e9
                      ) !important;
                    "
                    color="blue"
                    tile
                    @click="receiptDialogOpen(item)"
                  >
                    영수증
                  </v-btn>
                  <v-btn
                    class="white--text"
                    depressed
                    style="
                      background: linear-gradient(
                        to right,
                        #8fa1fe,
                        #4d94e9
                      ) !important;
                    "
                    color="blue"
                    tile
                    @click="courseDialogOpen(item)"
                  >
                    수강증
                  </v-btn>
                  <v-btn
                    class="white--text rounded-tr-xl rounded-br-xl"
                    depressed
                    style="
                      background: linear-gradient(
                        to right,
                        #8fa1fe,
                        #4d94e9
                      ) !important;
                    "
                    color="blue"
                    tile
                    @click="certificateDialogOpen(item)"
                  >
                    출석증명서
                  </v-btn>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="7">
                <p class="mt-5">신청된 수강이 없습니다.</p>
                <v-btn
                  class="white--text rounded-xl mb-5"
                  depressed
                  style="
                    background: linear-gradient(
                      to right,
                      #8fa1fe,
                      #4d94e9
                    ) !important;
                  "
                  color="blue"
                  tile
                  @click="courseDialog = true"
                >
                  수강신청 하기
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <v-card class="rounded-xl" v-else>
      <v-list>
        <v-list-group
          v-for="(item, i) in data.tab1Item"
          :key="i"
          v-model="item.active"
          no-action
          subheader
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="d-flex justify-space-between">
                <span class="font-weight-bold">
                  {{ item.course }}
                </span>
                <span
                  class="font-weight-bold blue--text"
                  :class="isMobile ? '' : 'h6'"
                >
                  {{ item.price }}</span
                >
              </v-list-item-title>
              <v-list-item-subtitle
                v-text="item.date"
                class="text-left"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </template>

          <v-container>
            <v-row justify="center">
              <v-col cols="3">
                <v-btn
                  color="blue"
                  block
                  outlined
                  class="rounded-pill"
                  @click="receiptDialogOpen(item)"
                >
                  영수증
                </v-btn>
              </v-col>
              <v-col cols="3">
                <v-btn
                  color="blue"
                  block
                  outlined
                  class="rounded-pill"
                  @click="courseDialogOpen(item)"
                >
                  수강증
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn
                  color="blue"
                  block
                  outlined
                  class="rounded-pill"
                  @click="courseDialogOpen(item)"
                >
                  출석증명서
                </v-btn>
              </v-col>
            </v-row>
          </v-container>

          <!-- <v-list-item v-for="i in 3" :key="i">
                  <v-list-item-content>
                    <v-list-item-title v-text="child.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item> -->
        </v-list-group>
      </v-list>
    </v-card>

    <AccountReceiptDialog ref="receiptDialog"></AccountReceiptDialog>
    <AccountCourseDialog ref="courseDialog"></AccountCourseDialog>
    <AccountCertificateDialog
      ref="certificateDialog"
    ></AccountCertificateDialog>
  </div>
</template>
<script>
import AccountReceiptDialog from "@/components/account/AccountReceiptDialog.vue";
import AccountCourseDialog from "@/components/account/AccountCourseDialog.vue";
import AccountCertificateDialog from "@/components/account/AccountCertificateDialog.vue";
export default {
  props: ["data"],
  components: {
    AccountReceiptDialog,
    AccountCourseDialog,
    AccountCertificateDialog
  },
  data() {
    return {};
  },

  mounted() {
    //console.log(this.data);
  },

  methods: {
    receiptDialogOpen(item) {
      this.$refs.receiptDialog.open(item);
    },

    courseDialogOpen(item) {
      this.$refs.courseDialog.open(item);
    },

    certificateDialogOpen(item) {
      this.$refs.certificateDialog.open(item);
    }
  }
};
</script>
