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
        <li>🧑‍💻 I'm currenlty looking for work</li>
        <li>🌱 I'm currently learning VueJS</li>
        <li>🔖 I'm currently Reading Crime and Punishment by Dostoyevsky</li>
        <!-- <li>👔 Reach out to me <a href id="ContactHere">Here</a>!</li>
        <li>📝 Download my CV <a href id="DownloadCV">Here</a>!</li> -->
      </ul>
      <div class="btns">
        <div class="reachout-download">
          <button class="btn">👔 Reach out to me</button>
          <button class="btn">📝 Download my CV</button>
        </div>
        <div class="social-btns">
          <button class="social-btn" id="LinkedIn">
            <Icon
              icon="bxl:linkedin-square"
              style="font-size: 35px"
              class="linkedin-logo"
            />
          </button>
          <button class="social-btn" id="GitHub">
            <Icon
              icon="bxl:github"
              style="font-size: 35px"
              class="github-logo"
            />
          </button>
          <button class="social-btn" id="Instagram">
            <Icon
              icon="bxl:instagram"
              style="font-size: 35px"
              class="instagram-logo"
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
  margin-bottom: 15px;
}
.intro h1 {
  font-size: 24px;
}
.intro h2 {
  font-size: 45px;
}

.intro p {
  text-align: left;
  font-size: 1.1em;
  width: 600px;
  margin-top: 20px;
}
.hero {
  display: flex;
  width: 600px;

  flex-direction: column;
  margin: 0 auto;
}

.contacts ul {
  margin-left: 30px;
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
    height 0.2s;
  font-size: 0.2;
  font-weight: 600;
}

.btn:hover {
  height: 45px;
  width: 170px;
  background: #fff;
  color: #121212;
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
  align-items: center;
  max-height: 40px;
  display: flex;
  gap: 0 5px;
  margin-left: 20px;
}

.github-logo:hover {
  color: rgb(113, 113, 113);
  transition: color 0.2s;
}
.linkedin-logo:hover {
  color: #0a66c2;
  transition: color 0.2s;
}
.instagram-logo:hover {
  color: #e1306c;
  transition: color 0.2s;
}
</style>
