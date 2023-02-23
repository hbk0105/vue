<template>
  <div>
    <div v-for="ask in ask" :key="ask">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js'

export default {
  data(){
    return {
       ask : []
    }
  },
  created(){
      fetchAskList()
      .then(res => this.ask = res.data)
      .catch(res => console.log(res))
  }
}
</script>

<style>

</style>