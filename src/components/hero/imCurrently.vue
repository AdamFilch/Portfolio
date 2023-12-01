<template>
  <div>
    <div class="wrap-collapsible">
      <button>. . .</button>
      <ul class="im-curr">
        <li>
          🧑‍💻 <span>I'm <span>currently looking for work</span></span>
        </li>
        <li>
          🌱 <span>I'm learning <span>VueJS</span></span>
        </li>
        <li>
          🔖
          <span>I'm Reading <span>No Longer Human</span></span>
        </li>
        <!-- <li>👔 Reach out to me <a href id="ContactHere">Here</a>!</li>
          <li>📝 Download my CV <a href id="DownloadCV">Here</a>!</li> -->
      </ul>
      <div class="btns">
        <!-- <div class="reachout-download">
          <button class="btn">👔 Reach out to me</button>
          <button class="btn">📝 Download my CV</button>
        </div> -->
        <div class="social-btns">
          <a
            href="https://www.linkedin.com/in/adamadamadam/"
            class="social-btn"
            id="LinkedIn "
          >
            <Icon
              icon="bxl:linkedin-square"
              style="font-size: 35px"
              class="sbtns linkedin-logo"
            />
          </a>
          <a href="https://github.com/AdamFilch" class="social-btn" id="GitHub">
            <Icon
              icon="bxl:github"
              style="font-size: 35px"
              class="sbtns github-logo"
            />
          </a>
          <!-- <a href="" class="social-btn" id="Instagram">
            <Icon
              icon="bxl:instagram"
              style="font-size: 35px"
              class="sbtns instagram-logo"
            />
          </a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped>
.wrap-collapsible ul {
  margin-left: 25px;

  font-size: 1em;
}

.wrap-collapsible ul span {
  color: #ffffffa1;
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

.im-curr {
  display: none;
}

.btns {
  margin-top: 20px;
  display: none;
  align-items: center;
}

@media (max-width: 768px) {
  .contacts ul {
    font-size: 0.8em;
  }
}
@media (max-width: 550px) {
  .contacts ul {
    font-size: 13px;
  }
}
</style>
