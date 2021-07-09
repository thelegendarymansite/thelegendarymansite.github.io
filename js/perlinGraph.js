let width = 600;
let height = 600;
let num = 0;

let x = 0;

let PI = 3.14159265358979323846;



function setup() {

  createCanvas(width, height);

  background(0);

}

function draw() {

  //background(0, 2);

  stroke(255);
  strokeWeight(5);

  line(x, height, x, map(noise(num), 0, 1, height, 0));

  num += 0.1;

  if (x <= width) {
    x += 5;
  } else {
    x = 0;
    background(0);
  }

}
