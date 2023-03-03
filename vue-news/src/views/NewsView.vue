<template>  
  <div>
   <list-item></list-item>
     <!-- <ul class="newsList">
      <li class="post" v-for="item in newsItems" :key="item">
        <div class="points">
           {{ item.points }}
        </div>
        <div>
          <p class="news-title">
              <a v-bind:href="item.url"> {{ item.title }} </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-bind:to="`/user/${item.user}`" target="blank" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>

      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  components :{
    ListItem,
  }
}
</script>

<style scoped>

</style>