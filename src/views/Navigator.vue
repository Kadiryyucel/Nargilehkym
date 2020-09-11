<template>
  <div class="main">
    <navMenu></navMenu>
    <div class="main-box" style="display:flex">
      <div style="flex:1">
        <slot></slot>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import navMenu from "./NavMenu.vue";
export default {
  components: {
    navMenu,
  },
};
</script>
