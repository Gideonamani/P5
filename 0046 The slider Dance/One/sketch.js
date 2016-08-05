var x;
var slider;
var angle = 0;

function setup() {
	createCanvas(400,400);
	//noCanvas();

	slider = createSlider(0, 250, 100);
}

function draw() {
	//background(200);
	rect(40,40,320,320);

	x = sin(angle);

	slider.value(map(x, -1, 1, 0, 255));
	angle += 0.2; //random(-10, 10);

	background(slider.value());
}