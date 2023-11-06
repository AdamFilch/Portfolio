<template>
  <div class="footer-section">
    <div class="footer-body">
      <div class="copyright">
        <p>
          // Made with
          <span class="footer-highlight"
            >Love
            <!-- <span class="tooltiptext">*Lub* *Dub*</span> -->
          </span>
          by Adam
        </p>
      </div>
      <div class="sign-off">
        <!-- <div></div> Some buttons in the right hand side of the footer -->
        <div>
          <p>
            "Power is given to those who
            <span class="footer-highlight"
              >dare<span v-on:mousemove="fn()" class="footer-book-tooltip">
                Fyodor Dostoyevsky's, Crime and Punishment
              </span></span
            >
            to lower themselves to pick it up" //
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// document.addEventListener("mousemove", fn, false);

export default {
  mounted() {
    const tooltips = document.querySelectorAll(".footer-book-tooltip");

    document.addEventListener("mousemove", (e) => {
      tooltips.forEach((tooltip) => {
        tooltip.style.left = e.pageX - 175 + "px";
        tooltip.style.top = e.pageY - 50 + "px";
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/shared.scss";

.footer-section {
  height: 50px;

  background-color: $dark-primary;
  margin-top: 80px;
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

.footer-highlight {
  color: #d11b1bfc;
  letter-spacing: 1px;
  font-weight: 700;
  text-shadow: 0px 0px 10px #d86b6b;
}

p {
  text-shadow: 0px 0px 5px #363434;
}

.footer-highlight:hover .footer-book-tooltip {
  display: block;
}

.footer-highlight {
  transition: display 0.2s;
}

.footer-book-tooltip {
  background-color: #fff;
  border-radius: 15px;
  font-size: 14px;
  padding: 5px;
  display: none;
  position: absolute;
  text-decoration: none;
  text-shadow: 0px 0px 10px #ffffff;
  color: #121212;
  transition: display 0.2s;
}
</style>
