<script setup>
import HeroLanding from "./components/HeroLanding.vue";
import FloatingNavBar from "./components/FloatingNavBar.vue";
import AboutMe from "./components/AboutMe.vue";
import MyTimeline from "./components/MyTimeline.vue";
import MyTechnologies from "./components/MyTechnologies.vue";
import ContactMe from "./components/ContactMe.vue";
import TinyFooter from "./components/footer/TinyFooter.vue";
</script>

<template>
  <div class="app">
    <div class="theme-tog"></div>
    <div class="nav">
      <FloatingNavBar />
    </div>
    <div class="hero-landing">
      <HeroLanding />
    </div>

    <div class="body">
      <AboutMe />
      <MyTimeline />
      <MyTechnologies />
    </div>
    <div class="footer">
      <ContactMe />
      <TinyFooter />
    </div>
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
  left: 3%;
}
.hero-landing {
  height: 750px;
  width: 100%;
  margin-top: 130px;
}

.footer {
  margin-top: 100px;
}
</style>
