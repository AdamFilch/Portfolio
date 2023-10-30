<template>
  <div>
    <div class="title-card">
      <box class="title-decor-null"></box>
      <h1 class="title">WHERE I'VE BEEN</h1>
      <box class="title-decor"></box>
    </div>
    <div class="timeline"></div>
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
  min-width: 365px;
}

.title-decor {
  height: 3px;
  width: 50%;
  background-color: #ffffffa1;
}
.title-decor-null {
  height: 3px;
  width: 50%;
  background-color: #ffffff00;
}

.timeline {
  width: auto;
  height: 700px;
}
</style>
