let stars = [];
let maxStarAmount = 10000;

let speedSlider;
let speed;

let trailSlider;
let trailAmount;

let starAmountSlider;
let starAmount;

function setup() {
	createCanvas(windowWidth, windowHeight - 200);

	speedSliderText = createP('<p class="lead" style="color: white;">Speed</p>');
	//speedSliderText.position(30);
	speedSlider = createSlider(0, 20, 1);
	speedSlider.style('width', '200px');

	trailSliderText = createP('<p class="lead" style="color: white;">Trail Amount</p>');
	trailSlider = createSlider(0, 100, 80);
	trailSlider.style('width', '200px');

	trailSliderText = createP('<p class="lead" style="color: white;">Star Amount</p>');
	starAmountSlider = createSlider(0, maxStarAmount, 500);
	starAmountSlider.style('width', '200px');



	for (let i = 0; i < maxStarAmount; i++) {
		stars[i] = new Star();
	}
}

function draw() {

	speed = speedSlider.value();
	trailAmount = map(trailSlider.value(), 0, 100, 100, 0);
	starAmount = starAmountSlider.value();

	background(0, trailAmount);
	translate(width / 2, height / 2);

	for (let i = 0; i < starAmount; i++) {
		stars[i].update();
		stars[i].show();
	}

}