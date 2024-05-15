<template>
  <div class="main-grid">
    <li
      class="skill tooltip-area"
      v-for="skill in skillsData2"
      :key="skill.skill_name"
      v-on:mousemove="updateTooltipPosition"
    >
      <!-- {{ skill.logo }} -->
      <Icon :icon="skill.logo" class="logo" />
      <div ref="tooltip" id="tooltip" role="tooltip" style="left: 0; top: 0">
        <div>{{ skill.skill_name }}</div>
        <div>{{ skill.skill_type }}</div>
        <div>{{ skill.years_experienced }} Years Experienced</div>
      </div>
    </li>
  </div>
</template>

<script lang="ts">
import { skillsData2 } from "../../lib/myskills.js";
import { Icon } from "@iconify/vue";

export default {
  components: { Icon },
  data() {
    return {
      skillsData2,
      tooltip: null,
    };
  },
  mounted() {
    this.tooltip = this.$refs.tooltip;
  },

  methods: {
    updateTooltipPosition(event) {
      const tooltip = this.tooltip;
      const style = tooltip.style;
      if (!this.tooltip) return; // Ensure tooltip reference is available
      if (window.innerHeight > this.tooltip.offsetHeight + event.clientY) {
        style.top = `${event.clientY}px`;
      }
      style.left = `${event.clientX}px`;
    },
  },
};
</script>

<style scoped>
.main-grid {
  margin: 0 15px;

  display: grid;
  grid-template-columns: repeat(4, minmax(40px, 200px));
  gap: 60px;
  justify-items: center;
  align-items: center;
}

.skill {
  list-style: none;
  display: grid;
  justify-items: center;
  align-items: center;
}
.tooltip-area {
  width: 50%;
  aspect-ratio: 1;
}

#tooltip {
  position: absolute;
  height: fit-content;
  opacity: 1;
  pointer-events: none;
  color: red;

  top: 0;
  left: 0;
}

.tooltip-area:hover #tooltip {
  opacity: 1;
}
.logo {
  font-size: 70px;
}

@media (max-width: 780px) {
  .main-grid {
    grid-template-columns: repeat(3, minmax(20px, 300px));
    gap: 40px;
  }
  .logo {
    font-size: 60px;
  }
}

@media (max-width: 620px) {
  .main-grid {
    grid-template-columns: repeat(3, minmax(20px, 150px));
    gap: 30px;
  }
  .logo {
    font-size: 50px;
  }
}

@media (max-width: 480px) {
  .main-grid {
    grid-template-columns: repeat(2, minmax(10px, 200px));
    gap: 16px;
  }
  .logo {
    font-size: 50px;
  }
}
</style>
