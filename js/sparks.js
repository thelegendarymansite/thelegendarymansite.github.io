let sparks = [];

function setup() {
	createCanvas(windowWidth, windowHeight / 1.25);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight / 1.25);
}

function draw() {
	background(0, 40);

	if (mouseIsPressed) {
		for (let i = 0; i < 10; i++) {
			sparks.push(new Spark());
	
		}
	}

	for (let i = sparks.length - 1; i >= 0; i--) {
		sparks[i].update();
		sparks[i].show();


		if (sparks[i].finished()) {
			sparks.splice(i, 1);
		}

	}

	fill(255);
	text("Particles: " + str(sparks.length), 20, 20);

}


class Spark {
	constructor() {
		this.opacity = 255;
		this.red = random(200, 255);
		this.green = random(0, 150);
		this.x = mouseX;
		this.y = mouseY;
		this.vx = map(random(-100, 100), -100, 100, -1, 1) * 5;
		this.vy = map(random(-100, 100), -100, 100, -1, 1) * 5;
		this.bounced = false;
		this.gravity = 0.1;
	}

	finished() {
		return this.opacity <= 0;
	}

	update() {
		this.x += this.vx;
		this.y += this.vy;
		this.vy += this.gravity;

		// right
		if (this.x >= width && this.vx >= 0) {
			this.vx *= -1;
			this.bounced = true;
		}
		// left
		if (this.x <= 0 && this.vx <= 0) {
			this.vx *= -1;
			this.bounced = true;
		}
		// down
		if (this.y >= height - 8 && this.vy >= 0) {
			this.vy *= -1;
			this.bounced = true;
		}
		// up
		if (this.y <= 0 && this.vy <= 0) {
			this.vy *= -0.5;
			this.bounced = true;
		}
		if (this.bounced) {
			this.opacity -= 3;
		}
	}

	show() {
		fill(this.red, this.green, 0, this.opacity);
		noStroke();
		ellipse(this.x, this.y, 4);
	}

}