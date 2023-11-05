<template>
  <div id="contact-nav" class="contact-me-section">
    <div class="title-card">
      <box class="title-decor-null"></box>
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

        <div>
          <div>
            <div class="action-btns">
              <button class="email-btn">E-mail me</button>
              <button class="resume-btn">
                Resume
                <Icon
                  icon="bi:arrow-down-right"
                  style="color: #fff"
                  height="14px"
                />
              </button>
            </div>

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
      </div>
      <div class="img-box"></div>
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
}
.title {
  font-size: 40px;
  color: #ffffffa1;
  letter-spacing: 3px;
  min-width: 300px;
}

.title-decor {
  height: 3px;
  width: 60%;
  background-color: #ffffffa1;
}
.title-decor-null {
  height: 3px;
  width: 10%;
  background-color: #ffffff00;
}

.reach-out {
  font-size: 18px;
  color: #ffffffa1;
  display: flex;
  flex-direction: row;
  gap: 70px;
  justify-content: center;
  padding-top: 50px;
}

.reach-out-description {
  width: 600px;

  margin-top: 50px;
}
.reach-out-description h1 {
  color: $dark-primary;
}

.reach-out-description p {
  margin-top: 20px;
  margin-bottom: 30px;
}

.img-box {
  height: 350px;
  width: 300px;
  background-color: #fff;
  transition:
    translate 0.4s,
    box-shadow 0.4s;
}

.img-box:hover {
  height: 350px;
  width: 300px;
  background-color: #fff;
  translate: -5px -5px;
  box-shadow: 15px 15px 0px 1px rgb(129, 129, 129);
}

.action-btns {
  display: flex;
  gap: 20px;
}

.resume-btn {
  font-size: 18px;
  background-color: transparent;
  border-color: #fff;
  border-style: solid;
  border-radius: 7px;
  height: 40px;
  width: 150px;
  margin-left: 0px;
  margin-bottom: 20px;
  transition: transform 0.2s;
}

.resume-btn:hover {
  transform: scale(1.05);

  box-shadow: 0px 0px 10px 1px rgb(129, 129, 129);
}

.email-btn {
  font-size: 18px;
  background-color: transparent;
  border-color: #fff;
  border-style: solid;
  border-radius: 7px;
  height: 40px;
  width: 150px;
  margin-left: 0px;
  margin-bottom: 20px;
}

.email-btn:hover {
  transform: scale(1.05);
  transition: transform 0.2s;
  box-shadow: 0px 0px 10px 1px rgb(129, 129, 129);
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
  width: 150px;

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
