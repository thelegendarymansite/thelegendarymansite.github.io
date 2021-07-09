var xoff1 = 0;
var xoff2 = 10000;

var score = 0;


function setup() {

  createCanvas(600, 600);

  background(0);

}

function draw() {

  background(0);

  var x = map(noise(xoff1), 0, 1, 0, width);
  var y = map(noise(xoff2), 0, 1, 0, height);

  fill(255);
  stroke(255);
  ellipse(x, y, 50, 50);

  xoff1 += 0.01;
  xoff2 += 0.01;

  if (dist(mouseX, mouseY, x, y) <= 50) {
    score++;
  }

  textSize(60);
  text(score, 30, 60);



}
