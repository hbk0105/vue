<!-- eslint-disable vue/return-in-computed-property -->
<template>
    <ul class="newsList">
      <li class="post" v-for="item in listItems" :key="item">
        <!-- 포인트 영역 -->
        <div class="points">
           {{ item.points || 0 }}
        </div>
        <!-- 기타정보 영역 -->
        <div>
            <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url" target="blank"> {{ item.title }} </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`/item/${item.id}`" class="link-text">{{ item.title }}</router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
                v-if="item.user"
                v-bind:to="`/user/${item.user}`" target="blank" class="link-text">{{ item.user }}
            </router-link>
              
            <a v-else :href="item.url" target="blank"> {{ item.domain }} </a>
          </small>
        </div>

      </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  created(){
    // const name = this.$route.name;
    // let actionName = '';
    // if(name === 'news'){
    //     actionName = 'FETCH_NEWS';
    // }else if(name === 'ask'){
    //     actionName = 'FETCH_ASK';
    // }else if(name === 'jobs'){
    //     actionName = 'FETCH_JOBS';
    // }
    // this.$store.dispatch(`${actionName}`);
  },
  computed : {
    // eslint-disable-next-line vue/return-in-computed-property
    // listItems() {
    //   return this.$store.state.list;
    //     const name = this.$route.name;
    //     if(name === 'news'){
    //       return this.$store.state.news;
    //     }else if(name === 'ask'){
    //        return this.$store.state.ask;
    //     }else if(name === 'jobs'){
    //         return this.$store.state.jobs;
    //     }
    // }
   

    ...mapGetters({listItems : 'fetchedList'})
        
      
  }
}
</script>


<style scoped>
.newsList{
  margin: 0;
  padding: 0;
}
.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points{
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.news-title{
  margin: 0;
}
.link-text{
  color: #828282;
}
</style>