<template>
  <div class="parallax">
    <!-- <div class="head-nav"></div> -->

    <div class="background">
      <BackgroundElement />
    </div>
    <div class="main-text">
      <HeroLanding />
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
  animation: parallax linear;
  animation-timeline: scroll();
}

.main-text {
  z-index: 2;
  --parallax-speed: 11;
  height: 100vh;
  justify-content: center;
  display: grid;
  align-items: center;
  margin: 0 3em;
}
.background {
  z-index: 1;
  --parallax-speed: 6;

  overflow: hidden;
}

@keyframes parallax {
  to {
    transform: translateY(calc(var(--parallax-speed) * 200px));
  }
}
</style>
