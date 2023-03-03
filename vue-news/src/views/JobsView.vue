<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="newsList">
      <li class="post" v-for="item in jobsItems" :key="item">
        <div class="points">
           {{ item.points || 0 }}
        </div>
        <div>
          <p class="news-title">
              <a v-bind:href="item.url" target="blank"> {{ item.title }} </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <a :href="item.url" target="blank"> {{ item.domain }} </a>
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
  //    ...mapGetters({
  //     jobsItems : 'fetchedJobs'
  //    })
  // },
  // created(){
  //     this.$store.dispatch('FETCH_JOBS');
  // }
}
</script>


<style scoped>

</style>