<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components : {
    ToolBar, // js 는 html --> tool-bar 로 인식
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
