var bwcol = 0;

//variable for blue color
var b;

//variable for green color
var g;

var parX;
var parY;

function setup() {
	createCanvas(600,400);
	parX = createP ();
	parY = createP ();
}

function draw() {
	bwcol = map(mouseX, 0, 600, 0, 255);

	b = map(mouseX, 0, width, 255, 0);
	g = map(mouseY, 0, height, 0, 255);


	//background
	background(100, b, g, bwcol);

	//rectangle
	noStroke();
	fill(200,20,60);
	rect(mouseX, height/2, 35, 35);

	//circle
	fill(20,60,200);
	ellipse(width/2, mouseY, 35, 35);

	//Changing the P tag to have the value of mouseX.
	parX.html("The value of mouseX is  " + mouseX);
	parY.html("The value of mouseY is  " + mouseY);
}