///REMOVE the SLOOWWW

var diam = 15;
var ascender = 0;

var howManyCircles = 4;

//Seting up the canvas
var w =400;
var h =400;
function setup () {
	createCanvas(w, h);
}


//Drawing the canvas
function draw (){
	background(200);
	oscEllipse(100, 200, 50,  circleNumber(1), 20 * 16);
	oscEllipse(200, 100, 250, circleNumber(2), 20 * 10);
	oscEllipse(140, 100, 50,  circleNumber(3), 20 * 08);
	oscEllipse(30,  150, 150, circleNumber(4), 20 * 06);
}


//Calculating where to position the circle
function circleNumber(n) {
	var x = n * w/howManyCircles - w/(2*howManyCircles);
	return x;
}


//Drawing the oscillating ellipses on the canvas
function oscEllipse(rNum, gNum, bNum, xDist, slow) {
	//waking it expand and contract
	var sizeIncr = 50;
	//var slowdown = 20*4;
	var increment = abs(sin(ascender/slow)) * sizeIncr ;
	ascender ++;

	//starting size of the circle
	var incrD = diam + increment;

	//drawing the iniatail circle
	fill(rNum, gNum, bNum);
	ellipse(xDist, 300, incrD, incrD);


	//console.log(incrD);
}


function rippleEllipses () {

}