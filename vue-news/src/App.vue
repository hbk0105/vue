<template>
  <div id="app">
    <tool-bar></tool-bar>

      <router-view v-slot="{ Component }">
        <transition  name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
<!--    -->
      <spinner :loading="this.$store.state.LoadingStatus"/>

  </div>
</template>
<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';

export default {
  components : {
    ToolBar, // js λ html --> tool-bar λ‘ μΈμ
    Spinner,
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
  transition: opacity 0.1s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
