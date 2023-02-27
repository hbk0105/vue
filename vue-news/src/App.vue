<template>
  <div id="app">
    <tool-bar></tool-bar>

      <RouterView :name="viewName" v-slot="{ Component, route }">
        <Transition name="slide-fade"
        mode="out-in">
          <div :key="route.name">  
            <component :is="Component"></component>
          </div>
        </Transition>
      </RouterView>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
