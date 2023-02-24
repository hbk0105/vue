<template>
  <p v-for="item in jobsItems" :key="item">
    <a v-bind:href="item.url"> {{ item.title }} </a>
    <small>{{ item.time_ago }} {{ item.domain }}</small>
  </p>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed : {
     ...mapGetters({
      jobsItems : 'fetchedJobs'
     })
  },
  created(){
      this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>