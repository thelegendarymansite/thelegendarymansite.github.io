let planets = [];

let constantSpeedCheckbox;

function setup() {
	createCanvas(windowWidth, windowHeight - windowHeight / 8);
	constantSpeedCheckbox = createCheckbox('Constant Speed', false);
	constantSpeedCheckbox.changed(constantSpeedCheckboxCheck);

	frameRate(60);

	// for (let i = 0; i < 5; i++) {
	// 	planets[i] = new Planet();

	// }

	angleMode(DEGREES);
}

function constantSpeedCheckboxCheck() {
	if (constantSpeedCheckbox.checked()) {
		return true;
	}
	else {
		return false;
	}
}



function windowResized() {
	resizeCanvas(windowWidth, windowHeight - windowHeight / 8);
} 

function draw() {


	background(0);

	translate(width / 2, height / 2);

	for (let i in planets) {
		for (let j in planets) {
			stroke(120, 50);
			strokeWeight(1);
			line(planets[i].pos.x, planets[i].pos.y, planets[j].pos.x, planets[j].pos.y);
		}
		planets[i].update();
		planets[i].show();
		
	}

	fill(255, 255, 0);
	noStroke();
	ellipse(0, 0, 64);

}

function mousePressed() {
	if (mouseX <= width && mouseY <= height) {
		planets.push(new Planet(mouseX - width / 2, mouseY - height / 2));
	}
}

class Planet {
	constructor(x, y) {
		if (x && y) {
			this.pos = createVector(x, y);
			// this.pos.normalize();
			// this.pos.mult(dist(0, 0, x, y));

		}
		else {
			this.pos = p5.Vector.random2D();
			this.pos.mult(random(100, 300));
		}
		this.r = floor(random(16, 32));
		this.red = random(255);
		this.green = random(255);
		this.blue = random(255);
	}

	update() {

		if (constantSpeedCheckbox.checked()) {
			this.pos.rotate(1);
			
		}
		else {
			this.pos.rotate(100 / pow(this.pos.mag(), 1));

		}

	}

	show() {
		push();
		noFill();
		stroke(this.red, this.green, this.blue, 90);
		strokeWeight(2);
		line(0, 0, this.pos.x, this.pos.y);
		fill(this.red, this.green, this.blue);
		noStroke();
		ellipse(this.pos.x, this.pos.y, map(dist(0, 0, this.pos.x, this.pos.y), 0, width, 8, 64));

		pop();

	}
}
