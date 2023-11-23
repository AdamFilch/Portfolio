<template>
  <div id="tech-nav" class="section">
    <div class="title-card">
      <h1 class="title">WHAT I USE</h1>
      <box class="title-decor"></box>
    </div>

    <div class="technologies">
      <transition-group tag="ul" name="skills" class="technology-collection">
        <li
          class="skill"
          v-for="skill in filteredArray"
          :key="skill.skill_name"
          :style="{ color: colorDecider(skill.skill_type) }"
        >
          {{ skill.skill_name }}
        </li>
      </transition-group>
    </div>

    <div class="filter-section">
      <h1>Legend</h1>
      <div class="filters">
        <ul class="filter-collection">
          <button
            class="filter"
            v-for="filter_item in filter"
            :key="filter_item.filter"
            @click="filterMe(filter_item.type)"
            :style="{ color: colorDecider(filter_item.type) }"
          >
            {{ filter_item.type }}
          </button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { skillsData, filter } from "../../lib/myskills.js";
import colorDecider from "./ColorDecider";
import techFilter from "./TechFilter.js";
// import { ref } from "vue";
export default {
  data() {
    return {
      filterToggle: false,
      currentFilter: "",
      skillsData: skillsData,
      filteredArray: skillsData,
      filter: filter,
    };
  },
  methods: {
    colorDecider(type) {
      return colorDecider(type);
    },

    filterMe(newFilter) {
      if (this.currentFilter === "") {
        this.filterToggle = !this.filterToggle; // make true if the filter toggle is off meaning no filter in active
        this.currentFilter = newFilter;
        this.filteredArray = techFilter(newFilter);
      } else if (newFilter === this.currentFilter) {
        // if the user presses the same filter twice turn the toggle on
        this.filterToggle = !this.filterToggle;
        this.currentFilter = "";
        this.filteredArray = this.skillsData;
      } else {
        // else if the toggle is on but the user wants to use a new filter change the current filter
        this.currentFilter = newFilter;
        this.filteredArray = techFilter(newFilter);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/_shared.scss";

.title-card {
  justify-content: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
  gap: 30px;
  background-color: $dark-primary;
}
.title {
  font-size: 40px;
  letter-spacing: 3px;
  min-width: 260px;
}

#tech-nav {
  color: $dark-text-onbg;
}

.title-decor {
  height: 3px;
  width: 50%;
  background-color: $dark-text-onbg;
}

.technologies {
  margin: 4em 3em;
  min-height: 300px;
}

.technology-collection {
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 900px;
  gap: 20px;
}

.skill {
  font-size: 20px;
  padding: 8px 15px;

  list-style: none;
  border-style: solid;
  border-radius: 10px;
  transition: translate 0.2s;
  background-color: $dark-text-onbg;
}

.skill:hover {
  translate: 0px -10px;
  box-shadow: 0px 0px 10px 2px rgb(129, 129, 129);
}

.filter-section {
  margin: 0 3em;
  justify-content: center;
}

.filter-section h1 {
  justify-content: center;
  display: flex;
  font-size: 20px;
  margin-bottom: 15px;
  color: $dark-primary;
}

.filters {
  padding-bottom: 4em;
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
  padding: 8px 15px;

  background: transparent;
  border: 3px solid;
  border-radius: 10px;
  transition: translate 0.1s;
  background-color: $dark-text-onbg;
}

.filter:hover {
  translate: 0px -5px;
  box-shadow: 0px 0px 10px 2px rgb(129, 129, 129);
  cursor: pointer;
}

.skills-move,
.skills-enter-active,
.skills-leave-active {
  transition: all 0.5s ease;
}
.skills-enter-from,
.skills-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.skills-leave-active {
  position: absolute;
}
</style>
