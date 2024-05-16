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
      // Ensure tooltip reference is available
      if (window.innerHeight > tooltip[0].offsetHeight + event.clientY) {
        tooltip[0].style.top = `${event.pageY - window.innerHeight + 10}px`;
      }
      const leftStart = event.clientX - tooltip[0].offsetWidth / 2;

      if (leftStart < 15) {
        // console.log("LOLISDOFSLFJ");
        const maxWid = 210 + leftStart;
        tooltip[0].style.maxWidth = `${maxWid}px`;
        tooltip[0].style.left = `${leftStart - leftStart}px`;
      } else {
        tooltip[0].style.left = `${leftStart - 5}px`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/shared.scss";
.main-grid {
  margin: 0 25px;

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
  text-align: center;
}

#tooltip {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  color: #000;
  background-color: $dark-accent;
  padding: 5px 15px;
  border-radius: 20px;
  transition: opacity ease-in-out 0.3s;
  height: fit-content;
  margin: 0 10px;

  top: 0;
  left: 0;
}

.tooltip-area:hover #tooltip {
  opacity: 1;
  z-index: 99;
  overflow: hidden;
}
.tooltip-area:hover .logo {
  filter: saturate(100%);
}
.logo {
  transition: filter ease-in-out 0.3s;
  filter: saturate(10%);
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
