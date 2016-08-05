var x;
var slider;
var sliderN = 260;
var angle = 0;

var sliders = [];

function setup() {
	createCanvas(400,400);
	noCanvas();


	for (var i = 0; i < sliderN; i++) {
		sliders[i] = createSlider(0, 250, 45);
	}
}
	

function draw() {
	//rect(40,40,320,320);
	speed = sliders[0].value();

	var offset = 0;
	for (var i = 1; i < sliders.length; i++){
		x = sin(angle + offset);
		sliders[i].value(map(x, -1, 1, 0, 255));
		offset += map(speed, 0, 250, 0.00, 0.10); //0.02;
	}
	angle += 0.2; //random(-10, 10);

	//background(slider.value());
}