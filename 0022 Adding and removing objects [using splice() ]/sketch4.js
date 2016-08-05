//On mouse clicks, bubbles are added on the canvas at the mouse position.

//The for loop in the setup function adds bubbles on tot the canvas
//at random coordinates.


//The mousePressed function contains a push function that adds
//bubbles on the canvas using the mouseX and mouseY variables.

//GLOBAL Variables
var bubbles = [];
var howmany = 30;

//SETUP
function setup() {
	createCanvas(400,400);
	//background(200);

	// var randomr = random(100,255) //caling this out gives all the object the same color because the setup runs ONCE only.
	// var randomb = random(100,255)
	// var randomg = random(100,255)

	for(var i = howmany - 1; i >= 0; i--) {
		var randomr = random(0,255)
		var randomg = random(100,255)
		var randomb= random(100,255)
		bubbles[i] = new Bubble(random(0,width),random(0,height), randomr, randomg, randomb); //This is how we call the constructor function.
	}
}

//DRAW
function draw() {
	background(200);
	for (var i = bubbles.length - 1; i >= 0; i--) {
		bubbles[i].show();
		bubbles[i].wobble();
	}
}

//Comment in/out either the mouseDragged or mousePressed to see the diff.
function mouseDragged() {
	if (mouseX < width + 10 && mouseY < width + 10) {
		var randombw = random(50,255);
		bubbles.push(new Bubble(mouseX,mouseY, randombw, randombw, randombw));
	}
}

function keyPressed() {
	bubbles.splice(0,5);
}

//OTHER
function Bubble (x, y, r, g, b) {
	this.x = x;
	this.y = y;

	//bubble's color
	this.r = r;
	this.g = g;
	this.b = b;

	this.show = function() {
		stroke(random(0,255),random(0,200), random(0,200));
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, 23, 23);
	};

	this.wobble = function() {
		this.x += random(-1.5,1.5);
		this.y += random(-1,1);
	}
};