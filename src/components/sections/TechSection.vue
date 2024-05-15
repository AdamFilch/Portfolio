<template>
  <div id="tech-nav" class="section">
    <div class="title-card">
      <h1 class="title">WHAT I USE</h1>
      <box class="title-decor"></box>
    </div>

    <div class="grid-tech">
      <NewTech />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NewTech from "../technologies/NewTech.vue";

export default defineComponent({
  components: { NewTech },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/_shared.scss";
.section {
  margin-bottom: 100px;
}

.title-card {
  justify-content: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
  padding-left: 30px;
  gap: 30px;
  background-color: $dark-primary;
  margin-bottom: 100px;
}
.title {
  font-size: clamp(1rem, 3vw, 40px);
  letter-spacing: 3px;
}

#tech-nav {
  color: $dark-text-onbg;
}

.title-decor {
  height: 3px;
  width: clamp(20%, 42%, 50%);
  background-color: $dark-text-onbg;
}

.grid-tech {
  justify-content: center;
  align-content: center;
  display: flex;
}
</style>
