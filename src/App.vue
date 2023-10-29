<script setup>
import HeroLanding from "./components/HeroLanding.vue";
import FloatingNavBar from "./components/FloatingNavBar.vue";
import AboutMe from "./components/AboutMe.vue";
</script>

<template>
  <div class="app">
    <div class="nav">
      <FloatingNavBar />
    </div>
    <div class="hero-landing">
      <HeroLanding />
    </div>

    <div class="body">
      <AboutMe />
    </div>
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
  top: 35%;
  left: 5%;
}
.hero-landing {
  height: 600px;
  width: 100%;
  padding-top: 100px;
}
</style>
