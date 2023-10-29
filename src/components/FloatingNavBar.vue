<template>
  <nav class="navbar">
    <div class="btn-div">
      <button class="nav-btn edge-btn" id="about">
        <Icon icon="bi:grid" class="icn-btn" />
      </button>

      <button class="nav-btn" id="timeline">
        <Icon icon="ic:outline-fingerprint" class="icn-btn" />
      </button>

      <button class="nav-btn" id="Tech Stack">
        <Icon
          icon="material-symbols:code-blocks-outline-rounded"
          class="icn-btn"
        />
      </button>

      <button class="nav-btn" id="Books">
        <Icon icon="bi:book" class="icn-btn" />
      </button>

      <button class="nav-btn edge-btn" id="Contact Me">
        <Icon
          icon="material-symbols:laptop-chromebook-outline"
          class="icn-btn"
        />
      </button>
    </div>
  </nav>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped>
.navbar {
  height: 275px;
  width: 60px;
  border-radius: 40px;
  background: #373737;
  border: #fff;
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

.icn-btn {
  height: 25px;
  width: 25px;
}
</style>
