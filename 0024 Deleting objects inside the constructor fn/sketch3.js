var bubbles = [];
var howmany = 20;

//SETUP
function setup() {
	createCanvas(400,400);
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
		bubbles[i].fadeout();

		if (bubbles[i].lifespan < 1) {
			bubbles.splice(i,1);
		}

	}


}

//MOUSEPressed
function mousePressed () {
	for (i=bubbles.length-1; i >= 0; i--) {
		bubbles[i].clicked();
	}
}