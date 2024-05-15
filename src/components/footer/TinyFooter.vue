<template>
  <div class="footer-section">
    <span class="outer-slash">//</span>
    <div class="footer-body">
      <div class="copyright">
        <p>
          Made with
          <span class="love footer-highlight"
            >Love<span class="lub">*lub*</span>
            <span class="dub">*dub*</span>
          </span>
          by Adam
        </p>
      </div>
      <div class="sign-off">
        <p>
          "Power is given to those who
          <span class="tooltip-area" @mousemove="updateTooltipPosition">
            dare
            <!-- <span id="tooltip" role="tooltip" ref="tooltip">
              Fyodor Dostoyevsky's, Crime and Punishment
            </span> -->
          </span>
          to lower themselves to pick it up"
        </p>
      </div>
    </div>
    <span class="outer-slash">//</span>
  </div>
</template>

<script>
export default {
  // mounted() {
  //   // Ensure the tooltip is available after the component is mounted
  //   this.tooltip = this.$refs.tooltip;
  // },
  // methods: {
  //   updateTooltipPosition(event) {
  //     if (!this.tooltip) return;

  //     const tooltip = this.tooltip;
  //     const tooltipArea = event.currentTarget;
  //     const tooltipWidth = tooltip.offsetWidth;
  //     const tooltipHeight = tooltip.offsetHeight;
  //     const areaRect = tooltipArea.getBoundingClientRect();

  //     // Calculate the position ensuring it stays within the tooltip area and viewport
  //     let left = event.clientX - areaRect.left;
  //     let top = event.clientY - areaRect.top;

  //     if (left + tooltipWidth > areaRect.width) {
  //       left = areaRect.width - tooltipWidth;
  //     }

  //     if (top + tooltipHeight > areaRect.height) {
  //       top = areaRect.height - tooltipHeight;
  //     }

  //     tooltip.style.left = `${left}px`;
  //     tooltip.style.top = `${top}px`;
  //   },
  // },
  data() {
    return {
      tooltip: null,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/shared.scss";

.footer-section {
  min-height: 50px;
  background-color: $dark-primary;
  margin-top: 80px;
  padding: 10px 20px;
  justify-content: center;
  display: flex;
}

.footer-body {
  width: 1000px;
  justify-content: space-between;
  margin: auto;
  display: flex;
  color: #efefef;
}

p {
  text-shadow: 0px 0px 5px #363434;
  padding: 0px 10px;
  text-align: center;
}

.tooltip-area:hover #tooltip {
  opacity: 1;
}

.tooltip-area {
  color: #d11b1bfc;
  letter-spacing: 1px;
  font-weight: 700;
  text-shadow: 0px 0px 10px #d86b6b;
  position: relative;
}

#tooltip {
  opacity: 0;
  position: absolute;
  font-size: 14px;
  text-shadow: 0px 0px 10px 10px #000000;

  color: hotpink;
  transition: opacity 0.2s ease-in-out 0.3s;

  pointer-events: none;
  width: max-content;

  top: -40px;
  left: -120px;
}

.love {
  color: #d11b1bfc;
  letter-spacing: 1px;
  font-weight: 700;
  text-shadow: 0px 0px 10px #d86b6b;
  position: relative;
}

.dub {
  position: absolute;
  color: hotpink;
  opacity: 0;
  top: -40px;
  left: 30px;
  transition: opacity 0.3s ease-in-out 0.3s;
}

.lub {
  opacity: 0;
  position: absolute;
  color: hotpink;
  top: -40px;
  left: -40px;
  transition: opacity 0.3s ease-in-out;
}

.love:hover .lub {
  display: block;
  opacity: 1;
}
.love:hover .dub {
  display: block;
  opacity: 1;
}

.outer-slash {
  display: block;
  margin: auto;
}

@media (max-width: 700px) {
  .footer-body {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .inner-slash {
    display: none;
  }
  #tooltip {
    top: -70px;
  }
}
</style>
