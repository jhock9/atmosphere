
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

  for (let x = 0; x < width; x+=3) {

    //Random Dots
    let rY = random(height * 0.1, width * 0.3);
    ellipse (x, rY, 3);

    //Perlin Noise Dots
    let n = noise(x * 0.01);
    let nY = map (n, 0, 1, height * 0.5, height * 0.9);
    ellipse (x, nY, 3);

  };

  noLoop();
};

windowResized();
  resizeCanvas(windowWidth, windowHeight);