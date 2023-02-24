<template>
  <p v-for="item in askItems" :key="item">
    <a v-bind:href="item.url"> {{ item.title }} </a>
    <small>{{ item.time_ago }} {{ item.user }}</small>
  </p>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed : {
    ...mapGetters({
      askItems : 'fetchedAsk'
    })
  },
  created(){
      this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>