function setup() {
	for (i=0; i < 20; i++) {
		var p = createP("Blue paragraphs");
		p.position(random(500), random(450));
		p.style("color", "blue");
		p.class("blue");
	}
	for (i=0; i < 20; i++) {
		var p = createP("Pink paragraphs");
		p.position(random(500), random(350, 800));
		p.style("color", "pink");
		p.class('pink')
	}
	for (i=0; i < 20; i++) {
		var p = createP("Green paragraphs");
		p.position(random(300, 500), random(800));
		p.style("color", "turquoise");
		p.class('turquoise');
	}

	canvas = createCanvas(400,400);
	canvas.parent("canvas");
	noCanvas();

	one = selectAll(".one");
	two = selectAll(".two");
	three = selectAll(".three");

	for (var i = 0; i < one.length; i++) {
		one[i].mousePressed(toBlue);
	}

	//can also an event for the "two" array and "three".
}

function draw() {
	background(200);
	rect(40,40,320,320)
}

function toBlue() {
	this.class("blue");
}

//You can also add and toOtherColors