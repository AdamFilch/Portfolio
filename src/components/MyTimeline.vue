<template>
  <div>
    <div class="title-card">
      <box class="title-decor-null"></box>
      <h1 class="title">WHERE I'VE BEEN</h1>
      <box class="title-decor"></box>
    </div>

    <div class="timeline">
      <div class="tl-line"></div>
      <div class="content">
        <div class="tlp birth">
          <div class="point"></div>
          <div class="left body">
            <title></title>
            <p></p>
          </div>
          <div class="right">2003</div>
        </div>

        <div class="tlp intern-isatec">
          <div class="point"></div>
          <div class="right body">
            <title></title>
            <p></p>
          </div>
          <div class="left" style="justify-self: right">2003</div>
        </div>
        <div class="tlp parttime-credit">
          <div class="point"></div>
          <div class="left body">
            <title></title>
            <p></p>
          </div>
          <div class="right time">2003</div>
        </div>
        <div class="tlp graduated">
          <div class="point"></div>
          <div class="right body">
            <title></title>
            <p></p>
          </div>
          <div class="left time" style="justify-self: right">2003</div>
        </div>
        <div class="tlp next-step"></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.title-card {
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
}
.title {
  font-size: 40px;
  color: #ffffffa1;
  letter-spacing: 3px;
  min-width: 365px;
}

.title-decor {
  height: 3px;
  width: 50%;
  background-color: #ffffffa1;
}
.title-decor-null {
  height: 3px;
  width: 50%;
  background-color: #ffffff00;
}

.timeline {
  width: auto;
  height: 700px;
  display: flex;
  justify-content: center;
  margin-top: 100px;
}

.tl-line {
  height: 700px;
  width: 3px;
  left: 49.9%;
  background-color: #ffffffa1;
  position: absolute;
}

.point {
  height: 60px;
  width: 60px;
  background-color: #fff;
  border-radius: 100px;
  position: absolute;
  left: 0;
  right: 0;

  margin: -18px auto;
}

.tlp {
  display: grid;
  grid: "left right";
  column-gap: 130px;
  width: 900px;
  margin-bottom: 40px;
}

.left {
  grid-area: left;
}
.right {
  grid-area: right;
}

.body {
  border-style: solid;
  height: 200px;
}
</style>
