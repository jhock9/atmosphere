let offMax = 2;
let s = 0; 
let sw = 0;
let zOff = 0;

function setup () {
  createCanvas(windowWidth, windowHeight);
  // noLoop();
};

function draw() {
  background(0);
  translate(width / 2, height / 2)
  noFill();
  stroke(255);
  // strokeWeight(sw += .05); 

  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.001) {
    let xOff = map(cos(a), -1, 1, 0, offMax);
    let yOff = map(sin(a), -1, 1, 0, offMax);
    let r = map(noise(xOff, yOff, zOff), 0, 1, 200, 300);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  
  endShape(CLOSE);
  zOff += 0.005;
};