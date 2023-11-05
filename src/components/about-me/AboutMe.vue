<template>
  <div>
    <div class="title-card">
      <h1 class="title">WHO I AM</h1>
      <box class="title-decor"></box>
    </div>
    <div class="about-me">
      <div class="image">
        <div class="img-box"></div>
        <img />
      </div>
      <div class="content">
        <div class="cnt-body">
          <p>
            I am an <span>Indonesian Software Developer</span>, I am passionate
            in being able to build products. I am a reader, a gamer, and a
            humanitarean.
          </p>
          <p>
            Throughout my childhood I had many with interactions with computers.
            I
            <span>grew a curiousity</span> in how devices understand the buttons
            I was pushing. In highschool I chose ICT IGCSE, and since then I
            continue to learn and understand the development of software and
            computer interaction.
          </p>
          <p>
            Today, with my acquired knowledge I <span>build apps</span>,
            <span>teach and demonstrate</span>, occasionally take advantage of
            opportunities in competitons, and enjoying the process of learning.
            I aim continue to grow and eventually branch and
            <span>lead a team of my own</span>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
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
}

.title-decor {
  height: 3px;
  width: 20%;
  background-color: #ffffffa1;
}
.about-me {
  height: 600px;
  font-size: 18px;
  color: #ffffffa1;
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  padding-top: 100px;
}

.img-box {
  height: 400px;
  width: 600px;
  background-color: #fff;
  transition:
    translate 0.4s,
    box-shadow 0.4s;
}

.img-box:hover {
  height: 400px;
  width: 600px;
  background-color: #fff;
  translate: -5px -5px;
  box-shadow: 15px 15px 0px 1px rgb(129, 129, 129);
}

.content {
  width: 550px;
}

.cnt-body {
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
</style>
