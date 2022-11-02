
function setup () {
  createCanvas(windowWidth, windowHeight);
  fill(0, 0, 0);
  noStroke();
};

function draw() {
  background(240);

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

  for (let x = 0; x < width; x++) {

    //Random Dots
    let rY = random(height * 0.1, width * 0.3);
    stroke (255, 0, 0);
    ellipse (x, rY, 3);

    //Perlin Noise Dots (mapped)
    let n = noise(x * 0.01);
    let nY = map (n, 0, 1, height * 0.5, height * 0.9);
    stroke (0, 255, 0);
    ellipse (x, nY, 3);
  };

    //Perlin Noise Dots (not mapped)
    noFill();
    beginShape();
      var xOff = 0;
      for (let x = 0; x < width; x++) {
        stroke(0, 0, 255);
        var y = noise(xOff) * height;
        vertex(x,y);
        xOff += .002;
      };
    endShape();

  // noLoop();
};