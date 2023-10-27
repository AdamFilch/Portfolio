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
      <div class="reachout-download">
        <button class="btn"><span>👔 Reach out to me</span></button>
        <button class="btn"><span>📝 Download my CV</span></button>
      </div>

      <button id="LinkedIn"></button>
      <button id="GitHub"></button>
      <button id="Instagram"></button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.intro {
  margin-bottom: 15px;
}
.intro h1 {
  font-size: 24px;
}
.intro h2 {
  font-size: 46px;
}

.intro p {
  text-align: left;
  font-size: 1.2em;
  width: 600px;
  margin-top: 1em;
}
.hero {
  display: flex;
  width: 650px;

  flex-direction: column;
  margin: 0 auto;
}

.contacts {
  margin-left: 30px;
}

.reachout-download {
  display: flex;
  gap: 0 20px;
}

.btn {
  height: 30px;
  widows: 100px;
}
</style>
