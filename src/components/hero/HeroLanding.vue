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

.content {
}

.reachout-download {
  display: flex;
  gap: 0 20px;

  max-height: 40px;
  max-width: 320px;
  justify-content: center;
  align-items: center;
}

.btns {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.btn {
  height: 40px;
  width: 150px;
  border-radius: 100pt;
  border: none;
  transition:
    width 0.2s,
    height 0.2s,
    box-shadow 0.2s;
  font-size: 0.2;
  font-weight: 600;
}

.btn:hover {
  height: 45px;
  width: 170px;
  background: #fff;
  color: #121212;
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
}

.social-btn {
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  transition:
    width 0.2s,
    height 0.2s;
}

.social-btn:hover {
  background-color: transparent;
  border: none;

  width: 45px;
  height: 45px;
}

.social-btns {
  justify-content: center;
  align-items: start;
  display: flex;
  width: 130px;

  gap: 0 10px;
}

.github-logo:hover {
  color: rgb(71, 71, 71);
  width: 49px;
  height: 49px;
}
.linkedin-logo:hover {
  color: #0a66c2;
  width: 49px;
  height: 49px;
}
.instagram-logo:hover {
  color: #e1306c;
  width: 49px;
  height: 49px;
}

.sbtns {
  color: #fff;
  transition:
    color 0.3s,
    height 0.3s,
    width 0.3s;
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
