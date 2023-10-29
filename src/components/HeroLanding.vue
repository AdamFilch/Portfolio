<template>
  <div class="hero">
    <div class="intro">
      <h1>Hey there, ✌️</h1>

      <h2>I'm Adam Filchoir</h2>
      <div>
        <h2>A <span>{ROTATING ROLE}</span></h2>
      </div>

      <p>
        A nerd with a knack for tech that likes building things online with the
        help of open source tools and frameworks. I enjoy Programming and I am
        an avid Reader. Get to know me.
      </p>
    </div>
    <div class="contacts">
      <ul>
        <li>🧑‍💻 I'm currently looking for work</li>
        <li>🌱 I'm learning VueJS</li>
        <li>🔖 I'm Reading Crime and Punishment by Dostoyevsky</li>
        <!-- <li>👔 Reach out to me <a href id="ContactHere">Here</a>!</li>
        <li>📝 Download my CV <a href id="DownloadCV">Here</a>!</li> -->
      </ul>
      <div class="btns">
        <!-- <div class="reachout-download">
          <button class="btn">👔 Reach out to me</button>
          <button class="btn">📝 Download my CV</button>
        </div> -->
        <div class="social-btns">
          <button class="social-btn" id="LinkedIn">
            <Icon
              icon="bxl:linkedin-square"
              style="font-size: 35px"
              class="sbtns linkedin-logo"
            />
          </button>
          <button class="social-btn" id="GitHub">
            <Icon
              icon="bxl:github"
              style="font-size: 35px"
              class="sbtns github-logo"
            />
          </button>
          <button class="social-btn" id="Instagram">
            <Icon
              icon="bxl:instagram"
              style="font-size: 35px"
              class="sbtns instagram-logo"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped>
.intro {
  margin-bottom: 14px;
}
.intro h1 {
  font-size: 20px;
  margin-bottom: 15px;
}
.intro h2 {
  font-size: 40px;
}

.intro p {
  text-align: left;
  font-size: 18px;
  width: 500px;
  margin-top: 30px;
}
.hero {
  width: 500px;
  margin: auto;
}

.contacts ul {
  margin-left: 25px;

  font-size: 1em;
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
  width: 160px;

  gap: 0 10px;
}

.github-logo:hover {
  color: rgb(139, 139, 139);
  width: 49px;
  height: 49px;
  transition:
    color 0.3s,
    height 0.3s,
    width 0.3s;
}
.linkedin-logo:hover {
  color: #0a66c2;
  width: 49px;
  height: 49px;
  transition:
    color 0.3s,
    height 0.3s,
    width 0.3s;
}
.instagram-logo:hover {
  color: #e1306c;
  width: 49px;
  height: 49px;
  transition:
    color 0.3s,
    height 0.3s,
    width 0.3s;
}

.sbtns {
  color: #fff;
}
</style>
