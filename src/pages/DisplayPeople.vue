<template>
    <transition name="fade">
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
    </q-btn>

</template>

<script>
import { ref } from 'vue';

export default{
  emits: ['show-people'],
  setup(){
    return{
      textchange: ref(true),
      show: ref(false)
    }
  },
  methods:{
    showPeople(){
      this.textchange = !this.textchange
      this.show = !this.show
      this.$emit('show-people')
    }
  },
  computed:{
    peoples() {
      return this.$store.getters.getPeople;
    },
    peopleCount() {
      return this.$store.getters.getPeopleCount;
    }
  }
}
</script>

<style>
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to{
    opacity:0;
  }
</style>
