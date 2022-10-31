<template>
  <div class="row">
    <div class="col-0 col-md-6 flex justify-center content-center">
      <img
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
        left:0;">
    </div>
  </div>
    <q-page class="flex flex-center" padding>
        <div
            class="col-12 col-md-6 q-pt-lg flex content-center"
            >
                <div>
                  <img
                  style="
                    height: auto;"
                  src="~src\assets\anime-peeking.png">
                </div>
              <q-card >
                <q-card-section>

                  <q-card-section>
                    <q-avatar
                      size="103px"
                      class="absolute-center shadow-10">
                      <img
                        src="~src\assets\anime-logo.png"
                        style="border-radius:50%;">
                    </q-avatar>
                  </q-card-section>
                  <div class="q-py-xl">
                    <div class="col text-h6 ellipsis flex justify-center">
                    <h4
                      class="text-h4 text-uppercase q-my-none text-weight regular"
                      style="font-family:'Times New Roman', Times, serif;">
                      Signup
                    </h4>
                    </div>
                  </div>
                  <q-form
                  class="q-gutter-md"
                  method="GET"
                  autocorrect="off"
                  autocapitalize="off"
                  autocomplete="off"
                  spellcheck="false"
                  @submit.prevent="onSubmit">

                  <q-input

                    label="Username"
                    v-model="login.username"
                    filled
                    hint="Hint: Should not contain spaces"
                    :rules="[
                      val => val && val.length > 0 || 'This field is mandatory'
                    ]">
                    <template v-slot:before>
                      <q-icon name="person"/>
                    </template>
                  </q-input>

                  <q-input
                    label="Full name"
                    v-model="login.fullname"
                    filled
                    :rules="[
                      val => val && val.length > 0 || 'This field is mandatory'
                    ]"
                    >
                    <template v-slot:before>
                      <q-icon name="badge"/>
                    </template>
                  </q-input>

                  <q-input
                  label="Email ID"
                  placeholder="Ex: emailid@gmail.com"
                    v-model="login.emailid"
                    filled
                    :rules="[
                      val => val && val.length > 0 || 'This field is mandatory'
                    ]"
                    >
                    <template v-slot:before>
                      <q-icon name="email"/>
                    </template>
                  </q-input>

                  <q-input
                    label="Phone No."
                    v-model="login.phone_no"
                    filled
                    :rules="[
                      val => val && val.length > 0 || 'This field is mandatory'
                    ]"
                    >
                    <template v-slot:before>
                      <q-icon name="call"/>
                    </template>
                    <template v-slot:prepend>
                      <q-select
                        name="select_phone"
                        :options="['+91','+44']"
                        v-model="login.p_list">
                      </q-select>
                    </template>
                  </q-input>

                  <!-- <q-select
                    class="q-pb-sm"
                    name="select"
                    :options="['Admin', 'User']"
                    v-model="login.d_list">
                    <template v-slot:before>
                      <q-icon name="face"/>
                    </template>
                  </q-select> -->

                  <!-- <q-input
                    label="User ID"
                    v-model="login.designation"
                    filled
                    :rules="[
                      val => val && val.length > 0 || 'This field is mandatory'
                    ]">
                    <template v-slot:before>
                      <q-icon name="badge"/>
                    </template>
                  </q-input> -->

                  <q-input
                    class="q-pb-xl"
                    :type="isPwd ? 'password' : 'text'"
                    label="Password"
                    filled
                    hint=
                    "Password should contain the following:-
                    (1) Atleast 1 lowercase letter (a-z),
                    (2) Atleast 1 uppercase letter (A-Z),
                    (3) Atleast 1 special character,
                    (4) Atleast 1 number (0-9)"
                    v-model="login.password">
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

                  <q-input
                    :type="isconfirmPwd ? 'password' : 'text'"
                    label="Confirm Password"
                    filled
                    v-model="login.confirm_password"
                    class="q-pt-sm">
                    <template v-slot:before>
                      <q-icon name="key" />
                    </template>
                    <template v-slot:append>
                      <q-icon
                        :name="isconfirmPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="toggleShow_confirm_password" />
                    </template>
                  </q-input>

                  <div>
                    <q-btn
                      class="full-width"
                      color="primary"
                      label="Signup"
                      type="onSubmit"
                      @click="alert=true"
                      rounded>
                    </q-btn>

                      <q-dialog
                        v-if="(check_details_if_entered() == false)"
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
                              <b>Please enter the information</b>
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
                              style="color:white; background-color: red"
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
                      </q-dialog>

                    <div
                      class="text-center q-mt-sm q-gutter-lg">
                      <span>Already have an account? Click </span>
                      <router-link
                        class="text-blue"
                        to="/login">
                        LOGIN
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
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Signup',
  setup() {
    return {
      alert: ref(false),
      isPwd: ref(true),
      isconfirmPwd: ref(true),
      selectedOption: ref(false)
    }
  },
  data () {
    return {
      login: {
        username: '',
        fullname: '',
        emailid: '',
        phone_no: '',
        password: '',
        confirm_password: '',
        d_list: null,
        p_list: null
      },

    };
  },
  methods:
  {
    toggleShow()
    {
      this.isPwd = !this.isPwd;
    },
    toggleShow_confirm_password()
    {
      this.isconfirmPwd = !this.isconfirmPwd;
    },
    onSubmit () {
      if(this.check_details_if_entered() == false) {
        console.log('Please enter the information')
      } else if(this.check_password_length() == false) {
        console.log('Password length should be more than 6')
      }
      else if(this.check_password_match() == false) {
        console.log('Passwords do not match')
      } else {
      console.log('success')
      this.$router.push({path: '/login'})
      }
    },
    check_details_if_entered() {
      if((!this.login.username ||
      !this.login.fullname ||
      !this.login.emailid ||
      !this.login.phone_no ||
      !this.login.password ||
      !this.login.confirm_password)) {
          return false
      }
    },
    check_password_length() {
      if (this.login.password.length < 6) {
          return false
      }
    },
    check_password_match() {
      if(this.login.password != this.login.confirm_password) {
        return false
      }
    }
  }
})
</script>
