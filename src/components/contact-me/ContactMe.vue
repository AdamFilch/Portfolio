<template>
  <div id="contact-nav" class="contact-me-section section">
    <div class="title-card">
      <h1 class="title">CONTACT ME</h1>
      <box class="title-decor"></box>
    </div>
    <div class="reach-out">
      <div class="reach-out-description">
        <h1>Lets have a chat.</h1>
        <div>
          <p>
            Thanks for taking your time to get to know me. Reach out for any
            inquiries. My contact is open to anyone, and everyone. I hope to see
            you again! <span style="color: #fff">👋</span>
          </p>
        </div>

        <div class="action-btns">
          <a href="mailto:filchoiradam@gmail.com">
            <button onclick="" class="email-btn">E-mail me</button>
          </a>
          <a href="../../../Adam Filchoir CV.pdf" download>
            <button onclick="" class="resume-btn">
              Resume
              <Icon
                icon="bi:arrow-down-right"
                style="color: #fff"
                height="14px"
              />
            </button>
          </a>
        </div>

        <div class="btns">
          <!-- <div class="reachout-download">
              <a class="btn">👔 Reach out to me</button>
              <button class="btn">📝 Download my CV</button>
            </div> -->
          <div class="social-btns">
            <a
              href="https://www.linkedin.com/in/adamadamadam/"
              class="social-btn"
              id="LinkedIn"
            >
              <Icon
                icon="bxl:linkedin-square"
                style="font-size: 35px"
                class="sbtns linkedin-logo"
              />
            </a>
            <a
              href="https://github.com/AdamFilch"
              class="social-btn"
              id="GitHub"
            >
              <Icon
                icon="bxl:github"
                style="font-size: 35px"
                class="sbtns github-logo"
              />
            </a>
            <!-- <a class="social-btn" id="Instagram">
                  <Icon
                    icon="bxl:instagram"
                    style="font-size: 35px"
                    class="sbtns instagram-logo"
                  />
                </a> -->
          </div>
        </div>
      </div>
      <div class="image">
        <img
          src="../../../11519.JPEG"
          width="100%"
          height="auto"
          class="img-box"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped>
@import "../../assets/shared.scss";
.title-card {
  justify-content: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  padding: 20px 0px;
  padding-left: 30px;
}
.title {
  font-size: clamp(1.3rem, 3vw, 40px);

  color: #ffffffa1;
  letter-spacing: 3px;
}

.title-decor {
  height: 3px;
  width: clamp(20%, 55%, 60%);
  background-color: #ffffffa1;
}

.reach-out {
  font-size: 18px;
  color: #ffffffa1;
  display: grid;
  grid-auto-flow: column;
  gap: 50px;
  justify-content: center;
  margin: 1em 3em;
}

.reach-out-description {
  max-width: 600px;
}
.reach-out-description h1 {
  color: $dark-primary;
}

.reach-out-description p {
  margin-top: 20px;
  margin-bottom: 30px;
}
.image {
  max-width: 300px;
  height: 300px;
  height: auto;
  display: flex;
  align-items: center;
}

.img-box {
  width: 100%;
  height: 300px;
  object-fit: contain;

  transition:
    translate 0.4s,
    box-shadow 0.4s;
}

.img-box:hover {
  translate: -5px -5px;
  box-shadow: 10px 10px 0px 1px rgb(129, 129, 129);
}

.action-btns {
  color: #fff;

  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.resume-btn {
  font-size: 18px;
  background-color: transparent;

  border-radius: 7px;
  height: 40px;
  width: 150px;
  border: 2px solid #fff;

  transition: transform 0.2s;
}

.resume-btn:hover {
  transform: scale(1.05);
  cursor: pointer;
  box-shadow: 0px 0px 10px 1px rgb(129, 129, 129);
}

.email-btn {
  text-decoration: none;
  text-align: center;
  align-items: baseline;
  color: #fff;
  font-size: 18px;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 7px;
  height: 40px;
  width: 150px;
  transition: transform 0.2s;
}

.email-btn:hover {
  transform: scale(1.05);
  cursor: pointer;
  box-shadow: 0px 0px 10px 1px rgb(129, 129, 129);
}

.email-text {
  display: inline;
  align-self: center;
  padding: auto;
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
  display: flex;
  width: 110px;

  gap: 0 10px;
}

.github-logo:hover {
  color: rgb(139, 139, 139);
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
  display: flex;
  justify-items: center;
  color: #fff;
  transition:
    color 0.3s,
    height 0.3s,
    width 0.3s;
}

@media (max-width: 700px) {
  .img-box {
    display: none;
  }
  .reach-out {
    margin: 1em 3em;
    gap: 0px;
  }
}

@media (max-width: 630px) {
}
</style>
