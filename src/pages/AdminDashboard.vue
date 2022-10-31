<template>
  <q-page class="flex flex-center" padding>
    <div>
      <h2
        class="text-center text-overline text-grey">
        Welcome {{this.username}}
      </h2>
    </div>
    <CreateNewUser
      @create-new-user="onsubmitForm"
    />
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from "quasar";
import CreateNewUser from './CreateNewUser.vue'
let $q
export default {
  props: ["usern"],
  setup() {
        return {
            show: ref(false),
            isPwd: ref(true),
            isconfirmPwd: ref(true)
        };
    },
  data() {
      return {
          username: this.$route.params.usern
      }
  },
  methods: {
        onsubmitForm(newlogin) {
            var flage = false;
            var people1 = this.$store.state.People;
            if (!newlogin.UserName
                || !newlogin.FullName
                || !newlogin.EmailId
                || !newlogin.PhNo
                || !newlogin.Designation
                || !newlogin.Password) {
                $q.notify({
                    type: "negative",
                    message: "Fill mandatory Details"
                });
                console.log("Fill mandatory Details");
            }
            else if (newlogin.Designation == "User"
                && !newlogin.UserId) {
                $q.notify({
                    type: "negative",
                    message: "Fill User ID"
                });
                console.log("Fill User ID");
            }
            else if (newlogin.Password.length < 6) {
                $q.notify({
                    type: "negative",
                    message: "Password length is too short"
                });
                console.log("Password length is too short");
            }
            else {
                for (var i = 0; i < people1.length; i++) {
                    if (newlogin.UserName == people1[i].UserName
                        && newlogin.FullName == people1[i].FullName
                        && newlogin.EmailId == people1[i].EmailId
                        && newlogin.PhNo == people1[i].PhNo
                        && newlogin.Designation == people1[i].Designation
                        && newlogin.Password == people1[i].Password) {
                        flage = true;
                    }
                }
                if (flage) {
                    $q.notify({
                        type: "negative",
                        message: "User exists"
                    });
                    console.log("User exists");
                }
                else {
                    this.$store.dispatch("addPeople", newlogin);
                    $q.notify({
                        type: "positive",
                        message: "User Added Successfully!!"
                    });
                    console.log("User Added Successfully!!");
                }
            }
        },
      },
      mounted() {
          $q = useQuasar();
        },
  components: {
    CreateNewUser
  }
}
</script>

<style>
  h2 {
    text-align: center;
  }
</style>
