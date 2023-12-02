<template>
  <div id="about-nav" class="section">
    <div class="title-card">
      <h1 class="title">WHO I AM</h1>
      <box class="title-decor"></box>
    </div>
    <div class="about-me">
      <div class="image">
        <img
          src="../../../2959.JPEG"
          width="100%"
          height="auto"
          class="img-box"
        />
      </div>
      <div class="content">
        <div class="cnt-body">
          <p>
            I am an <span>Indonesian Software Developer</span>, I am passionate
            in being able to build products. I am a reader, a gamer, and a
            humanitarean.
          </p>
          <p>
            I
            <span>grew a curiousity</span>
            in how devices understand the buttons I was pushing. In highschool I
            chose ICT IGCSE, and since then I continue to learn and understand
            the development of software and computer interaction.
          </p>
          <p>
            Today, with my acquired knowledge I <span>build apps</span>,
            <span>teach and demonstrate</span>, occasionally take advantage of
            opportunities in competitons, and enjoy the process of learning. I
            aim continue to grow and eventually branch and
            <span>lead a team of my own</span>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../assets/shared.scss";
.title-card {
  justify-content: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
  padding-left: 30px;
  gap: 30px;
  background-color: $dark-primary;
}
.title {
  color: $dark-text-onbg;
  font-size: clamp(1.3rem, 3vw, 40px);
  letter-spacing: 3px;
}

.title-decor {
  height: 3px;
  width: 20%;
  background-color: $dark-primary-variant;
}
.about-me {
  font-size: 18px;
  color: #ffffffa1;
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  align-items: center;
  margin: 8em 2em;
}

.image {
  max-width: 450px;
  display: flex;
  align-items: center;
}

.img-box {
  object-fit: contain;
  border: 4px solid $dark-primary-variant;
  transition:
    translate 0.4s,
    box-shadow 0.4s;
}

.img-box:hover {
  translate: -5px -5px;
  box-shadow: 10px 10px 0px 1px $dark-accent;
}

.content {
  max-width: 550px;
  font-size: clamp(0.8rem, 3vw, 18px);
}

.cnt-body {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.cnt-body span {
  color: #75ee56bd;
}

.cnt-body span:hover {
  color: #75ee56bd;
  border-radius: 2px;
  border-style: solid;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  transition: border 0.1s;
}

@media (max-width: 850px) {
  .about-me {
    flex-direction: column;
    margin: 3em 2em;
  }
}
</style>
