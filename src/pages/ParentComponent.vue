<template>
  <div class="columns">
    <div class="column has-text-centered">
      <strong>Notes</strong>
      <div v-for="note in notes" class="notes">
        {{ note }}
      </div>
    </div>
    <div class="column has-text-centered">
      <strong>Timestamp</strong>
      <div v-for="timestamp in timestamps" class="timestamps">
        {{ timestamp }}
      </div>
    </div>
  </div>
  <InputComponent/>
  <NoteCountComponent/>
</template>

<script>
import InputComponent from './input-component.vue';
import NoteCountComponent from './note-count-component.vue';
  export default{
    components: {
      InputComponent,
      NoteCountComponent
    },
    computed:{
      notes() {
        return this.$store.getters.getNotes;
      },
      timestamps() {
        return this.$store.getters.getTimestamps;
      }
    }
  }
</script>

<style>
</style>
