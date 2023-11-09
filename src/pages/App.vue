<script setup>
import HeroLanding from "../components/hero/HeroLanding.vue";
import FloatingNavBar from "../components/utilities/FloatingNavBar.vue";
import AboutMe from "../components/about-me/AboutMe.vue";
import MyTimeline from "../components/timeline/MyTimeline.vue";
import MyTechnologies from "../components/technologies/MyTechnologies.vue";
import ContactMe from "../components/contact-me/ContactMe.vue";
import TinyFooter from "../components/footer/TinyFooter.vue";
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
  scroll-behavior: smooth;
}

.nav {
  position: fixed;
  top: 35%;
  left: 3%;
}
.hero-landing {
  height: 100vh;
  top: 0;
}

.footer {
  margin-top: 100px;
}
</style>
