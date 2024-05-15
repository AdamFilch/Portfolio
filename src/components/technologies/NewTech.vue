<template>
  <div class="main-grid">
    <li
      class="skill tooltip-area"
      v-for="(skill, index) in skillsData2"
      :key="skill.skill_name"
      @mousemove="updateTooltipPosition($event, index)"
    >
      <!-- {{ skill.logo }} -->
      <Icon :icon="skill.logo" class="logo" />
      <div id="tooltip" role="tooltip" :ref="'tooltip' + index">
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
      tooltips: [],
    };
  },
  mounted() {
    this.tooltips = this.skillsData2.map(
      (skill, index) => this.$refs[`tooltip${index}`],
    );
  },

  methods: {
    updateTooltipPosition(event, index) {
      const tooltip = this.tooltips[index];
      // console.log(tooltip[0].style);
      // Ensure tooltip reference is available
      // if (window.innerHeight > tooltip[0].offsetHeight + event.clientY) {

      // }
      const leftStart = event.clientX - tooltip[0].offsetWidth / 2;
      tooltip[0].style.top = `${event.pageY - window.innerHeight}px`;
      if (leftStart < 10) {
        // console.log("LOLISDOFSLFJ");
        const maxWid = 200 + leftStart;
        tooltip[0].style.maxWidth = `${maxWid}px`;
        tooltip[0].style.left = `${leftStart - leftStart}px`;
      } else {
        tooltip[0].style.left = `${leftStart}px`;
      }
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
  opacity: 0;
  pointer-events: none;
  color: red;
  transition: opacity ease-in-out 0.2s;
  display: flex;

  box-sizing: content-box;
  margin: 0 10px;
  flex-direction: column;
  overflow-wrap: break-word;
  text-align: center;
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
