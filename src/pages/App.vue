<script setup>
import HeroLanding from "../components/hero/HeroLanding.vue";
import FloatingNavBar from "../components/utilities/FloatingNavBar.vue";
import AboutMe from "../components/about-me/AboutMe.vue";
import MyTimeline from "../components/timeline/MyTimeline.vue";
import MyTechnologies from "../components/technologies/MyTechnologies.vue";
import ContactMe from "../components/contact-me/ContactMe.vue";
import TinyFooter from "../components/footer/TinyFooter.vue";
import MinimalNavBar from "../components/utilities/minimalNavBar.vue";
</script>

<template>
  <div class="app">
    <div class="theme-tog"></div>
    <div class="nav">
      <MinimalNavBar />
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
  top: 50%;
  left: 2%;
  transform: translate(-50%, -50%);
}
.hero-landing {
  height: 100vh;
  justify-content: center;
  display: grid;
  align-items: center;
  margin: 0 3em;
}

.footer {
  margin-top: 100px;
}
</style>
