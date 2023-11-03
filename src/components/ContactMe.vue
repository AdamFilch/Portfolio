<template>
  <div>
    <div class="title-card">
      <box class="title-decor-null"></box>
      <h1 class="title">CONTACT ME</h1>
      <box class="title-decor"></box>
    </div>
    <div></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.title-card {
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
}
.title {
  font-size: 40px;
  color: #ffffffa1;
  letter-spacing: 3px;
  min-width: 300px;
}

.title-decor {
  height: 3px;
  width: 65%;
  background-color: #ffffffa1;
}
.title-decor-null {
  height: 3px;
  width: 10%;
  background-color: #ffffff00;
}
</style>
