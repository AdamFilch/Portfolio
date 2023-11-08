<template>
  <div class="expr">
    <div class="point"></div>
    <div v-show="index !== lenArray" class="tl-line" />
    <span class="year">{{ experience.year }}</span>
    <div class="body">
      <div class="type-dur">
        <h4 class="company">{{ experience.type }}</h4>
        <h4 class="duration">
          {{ experience.startMonth }} <span>-</span> {{ experience.endMonth }}
        </h4>
      </div>

      <div class="dateloc">
        <p></p>
      </div>
      <div></div>
      <h1 class="title">{{ experience.title }}</h1>
      <h3 class="company">{{ experience.company }}</h3>
      <ul class="description">
        <li>
          Worked as a bloa abladh blahs, did so and so, recieved this and that,
          recognised for so and so
        </li>
        <li>
          Worked as a bloa abladh blahs, did so and so, recieved this and that,
          recognised for so and so
        </li>
        <li>
          Worked as a bloa abladh blahs, did so and so, recieved this and that,
          recognised for so and so
        </li>
      </ul>
      <div class="documents"></div>
      <div class="skills">
        <span class="skill" v-for="skill in experience.skills" :key="skill">{{
          skill
        }}</span>
      </div>
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
@import "../../assets/shared.scss";
.expr {
  position: relative;
  padding-bottom: 30px;
  color: #ffffffa1;
}
.point {
  height: 50px;
  width: 50px;
  background-color: #fff;
  border-radius: 100px;
  position: absolute;
  right: -80px;
}

.year {
  position: absolute;
  right: -130px;
  top: 15px;
}

.type-dur {
  display: flex;
  justify-content: space-between;
}

.body {
  border: 2px solid #fff;
  max-width: 600px;
  padding: 10px;
}

.tl-line {
  height: 100%;
  width: 3px;
  position: absolute;
  right: -57px;
  background-color: #ffffffa1;
  position: absolute;
}

.description {
  margin-inline: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.skills {
  display: flex;
  column-gap: 20px;
  color: $dark-primary;
  opacity: 0.5;
}

h1 {
  color: $dark-primary;
}
</style>
