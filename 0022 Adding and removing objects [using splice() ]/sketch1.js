//On mouse click adds bubbles to the canvas at random coordinates.

var bubbles = [];
var howmany = 02;

//SETUP
function setup() {
	createCanvas(400,400);
	//background(200);
	for(var i = howmany - 1; i >= 0; i--) {
		bubbles[i] = new Bubble(); //This is how we call the constructor function.
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

function mousePressed() {
	bubbles.push(new Bubble());
}


//OTHER
function Bubble () {
	this.x = random(0,width),
	this.y = random(0,height),

	this.show = function() {
		stroke(random(0,255),random(0,200), random(0,200));
		noFill();
		//fill(100);
		ellipse(this.x, this.y, 23, 23);
	},

	this.wobble = function() {
		this.x += random(-1.5,1.5);
		this.y += random(-1,1);
	}
};