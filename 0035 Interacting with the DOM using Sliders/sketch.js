var button1;
var button2;

var x = 40;
var y = 40;

var r = 100;
var g = 90;
var b = 180;

var col;

var par;
var slider;
var input;

var canmove = false;

function setup() {
	createCanvas(400,400);

	button1 = createButton("Make the rectangle move.");
	button2 = createButton("Make the rectangle change color")

	button1.mousePressed(canmoveSwitch);
	button2.mousePressed(changeColor);
	
	par = createP('');
	
	slider = createSlider(0, 320, 50);

	createP('');
	input = createInput('Type something here.')
}

function draw() {
	background(200);
	col = color(r, g, b);
	fill(col);
	move();
	rect(x, y, slider.value(), slider.value());
	par.html(input.value());
}

function canmoveSwitch () {
	canmove = !canmove;
}

function move () {
	if (canmove) {
		x+=(random(-2, 2));
		y+=(random(-2, 2));
	}
}

function changeColor () {
	r = random(200);
	g = random(100);
	b = random(100, 250);
}