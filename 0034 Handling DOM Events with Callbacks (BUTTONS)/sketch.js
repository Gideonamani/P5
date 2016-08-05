var button1;
var button2;

var x = 40;
var y = 40;

var r = 100;
var g = 90;
var b = 180;

var col;

function setup() {
	createCanvas(400,400);

	button1 = createButton("Make the rectangle move.");
	button2 = createButton("Make the rectangle change color")

	button1.mousePressed(move);
	button2.mousePressed(changeColor);
}

function draw() {
	background(200);
	col = color(r, g, b);
	fill(col);
	rect(x, y,320, 320);
}

function move () {
	x+=(random(-2, 2));
	y+=(random(-2, 2));
}

function changeColor () {
	r = random(200);
	g = random(100);
	b = random(100, 250);
}