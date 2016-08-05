//If objects intersect eachother stop wobbling and fade away to extinction.

var bubbles = [];
var howmany = 100;

//SETUP
function setup() {
	createCanvas(400,400);

	for (var i = howmany; i >= 0; i--) {
		bubbles[i] = new Bubble (random(400), random(400))
	}
}

//DRAW
function draw() {
	background(200);

	for (var i = bubbles.length - 1; i >= 0; i--) {
		bubbles[i].show();
		for (var j = i-1; j >= 0; j--) {
			if ( bubbles[i].intersects(bubbles[j])){
				bubbles[i].wobble(2,2);
				bubbles[j].wobble(2,2);
				bubbles[i].fader();
				bubbles[j].fader();
			}else {
				// bubbles[i].wobble();
				//bubbles[j].wobble();
			}
		}
	}
}

//MOUSEPressed
function mousePressed () {
	for (i=bubbles.length-1; i >= 0; i--) {
		bubbles[i].moveApart();
	}
}