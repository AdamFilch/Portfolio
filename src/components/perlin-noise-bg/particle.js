const PARTICLE_STROKE_ALPHA = 5;
const PARTICLE_STROKE_WEIGHT = 1;
const SPEED = 1;
const PARTICLE_COLOR = 210;

export function Particle(p, scl, cols) {
  this.pos = p.createVector(p.random(p.windowWidth), p.random(p.windowHeight));
  this.vel = p.createVector(0, 0);
  this.acc = p.createVector(0, 0);
  this.maxspeed = SPEED;
  this.prevPos = this.pos.copy();
  // const winHei = p.windowHeight + 400;

  this.update = function () {
    this.vel.add(this.acc);

    this.vel.limit(this.maxspeed);

    this.pos.add(this.vel);

    this.acc.mult(0);
  };

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.show = function () {
    p.stroke(PARTICLE_COLOR, PARTICLE_STROKE_ALPHA);

    p.strokeWeight(PARTICLE_STROKE_WEIGHT);

    p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y); // point(this.pos.x, this.pos.y);

    this.updatePrev();
  };

  this.updatePrev = function () {
    this.prevPos.x = this.pos.x;

    this.prevPos.y = this.pos.y;
  };

  this.edges = function () {
    if (this.pos.x > p.windowWidth) {
      this.pos.x = 0;

      this.updatePrev();
    }

    if (this.pos.x < 0) {
      this.pos.x = p.windowWidth;

      this.updatePrev();
    }

    if (this.pos.y > p.windowHeight) {
      this.pos.y = 0;

      this.updatePrev();
    }

    if (this.pos.y < 0) {
      this.pos.y = p.windowHeight;

      this.updatePrev();
    }
  };

  this.follow = function (vectors, scl) {
    const x = p.floor(this.pos.x / scl);

    const y = p.floor(this.pos.y / scl);

    const index = x + y * cols;

    const force = vectors[index];

    this.applyForce(force);
  };
}
