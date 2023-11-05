<template>
  <div class="footer-section">
    <div class="footer-body">
      <div class="copyright">
        <p>// Made with <span>Love</span> by Adam</p>
      </div>
      <div class="sign-off">
        <!-- <div></div> Some buttons in the right hand side of the footer -->
        <div>
          <p>
            "Power is given to those who <span>dare</span> to lower themselves
            to pick it up" //
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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

span {
  color: #d11b1bfc;
  letter-spacing: 1px;
  font-weight: 700;
  text-shadow: 0px 0px 10px #d86b6b;
}

p {
  text-shadow: 0px 0px 5px #363434;
}

.copyright {
}

.sign-off {
}
</style>
