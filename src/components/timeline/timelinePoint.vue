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
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}
.body:hover {
  transform: scale(1.03);
  box-shadow: 0px 0px 8px 1px #fff;
}

.tl-line {
  height: 100%;
  width: 3px;
  right: -57px;
  background-color: #ffffffa1;
  position: absolute;
}

.description {
  margin-inline: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.description li {
  margin-top: 8px;
}

.skills {
  display: flex;
  column-gap: 20px;
  color: $dark-accent;
  opacity: 1;
}
h1 {
  color: $dark-primary;
}

@media (max-width: 600px) {
  .point {
    display: none;
  }
  .tl-line {
    height: 80%;
    width: 3px;
    top: 55px;

    right: -18px;
    background-color: #ffffffa1;
    position: absolute;
  }
  .year {
    position: absolute;
    right: -27px;
    top: -2px;
    width: 20px;
    word-wrap: break-word;
  }
  .body:hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 8px 1px #fff;
  }

  h1 {
    color: $dark-primary;
    font-size: 1.4em;
  }
  h3 {
    font-size: 1em;
  }
  h4,
  .skills {
    font-size: 0.85em;
  }
  li {
    font-size: 0.8em;
  }
}
</style>
