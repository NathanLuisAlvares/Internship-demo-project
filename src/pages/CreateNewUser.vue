<template>
  <q-page class="flex flex-center" padding>
    <div>
      <q-card class="q-pt-lg">
      <q-card-section>
        <q-avatar
          size="103px"
          class="absolute-center shadow-10">
          <img
            src="~src\assets\anime-logo.png"
            style="border-radius:50%;">
        </q-avatar>
      </q-card-section>
      <q-card-section>
        <div class="q-pt-xs q-">
          <div class="q-pt-lg">
                <div class="col text-h5 ellipsis flex justify-center">
                  <h5
                    class="text-h5 text-uppercase q-my-none text-weight regular"
                    style="font-family:'Times New Roman', Times, serif;">
                    Create New User
                  </h5>
                </div>
          </div>
          <div class="formsize">
            <q-form
              class="q-gutter-md">

              <q-input
                v-model="newlogin.UserName"
                filled
                type="name"
                label="Username"
                color="red">
                <template v-slot:before>
                  <q-icon name="person"/>
                </template>
              </q-input>

              <q-input
                v-model="newlogin.FullName"
                filled
                type="name"
                label="Full Name"
                color="red">
                <template v-slot:before>
                  <q-icon name="person"/>
                </template>
              </q-input>

              <q-input
                v-model="newlogin.EmailId"
                filled
                type="email"
                label="Email"
                color="red">
                <template v-slot:before>
                  <q-icon name="email"/>
                </template>
              </q-input>

              <q-input
                label="Phone No."
                v-model="newlogin.PhNo"
                filled
                color="red"
                >
                <template v-slot:before>
                  <q-icon name="call"/>
                </template>
              </q-input>

              <div class="q-gutter-sm">
                <q-radio
                  v-model="newlogin.Designation"
                  val="Admin"
                  label="Admin"
                  @click="show = false"
                />
                <q-radio
                  v-model="newlogin.Designation"
                  val="User"
                  label="User"
                  @click="show = true"
                />
              </div>

              <transition name="fade">
                <q-input
                  v-show="show"
                  label="User ID"
                  v-model="newlogin.UserId"
                  type="name"
                  filled
                >
                <template v-slot:before>
                    <q-icon name="badge"/>
                  </template>
                </q-input>
              </transition>

              <q-input
                v-model="newlogin.Password"
                filled
                :type="isPwd ? 'password':'text'"
                label="Password"
                color="red">
                <template v-slot:before>
                  <q-icon name="key" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="toggleShow" />
                </template>
              </q-input>

              <div class="q-pt-sm">
                <q-btn
                  label="Create User"
                  style="width:100%"
                  class="bg-negative text-white"
                  @click="createUser"
                />
              </div>

              <div class="q-pt-sm">
                <q-btn
                  label="Go Back to Login"
                  style="width:100%"
                  class="bg-negative text-white"
                  @click="gotoLogin"
                />
              </div>

            </q-form>
          </div>
        </div>
      </q-card-section>
    </q-card>
    </div>
  </q-page>

  <!-- <transition name="fade1">
      <div class="columns"
        v-show="show">
        <div class="column has-text-centered">
          <strong>People</strong>
          <div v-for="people in peoples" class="notes">
            {{ people }}
          </div>
        </div>
        <br>
        People count: <strong>{{ peopleCount }}</strong>
      </div>
    </transition>

    <q-btn
      :label="textchange ? 'Show People':'Hide People'"
      color="green"
      @click='showPeople()'
    >
    </q-btn> -->
</template>

<script>
import { ref } from 'vue';
import { useQuasar } from 'quasar'
let $q
var self = this;
var flage = false;
export default {
    props: ["usern"],
    emits: ['create-new-user'
    // ,'show-people'
    ],
    setup(){
      return{
        // textchange: ref(true),
        show: ref(false),
        isPwd: ref(true),
        // isconfirmPwd: ref(true)
      }
    },
    data() {
      return {
          newlogin: {
                UserName: "",
                FullName: "",
                EmailId: "",
                PhNo: "",
                Designation: "",
                UserId: "",
                Password: ""
            },
            // confirm_password: "",
            // showDetails: false
      }
    },
    methods: {
      toggleShow() {
          this.isPwd = !this.isPwd;
      },
      createUser() {
        this.$emit('create-new-user', this.newlogin)
      },
      // showPeople(){
      //   this.textchange = !this.textchange
      //   this.show = !this.show
      //   this.$emit('show-people')
      // },
      gotoLogin() {
        this.$router.push({ path: "/login" });
      }
    },
    mounted() {
      $q = useQuasar();
    },
    // computed:{
    // peoples() {
    //   return this.$store.getters.getPeople;
    // },
    // peopleCount() {
    //   return this.$store.getters.getPeopleCount;
    // }
  // }
}
</script>

<style>
  .show-element{
    visibility: hidden;
  }
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to{
    opacity:0;
  }
  .fade1-enter-active,
  .fade1-leave-active{
    transition: opacity 0.5s ease;
  }
  .fade1-enter-from,
  .fade1-leave-to{
    opacity:0;
  }
</style>
