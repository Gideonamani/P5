//On mouse clicks, bubbles are added on the canvas at the mouse position.

//The for loop in the setup function adds bubbles on tot the canvas
//at random coordinates.


//The mousePressed function contains a push function that adds
//bubbles on the canvas using the mouseX and mouseY variables.

//GLOBAL Variables
var bubbles = [];
var howmany = 05;

//SETUP
function setup() {
	createCanvas(400,400);
	//background(200);
	for(var i = howmany - 1; i >= 0; i--) {
		bubbles[i] = new Bubble(random(0,width),random(0,height)); //This is how we call the constructor function.
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
	if (mouseX < width + 10 && mouseY < width + 10) {
		bubbles.push(new Bubble(mouseX,mouseY));
	}
}


//OTHER
function Bubble (x,y) {
	this.x = x,
	this.y = y,
	this.d = 22;

	this.lifespan = 255;

	this.show = function() {
		stroke(random(0,255),random(0,200), random(0,200));
		//noFill();
		fill(100, this.lifespan);
		ellipse(this.x, this.y, this.d, this.d);
	},

	this.wobble = function() {
		this.x += random(-1.5,1.5);
		this.y += random(-1,1);

		this.lifespan --;
	// 	if(this.d<60){
	// 		this.d++;
	// 	}else {this.d = 5;}
	}
};