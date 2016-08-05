var x;
var slider;
var sliderN = 260;
var angle = 0;

var sliders = [];

function setup() {
	createCanvas(400,400);
	noCanvas();


	for (var i = 0; i < sliderN; i++) {
		sliders[i] = createSlider(0, 250, 100);
	}
}
	

function draw() {
	//rect(40,40,320,320);

	x = sin(angle);
	for (var i = 0; i < sliders.length; i++){
		sliders[i].value(map(x, -1, 1, 0, 255));
	}
	angle += 0.2; //random(-10, 10);

	//background(slider.value());
}