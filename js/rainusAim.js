//let PI = 3.14159265358979323846;

var xoff1 = 0;
var xoff2 = 10000;

var score = 0;

var time = 0;


function setup() {

  createCanvas(600, 600);

  background(0);

  frameRate(60);

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
  fill(255);
  text(score, 30, height - 20);
  textSize(20);
  text("Rainus AimTrain 5000 v0.1", width / 3, height - 20);


  time += deltaTime / 1000;

  textSize(60);
  text("Time Left: " + floor(30 - time), width / 2.5, 60);

  if (time >= 30) {
    textSize(30);
    fill(255, 0, 0);
    text("FINAL SCORE: " + score, width / 4, 120);
    fill(255);
    text("Refresh page to restart", width / 4, 180);

    noLoop()
  }

}
