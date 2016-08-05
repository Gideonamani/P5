//Click on th wobbling objects to change their color and
//decay them (i.e randomly vary their diameter until they reach
//a certain threshold, at which they get spliced from the array).


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

	for (var i = bubbles.length-1; i >= 0; i--) {
		bubbles[i].show();
		bubbles[i].wobble();
		bubbles[i].decay();
		checkNdelete(i);
	}
}


//MOUSEPressed
function mousePressed () {
	for (i=bubbles.length-1; i >= 0; i--) {
		bubbles[i].clicked();
	}
}

//Check and Delete
function checkNdelete(i) {
		if(bubbles[i].diameter > 50){
			bubbles.splice(i,1);
		}
}