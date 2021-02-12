<template>
  <div id="app">
   
    
    <Info/>
    <Skills/>
    <SoftSkills/>
  </div>
</template>

<script>

import SoftSkills from "./components/SoftSkills.vue"
import Skills from "./components/Skills.vue"
import Info from "./components/Info.vue"
export default {
  name: 'App',
  components: {
    
    Info,
    Skills,
    SoftSkills
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
