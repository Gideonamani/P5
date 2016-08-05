//If objects intersect eachother stop wobbling and fade away to extinction.

var bubbles = [];
var howmany = 6;

//SETUP
function setup() {
	createCanvas(400,400);

	for (var i = howmany - 1; i >= 0; i--) {
		bubbles[i] = new Bubble (random(250,300), random(100,300))
	}
}

//DRAW
function draw() {
	background(200);

	for (var b = bubbles.length - 1; b >= 0; b--) {
		bubbles[b].show();
	}

	for (var i = bubbles.length - 1; i >= 0; i--) {
		for (var j = i - 1; j >= 0; j--) {
			if (bubbles[i].intersects(bubbles[j])){
				bubbles[i].stopWobble();
				bubbles[j].stopWobble();
				bubbles[i].fader();
				bubbles[j].fader();
			}
			else {
				bubbles[i].startWobble();
				bubbles[j].startWobble();
			}
		}
	}

	for (var w = bubbles.length - 1; w >= 0; w--) {
		bubbles[w].wobble(2,2);
	}
}




//MOUSEPressed
function mousePressed () {
	for (i=bubbles.length-1; i >= 0; i--) {
		bubbles[i].moveApart();
	}
}