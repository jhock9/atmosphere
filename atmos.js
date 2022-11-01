let noiseMax = 2;
let s = 0; 
let sw = 0;
let zOff = 0;

function setup () {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noLoop();
};

function draw() {
  function drawShape () {
    translate(width / 2, height / 2)
    // let c = stroke(random(255), random(255), random(255));

    for (let i = noise(100, 200); i > 0; i-=10) {
      noFill();
      // stroke(c, c, c, j++);
      // stroke(255, 255, 255, s++);
      stroke(255);
      strokeWeight(sw += .05);
      // let t = map(noise(v), 0, 1, 0, i);
      // let u = map(noise(v), 0, 1, 100, i);
      
      beginShape();
      for (let a = 0; a < TWO_PI; a += 0.01) {
        let xOff = map(cos(a), -1, 1, 0, noiseMax);
        let yOff = map(sin(a), -1, 1, 0, noiseMax);
        let r = map(noise(xOff, yOff), 0, 1, 0, i);
        let x = r * cos(a);
        let y = r * sin(a);
        vertex(x,y);
      }
      endShape(CLOSE);
    };
  };
  drawShape();
};