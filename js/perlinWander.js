let PI = 3.14159265358979323846;

var xoff1 = 0;
var xoff2 = 10000;


function setup() {

  createCanvas(600, 600);

  background(0);

}

function draw() {

  background(0, 50);

  var x = map(noise(xoff1), 0, 1, 0, width);
  var y = map(noise(xoff2), 0, 1, 0, height);

  fill(255);
  stroke(255);
  ellipse(x, y, 24, 24);

  xoff1 += 0.01;
  xoff2 += 0.01;


}
