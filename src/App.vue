<template>
  <div id="app" :class="{ 'scroll-of': showMenu }">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  computed: {
    showMenu() {
      return this.$store.state.isActiveMenu;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles/_variables.scss";

#app {
  font-family: $fontFamily;
  font-size: $fontSize;
}

@media only screen and (min-width: 75rem) {
  #app {
    font-size: 20px;
  }
}
</style>
