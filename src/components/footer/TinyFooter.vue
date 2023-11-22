<template>
  <div class="footer-section">
    <!-- <span class="outer-slash">//</span> -->
    <div class="footer-body">
      <div class="copyright">
        <p>
          <span class="innerslash">//</span> Made with
          <span class="love footer-highlight"
            >Love
            <span class="lub">*lub*</span>
            <span class="dub">*dub*</span>
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
              >dare
              <!-- <span class="footer-book-tooltip">
                Fyodor Dostoyevsky's, Crime and Punishment
              </span> -->
            </span>
            to lower themselves to pick it up"
            <span class="inner-slash">//</span>
          </p>
        </div>
      </div>
    </div>
    <!-- <span class="outer-slash">//</span> -->
  </div>
</template>

<script>
// import DubDub from "./DubDub.vue";

export default {
  // mounted() {
  //   const tooltips = document.querySelectorAll(".footer-book-tooltip");
  //   document.addEventListener("mousemove", (e) => {
  //     tooltips.forEach((tooltip) => {
  //       tooltip.style.left = e.pageX - 175 + "px";
  //       tooltip.style.top = e.pageY - 55 + "px";
  //     });
  //   });
  // },
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
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.footer-book-tooltip {
  border-radius: 15px;
  opacity: 0;
  font-size: 14px;
  padding: 5px;
  position: absolute;
  text-shadow: 0px 0px 10px 10px #000000;
  color: hotpink;
  transition: opacity 0.3s ease-in;
  transition: opacity 0.15s ease-out;
}

.love {
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
</style>
