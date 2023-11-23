<template>
  <div>
    <div id="timeline-nav" class="title-card section">
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
  justify-content: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  padding-left: 30px;
  gap: 30px;
}
.title {
  font-size: clamp(1.3rem, 2.5vw, 40px);
  color: #ffffffa1;
  letter-spacing: 3px;
}

.title-decor {
  height: 3px;
  width: 20vw;
  background-color: #ffffffa1;
}

.timeline {
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin: 3em 3em;
}

.content {
  padding: 0;
  padding-left: 2em;
  padding-right: 6em;
  display: flex;
  flex-direction: column;
}

@media (max-width: 550px) {
  .content {
    padding: 0;
  }
  .timeline {
    margin: 2em;
  }
}
</style>
