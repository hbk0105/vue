<template>
  <div>
    <user-profile :info="userInfo">
      <!-- https://vuejs.org/guide/components/slots.html#named-slots -->
      <template v-slot:username>{{ userInfo.id }}</template>
      <template #time> {{ 'Joined' + userInfo.created }} , </template>
      <template #karma> {{ userInfo.karma }}</template>
    </user-profile>
    <!-- <p>{{ userInfo.id }}</p>
    <p>{{ userInfo.karma }}</p>
    <p>{{ userInfo.created }}</p> -->
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
export default {
  components : {
    UserProfile
  },
  computed : {
    userInfo(){
      return this.$store.state.user;
    }
  },
  created(){
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER',userName);
  },
}
</script>

<style>

</style>