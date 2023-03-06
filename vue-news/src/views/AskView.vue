<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="newsList">
      <li class="post" v-for="item in askItems" :key="item">
        <div class="points">
           {{ item.points }}
        </div>
        <div>
          <p class="news-title">
              <a v-bind:href="item.url"> {{ item.title }} </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-bind:to="`/item/${item.id}`"  class="link-text">{{ item.title }}</router-link>
          </small>
        </div>
      </li>
    </ul> -->

  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
export default {
  components : {
    ListItem
  },
  // computed : {
  //   ...mapGetters({
  //     askItems : 'fetchedAsk'
  //   })
  // },
  created(){
      this.$store.dispatch('FETCH_ASK');
  }
}
</script>


<style scoped>

</style>