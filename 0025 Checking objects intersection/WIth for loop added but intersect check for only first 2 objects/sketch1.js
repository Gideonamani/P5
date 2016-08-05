//If objects intersect eachother stop wobbling and fade away to extinction.

var bubbles = [];
var howmany = 20;

//SETUP
function setup() {
	createCanvas(400,400);

	for (var i = howmany; i >= 0; i--) {
		bubbles[i] = new Bubble (random(100, 150), random(100,150))
	}
	//bubbles[0] = new Bubble (160,200);
	//bubbles[1] = new Bubble (200,160);
}

//DRAW
function draw() {
	background(200);

	for (var i = bubbles.length - 1; i >= 0; i--) {
		bubbles[i].show();
	}






	// bubbles[0].show();
	// bubbles[1].show();

	if (bubbles[0].intersects(bubbles[1])){
		bubbles[0].stopWobble(0,0);
		bubbles[1].stopWobble(0,0);
		bubbles[0].fader();
		bubbles[1].fader();
	}else {
		bubbles[0].stopWobble(2,2);
		bubbles[1].stopWobble(2,2);
	}
	
	// var distance = dist(bubbles[0].x, bubbles[0].y, bubbles[1].x, bubbles[1].y);
	// if (distance < bubbles[0].d/2 + bubbles[1].d/2){		
	// }
}

//MOUSEPressed
function mousePressed () {
	for (i=bubbles.length-1; i >= 0; i--) {
		bubbles[i].clicked();
	}
	// bubbles[0].clicked();
	// bubbles[1].clicked();
}