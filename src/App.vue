<template>
  <div id="app">
    <app-header/>
    <router-view></router-view>
    <particlesJS/>
  </div>
</template>

<script>
import particlesJS from '@/components/particlesJS.vue'
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
     'app-header': Header,
     'particlesJS': particlesJS
   },
  data(){
    return {
    }
  },

}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
