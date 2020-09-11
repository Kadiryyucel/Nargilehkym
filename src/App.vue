<template>
  <div id="app">
    <navigator>
      <router-view />
    </navigator>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f8b500;
  background-color: #f7f7f7 !important;
}
</style>

<script>
import navigator from "./views/Navigator";
export default {
  components: {
    navigator
  },
};
</script>