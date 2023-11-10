<template>
  <nav class="navbar">
    <!-- <ul class="navlist">
      <li class="navitem" selected="true">
        <a class="navlink"> <span class="tooltip">Test</span> </a>
      </li>
      <li class="navitem" selected="true">
        <a class="navlink"> <span class="tooltip">Test</span> </a>
      </li>
      <li class="navitem" selected="true">
        <a class="navlink"> <span class="tooltip">Test</span> </a>
      </li>
      <li class="navitem" selected="true">
        <a class="navlink"> <span class="tooltip">Test</span> </a>
      </li>
      <li class="navitem" selected="true">
        <a class="navlink"> <span class="tooltip">Test</span> </a>
      </li>
    </ul> -->
    <!-- <ul class="navlist">
      <li
        class="navitem"
        selected="true"
        v-for="(section, index) in sections"
        :key="index"
      >
        <a class="navlink" href="{section.sec_ref}"></a>
        <span class="tooltip">{{ section.sec_name }}</span>
      </li>
    </ul> -->
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
import { ref } from "vue";
import { sections } from "../../lib/sections.js";

// if current point index == current view scroll past
// then return the index
// if the index == current point index it is true so therefore it is chosen
const selected = ref(0);
</script>

<style lang="scss" scoped>
@import "../../assets/shared.scss";
.navlist {
}
.navlink {
}

.navitem {
  margin: 20px;
  list-style: none;
  height: 7px;
  border-radius: 30px;
  aspect-ratio: 1;
  background-color: #ffffffa1;
  transition:
    transform 0.3s,
    display 0.3s,
    opacity 0.3s;
  position: relative;
}

.navitem:hover {
  transform: scale(1.6);
  .tooltip {
    display: inline-block;
    opacity: 1;
  }
}

.tooltip {
  opacity: 0;
  display: none;
  position: absolute;
  left: 55px;
  top: 12px;
  transform: translate(-50%, -50%);
  font-size: 10px;
  width: 60px;
}

.navlist {
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
  height: 7px;
  aspect-ratio: 1;
  border-radius: 100%;
  background-color: #ffffffa1;
}

.navitem2:hover {
  transform: scale(1.6);
  .tooltip {
    display: inline-block;
    opacity: 1;
  }
}
</style>
