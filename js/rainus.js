let drop;

let drops = [];

let dropAmount = 100;

function setup() {

  createCanvas(600, 600);

  for (var i = 0; i <= dropAmount; i++) {

    drops[i] = new Drop();

  }

}

class Drop {
  constructor(x, y, z, speed) {
    this.x = random(width);
    this.y = random(-600, 0);
    this.z = random(0, 4);
    this.size = map(this.z, 0, 4, 4, 1);
    this.speed = map(this.z, 0, 4, 10, 1);
    this.length = map(this.z, 0, 4, 30, 5);
    this.gravity = 0.05;
  }

  fall() {

    this.y += this.speed;
    this.speed += this.gravity;
    this.length += 0.1;

    if (this.y >= height) {
      this.x = random(width);
      this.y = random(-600, 0);
      this.z = random(0, 4);
      this.size = map(this.z, 0, 4, 4, 1);
      this.speed = map(this.z, 0, 4, 10, 1);
      this.length = map(this.z, 0, 4, 30, 5);

    }

  }

  show() {

    strokeWeight(this.size);
    line(this.x, this.y, this.x, this.y + this.length);

  }

}


function draw() {

  background(0, 50);

  stroke(0, 150, 255);

  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }


}
