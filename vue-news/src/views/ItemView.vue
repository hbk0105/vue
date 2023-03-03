<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <user-profile :info="fetchItems">
        <template v-slot:username>

          <router-link v-bind:to="`/user/${fetchItems.user}`" target="_blank"> 
           {{ fetchItems.user }}
          </router-link>

        </template>
        <template #time> {{ 'Posted' + fetchItems.time_ago }}</template>
      </user-profile>
      <!-- <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>

        <div class="user-description">
          <router-link v-bind:to="`/user/${item.user}`" target="_blank"> 
            {{ item.user }} 
          </router-link>
          <div class="time">
            {{ item.time_ago }}
          </div>
        </div>
      </div> -->

    </section>
    <section>
         <h2> {{ fetchItems.title }}</h2>
    </section>
    <section>
      <!-- 댓글 -->
      <div v-html="fetchItems.content"></div>

      <!-- <div v-for="comments in fetchItems.comments" :key="comments">
        <i class="fas fa-user"></i>{{ comments.user }} | {{ comments.time_ago }} <div v-html="comments.content"></div>
      </div> -->

    </section>
<!--     
    <p>{{ item.title }}</p>
    <div></div>
    <p>{{ item .content}}</p>
    <div v-for="comments in item.comments" :key="comments">
        {{ comments.user }}
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';
export default {
  components: { UserProfile },
  computed : {
    // item(){
    //   return this.$store.state.item;
    // }
    ...mapGetters({fetchItems : 'fetchItems' })
    
  },
  created(){
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM',id);
  },
  
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user{
  font-size: 2.2rem;
}
.user-description{
  padding-left : 8px; 
}
.time{
  font-size: 0.7rem;
}
</style>