<template>
  <div class="hero section" id="home-nav">
    <div class="intro">
      <h1 class="hey-there">Hey there, <span style="color: #fff">✌️</span></h1>
      <div class="me">
        <h2>I'm Adam Filchoir</h2>
        <div>
          <h2>A <span>Fullstack Developer.</span></h2>
        </div>
      </div>

      <p>
        A nerd with a knack for tech, I likes building things online with the
        help of open source tools and frameworks. Oh and, I also read, like, a
        lot.
        <a href="#about-nav" class="get-to-know"> Get to know me </a>
        !
      </p>
    </div>
    <div class="content">
      <imCurrently />
    </div>
  </div>
</template>

<script>
import imCurrently from "./imCurrently.vue";

export default {
  methods: {
    toggleCont() {
      this.display = !this.display;
    },
  },
  components: {
    imCurrently,
  },
  data() {
    return {
      display: false,
      windowWidth: window.innerWidth,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/shared.scss";

.hey-there {
  color: $dark-primary;
}

.intro {
  margin-bottom: 14px;
}
.intro h1 {
  font-size: 20px;
  margin-bottom: 14px;
  text-shadow:
    -3px 3px 2px #121212,
    -3px 3px 2px #121212;
}
.intro h2 {
  font-size: 52px;
  line-height: 110%;
  text-shadow:
    -5px 5px 2px #121212,
    -5px 4px 2px #121212;
}

.intro p {
  text-align: left;
  font-size: 18px;
  color: #ffffffac;

  margin-top: 25px;
  text-shadow:
    1x 0px 1px $dark-text-onbg,
    1px 0px 1px $dark-text-onbg;
}

.get-to-know {
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
  border: none;
  color: #ffffffa1;
  text-decoration: underline 0.15em rgba(236, 0, 0, 0);
  position: relative;
  text-underline-offset: 0px;
  transition:
    text-decoration-color 0.3s,
    text-underline-offset 0.3s;
}

.active,
.get-to-know:hover {
  color: $dark-primary;
  text-underline-offset: 8px;
  text-decoration-color: $dark-primary;
}

.hero {
  max-width: 600px;
}

@media (max-width: 768px) {
  .intro h1 {
    font-size: 16px;
  }
  .intro h2 {
    font-size: 40px;
  }
  .intro p {
    font-size: 16px;
  }

  .get-to-know {
    font-size: 18px;
  }
}
@media (max-width: 550px) {
  .intro h1 {
    font-size: 14px;
  }
  .intro h2 {
    font-size: 28px;
  }
  .intro p {
    margin-top: 10px;
    font-size: 13px;
  }

  .get-to-know {
    font-size: 15px;
  }
}
</style>
