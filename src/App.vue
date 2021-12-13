<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters({
      navOpen: 'isActiveMenu'
    })
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
    font-size: 16px;
  }
}
</style>
