<template>
  <div class="in" id="perlinnoise"></div>
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

<style lang="scss" scoped>
.in {
  overflow: hidden;
  margin: 0;
  padding: 0;
}
</style>
