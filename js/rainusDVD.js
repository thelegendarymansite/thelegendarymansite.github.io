let x;
let y;

let xspeed;
let yspeed;

let dvd;

let r, g, b;

function preload() {
	dvd = loadImage("/js/images/rainusdvd.png");
}

function setup() {
	createCanvas(600, 600);
	x = random(width);
	y = random(height);
	xspeed = 1;
	yspeed = 1;
	pickColor();

}

function pickColor(){
	r = random(100, 256);
	g = random(100, 256);
	b = random(100, 256);

}


function draw() {

	background(0);

	tint(r, g, b);
	image(dvd, x, y);

	x += xspeed;
	y += yspeed;

	if (x + dvd.width >= width) {
		xspeed = -xspeed;
		x = width-dvd.width;
		pickColor();
	} else if (x <= 0) {
		xspeed = -xspeed;
		x = 0;
		pickColor();
	}

	if (y + dvd.height >= height) {
		yspeed = -yspeed;
		y = height - dvd.height;
		pickColor();
	} else if (y <= 0) {
		yspeed = -yspeed;
		y = 0;
		pickColor();
	}

}
