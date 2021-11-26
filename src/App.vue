<template>
  <div id="app">
      <Navbar/>
      <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import './assets/styles/_variables.scss';

#app {
font-family: $fontFamily;
font-size: $fontSize;
}
</style>
