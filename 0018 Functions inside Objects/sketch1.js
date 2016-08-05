var bubble = {
	x:400/2,
	y:400/2,

	// show: function() {
	// 	stroke(random(0,255),random(0,200), random(0,200));
	// 	noFill();
	// 	//fill(100);
	// 	ellipse(this.x, this.y, 23, 23);
	// },

	// wobble: function() {
	// 	this.x += random(-4,4);
	// 	this.y += random(-3,3);
	// },
}


function setup() {
	createCanvas(400,400);
	background(200);
}

function draw() {
	show();
	wobble();
}


function show() {
	stroke(100,200,100);
	fill(100);
	ellipse(bubble.x, bubble.y, 23, 23);
}

function wobble() {
	bubble.x += random(-4,4);
	bubble.y += random(-3,3);
}