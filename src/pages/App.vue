<script setup>
import AboutMe from "../components/about-me/AboutMe.vue";
import MyTimeline from "../components/timeline/MyTimeline.vue";
// import MyTechnologies from "../components/technologies/MyTechnologies.vue";
import ContactMe from "../components/contact-me/ContactMe.vue";
import TinyFooter from "../components/footer/TinyFooter.vue";
import MinimalNavBar from "../components/utilities/minimalNavBar.vue";
import HeroSection from "../components/sections/HeroSection.vue";
import TechSection from "../components/sections/TechSection.vue";

// const observer = new IntersectionObserver((entries) => )
</script>

<template>
  <div class="app section" id="#top">
    <div class="theme-tog"></div>
    <div class="nav">
      <MinimalNavBar />
    </div>

    <HeroSection class="hero-para" />
    <!-- <div class="lowkey">
      <BackgroundElement />
    </div>
    <div class="hero-landing">
      <HeroLanding />
    </div> -->

    <div class="body">
      <AboutMe />
      <MyTimeline />
      <TechSection />
      <ContactMe />
    </div>
    <div class="footer">
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
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 20px;
  transform: translate(-50%, -50%);
}
.hero-landing {
  height: 100vh;
  justify-content: center;
  display: grid;
  align-items: center;
  margin: 0 3em;
}

.hero-para {
  position: relative;
  z-index: 0;
}
.body {
  position: relative;
  overflow: hidden;

  z-index: 99;
  background-color: rgba(14, 26, 10, 1);
}

.footer {
  background-color: #000;
  // background-color: rgba(14, 26, 10, 1);
}
</style>
