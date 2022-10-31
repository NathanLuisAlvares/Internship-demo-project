<template>
    <!-- <q-page class="flex flex-center" padding> -->
      <h5
        class="text-center text-overline text-grey">
        Welcome {{this.username}}
      </h5>
      <div>
        <q-btn
        label="logout"
        style="width:10%;"
        class="bg-negative text-white"
        @click="$router.go(-1)"
        />
      </div>
    <!-- </q-page> -->
</template>

<script>
import { ref } from "vue";
export default {
  setup(){
      return{
        show: ref(false),
      }
    },
    props: ["usern"],
    data(){
    return {
      username: this.$route.params.usern,
      userid: '',
      designation: ''
    }
  },
  methods:
  {
    submit()
    {
      console.log(this.designation)
    }
  }
}
</script>

<style>
  .buttonsize {
    text-align: center;
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
