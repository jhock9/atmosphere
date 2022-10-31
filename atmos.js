let w = 800;
let h = 800;

function setup () {
  createCanvas(w, h);
  // select('#canvasBorder').size(w * 1.15, h * 1.112);
  noLoop();
  // frameRate(1);
};

function draw() {
  clear();
  function rainbowLines() {
    for (let i = 0; i < 500; i++) {
      for (let j = 0; j < 650; j++) {
        stroke(random(255), random(255), random(255));
        // strokeWeight(random(1, 5));
        line(0, j, i, j);
          // line(x, random(0, 5), x, random(645, 650));
      };
    };
  };
  // rainbowLines();

  function drawShape () {
    translate(width/2, height/2)
    // let c = stroke(random(255), random(255), random(255));
    let j = 0; 
    let sw =0;
    let v = 0;

    for (let i = random(200, 550); i > 0; i--) {
      noFill();
      // stroke(c, c, c, j++);
      stroke(255, 255, 255, j++);
      strokeWeight(sw = sw + .005);
      let t = map(noise(v), 0, 1, 0, i);
      let u = map(noise(v), 0, 1, 100, i);
      
      beginShape();
      for (let a = 0; a < HALF_PI; a += 0.02) {
        let r = map(noise(t,u), 0, 1, 0, i);
        let x = cos(a) * r;
        let y = sin(a) * r;
        vertex(x,y);
        t += 0.01;
      }

      for (let a = HALF_PI; a < PI; a += 0.02) {
        let r = map(noise(t,u), 0, 1, 0, i);
        let x = cos(a) * r;
        let y = sin(a) * r;
        vertex(x,y);
        u += 0.01;
      }

      for (let a = PI; a < HALF_PI * 3; a += 0.02) {
        let r = map(noise(t,u), 0, 1, 0, i);
        let x = cos(a) * r;
        let y = sin(a) * r;
        vertex(x,y);
        t -= 0.01;
      }

      for (let a = HALF_PI * 3 ; a < TWO_PI; a += 0.02) {
        let r = map(noise(t,u), 0, 1, 0, i);
        let x = cos(a) * r;
        let y = sin(a) * r;
        vertex(x,y);
        u -= 0.01;
      }
      endShape(CLOSE);
    };
  };
  drawShape();
};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}