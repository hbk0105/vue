<template>  
  <p v-for="item in newsItems" :key="item">
    <a v-bind:href="item.url"> {{ item.title }} </a>
    <small>
        {{ item.time_ago }} by
        <!-- <router-link v-bind:to="'/user/'+item.user">{{ item.user }}</router-link> -->
        <router-link v-bind:to="`/user/${item.user}`" target="blank">{{ item.user }}</router-link>

    </small>
  </p>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed : {
      ...mapGetters({newsItems : 'fetchedNews'})
  },
  created(){
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>