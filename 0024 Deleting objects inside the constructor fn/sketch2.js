//Click on the canvas to add new bubbles
//If you click on top of existing bubble it stops wobbling and a new one is also created on top.
//All bubbles fadeout and get spliced from array after a certain lifespan

var bubbles = [];
var howmany = 20;

//SETUP
function setup() {
	createCanvas(400,400);
	for(var i = howmany - 1; i >= 0; i--) {
		bubbles[i] = new Bubble(random(0,width), random(0,height)); //This is how we call the constructor function.
	}
}

//DRAW
function draw() {
	background(200);

	for (var i = bubbles.length - 1; i >= 0; i--) {
		bubbles[i].show();
		bubbles[i].wobble();
		bubbles[i].fadeout();

		if (bubbles[i].isFinished()) {
			bubbles.splice(i,1);
		}
	}
}

//MOUSEPressed
function mousePressed () {
	for (i=bubbles.length-1; i >= 0; i--) {
		bubbles[i].clicked();
	}

	var mousebubble = new Bubble (mouseX, mouseY);
	bubbles.push(mousebubble);
}