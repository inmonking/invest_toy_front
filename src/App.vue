<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted:()=>{
    var options = {
      damping: '0.5'
    }
    window.Scrollbar.init(document.querySelector('#sidenav-collapse-main'),options);
    window.Scrollbar.init(document.querySelector('body'),options);
  }
}
</script>

<style>
@import "./assets/css/material-dashboard.css";
@import "./assets/css/nucleo-icons.css";

</style>
