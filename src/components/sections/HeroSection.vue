<template>
  <div class="parallax">
    <!-- <div class="head-nav"></div> -->

    <div class="background">
      <!-- <BackgroundElement /> -->
    </div>
    <div class="main-text">
      <!-- <HeroLanding /> -->
    </div>
    <!-- <div class="foreground"></div>
    <div class="accessories"></div> -->
  </div>
</template>

<script setup>
import HeroLanding from "../hero/HeroLanding.vue";
import BackgroundElement from "../perlin-noise-bg/backgroundElement.vue";
</script>

<style lang="scss" scoped>
.parallax {
  display: grid;
  grid-template-areas: "stack";
}

.parallax > * {
  grid-area: stack;
}

.main-text {
  height: 100vh;
  justify-content: center;
  display: grid;
  align-items: center;
  margin: 0 3em;
}

@keyframes parallax {
  to {
  }
}
</style>
