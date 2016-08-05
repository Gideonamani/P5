//If objects intersect eachother stop wobbling and fade away to extinction.

var bubbles = [];
var howmany = 13;

//SETUP
function setup() {
	createCanvas(400,400);

	for (var i = howmany - 1; i >= 0; i--) {
		bubbles[i] = new Bubble (random(0,300), random(0,300))
	}
	//frameRate(27);
}

//DRAW
function draw() {
	background(200);

	for (var b = bubbles.length - 1; b >= 0; b--) {
		bubbles[b].show();
		bubbles[b].wobble();
		//bubbles[b].showNumber(b);
		//bubbles[b].showNumberFromOne(b);
	}

	for (var i = bubbles.length - 1; i >= 0; i--) {
		for (var j = i - 1; j >= 0; j--) {
			if (bubbles[i].intersects(bubbles[j])){
				bubbles[i].stopWobble();
				bubbles[j].stopWobble();
				bubbles[i].fader();
				bubbles[j].fader();
			}
			//console.log('bubble '+ i + ' has the wobble switch ' + bubbles[i].canwobble);
			//sconsole.log('bubble '+ j + ' has the wobble switch ' + bubbles[j].canwobble);
		}
	}
}




//MOUSEPressed
function mousePressed () {
	for (i=bubbles.length-1; i >= 0; i--) {
		bubbles[i].moveApart();
		bubbles[i].restartWobble();
	}
}