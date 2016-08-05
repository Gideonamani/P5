var x = 0;
var y = 200;
var diameter = 50;
var r = 218;
var g = 159;
var b = 221;

function setup() {
	createCanvas(600,400);
}

function draw() {
	//background
	background(r,g,b);

	//ellipse
	fill(200, 200, 200);
	ellipse(x,y,diameter,diameter);



	rect(40,40,350,350);
}