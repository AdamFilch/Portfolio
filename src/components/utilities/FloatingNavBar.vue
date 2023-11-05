<template>
  <nav class="navbar">
    <nav class="btn-div">
      <a href="#home-nav" class="nav-btn edge-btn" id="about">
        <Icon icon="bi:grid" class="icn-btn" />
      </a>

      <a href="#timeline-nav" class="nav-btn" id="timeline">
        <Icon
          icon="ic:outline-fingerprint"
          class="icn-btn"
          style="color: #fff"
        />
      </a>

      <a href="#tech-nav" class="nav-btn" id="Tech Stack">
        <Icon
          icon="material-symbols:code-blocks-outline-rounded"
          class="icn-btn"
          style="color: #fff"
        />
      </a>

      <a href="#books-nav" class="nav-btn" id="Books">
        <Icon icon="bi:book" class="icn-btn" style="color: #fff" />
      </a>

      <a href="#contact-nav" class="nav-btn edge-btn" id="Contact Me">
        <Icon icon="bi:briefcase" class="icn-btn" />
      </a>
    </nav>
  </nav>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped>
@import "../../assets/shared.scss";
.navbar {
  height: 275px;
  width: 60px;
  border-radius: 40px;
  background: #373737;

  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-div {
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-items: center;
  align-items: center;
}

.nav-btn {
  height: 40px;
  width: 40px;
  border-radius: 10px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition:
    width 0.2s,
    height 0.2s,
    background-color 0.2s;
}

.nav-btn:hover {
  height: 50px;
  width: 50px;
  border-radius: 10px;
  border: 0;
  background-color: #444444;
}

.icn-btn {
  height: 25px;
  width: 25px;
}

.edge-btn {
  border-radius: 100px;
  color: #121212;
  background-color: #fff;
  transition:
    width 0.2s,
    height 0.2s,
    background-color 0.2s;
}

.edge-btn:hover {
  height: 50px;
  width: 50px;
  color: #121212;
  background-color: #fff;

  border-radius: 100px;
}
</style>
