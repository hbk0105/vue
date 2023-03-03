<template>
  <div id="app">
    <tool-bar></tool-bar>

      <router-view v-slot="{ Component }">
        <transition  name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>

  </div>
</template>
<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components : {
    ToolBar, // js 는 html --> tool-bar 로 인식
  },
  
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a.router-link-exact-active{
  text-decoration: underline;
}
a:hover{
    color: #42b883;
    text-decoration: underline;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
