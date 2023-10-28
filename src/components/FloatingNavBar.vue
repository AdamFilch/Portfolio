<template>
  <nav class="navbar">
    <button class="nav-btn edge-btn" id="about"></button>

    <button class="nav-btn" id="timeline"></button>

    <button class="nav-btn" id="Tech Stack"></button>

    <button class="nav-btn" id="Contact Me"></button>
    <button class="nav-btn edge-btn" id="Contact Me"></button>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar {
  height: 210px;
  width: 45px;
  border-radius: 20px;
  background: #b54949;
  display: grid;

  justify-content: center;
  align-items: center;
}

.nav-btn {
  height: 35px;
  width: 35px;
  border-radius: 10px;
  border: 0;
}

.edge-btn {
  border-radius: 100px;
}
</style>
