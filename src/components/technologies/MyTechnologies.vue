<template>
  <div id="tech-nav">
    <div class="title-card">
      <box class="title-decor-null"></box>
      <h1 class="title">WHAT I USE</h1>
      <box class="title-decor"></box>
    </div>

    <div class="technologies">
      <ul class="technology-collection">
        <li class="skill" v-for="skill in skillsData" :key="skill.skill_name">
          {{ skill.skill_name }}
        </li>
      </ul>
    </div>

    <div class="filter-section">
      <h1>Legend</h1>
      <div class="filters">
        <ul class="filter-collection">
          <button
            class="filter"
            v-for="filter_item in filter"
            :key="filter_item.filter"
          >
            {{ filter_item.type }}
          </button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { skillsData, filter } from "../../lib/myskills.js";
</script>

<style lang="scss" scoped>
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
  min-width: 260px;
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

.technologies {
  margin-top: 90px;
  justify-content: center;
  display: flex;
}

.technology-collection {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 900px;
  gap: 20px;
}
.skill {
  font-size: 22px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  list-style: none;
  border-style: solid;
  border-radius: 10px;
  transition: translate 0.2s;
}

.skill:hover {
  translate: 0px -10px;
  box-shadow: 0px 0px 10px 2px rgb(129, 129, 129);
}

.filter-section {
  margin-top: 90px;
  justify-content: center;
}

.filter-section h1 {
  justify-content: center;
  display: flex;
  font-size: 20px;
  margin-bottom: 15px;
  color: #75ee56bd;
}

.filters {
  justify-content: center;
  display: flex;
}

.filter-collection {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 700px;
  gap: 10px;
}

.filter {
  font-size: 18px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  list-style: none;
  background: transparent;
  border: 3px solid #fff;
  border-radius: 10px;
  transition: translate 0.1s;
}

.filter:hover {
  translate: 0px -5px;
  box-shadow: 0px 0px 10px 2px rgb(129, 129, 129);
}
</style>
