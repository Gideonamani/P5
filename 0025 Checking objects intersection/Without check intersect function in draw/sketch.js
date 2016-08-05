//If objects intersect eachother stop wobbling and fade away to extinction.

var bubbles = [];
var howmany = 20;

//SETUP
function setup() {
	createCanvas(400,400);

	bubble1 = new Bubble (160,200);
	bubble2 = new Bubble (200,160);
}

//DRAW
function draw() {
	background(200);

	bubble1.show();
	bubble2.show();
	

	var distance = dist(bubble1.x, bubble1.y, bubble2.x, bubble2.y);
	if (distance < bubble1.d/2 + bubble2.d/2){
		bubble1.stopWobble(0,0);
		bubble2.stopWobble(0,0);
		bubble1.fader();
		bubble2.fader();
	}else {
		bubble1.stopWobble(2,2);
		bubble2.stopWobble(2,2);
	}
}

//MOUSEPressed
function mousePressed () {
	// for (i=bubbles.length-1; i >= 0; i--) {
	// 	bubbles[i].clicked();
	// }

	bubble1.clicked();
	bubble2.clicked();
}