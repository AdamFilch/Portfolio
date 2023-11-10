<template>
  <div>
    <div id="timeline-nav" class="title-card section">
      <box class="title-decor-null"></box>
      <h1 class="title">WHERE I'VE BEEN</h1>
      <box class="title-decor"></box>
    </div>
    <div class="timeline">
      <div class="content">
        <div
          class="experience-sec"
          v-for="(experience, index) in experiencedata"
          :key="experience.index"
        >
          <TimelinePoint
            :experience="experience"
            :index="index"
            :lenArray="experiencedata.length - 1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { experiencedata } from "../../lib/myexperience";
import TimelinePoint from "./timelinePoint.vue";
</script>

<style lang="scss" scoped>
@import "../../assets/_shared.scss";

.title-card {
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
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
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.content {
  display: flex;
  flex-direction: column;
}
</style>
