let cols;
let rows;
let w;
let h;
let flying = 0;
let scale = 20;
let terrain = [];

// sliders
let rotationSlider;
let rotationSliderValue;


let flyingSlider;
let flyingSliderValue;

let xNoiseSlider;
let xNoiseSliderValue;

let yNoiseSlider;
let yNoiseSliderValue;

let positiveTerrainOffsetSlider;
let positiveTerrainOffsetSliderValue;
let negativeTerrainOffsetSlider;
let negativeTerrainOffsetSliderValue;

let heightSliderValue;





function setup() {

	var canvas = createCanvas(600, 500, WEBGL);
    canvas.parent('canvasForHTML');

	w = 1200;
	h = 1200;

	cols = w / scale;
	rows = h / scale;

	let speedSlider = document.getElementById("speedSlider");

	let xSlider = document.getElementById("xSlider");

	let ySlider = document.getElementById("ySlider");

	let posSlider = document.getElementById("posSlider");
	let negSlider = document.getElementById("negSlider");

	let rotateSlider = document.getElementById("rotateSlider");

	let heightSlider = document.getElementById("heightSlider");


	


}

function draw() {

	flyingSliderValue = map(speedSlider.value, 0, 100, 0, 0.2);
	xNoiseSliderValue = map(xSlider.value, 0, 100, 0, 0.5);
	yNoiseSliderValue = map(ySlider.value, 0, 100, 0, 0.5);
	positiveTerrainOffsetSliderValue = map(posSlider.value, 0, 100, 0, 800);
	negativeTerrainOffsetSliderValue = map(negSlider.value, 0, 100, 0, 800);
	rotationSliderValue = map(rotateSlider.value, 0, 100, 1, 10);
	heightSliderValue = map(heightSlider.value, 0, 100, 0, 500);




	flying -= flyingSliderValue;

	let yoff = 0;

	for (let y = 0; y < rows; y++) {
		terrain[y] = [];

		let xoff = flying;

		for (let x = 0; x < cols; x++) {
			terrain[y][x] = map(noise(xoff, yoff), 0, 1, -negativeTerrainOffsetSliderValue, positiveTerrainOffsetSliderValue);
			xoff += yNoiseSliderValue;
		}
		yoff += xNoiseSliderValue;
	}


	background(0);

	stroke(255);
	noFill();

	translate(-w / 2, heightSliderValue, -height * 1.5);
	
	rotateX(PI / rotationSliderValue);

	for (let y = 0; y < rows - 1; y++) {
		beginShape(TRIANGLE_STRIP);
		for (let x = 0; x < cols; x++) {
				
			vertex(x * scale, y * scale, terrain[x][y]);
			vertex(x * scale, (y + 1) * scale, terrain[x][y + 1]);

		}
		endShape();
	}
}