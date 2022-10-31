<template>
  <div class="row">
    <div class="col-0 col-md-6 flex justify-center content-center">
      <!-- <img
        src="~src\assets\satoru-gojou-2.webp"
        class="responsive"
        alt="login-image"
        style="
        min-height:100%;
        min-width:1024px;
        width:100%;
        height:auto;
        position:fixed;
        top:0;
        left:0;"> -->
    </div>
  </div>
      <q-page class="flex flex-center" padding>
          <div
            class="col-12 col-md-6 q-pt-xl flex content-center"
            >
              <div>
                    <!-- <img
                    style="
                      height: auto;"
                  src="~src\assets\anime-peeking.png"> -->
              </div>
            <q-card
              >
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
              <div class="q-pt-lg">
                <div class="col text-h6 ellipsis flex justify-center">
                  <h4
                    class="text-h4 text-uppercase q-my-none text-weight regular"
                    style="font-family:'Times New Roman', Times, serif;">
                    Login
                  </h4>
                </div>
              </div>
                  <q-form
                      class="q-gutter-md"
                      @submit="login"
                      >

                      <q-input
                        label="Username"
                        v-model="data.login.username"
                        type="name"
                        color="red"
                        filled
                        >
                        <!-- :rules="[
                          val => val && val.length > 0 || 'This field is mandatory'
                        ]" -->
                        <template v-slot:before>
                          <q-icon name="person"/>
                        </template>
                      </q-input>

                      <div class="q-gutter-sm">
                        <q-radio
                          v-model="data.login.designation"
                          val="Admin"
                          label="Admin"
                          @click="show = false"
                        >
                          <template v-slot:before>
                            <q-icon name="badge"/>
                          </template>
                        </q-radio>
                        <q-radio
                          v-model="data.login.designation"
                          val="User"
                          label="User"
                          @click="show = true"
                        />
                      </div>

                      <transition name="fade">
                        <q-input
                          v-show="show"
                          label="User ID"
                          v-model="data.login.userid"
                          filled
                        >
                          <template v-slot:before>
                            <q-icon name="badge"/>
                          </template>
                        </q-input>
                      </transition>

                      <q-input
                        :type="isPwd ? 'password' : 'text'"
                        label="Password"
                        filled
                        v-model="data.login.password"
                        >
                        <!-- :rules="[
                          val => val && val.length > 0 || 'This field is mandatory'
                        ]" -->
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


                      <!-- <q-checkbox
                        id="rememberMe"
                        label="Remember me"
                        v-model="data.rememberMe"/> -->

                      <div>
                        <div class="button">
                          <q-btn
                            class="full-width"
                            color="primary"
                            label="Login"
                            type="submit"
                            rounded>
                            <!-- @click="alert = true" -->
                          </q-btn>
                        </div>

                          <!-- <q-dialog
                          v-if="(check_username_password() == false)"
                          v-model="alert">
                            <q-card>
                              <q-card-section>
                                <div
                                align="center"
                                style="color:white; background-color: red;"
                                class="text-h6">ALERT!!!</div>
                              </q-card-section>

                              <q-card-section
                              align="center"
                              class="q-pt-none">
                                <b>Invalid information</b>
                              </q-card-section>

                              <q-card-actions align="right">
                                <q-btn
                                flat label="OK"
                                color="primary"
                                v-close-popup />
                              </q-card-actions>
                            </q-card>
                          </q-dialog>

                          <q-dialog
                          v-else
                          v-model="alert">
                            <q-card>
                              <q-card-section>
                                <div
                                align="center"
                                style="color:white; background-color: red;"
                                class="text-h6">ALERT!!!</div>
                              </q-card-section>

                              <q-card-section
                              align="center"
                              class="q-pt-none">
                                <b>Password length should be more than 6</b>
                                <br>
                                <b>OR</b>
                                <br>
                                <b>Passwords do not match</b>
                              </q-card-section>

                              <q-card-actions align="right">
                                <q-btn flat label="OK"
                                color="primary"
                                v-close-popup />
                              </q-card-actions>
                            </q-card>
                          </q-dialog> -->

                        <div
                          class="text-center q-mt-sm q-gutter-lg">
                          <router-link
                            class="text-blue"
                            to="">Forgot password?
                          </router-link>
                          <router-link
                            class="text-blue"
                            to="/signup">Create an account
                          </router-link>
                        </div>
                      </div>
                    </q-form>
                </q-card-section>
            </q-card>
          </div>
      </q-page>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
let $q
var usernotexist = true;
export default {
  name: "LoginPage",
  setup() {
    return {
      show: ref(false),
      isPwd: ref(true)
    }
  },
  data () {
    return {
      data: {
        //check: false,
        login: {
          username: '',
          password: '',
          designation: '',
          userid: ''
        },
        //rememberMe: false
      },
      //loading: false
    }
  },
  methods:
  {
    toggleShow()
    {
      this.isPwd = !this.isPwd;
    },
    login() {
      var self = this
      if(!this.data.login.username
      || !this.data.login.password
      || !this.data.login.designation) {
        $q.notify({
          type: 'negative',
          message: 'Invalid User'
        })
        console.log("Invalid User")
      }
      else if(this.data.login.designation === 'User'
      && !this.data.login.userid) {
          $q.notify({
            type: 'negative',
            message: 'Invalid User ID'
          })
          console.log("Invalid User ID")
      }
      else
      {
        var people = self.$store.state.People
        for(var i=0; i<people.length; i++) {
          if(people[i].UserName == self.data.login.username
          && people[i].Password == self.data.login.password
          && people[i].Designation == self.data.login.designation
          && people[i].UserId == self.data.login.userid
          )
          {
            usernotexist = false
            $q.notify({
              type: 'positive',
              message: 'Login Successful!!'
            })
            console.log("Login Successful!!")
            if(people[i].Designation == 'Admin')
            {
              var usern = people[i].UserName
              this.$router.push({ name: "AdminDashboard", params: {usern}})
            }
            else
            {
              var usern = people[i].UserName
              this.$router.push({ name: "UserDashboard", params: {usern}})
            }
          }
        }
        if(usernotexist)
        {
          $q.notify({
              type: 'negative',
              message: 'User does not exist'
            })
        }
      }
    }
  },
  mounted() {
    $q = useQuasar()
  }
}
</script>

<style scoped>
  .responsive{
    position: fixed;
    height: 100%;
    left: 0;
    bottom:0;
    z-index: -1;
  }
  button{
    cursor:pointer;
    border:0;
    color: #000;
    background: #ff002f2f;
    padding: 18px 32px;
    border-radius: 6px;
    font: 600 22px 'Montserrat';
    box-shadow: 0 6px 0 #ff0030;
    transition: 3s;
  }
  button:active{
    transform: translateY(5px);
    box-shadow: 0 3px 0 #ff0030;
  }
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
</style>
