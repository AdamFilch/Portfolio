<template>
  <div class="bgelm">
    <div id="perlinnoise"></div>
  </div>
</template>

<script>
// import Vue from "vue";
import { makeArt } from "./sketch";

export default {
  mounted() {
    makeArt("perlinnoise");
  },
};
</script>

<style lang="scss" scoped></style>
