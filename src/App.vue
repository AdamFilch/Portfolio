<script setup>
import HeroLanding from "./components/HeroLanding.vue";
import FloatingNavBar from "./components/FloatingNavBar.vue";
</script>

<template>
  <div class="app">
    <div class="nav">
      <FloatingNavBar />
    </div>
    <div class="hero-landing">
      <HeroLanding />
    </div>

    <div class="body"></div>
    <div class="footer"></div>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

.nav {
  position: fixed;
}
</style>
