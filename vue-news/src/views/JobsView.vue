<template>
  <div>
    <div v-for="job in jobs" :key="job">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'
export default {
  data(){
    return {
      jobs : []
    }
  },
  created(){
      fetchJobsList()
      .then(res => this.jobs = res.data)
      .catch(res => console.log(res))
  }
}
</script>

<style>

</style>