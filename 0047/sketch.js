// LOADING ANIMATION
var diam = 15;
var ascender = 0;

var howManyCircles = 5;

//Seting up the canvas
var w =600;
var h =400;
function setup () {
	createCanvas(w, h);
}


//Drawing the canvas
function draw (){
	background(200);
	oscEllipse(100, 200, 50,  circleNumber(1), 1);
	oscEllipse(200, 100, 250, circleNumber(2), 2);
	oscEllipse(140, 100, 50,  circleNumber(3), 3);
	oscEllipse(30,  150, 150, circleNumber(4), 4);
	oscEllipse(200,  150, 150,circleNumber(5), 5);
}


//Calculating where to position the circle
function circleNumber(n) {
	var x = n * w/howManyCircles - w/(2*howManyCircles);
	return x;
}


//Drawing the oscillating ellipses on the canvas
function oscEllipse(rNum, gNum, bNum, xDist, delay) {
	var slow = 20 * 16;

	//waking it expand and contract
	var sizeIncr = 110;
	//var slowdown = 20*4;
	ascender ++;

	var delayAmt = 52;
	var delayAggr = (delay-1) * delayAmt;
	var ascenderZero = ascender - delayAggr;

	var increment = abs(sin(ascenderZero/slow)) * sizeIncr ;
	var incrY = 0;

	//starting size of the circle
	if (ascender > delayAggr){
		var incrD = diam + increment;
		incrY += increment
	}else{
		var incrD = diam;
	}

	//drawing the iniatail circle
	noStroke();
	fill(rNum, gNum, bNum);
	ellipse(xDist, 150 + incrY, incrD, incrD);



	//console.log(incrD);
}
