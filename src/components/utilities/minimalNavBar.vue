<template>
  <nav class="navbar">
    <ul class="navlist">
      <li
        class="navitem2"
        selected="true"
        v-for="(section, index) in sections"
        :key="index"
      >
        <a class="navlink2" :href="section.sec_ref"></a>
        <span class="tooltip">{{ section.sec_name }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { sections } from "../../lib/sections.js";

// if current point index == current view scroll past
// then return the index
// if the index == current point index it is true so therefore it is chosen

const navLinkElmnts = ref([]);
const sectionElmnts = ref([]);

const currentSection = ref("home");

const handleScroll = () => {
  sectionElmnts.value.forEach((sectionEl) => {
    if (window.scrollY + 300 >= sectionEl.offsetTop) {
      currentSection.value = sectionEl.id;
    }
  });

  navLinkElmnts.value.forEach((navLinkEl) => {
    if (navLinkEl.href.includes(currentSection.value)) {
      navLinkEl.classList.add("active");
    } else {
      navLinkEl.classList.remove("active");
    }
  });
};

onMounted(() => {
  navLinkElmnts.value = document.querySelectorAll(".navlink2");
  sectionElmnts.value = document.querySelectorAll(".section");

  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  // Remove the scroll event listener when the component is unmounted
  window.removeEventListener("scroll", handleScroll);
});

// const selected = ref(0);
</script>

<style lang="scss" scoped>
@import "../../assets/shared.scss";

.tooltip {
  opacity: 0;
  display: none;
  position: absolute;
  left: 55px;
  top: 12px;
  transform: translate(-50%, -50%);
  font-size: 8px;
  width: 60px;
}

.navitem2 {
  list-style: none;
  height: 23px;
  width: 23px;
  display: flex;
  margin-bottom: 1px;
  position: relative;
  transition:
    transform 0.3s,
    display 0.3s,
    opacity 0.3s;
}
.navlink2 {
  margin: auto;
  height: 6px;
  aspect-ratio: 1;
  border-radius: 100%;
  background-color: #ffffffa1;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.navitem2:hover {
  transform: scale(2);
  .tooltip {
    display: inline-block;

    opacity: 1;
  }
}

.active {
  transform: scale(2);
  background-color: $dark-primary;
}
</style>
