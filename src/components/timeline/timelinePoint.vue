<template>
  <div class="expr">
    <div class="point"></div>
    <div v-show="index !== lenArray" class="tl-line" />

    <div class="body">
      <div class="dateloc"></div>
      <h1 class="title">{{}}</h1>
      <h3 class="company"></h3>
      <p></p>
      <div class="documents"></div>
      <div class="skills"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    experience: {
      type: Object,
      default: () => ({}),
    },
    lenArray: Number,
    index: Number,
  },
};
</script>

<style lang="scss" scoped>
.expr {
  position: relative;
  padding-bottom: 30px;
}
.point {
  height: 50px;
  width: 50px;
  background-color: #fff;
  border-radius: 100px;
  position: absolute;
  right: -80px;
}

.body {
  border-style: solid;
  height: 200px;
  min-width: 600px;
}

.tl-line {
  height: 100%;
  width: 3px;
  position: absolute;
  right: -57px;
  background-color: #ffffffa1;
  position: absolute;
}
</style>
