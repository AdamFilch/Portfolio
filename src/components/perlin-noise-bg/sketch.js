/* eslint-disable new-cap */
import p5 from "p5";
import { Particle } from "./particle";

function sketch(p) {
  const inc = 0.1;
  const scl = 15;
  let rows;
  let cols;

  let zoff = 0;

  const NUM_PARTCILES = particleCal();
  const MAGNITUDE = 0.03; // Changes how attached the particles are to the lines
  const ZOOF = 0.1; // Changes how fast the changes
  const BACKGROUND_COLOR = (14, 30, 12);

  const particles = [];
  let flowfield;

  function particleCal() {
    if (p.windowWidth < 414) {
      return 800;
    } else if (p.windowWidth < 375) {
      return 1200;
    } else if (p.windowWidth < 768) {
      return 1400;
    } else if (p.windowWidth < 1024) {
      return 1600;
    } else if (p.windowWidth < 1440) {
      return 2000;
    } else if (p.windowWidth < 2560) {
      return 3000;
    }
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(BACKGROUND_COLOR);

    cols = p.floor(p.windowWidth / scl);
    rows = p.floor(p.windowHeight / scl);

    flowfield = new Array(cols * rows);

    for (let i = 0; i < NUM_PARTCILES; i++) {
      particles[i] = new Particle(p, scl, cols);
    }
  };

  p.draw = function () {
    // background(255);
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        const index = x + y * cols;
        const angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 2;
        const v = p5.Vector.fromAngle(angle);
        v.setMag(MAGNITUDE);
        flowfield[index] = v;
        xoff += inc;

        // Drawing the lines for noise
        // stroke(0, 20);
        // push();
        // translate(x * scl, y * scl);
        // rotate(v.heading());
        // line(0, 0, scl, 0);
        // pop();
      }

      yoff += inc;
      zoff += ZOOF * 0.0001;
    }

    for (let i = 0; i < particles.length; i++) {
      particles[i].follow(flowfield, scl);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }
  };
  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
}

// const containerElmnt = document.getElementById("perlinnoise");
// new p5(sketch, containerElmnt);

export const makeArt = (perlinnoise) => {
  new p5(sketch, perlinnoise);
};
