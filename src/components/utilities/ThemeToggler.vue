<template>
  <div>
    <p>{{ isDark }} Mode</p>
    <button @click="toggleTheme()"></button>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleTheme = useToggle(isDark);
</script>

<style lang="scss" scoped></style>
